// String padding ES8
// Permite añadir cadenas vacías o caracteres al inicio o al final de una cadena de texto
const string = 'hello';
console.log(string.padStart(7 /*Numero de Caracteres*/ , '__')); // hihello
console.log(string.padEnd(12 /*Numero de Caracteres*/ , '__')); // hello_______