// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul"); //Creamos una lista ul.
for (const country of countries) {
	const li  = document.createElement("li"); //Creamos un li.
	li.textContent = country; //Le metemos cada país a un li.
	ul.appendChild(li); //Ahora meto los li al ul.
}

document.body.appendChild(ul) //Por ultimo metemos el ul creado al body del HTML.

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const carsList = document.createElement("ul");
for (const car of cars) {
	const li = document.createElement("li");
	li.textContent = car;
	carsList.appendChild(li);
}
document.querySelector('[data-function="printHere"]').appendChild(carsList);
	


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const photos = document.createElement("div");

for (const country of countries2) {
	const div = document.createElement("div"); //Creamos un div para cada país.
	const h4 = document.createElement("h4"); //Creamos un h4 para cada título.
	h4.textContent = country.title; //Hacemos que el h4 tenga el titulo.
	div.appendChild(h4); //Metemos el h4 dentro del div.

	const imagen = document.createElement("img");
	imagen.src = country.imgUrl; //Le asiganmos la url de la imagen.
	div.appendChild(imagen);

	photos.appendChild(div); //Metemos el div con el h4 y la imagen al div "Photos".
}
document.body.appendChild(photos); //Metemos el div "Photos" al body del HTML.

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const removeButton = document.createElement("button");
removeButton.textContent = "Eliminar el último elemento";

removeButton.addEventListener("click", function(){
	if(photos.lastChild){
		photos.removeChild(photos.lastChild);
	}
})

document.body.appendChild(removeButton);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

