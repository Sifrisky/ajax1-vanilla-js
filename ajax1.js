console.log('activo');
//primer forma
//document.querySelector('#boton').addEventListener('click', function(){
//})

//segunda forma creando una funcion
document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
//console.log('funcion activada');

//trabajando con ajax, se divide en 4procesos. Con esto instanciamos nuestrso objetos.
const xhttp = new XMLHttpRequest();
//creando un metodo Y RUTA y un booleano
xhttp.open('GET', 'archivo.txt', true);
//otro metodo, todo esto lo tenemos que enviarlo y verificar que este todo correcto  (status 200) para realizar una accion
xhttp.send();
//esperamos un cambio.
xhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status ==200){
        //console.log(this.responseText); //pintar en consola.
            document.querySelector('#respuesta').innerHTML+=`${this.responseText}` ; 
            //document.querySelector('#respuesta').innerHTML =`this.responseText` ; //innerHTML pinta todo lo que este adentro. 
    }
    }
}