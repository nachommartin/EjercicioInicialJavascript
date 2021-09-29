const boton= document.querySelector("#botonciyo")
const tabla= document.querySelector("#tablaEmpleado")
const id= document.querySelector("#dni")
const nom= document.querySelector("#nombre")
const surname= document.querySelector("#apellidos")
const boton2= document.querySelector("#botoncito")
const boton3= document.querySelector("#botoncete")
const total= document.querySelector("#numtra")
boton.addEventListener('click', agregarFila)
boton2.addEventListener('click', borrarFila)
boton3.addEventListener('click', modificarFila)





function agregarFila(){

    if (comprobar() != -1){
      alert("El empleado ya existe");
    }
    else{
    let long = tabla.querySelectorAll('tr').length;
    tabla.insertRow(-1).innerHTML = '<td>'+(long)+'</td><td>'+id.value+'</td><td>'+nom.value+'</td><td>'+surname.value+'</td>';
    total.innerHTML='Número total de empleados: '+ (long)+'';

  }
  }

  function comprobar(){
    let posicion=-1;
    let filas= tabla.querySelectorAll('tr');

    for (let i =1; posicion== -1 && i < filas.length; i++){
      if (filas[i].querySelector('td:nth-child(2)').innerText.toUpperCase()==id.value.toUpperCase()){
        posicion=i;
            }
      }
      return posicion; 
  }

  function borrarFila(){
    let filas= tabla.querySelectorAll('tr');
    let pos= comprobar();

    if (comprobar() == -1){
      alert("El empleado no existe");
    }
    else{
      filas[pos].remove();
      actualizarFila(); 
      total.innerHTML='Número total de empleados: '+ (filas.length-2)+'';
      }
  }

  function actualizarFila(){
    let filas= tabla.querySelectorAll('tr');
    for (let i= 1; i < filas.length; i++){
      filas[i].querySelector('td:nth-child(1)').innerText=i; 
    }
  }

  function modificarFila(){
    let filas= tabla.querySelectorAll('tr');

    if (comprobar() == -1){
      alert("El empleado no existe");
    }
    else {
      filas[comprobar()].innerHTML = '<td>'+comprobar()+'</td><td>'+id.value+'</td><td>'+nom.value+'</td><td>'+surname.value+'</td>'; 
    }
  }