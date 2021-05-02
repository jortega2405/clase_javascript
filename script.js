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

/*

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

//console.log(Boolean("Hola"));
/* 
undefined -> false
null -> false
String ''-> false 
NaN -> false
0 -> false

'0' -> true
'  ' -> true

*/
/*
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
console.log(b);//1
console.log(c);//2
*/
/*
// COMPARACIONES    

console.log( 2 > 1); //true
console.log(2 == 1); // false
console.log(2 !=1 ); // true

let resultado = 2 > 1;

// Comparaciones entre cadenas

console.log( 'Z' > 'A'); //true
console.log('showexxxx' > 'show'); //false
console.log('casa' > 'casas'); // false
console.log('a' > 'A');
console.log('carro' > 'cerro');

// 1. La letra minúscula es mayor que la mayúscula
// 2. La palabra con mas letras despues de pasar la primera condición es mayor que la de menos letras

// Comparación de diferentes tipos

// Al comparar valores de diferentes tipos, JS convierte lo valores a Números
// toda comparación con NaN es falsa.
// El undefined y el null en ls comparaciones de igualación no estrictas 
// actúan diferente: son iguales entre sí, pero no a ningún otro valor


a = 0;
b = '0';

boleano_a = Boolean(a); // false
boleano_b = Boolean(b); // true

console.log(a == b); // true

console.log('*************')
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(true > 0); // true
console.log(false == 0); // true

console.log('***** NaN ********')
// NaN
console.log('hola'> 0)// false
console.log('hola'< 0)// false
console.log('hola' == 0) // false

console.log('***** Undefined ********')
// Undefined
console.log(undefined > 0); //false
console.log(undefined < 0); // false

console.log('***** Null ********')
// null
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true

console.log('******* Null y Undefined == ******')
// El undefined y el null en las comparaciones de igualación no estrictas 
// actúan diferente: son iguales entre sí, pero no a ningún otro valor

console.log(null == undefined); // true
console.log(null == 5) // false
console.log(undefined == 5) // false

console.log('******* No diferencia de 0 de falso == ******')

console.log(0 == false); // true
console.log('' == false); // true

// Igualación Estricta

console.log(0 === false); // false
console.log( null === undefined); // false

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/


// SENTENCIA IF

/*
if(condicion){
}else if(condicion){
}else{
}
*/

/*
// if de línea
if(4 > 5) console.log('Mensaje');

if(4 > 5){
    b = 5+ 3;
    console.log('Mensaje');
}

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/
/*
if('45a'/3){
    console.log('No entró');
}

if('0'){
    console.log('entró');
}

if(4/2){
    console.log('entró');
}

if (1){
    console.log('entró o no entró?');
}


let edadx;

if(edadx){
    console.log('Variable definida');
}else{
    console.log('Variable indefinida');
}

// Haga un algoritmo que dado una edad imprima true si es mayor de edad
// false si no lo es.

let edad_usuario = 17;
if(edad_usuario >= 18){
    console.log(true);
}else{
    console.log(false);
}

console.log(edad_usuario>= 18);

// Operador ternario

// condición ? operación verdadera : operación falsa;
resultado = edad_usuario >=18 ? x =5 : x=7;

// Operador lógico

// OR
/*
 v or v = v
 v or f = v
 f or v = v
 f or f = f
*/
/*
console.log ('***** Opoerador OR ******');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

if ( 4 ==4 || 2 > 5){
    console.log('Verdadero');
}

// restulado = valor_uno || valor_dos || valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando, converte el valor a booleano. Si el resultado es true, 
// se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran falsos) retorna el último operando.

let comparacion_booleana = true || false || true; //true
comparacion_booleana = '0' || '0'; // '0'
comparacion_booleana = undefined || null || NaN || ''; // ''
comparacion_booleana = undefined || null || 3 || ''; // 3
comparacion_booleana = undefined || 'hola' || 3 || ''; // 'hola'

// Resumen: Devuelve el primer valor verdadero o el último si todos son falsos.


/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

// Operador lógico

// OR
/*
 v or v = v
 v or f = v
 f or v = v
 f or f = f
*/
/*

console.log ('***** Opoerador AND ******');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

if ( 4 ==4 && 2 < 5){
    console.log('Verdadero');
}

// restulado = valor_uno || valor_dos || valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando, converte el valor a booleano. Si el resultado es false, 
// se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran verdaderos) retorna el último operando.

comparacion_booleana = true && false && true; //false
comparacion_booleana = '0' && '0'; // '0'
comparacion_booleana = undefined && null && NaN && ''; // undefined
comparacion_booleana = undefined && null && 3 && ''; // undefined
comparacion_booleana = undefined && 'hola' && 3 && ''; // undefined

// Resumen: Devuelve el primer valor falso o el último si todos son verdaderos.


/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

// PREVALENCIA U ORDEN ENTRE OR Y AND

// a && b || c && d == (a && b) || (c && d)

// Negación 
/*
console.log(!true); //false
console.log(!false); // true
console.log(!!undefined); // false == Boolean(undefined)

// Nullish o Fusión de nulos

// restulado = valor_uno ?? valor_dos ?? valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando revisa si es null o undefined y regresa el primero que no sea
// ni null ni undefined.
// 3. Si todos los operandos han sido evaluados son nulos o undefined regresa el último.

a = null ?? undefined ?? undefined ?? null ?? "hola" ?? null ?? 'carlos'; // "hola"

a = undefined ?? undefined ?? undefined ?? null ?? null ?? null ; // null 
*/


// BUCLES WHILE Y FOR

