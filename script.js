var darkMode = false;
var runCount = 0;
function changeTheme() {
  runCount += 1;
  if (darkMode == false) {
    document.getElementById("body").style.color = "white";
    document.body.style.backgroundColor = "black";
    console.log("Dark mode enabled");
    darkMode = true;
  }
  else if (darkMode == true) {
    // location.reload();
    document.getElementById("body").style.color = "black";
    document.body.style.backgroundColor = "white";
    console.log("Dark mode disabled");
    darkMode = true;

  }
  else {
    console.log("Failed to change theme");
    darkMode = Boolean(Math.random() < 0.5);

  }
  // TODO: add logic to toggle the theme from light to dark and vise versa
  // if (document.getElementById("body").style.color == "white") && (document.body.style.backgroundColor == "black") {
  // document.getElementById("body").style.color = "black";
  // document.body.style.backgroundColor = "white";

  // }

  
  // if (runCount >= 3) {
  //   // the window is reloaded after 3 runs of the onclick function,
  //   // this is done because after more than executions of the onclick function 
  //   // it sees to not execute when clicked, this is solved by reloading the page 
  //   // therefore reseting the onclick count

  //   location.reload();
  // }
}
