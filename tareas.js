let fecha = document.getElementById('fecha');
fecha.innerHTML = new Date().toDateString();
console.log(fecha);

let agregarTarea = document.getElementById("agregarTarea");
let listasTareas = document.getElementById("tasks");
let botonTarea = document.getElementById("boton");

botonTarea.addEventListener("click", function(evento) {
  let texto = agregarTarea.value;
  
  let nuevaTarea = document.createElement("li");
  let textoTarea = document.createElement("span");
  let botonBorrar = document.createElement("button");
  botonBorrar.className = "borrar";
  
  // Cambia el botón de texto por un elemento de icono
  botonBorrar.innerHTML = '<i class="fas fa-trash-alt"></i>';
  
  botonBorrar.id = "btn" + listasTareas.childNodes.length;
  
  botonBorrar.addEventListener("click", function() {
    listasTareas.removeChild(nuevaTarea);
  });
  
  textoTarea.textContent = texto;
  
  nuevaTarea.appendChild(textoTarea);
  nuevaTarea.appendChild(botonBorrar);
  
  listasTareas.appendChild(nuevaTarea);
  
  agregarTarea.value = "";
});
