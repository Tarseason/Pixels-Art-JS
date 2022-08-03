let color1 = document.getElementsByClassName('color')[0];
color1.style.backgroundColor = "#000000";
color1.classList.add('selected');

let color2 = document.getElementsByClassName('color')[1];
color2.style.backgroundColor = "#e9311a";

let color3 = document.getElementsByClassName('color')[2];
color3.style.backgroundColor = "#ed6335";

let color4 = document.getElementsByClassName('color')[3];
color4.style.backgroundColor = "#ecae7d";

function picker(){
    const unpicker = document.querySelector('.selected')
    unpicker.classList.remove("selected")
    event.target.classList.add('selected')
}


color1.addEventListener('click', picker)
color2.addEventListener('click', picker)
color3.addEventListener('click', picker)
color4.addEventListener('click', picker)