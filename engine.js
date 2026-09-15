const GameState = { mode: 'offline', p1: ROSTER[0], p2: ROSTER[1], running: false };

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function selectMode(mode) {
    GameState.mode = mode;
    renderRoster();
    showScreen('char-select');
}

function chooseCharacter(charData) {
    GameState.p1 = charData;
    // Pick random CPU character for iPad local play
    const cpuRoster = ROSTER.filter(c => !c.isRestricted || adminBypassed);
    GameState.p2 = cpuRoster[Math.floor(Math.random() * cpuRoster.length)];
    startGame();
}

const keys = {};
window.addEventListener('keydown', e => keys[e.code] = true);
window.addEventListener('keyup', e => keys[e.code] = false);

// BIND IPAD TOUCH CONTROLS
function setupTouchControls() {
    const touchBinds = [
        { id: 'btn-left', key: 'KeyA' },
        { id: 'btn-right', key: 'KeyD' },
        { id: 'btn-jump', key: 'KeyW' },
        { id: 'btn-attack', key: 'KeyF' }
    ];

    touchBinds.forEach(bind => {
        const btn = document.getElementById(bind.id);
        if (!btn) return;

        const startAction = (e) => {
            e.preventDefault();
            keys[bind.key] = true;
        };

        const endAction = (e) => {
            e.preventDefault();
            keys[bind.key] = false;
        };

        btn.addEventListener('touchstart', startAction, { passive: false });
        btn.addEventListener('touchend', endAction, { passive: false });
        btn.addEventListener('touchcancel', endAction, { passive: false });
    });
}

function startGame() {
    showScreen('game-screen');
    setupTouchControls();
    GameState.running = true;

    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const stage = { x: 240, y: 480, width: 800, height: 30 };
    const gravity = 0.6;

    function buildFighter(charData, startX) {
        let speedMult = active20Mod === 'hyper_speed' ? 2.2 : 1.0;
        return {
            ...charData,
            x: startX, y: 300, vx: 0, vy: 0,
            percent: 0, width: 45, height: 75,
            isGrounded: false, isAttacking: false, attackCooldown: 0,
            speed: (charData.speed || 5) * speedMult
        };
    }

    const p1 = buildFighter(GameState.p1, 400);
    const p2 = buildFighter(GameState.p2, 800);

    document.getElementById('p1-name').innerText = p1.name;
    document.getElementById('p2-name').innerText = p2.name;

    function gameLoop() {
        if (!GameState.running) return;

        // P1 CONTROLS (WASD or iPad Touch)
        if (keys['KeyA']) p1.vx = -p1.speed;
        else if (keys['KeyD']) p1.vx = p1.speed;
        else p1.vx *= 0.8;

        if (keys['KeyW'] && (p1.isGrounded || active20Mod === 'infinite_jumps')) {
            p1.vy = -13;
            p1.isGrounded = false;
        }

        if (keys['KeyF'] && !p1.isAttacking && p1.attackCooldown === 0) {
            p1.isAttacking = true;
            p1.attackCooldown = 18;
            p1.hitbox = { x: p1.x + (p1.vx >= 0 ? p1.width : -40), y: p1.y + 10, width: 40, height: 40 };
        }

        // SIMPLE CPU AI FOR PLAYER 2 (FOR IPAD SINGLE-PLAYER)
        if (GameState.mode === 'offline') {
            const dist = p1.x - p2.x;
            if (Math.abs(dist) > 50) p2.vx = dist > 0 ? p2.speed * 0.6 : -p2.speed * 0.6;
            else p2.vx *= 0.8;

            if (Math.abs(dist) < 60 && !p2.isAttacking && p2.attackCooldown === 0) {
                p2.isAttacking = true;
                p2.attackCooldown = 20;
                p2.hitbox = { x: p2.x + (p2.vx >= 0 ? p2.width : -40), y: p2.y + 10, width: 40, height: 40 };
            }

            if (p2.y > stage.y - 10 && p2.isGrounded && Math.random() < 0.02) {
                p2.vy = -12;
                p2.isGrounded = false;
            }
        }

        [p1, p2].forEach(p => {
            p.vy += gravity;
            p.x += p.vx;
            p.y += p.vy;

            if (p.x + p.width > stage.x && p.x < stage.x + stage.width &&
                p.y + p.height >= stage.y && p.y + p.height <= stage.y + 15 && p.vy >= 0) {
                p.y = stage.y - p.height;
                p.vy = 0;
                p.isGrounded = true;
            } else {
                p.isGrounded = false;
            }

            if (p.attackCooldown > 0) {
                p.attackCooldown--;
                if (p.attackCooldown < 10) p.isAttacking = false;
            }

            if (p.y > 800 || p.x < -100 || p.x > 1380) {
                p.x = 600; p.y = 200; p.vx = 0; p.vy = 0; p.percent = 0;
            }
        });

        function checkHit(attacker, defender) {
            if (attacker.isAttacking && attacker.hitbox) {
                const hb = attacker.hitbox;
                if (hb.x < defender.x + defender.width && hb.x + hb.width > defender.x &&
                    hb.y < defender.y + defender.height && hb.y + hb.height > defender.y) {
                    
                    defender.percent += attacker.damage;
                    let kbMult = active20Mod === 'god_knockback' ? 2.5 : 1.0;
                    const launch = (attacker.knockback + (defender.percent * 0.15)) * (100 / defender.weight) * kbMult;
                    const dir = attacker.vx >= 0 ? 1 : -1;

                    defender.vx = launch * dir;
                    defender.vy = -launch * 0.5;
                    attacker.hitbox = null;
                }
            }
        }

        checkHit(p1, p2);
        checkHit(p2, p1);

        document.getElementById('p1-percent').innerText = `${Math.round(p1.percent)}%`;
        document.getElementById('p2-percent').innerText = `${Math.round(p2.percent)}%`;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#2d3245';
        ctx.fillRect(stage.x, stage.y, stage.width, stage.height);

        [p1, p2].forEach(p => {
            ctx.fillStyle = p === p1 ? '#ff4757' : '#3498db';
            ctx.fillRect(p.x, p.y, p.width, p.height);

            if (p.isAttacking && p.hitbox) {
                ctx.fillStyle = 'rgba(255, 165, 2, 0.6)';
                ctx.fillRect(p.hitbox.x, p.hitbox.y, p.hitbox.width, p.hitbox.height);
            }
        });

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}
