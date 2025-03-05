// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const newButton = document.querySelector("#btnToClick");
function evento (event){
    console.log(event);
}
newButton.addEventListener("click", evento); 



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelector(".focus");
function eventoFocus (event){
    console.log(focus.value);
}
focus.addEventListener("focus", eventoFocus);


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input = document.querySelector(".value");
function eventoInput (event){
    console.log(input.value);
}
input.addEventListener("input", eventoInput);

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
for (const album of albums) {
    const li = document.createElement("li");
    li.textContent = album;
    ul.appendChild(li);
}

document.body.appendChild(ul);