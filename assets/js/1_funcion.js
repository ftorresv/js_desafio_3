const button_1=document.querySelector("#button_1");
var reset=document.querySelector("#reset");
const text=document.querySelector("#text");

// Definición inicial de función
// function example(a,b,c){
//     return a+b+c
// } La redefinición se trabajará ahora, pero cambiando el estilo para agregar interacción con el usuario, permitiendo ingresar los parámetros:

var resultado = function(a,b,c){
    a = prompt("Ingrese el primer valor");
    b = prompt("Ingrese el segundo valor");
    c= prompt("Ingrese el último valor");
    return parseInt(a)+parseInt(b)+parseInt(c)
}
button_1.addEventListener("click", ()=> {
resultado_1=resultado();
text.innerHTML="El resultado es " + resultado_1;
})
reset.addEventListener("click",()=>{
    text.innerHTML= '';
})