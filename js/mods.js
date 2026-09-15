let active20Mod = "None";

function openModMenu() { document.getElementById('mod-modal').classList.remove('hidden'); }
function closeModMenu() { document.getElementById('mod-modal').classList.add('hidden'); }

function apply20DollarMod(modType) {
    active20Mod = modType;
    const badge = document.getElementById('mod-indicator');
    if (badge) badge.innerText = `STATUS: $20 Mod Active (${modType.toUpperCase()})`;
    alert(`$20 Mod Applied: ${modType}`);
    closeModMenu();
}
