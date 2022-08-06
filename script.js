const color1 = document.getElementsByClassName('color')[0];
color1.style.backgroundColor = "#000000";
color1.classList.add('selected');

const color2 = document.getElementsByClassName('color')[1];
color2.style.backgroundColor = "#e9311a";

const color3 = document.getElementsByClassName('color')[2];
color3.style.backgroundColor = "#ed6335";

const color4 = document.getElementsByClassName('color')[3];
color4.style.backgroundColor = "#ecae7d";

const colorWhite = document.getElementById('clear-board').style.backgroundColor;

/////////////////////////////////////////////////////////

let canvaPoint = document.querySelectorAll('.pixel')


function picker(){
    let unpicker = document.querySelector('.selected')
    unpicker.classList.remove("selected")
    event.target.classList.add("selected")
}

color1.addEventListener('click', picker)
color2.addEventListener('click', picker)
color3.addEventListener('click', picker)
color4.addEventListener('click', picker)

var canva = document.querySelector('#pixel-board')
canva.addEventListener('click', transfer)

function transfer(evento) {
    let canvaPoint = evento.target;
    canvaPoint.style.backgroundColor = document.querySelectorAll('.selected')[0].style.backgroundColor
    
}

function clearCanva(){
    for (index = 0; index < canvaPoint.length; index++) {
        canvaPoint[index].style.backgroundColor = colorWhite;
    }
}