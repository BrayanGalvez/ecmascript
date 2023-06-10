// optional chaining
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
//sirve para validar si existe o no un valor dentro de un objeto

const users = {
    stiven: {
        country: "Colombia",
    },
    oscar: {
        country: "Mexico",
    }
}

console.log(users.stiven?.country); //si no existe el valor no lo imprime
console.log(users.stiven?.age); //si no existe el valor no lo imprime