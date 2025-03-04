// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showme = document.querySelector(".showme");
console.log(showme);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const titulo = document.querySelector("#pillado");
console.log(titulo);

// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafo = document.querySelector("p");
console.log(parrafo);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// 	la clase.pokemon
const pokemon = document.querySelector(".pokemon");
console.log(pokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const funciones = document.querySelector('[data-function="testMe"]');
console.log(funciones);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
const personajes = document.querySelector('[data-function="testMe"]');
console.log(personajes[2]); //2 porque la posicion empieza desde 0