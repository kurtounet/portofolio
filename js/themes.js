function lightModeChange() {
    const body = document.body;
    body.classList.toggle('light-mode');

    const modeToggleBtn = document.getElementById('modeToggle');
    if (body.classList.contains('light-mode')) {
        modeToggleBtn.textContent = '🌙';
    } else {
        modeToggleBtn.textContent = '☀️';
    }
}