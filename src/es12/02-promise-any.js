// promise any ES12
// sirve para ejecutar todas las promesas y retornar la primera que se resuelva
// si ninguna se resuelve, retorna un error
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.any([promise1, promise2, promise3])
    .then((response) => console.log(response))