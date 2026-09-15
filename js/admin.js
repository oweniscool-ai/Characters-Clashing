let adminBypassed = false;

function openAdminMenu() { document.getElementById('admin-modal').classList.remove('hidden'); }
function closeAdminMenu() { document.getElementById('admin-modal').classList.add('hidden'); }

function submitAdminCode() {
    const inputCode = document.getElementById('admin-code-input').value;
    if (inputCode === "bypass" || inputCode === "admin123" || inputCode === "30") {
        adminBypassed = true;
        alert("SUCCESS: Admin Code Verified! Owentogud restrictions removed.");
        closeAdminMenu();
        if (typeof renderRoster === 'function') renderRoster();
    } else {
        alert("INVALID CODE: Access Denied.");
    }
}
