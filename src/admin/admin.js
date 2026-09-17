document.getElementById('btn-unlock-dlc')?.addEventListener('click', () => {
  localStorage.setItem('cc_dlc_unlocked', 'true');
  alert('DLC Unlocked!');
});
