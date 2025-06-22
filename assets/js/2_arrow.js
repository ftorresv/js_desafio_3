const button_2 = document.querySelector("#button_2"); 
const text_2 = document.querySelector("#text_2");
var reset=document.querySelector("#reset");

// let suma = function(a, b){
// return a + b
// }
// Se pide modificar la expresión anterior a una función narrow;

var suma = (a, b) => a + b;

button_2.addEventListener("click", () => {
  const resultado_suma = suma(3, 7);
  text_2.innerHTML = "La suma de 3 y 7 es igual a " + resultado_suma;
});
reset.addEventListener("click",()=>{
    text_2.innerHTML= '';
})
