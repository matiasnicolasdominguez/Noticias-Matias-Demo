function toggleSidebar() {
    document.body.classList.toggle('sidebar-open');
}
document.getElementById('sidebarToggle').onclick = toggleSidebar;

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
}