//promises
//es una promesa de que algo va a pasar
//se usa para ejecutar codigo asincrono
//se usa para ejecutar codigo que tarda en ejecutarse
//se usa para ejecutar codigo que depende de otro codigo
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!')
        }
})
}
// se ejecuta la funcion
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//otra forma de hacerlo
