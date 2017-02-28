/* starts with Sunday */
var generalHours = ["11am - 9pm", "8am - 11pm", "8am - 11pm", "8am - 11pm", "8am - 11pm", "8am - 5pm", "11am - 5pm"];

function loadGeneralHours() {
  var today = new Date();
  var day = today.getDay();
  document.getElementById("hours").innerHTML = generalHours[day];
}

window.onload=loadGeneralHours;