//fromentries
//trasnforma un arreglo en un objeto
const entries = new Map(["name", "oscar"], ["age", 32]);
console.log(entries);
console.log(Object.fromEntries(entries)); //convierte un objeto en una matriz clave valor