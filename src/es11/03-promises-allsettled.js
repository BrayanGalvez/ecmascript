//promises.allsettled es11
//sirve para ejecutar todas las promesas y que no se detenga la ejecucion si una falla
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve ("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))