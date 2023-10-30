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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


