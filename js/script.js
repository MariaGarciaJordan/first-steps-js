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

// Llamada a la función sumar()
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

// Objetos
//objeto1
    let coche = {
        marca: 'Renault',
        modelo: 'Captur',
        año: 2020,
        color: 'verde',
        características: ['aire acondicionado', 'eleva lunas electrico'],
    };
    console.log('Marca:', coche.marca);
    console.log('Modelo:', coche.modelo);
    console.log('Año:', coche.año);
    console.log('Características:', coche.características.join(', '));

  //objeto2

    function obtenerMarcaDelCoche(coche) {
        return coche.marca;
    }
    let miCoche = {
        marca: 'Renault',
        modelo: 'Captur',
        año: 2020,
        color: 'verde',
        características: ['aire acondicionado', 'eleva lunas electrico'],
    };

    let marcaDelCoche = obtenerMarcaDelCoche(miCoche);
    console.log('La marca del coche es:', marcaDelCoche);

//objeto3

    let miCocheConPuertas = {
        marca: 'Renault',
        modelo: 'Captur',
        año: 2020,
        color: 'verde',
        características: ['aire acondicionado', 'eleva lunas electrico'], puertas:5,
    };

    function obtenerCantidadDePuertas(coche) {
        if (coche.puertas !== undefined) {
        return coche.puertas;
        } else {
        return 'Información no disponible';
        }
    }
    
    let cantidadDePuertas = obtenerCantidadDePuertas(miCocheConPuertas);
    console.log('La cantidad de puertas es:', cantidadDePuertas);
  
//objeto4

    let miCocheConMotor = {
        marca: 'Toyota',
        modelo: 'Camry',
        año: 2022,
        color: 'azul',
        motor: {
        tipo: 'V6',
        cilindrada: 3500,
        },
        características: ['aire acondicionado', 'eleva lunas electrico' ],
    };

        function obtenerTipoDeMotor(coche) {
            if (coche.motor && coche.motor.tipo !== undefined) {
            return coche.motor.tipo;
            } else {
            return 'Información no disponible';
            }
        }

    let tipoDeMotor = obtenerTipoDeMotor(miCocheConMotor);
    console.log('El tipo de motor es:', tipoDeMotor);

  //Arrays

    let numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(numer);

//arrays1 y 2

    let numeros = [];

    for (let i = 1; i <= 10; i++) {
    numeros.push(i);
    }

    console.log(numeros);

//arrays: Crear una función que elimine los números pares de ese array.

    function eliminarNumerosPares(array) {
        for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array.splice(i, 1);
            i--; 
        }
        }
    }

 //arrays: Crear una función que devuelva el número mayor de un array.

        function encontrarNumeroMayor(array) {
        if (array.length === 0) {
            return "El array está vacío";
        }
        
        let numeroMayor = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > numeroMayor) {
            numeroMayor = array[i];
            }
        }

        return numeroMayor;
        }

//Crear una función que devuelva el número menor de un array.

    function encontrarNumeroMenor(array) {
        if (array.length === 0) {
        return "El array está vacío";
        }
        
        let numeroMenor = array[0];
        for (let i = 1; i < array.length; i++) {
        if (array[i] < numeroMenor) {
            numeroMenor = array[i];
        }
        }
    
        return numeroMenor;
    }

//Crear una función que convierta en mayúsculas todas las letras de un texto.

        function convertirAMayusculas(texto) {
            return texto.toUpperCase();
        }

//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayusculas.

        function primerLetraEnNombres(nombres) {
            if (nombres.length === 0) {
            return [];
            }
            const nombresMayuscula = nombres.map(nombre => {
            return nombre.charAt(0).toUpperCase() + nombre.slice(1);
            });
        
            return nombresMayuscula;
        }

//Manipulacion del DOM

//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.

    const botondom = document.getElementById("botondom");
    botondom.addEventListener("click", function() {
  
  alert("Hola soy tu boton");
});

//Cambiar el contenido de un elemento HTML mediante JavaScript.

    var miElemento = document.getElementById("miElemento");
    miElemento.innerHTML = "Ahora soy asi";

//Ocultar y mostrar elementos HTML utilizando JavaScript.

    function mostrarElemento() {
        var elemento = document.getElementById("miElemento");
        elemento.style.display = "block";  // o "inline", "inline-block", etc.
    }

    function ocultarElemento() {
        var elemento = document.getElementById("miElemento");
        elemento.style.display = "none";
    }

//Crear un array de 10 nombres.

    var nombres = ["Diana", "María", "Joha", "Ana", "Aleja", "Yami", "Tania", "Sharon", "Loli", "Isla"];

