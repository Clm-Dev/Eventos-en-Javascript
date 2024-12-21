// guardamos el evento realizado en el elemento boton
let button = document.getElementById('myButton');
let div    = document.getElementById('myDiv');
let myLink = document.getElementById('myLink');

function avoidLink(event) {
    event.preventDefault();
    alert("Enlace no habilitado")
}
//Esta función mostrara nos mostrar el odjetivo del evento
function showMessage(event) {
    alert(event.target);
    // en este alert mostrara el evento del objetivo actual
    alert(event.currentTarget)
}

// estara vigilando el evento click y llamara a la función 
div.addEventListener('click', showMessage);
myLink.addEventListener('click', avoidLink);
