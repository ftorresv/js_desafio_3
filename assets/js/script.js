const ele = document.getElementById("ele1");

//Código original, requerido en archivo separado para cumplir con pregunta 3.1
// function pintar(){
// ele.style.backgroundColor = 'yellow'
// }
// ele.addEventListener("click", pintar);

//Pregunta 3.2 , función anónima
// ele.addEventListener("click", 
//     function () {
//         ele.style.backgroundColor = 'yellow';
//     }
// );

//Pregunta 3.3, función por defecto
function pintar(elemento, color="green"){
    elemento.style.backgroundColor=color;
}
ele.addEventListener("click", function(){
pintar(this,"yellow");
});
