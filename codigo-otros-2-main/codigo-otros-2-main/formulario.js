var formulario = document.querySelector("#form")
//Lo primero que note es que faltan ; al final de algunas lineas en las variables. 
formulario.onsubmit = function(e) {

 // e.prevent(); //Este no es algo valido, de hecho si se observa el la consola marca error. 
 //Lo coorecto seria:
  e.preventDefault();
  
  var n = formulario.elements[0]
 // var e = formulario.elements[1] // Ya no deveria volverse a usar el nombre de e para una variable ya que ya se uso en la parte de arriba.
 //Por lo que le cambio el nombre:
  var Edades = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    Edades.classList.add("error") //Le cambie el nombre al de la variable correcta.
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar)

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados");


var elementoLista = document.createElement("div");
//elementoLista.classList.added("elemento-lista") //En esta linea la palabra added esta mal, tendira que ser solo add.
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

// var spanNombre = document.createElement("span");
// var inputNombre = document.createElement("input");
// var espacio = document.createElement("br");
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)
//Se crean dos veces los elementos, el primero atraves del appendChild y despues en la linea 76 atraves de la funcion crearElemento. por lo que solo dejare la funcion, ya que me parece mejor. 

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
this.parentNode.style.display = 'none'; //Se descomento para que funcionara. 
botonBorrar.parentNode.remove()
  }
}