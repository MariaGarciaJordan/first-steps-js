// Crear distintas variables

let textString = "Buenos dias"; //variable de texto
let number = 33; //variable numero
let boolean = true; //variable boolean

// Se muestran por consola
console.log("Variable textString: " + textString);
console.log("Variable number: " + number);
console.log("Variable boolean: " + boolean);

// Se muestran en el documento
document.write("Variable textString: " + textString);
document.write("<br>Variable number: " + number);
document.write("<br>Variable boolean: " + boolean);

// Operaciones matematicas simples

// Suma
let sumar1 = 20;
let sumar2 = 13;
console.log("Resultado sumar las variables: " + (sumar1 + sumar2));
document.write("<br>Resultado sumar las variables: " + (sumar1 + sumar2));

// Multiplicación
let multi1 = 4;
let multi2 = 6;
console.log("Resultado de multiplicar las variables: " + (multi1*multi2));
document.write("<br>Resultado de multiplicar las variables: " + (multi1*multi2));

// División
let divi1 = 10;
let divi2 = 5;
console.log("Resultado de dividir las variables: " + (divi1/divi2));
document.write("<br>Resultado de dividir las variables: " + (divi1/divi2));

// Funcion - Texto

function saludar(petName) {
    let mensaje = "Hola, " + petName;
    console.log(mensaje);
    document.write("<br>" + mensaje);
}

// Llamada a la función saludar()
saludar("Maya");

// Funciones numericas - Suma

function sumar(suma1,suma2) {
    let mensaje = "La suma de " + suma1 + " y " + suma2 + " es: " + (suma1+suma2);
    console.log(mensaje);
    document.write("<br>" + mensaje);
}

// Llamada a la función restar()
sumar(100,50);

// Funcion par o impar
function parImpar(numero) {
    let resultado = numero%2;

    if (resultado == 0) {
        console.log("El numero " + numero + " es par");
        document.write("<br>El numero " + numero + " es par")
    }
    else {
        console.log("El numero " + numero + " es impar");
        document.log("<br>El numero " + numero + " es impar");
    }
}

parImpar(56);