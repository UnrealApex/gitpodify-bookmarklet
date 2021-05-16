var darkMode = false;
function toggleDarkMode() {
  if (darkMode == false) {
    // TODO: Make "Open in Gitpod" image switch to dark theme with site
    // TODO: Make dark theme more appealing
    document.getElementById("body").style.color = "#FFFFFF";
    document.body.style.backgroundColor = "#121212";
    darkMode = true;
  } else if (darkMode == true) {
    document.getElementById("body").style.color = "black";
    document.body.style.backgroundColor = "#FFFFFF";
    darkMode = false;
  } else {
    console.log("Failed to change theme");
    darkMode = Boolean(Math.random() < 0.5);
  }
}
