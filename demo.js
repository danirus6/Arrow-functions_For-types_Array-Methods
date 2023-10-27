// function sum(a, b) {
// 	return a + b
// }

// const suma = (a, b) => {
// 	const result = a * 2
// 	return result + b
// }

// console.log(sum(2, 5))
// console.log(suma(2, 5))

// const test = (a) => a * 2

// console.log(test(3))

// let numeros = [99, 22, 33]

// for (let i = 0; i < numeros.length; i++) {
// 	console.log(numeros[i])
// }

// for (let num of numeros) {
// 	console.log(num)
// }

// let coches = [{ name: 'Peugeot' }, { name: 'BMW' }]

// for (let coche of coches) {
// 	console.log(coche.name)
// }

const lista = ['a', 'b', 'c']

// for (let i = 0; i < lista.length; i++) {
// 	console.log(lista[i])
// }

// for (let i in lista) {
// 	console.log(lista[i])
// 	console.log(i)
// }

// const objeto = { a: 1, b: 2, c: 3 }

// for (const clave in objeto) {
// 	console.log(`${clave}: ${objeto[clave]}`)
// }

// const fruits = ['apple', 'pinneaple', 'orange', 'strawberry']

// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i])
// }

// fruits.forEach((fruit) => {
// 	return fruit})

// const canciones = ['Hang onto yourself', 'Go your own way', 'Modern Love']

// canciones.forEach((cancion, indice, array) => {
// 	console.log('Elemento actual', cancion, 'índice', indice, 'array', array)
// })

// const myArray = [1, 2, 3, 4]

// const myArrayMultiplyedByTwo = myArray.map((value) => value * 2)
// console.log(myArrayMultiplyedByTwo)

const songs = [
    { name: 'Curl of the Burl', artist: 'Mastodon' },
    { name: 'Oblivion', artist: 'Mastodon' },
    { name: 'Flying Whales', artist: 'Gojira' },
    { name: 'Euralio y sus cabras', artist: 'Euralio' },
]

let allSongNames = []

// for (const song of songs) {
// 	allSongNames.push(song.name)
// }

// allSongNames = songs.map((song) => song.name)

// console.log(allSongNames)

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let numerosFiltrados = numeros.filter((numero) => numero > 5)

// console.log(numerosFiltrados)

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// let result = []

// for (const word of words) {
// 	if (word.length > 6) {
// 		result.push(word)
// 	}
// }

// result = words.filter((pepin) => pepin.length > 6)

// console.log(result)

// const resultado = lista.reduce(function callback(valorAnterior, valorActual) {
// 	return /* resultado de la función callback */
// }, valorInicial)

const numbers = [10, 5, 7]
// let sum = 0

//for (let i = 0; i < numbers.length; i++) {
//  sum += numbers[i]
//}

const sum = numbers.reduce((a, b) => a + b, 5)

console.log(sum)
