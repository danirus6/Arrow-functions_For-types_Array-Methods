//FUNCIONES FLECHA
//1.1
const saludar = () => "hola";
console.log(saludar())
//1.2
const division = (a, b) => a / b;
console.log(division(6,2));
//1.3
const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre("paco"));
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
gente.forEach(persona => {
    if (persona.edad > 25) {
        personasMayoresDe25.push(persona);
    }
});
console.log(personasMayoresDe25);
//2.2
const personasConJ = [];
gente.forEach(persona => {
    const nombre = persona.nombre;
    if (nombre.charAt(0).toLowerCase() === 'j') {
        personasConJ.push(persona);
    }
});
console.log(personasConJ);

//MAP

//3.1
const mayoresDe25 = gente.map(persona => {
  if (persona.edad > 25) {
    return persona;
  } else {
    return null;
  }
}).filter(Boolean);
console.log(mayoresDe25);

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
const numberPow = numbers.map(number => Math.pow(number,number));
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

//EXTRAS

//MAP
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
        name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const result = staff.map(member => `${member.name} es ${member.role} y le gusta ${member.hobbies.join(' y ')}`);
console.log(result);


const foodListEX = ["Pizza", "Ramen", "Paella", "Entrecot"];
const result2 = foodListEX.map(food => {
  switch (food) {
    case "Pizza":
      return `Como soy de Italia, amo comer ${food}`;
    case "Ramen":
      return `Como soy de Japón, amo comer ${food}`;
    case "Paella":
      return `Como soy de Valencia, amo comer ${food}`;
    case "Entrecot":
      return `Aunque no como carne, el ${food} es sabroso`;
    default:
      return `Me encanta ${food}`;
  }
});

result2.forEach(sentence => console.log(sentence));

//FILTER

const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */
const inventory2 = inventory.filter(inventory => inventory.price >= 300).map(price => price.name);
console.log(inventory2);


//REDUCE


const sentenceElements = [
    'Me',
    'llamo',
    /* Tu nombre aquí! */,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const reducido = sentenceElements.reduce((sentence, word) => {
    if (word === `/* Tu nombre aquí! */`) {
        return sentence + 'Dani';
    } else {
        return sentence + ' ' + word;
    }
});

console.log(reducido.trim());