
// let ul = document.getElementsByClassName("cabezera");
// console.log(ul[2].innerHTML);

// let cards =document.getElementsByClassName("congeladosCards");


// imprime todo el array
// for (const el of ul){
//     console.log(el.innerHTML)
    // el.innerText = "";        // innerText modifica el html segun la clase de que le de
// };


// let div = document.getElementsByClassName("items");

// div.innerHTML = `<div class="congeladosCards">Pechuga de pollo</div>
// <div class="congeladosCards">Pierna de pollo</div>
// <div class="congeladosCards">Carne molida</div>
// <div class="congeladosCards">Lomo</div>
// <div class="congeladosCards">carne en trozos</div>
// <div class="congeladosCards">Costillas de cerdo</div> `;



// div.className = "fondo-negro"     AGREGA CLASE


// const h3=document.createElement("h3");
// h3.innerText="Soy un elemento h3 y soy el hijo el div che";

// div.appendChild(h3) // AGREGA UN NODO Y CON INNERTEXT AGREGA EL TEXTO

// remove elimina el elemento de escoges

// const primerInput =document.getElementById('primerInput'); //agregar elemento al imput
// const segundoInput =document.getElementById('segundoInput');


// primerInput.value = 'Cesar';
// segundoInput.value = '17';
// primerInput.placeholder = 'Ingrese un nombre';

// const array = ["Inicio", "Congelados", 
// "Galletas", "Tecnologia", "Aguas y Bebidas", "Carrito de compras",
// "Iniciar sesion"];

// let padre = document.getElementById("app");

// const ol = document.createElement("ol");

// for(const el of array){
//     const li = document.createElement("li");
//     li.innerHTML= `<h5>${el}</h5>`;
//     ol.append(li);
// };

// padre.append(ol); // apen agrega al principio y APENCHILLD al final


// const productos = [
//     { id : 1, nombre: "carne molida", precio : 25 },
//     { id : 2, nombre: "carne en trozos ", precio : 24 },
//     { id : 3, nombre: "pechupa de pollo", precio : 20 },
//     { id : 4, nombre: "costilla de cerdo", precio : 60 },
// ];

// for(const producto of productos) {
//     let contenedor =  document.createElement("div");
//     contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                             <p>producto: ${producto.nombre} </p>
//                             <b>$ ${producto.precio}</b>`;

// };
// padre.appendChild(productos);



// const padre = document.querySelectorAll(".div"); // trae todos los q contengan esa clase en array
// querySelector trae uno solo
// console.log(padre);





// clase 9


let boton = document.getElementById("btn1")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    console.log("Pechuga de pollo")
}

// boton.onclick= ()=> {
//     console.log("Respuesta 2")    // OPCION 2
// }










