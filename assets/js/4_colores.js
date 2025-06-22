const div_1=document.querySelector("#div_1");
const div_2=document.querySelector("#div_2");
const div_3=document.querySelector("#div_3");
const div_4=document.querySelector("#div_4");
const key=document.querySelector("#key");
const section=document.querySelector("#section");
const reset_4=document.querySelector("#reset_4");

function fondo(elemento){
elemento.style.backgroundColor="black";
elemento.style.color= "white";
}
div_1.addEventListener("click", function(){
    fondo(this);
} );
div_2.addEventListener("click", function(){
    fondo(this);
} );
div_3.addEventListener("click", function(){
    fondo(this);
} );
div_4.addEventListener("click", function(){
    fondo(this);
} );

document.addEventListener('keydown', function (event) {
if (event.key === 'a'|| event.key==='A') {
key.style.backgroundColor="pink";
} else if (event.key === 's'|| event.key==='A') {
key.style.backgroundColor="orange";
} else if (event.key === 'd'|| event.key==='D') {
key.style.backgroundColor="cornflowerblue";
} else if (event.key === 'q'|| event.key==='Q') {
agregarDiv("purple");
} else if (event.key === 'w'|| event.key==='W') {
agregarDiv("gray");
} else if (event.key === 'e'|| event.key==='E') {
agregarDiv("brown");
}
});

function agregarDiv(color){
    nuevoDiv=document.createElement("div");
    nuevoDiv.textContent="Nuevo div";
    nuevoDiv.style.backgroundColor=color;
    nuevoDiv.style.width="200px";
    nuevoDiv.style.height="200px";
    section.appendChild(nuevoDiv);
};

reset_4.addEventListener("click", ()=>{
key.style.backgroundColor="white";
eliminarElemento();
}
);
function eliminarElemento(){
    elementos = section.querySelectorAll("div");
    if (elementos.length > 1) {
        section.removeChild(elementos[elementos.length - 1]);
    }
}