/* While( condición){
}*/
/*
let i = 1;
while(i<=10){
    console.log(`El valor de i es: ${i}`);
    i++;
}

console.log('****************');
i = 10;
while(i){
    console.log(`El valor de i es: ${i}`);
    i--;
}

// do - while

/*
do {
}while(condición);
*/
/*
console.log('****************');
i = 1;
do{
console.log(`El valor de i es ${i}`);
i++;
}while(i<= 10);

// Ciclo for

/*
    for(comienzo; condición; incremento){
    }
*/
/*
console.log('****************');
for(i=0; i<= 10; i++){

console.log(`El valor de i es ${i}`);
}

console.log('****************');
for(i=10; i>= 0; i--){

console.log(`El valor de i es ${i}`);
}


// Alcance de la variable
console.log('****************');
for(let z=0; z<=10; z++){
    console.log(`El valor de z es ${z}`);
}

//console.log(`El valor de z por fuera es ${z}`);

console.log('****************');
let w = 0;
for(w=0; w<=10; w++){
    console.log(`El valor de w es ${w}`);
}

console.log(`El valor de w por fuera es ${w}`);

// Saltado de partes

console.log('****************');
w = 0;
for(; w<=10;){
    console.log(`El valor de w es ${w++}`);
}

// Break y continue
console.log('******** Breack ********');
w = 0;
while(1){
    console.log(`El valor de w es ${w++}`);
    if(w == 11) break;
}

for(i=1; i<= 10; i ++){
    if (i%2 != 0) continue;
    console.log(`${i} es un número par.`)
}

// Etiqueta para break y continue
console.log('******** Etiquetas ********');
for(i =0; i<= 10; i ++){
    for(j =0; j<= 10; j ++){

        console.log(`La suma de i+j es ${i+j}`);
        if (j == 2) break;
    }
     if(j == 2) break;
}
console.log('Salió')

// Etiqueta para break y continue
console.log('******** Etiquetas ********');
princial: for(i =0; i<= 10; i ++){
    for(j =0; j<= 10; j ++){ 
        console.log(`La suma de i+j es ${i+j}`);
        if (j == 2) break princial;
    }
}
console.log('Salió')

//Switch
/*
switch(valor){
    case valor1:
        [break];
    defaul
}
*/
/*
a = 2 + 2;
switch(a){
    case 3:
        console.log("El resultado es 3");
        break;
    case 4:
        console.log("El resultado es 4");
        break;
    default:
    console.log("Niguno de los dos valores");
    break;
}

//Funciones
/*
function nombre([parametros]){

}
*//*
function saludar(){
    console.log('Hola Mundo');
}
saludar();

//Variable local

function saludar_nombre(){
    let nombre_xx = 'Jose'; //variable local
    console.log(`Hola ${nombre_xx}`);
}

//Variable externa
let nombre_xx = 'Jose';
function saludar_nombre(){
    let nombre_xx = 'Armando'; //variable local
    console.log(`Hola ${nombre_xx}`);
}
console.log(`Hola ${nombre_xx}`);
saludar_nombre();

//Parametros
console.log("***********");
function mensaje_(de, texto){
    console.log(`${de}: ${texto}`);
}
mensaje_('Jose', 'Hola todos');
mensaje_('Abbie', 'How it is going?');

//Valores Predeterminados
console.log("***********");
function mensaje_(de, texto = ''){
    console.log(`${de}: ${texto}`);
}
mensaje_('Jose');
mensaje_('Abbie', 'How it is going?');

function sumar(a, b){
    return a + b;
}

function sumar_dos(a, b){

}

console.log(sumar(4, 5));
console.log(sumar_dos(4, 5));
console.log(sumar_dos()==undefined);


//HUF que devuelva la sumatoria de los numeros pares del 1 al x

function sumatoria_pares(x){
    sumatoria = 0;
    for (i = 0; i <= x; i++) {
       //if (i% 2 == 0) sumatoria = sumatoria + i;
       if (esPar(i)) sumatoria = sumatoria + i; 
    }
    return sumatoria;
}

function esPar(n){
    return n % 2 == 0;
}
console.log(sumatoria_pares(10));

//Expresion y Declaracion de una funcion

//Declarar una funcion
function hola(){
    console.log('Hola Mundo');
}

console.log(hola);

let aux = hola;
aux();

//Expresion de una funcion

let hola_dos = function(){
    console.log('Hola Mundo');
};


//Funciones flecha

let hola_dos_flecha = () => console.log('Hola Mundo');

let saludar_nombre_xx = function(nombre){
    console.log(`Hola ${nombre}!`)
}
let saludar_nombre_flecha = (nombre);

let saludar_nombre_xx_felcha=(nombre) => console.log(`Hola ${nombre}!`);
saludar_nombre_xx_felcha = nombre => console.log(`Hola ${nombre}!`);

********/

let sumar_ex = function(a, b){
      return a + b;
}
console.log(sumar_ex(4, 5));

let sumar_ex_flecha = (a, b) => {
    return a + b;
};


//Creacion de una funcion de manera dinamica
edad = 15;

let valor_tomado = (edad > 18) ? 5: 6;

let saludo_edad = (edad > 18) ?
    () => console.log("Es Mayor de edad") :
    () => console.log("Es menor de edad");

saludo_edad();
 

//Callback
function decidir(pregunta, si, no){
    if (confirm(pregunta)) si()
    else no();
}

let si = () => console.log('La persona dijo que si!!!');
let no = () => console.log('La persona dijo que no!!!');

decidir('Estas interesado en aprender JS?', si, no);



