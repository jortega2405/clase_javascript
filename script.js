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
let primer-nombre = 4; 

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


//Interacciones: alert, prompt, confirm

//alert : es una ventana modal
//alert("Hola Mundo");

//prompt
/*
let nomb = prompt('Digite Nombre',)
alert(nomb)
prompt('Digite Nombre', ' ')//Este caso es solo para Internet Explorer

*/

//confirm

//let esHelado = confirm('Te Gusta el Helado?')
//console.log(esHelado); //true si presionan ok y false si presionan cancelar

//Conversion de tipos

//Existen dos tipos de conversiones: explicita e implicita

//ToString
//let valor = true;
//console.log(typeof valor);


//valor = String(valor); //true
valor = String(false); //flase
valor = String(null); //null
valor = String(undefined); //undefined
console.log(valor);
console.log(typeof valor);

//Convertir a numero

//Conersiones numericas ocurren automaticamente en funciones matematicas y expresiones
//alert( '6' / '2'); //3
//alert( '1' + 2);

let cadena = "123"
let num_cad = Number(cadena); //123

//console.log(Number('Hola')); //NaN

/* 
undefined -> NaN
null -> 0
true -> 1
false -> 0
String ''-> 0
string 'hola' -> NaN
*/


//Convertir a Boolean

console.log(Boolean("Hola"));
/* 
undefined -> false
null -> false
String ''-> false 
NaN -> false
0 -> false

'0' -> true
'  ' -> true

*/

console.log(Boolean(String(0)))
console.log(Boolean(0))


//Operadores Basicos

//Operadores unarios y binarios

let a, b, res;
a = 5;
b = 2;

//Operadores binarios

res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b;  //mod
res = a ** b; // potencia


//alert('1' + 2);//12
//alert(1 + '2'); //12
//alert(2 + 2 + '1'); //41
//alert('1' + 2 + 2); //122

//alert( 2 - '1'); //1
//alert('6' / '2');//3
//alert('6' / '2a')//

//Operaciones Unarias +
a = 1;
console.log(+a);

a = -1;
console.log(+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);
console.log(+"");

a = "2";
b = "3";

console.log(+a + +b);
console.log(Number(a)+Number(b));

//Operaciones Unarias -
a = 1;
console.log(-a);

a = -1;
console.log(-a);

console.log(-true);
console.log(-false);

//Asignaciones

a - 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

c = 3 - (a = b + 1)

//Modificadores

a = a + 2;
a += 2;
a = a - 2;
a -= 2;

//Incremento y decremento

// ++
a = 2;
a ++;
console.log(a); //3

// --
a = 2;
a --;
console.log(a); //1

//Posicion del incremento o decremento

a = 1;
b = ++ a;
console.log(b);//2

a = 1;
b = a ++;
c = a;
console.log(b);
console.log(c);




