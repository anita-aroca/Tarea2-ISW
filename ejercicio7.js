//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function SumaNumeros(array){
    let suma = 0;
    let i= 0;
    for(i; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
const numeros = [1,2,3,4,5];
console.log("Suma de todos los números del array: ", SumaNumeros(numeros));

//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function PromedioNumeros(array){
    let suma = 0;
    let i= 0;
    for(i; i < array.length; i++){
        suma += array[i];
    }
    return suma/array.length;
}
const numeros2 = [1,2,3,4,5];
console.log("El promedio de todos los números del array son: ", PromedioNumeros(numeros2));


//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings
// pero con todas las letras en mayúsculas.
function letrasMayus(array){
    let i= 0;
    for(i; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}
const strings = ["gato", "perro", "pájaro", "lobo"];
console.log("Strings con todas las letras en mayúsculas: ", letrasMayus(strings));


//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function NumerosPares(array){
    let i= 0;
    let pares = [];
    for(i; i < array.length; i++){
        if(array[i] % 2 == 0){
            pares.push(array[i]);
        }
    }
    return pares;
}
const numeros3 = [1,2,3,4,5,6,7,8,9,10];
console.log("Números pares del array: ", NumerosPares(numeros3));