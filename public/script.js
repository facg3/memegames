var aud = document.getElementById('background_audio').muted;
var pic = document.getElementById("pic")

function audio(){
  document.getElementById('background_audio').muted = !document.getElementById('background_audio').muted
  console.log(document.getElementById('background_audio').muted)
  pic.textContent = document.getElementById('background_audio').muted?"►":"||"
}



document.querySelector('.upbutton').addEventListener('click',function clickHandler(e){

    this.removeEventListener('click',clickHandler,false);

    e.preventDefault();
    var self = this;
    setTimeout(function(){
        self.className = 'loading';
    },125);

    setTimeout(function(){
        self.className = 'Sent';
    },4300);

},false);
