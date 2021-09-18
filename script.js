var isDarkMode = false;
function toggleDarkMode() {
    if (!isDarkMode) {
        // TODO: Make "Open in Gitpod" image switch to dark theme with site
        // TODO: Make dark theme more appealing
        document.body.style.color = "#00ff00";
        document.body.style.backgroundColor = "#121212";
        isDarkMode = true;
    } else if (isDarkMode) {
        document.body.style.color = "black";
        document.body.style.backgroundColor = "#FFFFFF";
        isDarkMode = false;
    } else {
        console.error("Failed to change theme");
        isDarkMode = Boolean(Math.random() < 0.5);
    }
}
