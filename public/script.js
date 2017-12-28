var aud = document.getElementById('background_audio').muted;
var pic = document.getElementById("pic")

function audio(){
  document.getElementById('background_audio').muted = !document.getElementById('background_audio').muted
  console.log(document.getElementById('background_audio').muted)
  pic.textContent = document.getElementById('background_audio').muted?"►":"||"
}

































// function upload(){
//   var name = document.getElementsByClassName("gname")[0].value;
//   var url = document.getElementsByClassName("gurl")[0].value;
//   var arr = url.split(".")
//   var errBox = document.getElementsByClassName("error")[0];
//   if(name.trim() == "" || url.trim() == ""){
//     errBox.textContent = "";
//     var wrongInput = document.createElement("h4");
//     wrongInput.textContent = "PLEASE FILL IN THE REQUIRED FIELDS";
//     errBox.appendChild(wrongInput);
//   }
//   else{
//   if (arr[arr.length-1] != "swf"){
//     errBox.textContent = "";
//     var wrongURL = document.createElement("h4");
//     wrongURL.textContent = "INVALID URL";
//     errBox.appendChild(wrongURL);
//   }
//   else {
//
//
//
//     //All our code goes here
//
//
//
//
//
//
//
//
//   }
// }
// }
