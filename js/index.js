/* starts with Sunday */
var generalHours = ["11am - 9pm", "8am - 11pm", "8am - 11pm", "8am - 11pm", "8am - 11pm", "8am - 5pm", "11am - 5pm"];
var generalHoursStart = [11, 8, 8, 8, 8, 8, 11];
var generalHoursEnd = [21, 23, 23, 23, 23, 17, 17];

function loadGeneralHours() {
  var today = new Date();
  var day = today.getDay();
  var currentHour = today.getHours();
  var todayStart = generalHoursStart[day];
  var todayEnd = generalHoursEnd[day];

  //document.getElementById("hours").innerHTML += generalHours[day] + "<br>";
  //document.getElementById("hours").innerHTML += currentHour + " " + todayStart+"-"+todayEnd + "<br>";

  if (currentHour < todayStart) {
    document.getElementById("hours").innerHTML += "Currently CLOSED!<br>Audrey's will be open today " + generalHours[day];
  }
  else if (currentHour >= todayEnd) {
    document.getElementById("hours").innerHTML += "Currently CLOSED!<br>Audrey's will be open tomorrow " + generalHours[day];
  }
  else {
    document.getElementById("hours").innerHTML += "Open today " + generalHours[day];
  }
}

window.onload=loadGeneralHours;