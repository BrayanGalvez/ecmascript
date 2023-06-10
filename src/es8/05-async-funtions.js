// async function
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(something); // Async Hello World
    console.log('End');
}

console.log('Before');
anotherFunction();
console.log('After');