//EJEMPLOS ARROW FUNCTION
// function sum(a, b) {

//     return a + b;

// }

// const sum = (a, b) => {

//     return a + b;

// };

// const test = (a, b) => a + b;
// const test2 = a => a * 2;

////////////////////////////////////////////////////////////////////////
//For OF

let numeros = [99, 22, 33]

// for (let i = 0; i < numeros.length; i++) {

//     console.log(numeros[i]);

// }
// lo de arriba es = a lo de abajo
for (let num of numeros) {

    console.log(num)

}

//Lo mismo pero con objetos

let coches = [

    { name: "Peugeot" },

    { name: "BMW" },

]

for (let coche of coches) {

    console.log(coche.name)

}