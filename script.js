var darkMode = false;
function changeTheme() {
  if (darkMode == false) {
    // TODO: make "Open in Gitpod" image switch to dark theme with site
    document.getElementById("body").style.color = "white";
    document.body.style.backgroundColor = "black";
    darkMode = true;
  } else if (darkMode == true) {
    document.getElementById("body").style.color = "black";
    document.body.style.backgroundColor = "white";
    darkMode = false;
  } else {
    console.log("Failed to change theme");
    darkMode = Boolean(Math.random() < 0.5);
  }
}
