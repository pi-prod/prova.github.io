/*const miTitulo = document.querySelector('h2');
miTitulo.textContent = 'Hello world!';

Tambe  és pot escriure:

document.querySelector('h2').textContent = 'Hello world!;
*/


/*document.querySelector('html').onclick = function(){
    alert('Au! Deixa de punxar-me');
}
*/
/*
També es pot escriure:
let miHTML = document.querySelector('html');
miHTML.onclick = function(){
    alert('Au! Deixa de punxar-me');
};
*/

let miImage = document.querySelector('img');

miImage.onclick = function(){
    let miSrc = miImage.getAttribute('src'); //'src' = atribut a una imatge
    if (miSrc == 'img/modzilla.jpg'){ 
        miImage.setAttribute('src', 'img/modzilla2.jpg');
    }//si la imatge es la primera la canvia per la segona
    else{
        miImage.setAttribute('src', 'img/modzilla.jpg');
    }//Sino deixa la primera imatge
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h2');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre){
        estableceNombreUsuario();
    }
    else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
    }
   
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
