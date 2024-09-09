//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function mayusculas(string){
    return string.toUpperCase();
}
console.log(mayusculas("anita"));


//2. Crea una función que reciba un string y retorne el string en minúsculas.
function minusculas(string){
    return string.toLowerCase();
}
console.log(minusculas("Anita"));


//3. Crear una función que reciba como parámetro 2 números y los reste.
function restar(a, b) {
    return a - b;
}
console.log(restar(10, 5));


//4. Crear una función que reciba como parámetro 2 números y los divida.
function dividir(a, b) {
    return a / b;
}
console.log(dividir(10, 5));


//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multi(a, b){
    return a * b;
}
console.log(multi(10, 5));


//6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(string){
    return string.length;
}
console.log(`La longitud del string "Anita lava la tina" es:`,longitud("Anita lava la tina"));