let data = new Date() 
let hora = data.getHours()
const mode = document.body.querySelector(".mode")
function info() {
  
  if (hora > 5 && hora <= 10) {
    document.body.style.background = 'url(/assets/img/manha.gif) no-repeat center center';
    document.body.style.backgroundSize = 'cover';
    mode.className += " light";
  }else if (hora > 10 && hora <= 13) {
    document.body.style.background = 'url(/assets/img/dia.gif) no-repeat center center';
    document.body.style.backgroundSize = 'cover';
    mode.className += " light";
  }else if (hora > 13 && hora <= 15) {
    document.body.style.background = 'url(/assets/img/tarde.gif) no-repeat center center';
    document.body.style.backgroundSize = 'cover';
    mode.className += " dark";
  }else if (hora > 15 && hora <= 19) {
    document.body.style.background = 'url(/assets/img/tarde-noite.gif) no-repeat center center';
    document.body.style.backgroundSize = 'cover';
    mode.className += " dark";
  }else{
    document.body.style.background = 'url(/assets/img/noite.gif) no-repeat center center';
    document.body.style.backgroundSize = 'cover';
    mode.className += " dark";
  }
};