//Imprimirlos
 
    function imprimirLista(nombres) {
        var lista = document.createElement("ul");

        for (var i = 0; i < nombres.length; i++) {
            var elementoLista = document.createElement("li");
            elementoLista.textContent = nombres[i];
            lista.appendChild(elementoLista);
        }

        document.body.appendChild(lista);
    }

    imprimirLista(nombres);

//Crear un array de números.
    var nmrs = [56,30,86,74]

    function contarNumeros(array) {
        var cantidadNumeros = array.length;

        var parrafo = document.createElement("p");
        parrafo.textContent = "El array tiene " + cantidadNumeros + " números.";
        document.body.appendChild(parrafo);
    }

    contarNumeros(nmrs);

//Crea los nodos necesarios para imprimir una tabla.

    var datos = [
        { nombre: "J", edad: 29, ciudad: "Madrid" },
        { nombre: "Marta", edad: 30, ciudad: "Merida" },
        { nombre: "Atefa", edad: 22, ciudad: "Salamanca" }
        //
    ];

    function crearTabla(array) {
        var tabla = document.createElement("table");
        var encabezado = document.createElement("thead");
        var encabezadoFila = document.createElement("tr");

        for (var clave in array[0]) {
            var celdaEncabezado = document.createElement("th");
            celdaEncabezado.textContent = clave;
            encabezadoFila.appendChild(celdaEncabezado);
        }

        encabezado.appendChild(encabezadoFila);
        tabla.appendChild(encabezado);
        var cuerpoTabla = document.createElement("tbody");

        for (var i = 0; i < array.length; i++) {
            var fila = document.createElement("tr");
            for (var clave in array[i]) {
                var celda = document.createElement("td");
                celda.textContent = array[i][clave];
                fila.appendChild(celda);
            }
            cuerpoTabla.appendChild(fila);
        }
        tabla.appendChild(cuerpoTabla);
        document.body.appendChild(tabla);
    }
    crearTabla(datos);

//Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes
keys: id, name, status, species, type, gender

    var personajes = [
        { id: 1, name: "Jorge Sanchez", status: "Alive", species: "Humano", type: "cientifico", gender: "Chico" },
        { id: 2, name: "Miguel Fidalgo", status: "Alive", species: "Humano", type: "periodista", gender: "Chico" },
        { id: 3, name: "Sylvia Padron", status: "Alive", species: "Humano", type: "adolescente", gender: "Chica" },
        { id: 4, name: "ruth Garcia", status: "Alive", species: "Humano", type: "doctor", gender: "Chica" },
        { id: 5, name: "Yon Gonzalez", status: "Alive", species: "Humano", type: "abogado", gender: "Chico" },
        { id: 6, name: "Cantor", status: "Alive", species: "Pajaro", type: "independiente", gender: "Chico" },
        { id: 7, name: "Chrono", status: "Alive", species: "Gato", type: "alegre", gender: "macho" },
        { id: 8, name: "Happy", status: "Alive", species: "Perro", type: "amable", gender: "Chico" },
        { id: 9, name: "Nora", status: "Alive", species: "humano", type: "graciosa", gender: "No binario" },
        { id: 10, name: "Gerald", status: "Alive", species: "nutria", type: "escapista", gender: "Chico" }
    ];


    console.log(personajes[0].name); 

 //Crea ua tabla con la informacion anterior

    function crearTabla(array) {
        var tabla = document.createElement("table");

        var encabezado = document.createElement("thead");
        var encabezadoFila = document.createElement("tr");

        for (var clave in array[0]) {
            var celdaEncabezado = document.createElement("th");
            celdaEncabezado.textContent = clave;
            encabezadoFila.appendChild(celdaEncabezado);
        }

        encabezado.appendChild(encabezadoFila);

        tabla.appendChild(encabezado);

        var cuerpoTabla = document.createElement("tbody");

        for (var i = 0; i < array.length; i++) {
            var fila = document.createElement("tr");
            for (var clave in array[i]) {
                var celda = document.createElement("td");
                celda.textContent = array[i][clave];
                fila.appendChild(celda);
            }

            cuerpoTabla.appendChild(fila);
        }

        tabla.appendChild(cuerpoTabla);
        document.body.appendChild(tabla);
    }

    crearTabla(personajes);





// if(Math.floor(numerofinal/2) === numerofinal/2){
//     document.write('<div> es par </div><br>');
//     console.log(nombre);} 
//     else {
//     document.write('<div>es inpar</div><br>');
//     console.log(nombre);}

// //Crear una función que elimine los números pares de ese array.
// const eliminar_pares = function(array) {
//     return array.filter(numero => numero % 2 !== 0);
// };
// numeros = eliminar_pares(numeros);
// console.log(numeros);

// for (let i = 0; i < 11; i++) {
  
//     console.log(i);
//     cadena.push(i);
//     document.write('<p>' + (cadena[i]) + '</p><br><hr></hr>');

// }