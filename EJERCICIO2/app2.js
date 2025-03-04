// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.querySelector("body");
nuevoDiv.insertAdjacentHTML("beforeend", "<div></div>");

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.querySelector("body");
divConP.insertAdjacentHTML("beforeend", "<div><p></p></div>");

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const divcon6 = document.querySelector("body");
let div = "<div>";

for(let i = 0; i <= 6; i++){
    div = div + "<p></p>";
}
div = div + "</div>"; //Hay que cerrar las etiquetas.

divcon6.insertAdjacentHTML("beforeend", div);

// 2.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const pTexto = document.querySelector("body");
pTexto.insertAdjacentHTML("beforeend", "<p>Soy dinámico</p>");

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Nuevo = document.querySelector(".fn-insert-here");
h2Nuevo.insertAdjacentText("afterbegin", "Wubba Lubba dub dub");


// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  li.textContent = apps[i];
  ul.appendChild(li); 
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminar = document.getElementsByClassName("fn-remove.me");
for(let i = eliminar.length - 1; i >= 0; i--){ //Es un bucle al reves, empezamos desde el último.
    delete[i].remove();
    console.log(eliminar[i]);
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const insertar = document.getElementsByTagName("div")[0];
const elemento = document.createElement("p");
elemento.innerHTML = "Voy en medio!";
insertar.insertAdjacentElement("afterbegin", elemento);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here
const pTextoDentro = document.querySelector(".fn-insert-here");
for (i = 0; i < pTextoDentro.length; i++ ){
    const add = document.createElement("p");
    add.innerHTML = "Voy dentro!";
    pTextoDentro[i].appendChild(add);

}
