//FUNCIONES FLECHA
//1.1
const saludar = () => "hola";
//1.2
const division = (a, b) => a / b;
//1.3
const miNombre = (nombre) => `Mi nombre es ${nombre}`;
//1.4
const test2 = () => console.log("Funcion test 2 ejecutada.");
const test1 = (callback) => callback();

//FOREACH

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

//2.1
const personasMayoresDe25 = [];
personas.forEach(persona => {
    if (persona.edad > 25) {
        personasMayoresDe25.push(persona);
    }
});
//2.2
const personasConJ = [];
gente.forEach(persona => {
    const nombre = persona.nombre;
    if (nombre.charAt(0).toLowerCase() === 'j') {
        personasConJ.push(persona);
    }
});


//MAP



//3.1
let personas25 = gente.map(persona => persona.edad >25);
console.log(personas25);


//3.2
let personasJ = gente.map(persona => {
    if (persona.nombre.charAt(0) === "J"){
    return persona;
    }else{
        return null;
    }
}).filter(Boolean);
console.log(personasJ);

//3.3
const numbers = [4, 5, 6, 7, 8, 9, 10];
const numberPow = gente.map(number => Math.pow(number,number));
console.log(numberPow);

//Filter
//4.1
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let numberImp = numbers2.filter(number => number % 2 !== 0);
console.log(numberImp);

//4.2

 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];

let food2 = foodList.filter(food => food.isVeggie).map(veganFood => `Que rico ${veganFood.name} me voy a comer`);
console.log(food2);

//REDUCE
//5.1
const numbers3 = [39, 2, 4, 25, 62];

const sum = numbers3.reduce((a, b) => a * b, 1);
console.log(sum);
