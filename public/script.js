var aud = document.getElementById('background_audio').muted;
var pic = document.getElementById("pic")

function audio(){
  document.getElementById('background_audio').muted = !document.getElementById('background_audio').muted
  console.log(document.getElementById('background_audio').muted)
  pic.textContent = document.getElementById('background_audio').muted?"►":"||"
}

window.onload = function(){
  if ((window.location.href).includes("true")){
    window.location.search = "";
    alert("Game added to our database. Thanks, mate!");
  }
  else if ((window.location.href).includes("false")){
    window.location.search = "";
    alert("THE URL YOU ENTERED IS INVALID");
  }

}

function direct(){
  window.location.pathname = "/"
}
