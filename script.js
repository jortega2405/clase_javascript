/*
alert('Soy JavaScript!')
console.log(alert);

//Comentarios de linea


comentarios de mas de una linea
*/

//Sentencias
/*
alert('Hola'); alert('Mundo');

alert('Hola');
alert('Mundo');

alert('Hola')
alert('Mundo')
*/

// insercion automatica de punto y coma

//variable

//let mensaje;
//mensaje = "hola Mundo"
//alert(mensaje)


let a = 5;
let b = 6;
let suma = a + b;
console.log("El resultado de la suma es: " + suma )

let nombre = 'Jose';
let nombre2 = nombre;

nombre2 = 'Armando'
console.log('El nimbre uno es: ', nombre);
console.log('El nombre dos es: ', nombre2);

// Nombrar variables con camel case
nombreUno = 'Jose';
nombreDos = 'Armando';

// Nombrar con underscore
nombre_uno = 'Jose';
nombre_dos = 'Armando';

// Nombres no comunes
let $ = 1;
let _ = 2;

// No puede nombrar variables

/*let 1a = 3;
let primer-nombre = 4; */

"use strict"
mensaje2 = "Hola Mundo";


//Constantes

const PI = 3.141624;
const COLOR_ROJO = "#FFFFFF";
pi_dos = PI;
pi_dos = 7;
console.log(PI);
console.log(pi_dos);


//const id_account = get_id_account(45);


//Tipos de datos

//Dinamicamente tipados
let mensaje_tres = "Hola";
mensaje_tres = 12345;

//tipo deDato Number
let n = 123;
n = 12.456;


//Valores numericos especiales Infinity, -Infinty y NaN

// Infinity: representa rel infinito matematico. Es un valor especial que es mayor que cualquier numero;

console.log(1 / 0);
console.log(Infinity)

//NaN representa un error de calculo. Es el resultado de una operacion matematica incorrecta o indefinida

console.log("No es un numero" / 2);

// NaN es pegajoso. en cualquier operacion sobre NaN devuelve NaN

console.log("No es numero" / 2 + 5);

// Tipo de dato BigInt


//Valores enteros mayores que (2^53-1) o menor que  -(2^53-1) 9.007.199.254.740.991
let numero_grande = 7654323456789876543456789n;
console.log(numero_grande); 

//tipo String
let t = "a";
let texto = "Hola"
let texto_dos = 'hola'
let texto_tres = ``;
let nom = "Jose";
//console.log("Hola como estas", nom, "?");
//console.log('Hola como estas', nom, '?');
//console.log(`Hola como estas`, nom, '?');

console.log(`Hola ${nom}`)
//Las comillas invertidas `` (backticks), se conocen como funcionalidad extendida, sirve para hacer interpolacion

//Tipo de dato Booleano


// true y false

let verdadero = true;
let falso = false;

let mayor = 4 > 1; //True

//valor null

//Valor especial que no pertenece a ningun tipo de dato anterior.
// Forma un tipo propio separado que contiene solo el valor null.
let edad = null;
console.log(edad);

//en JS null No significa un objeto no existente
//Null es solo un valor especial que representa nada, vacio o valor desconocido.

// valor undefined

// es un valor que no pertenece a ningun tipo de dato anterior
//El significado de undefined es valor no asignado

let edad_dos;
console.log(edad_dos); 

//el operado typeof o funcion typeof(x), devuelve el tipo de dato.

console.log( typeof undefined); //undefined
console.log(typeof 0); //number
console.log(typeof true); //boolean
console.log(typeof 10n); //bigint
console.log(typeof "Hola"); //string

console.log(typeof(alert)); //function **
console.log(typeof(null));//object - ERROR JAVASCRIPT
console.log(typeof(Math));//object



