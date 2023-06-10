//matchall es11
//es para buscar todas las coincidencias de una expresion regular
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana Kiwi, Apple, Orange, etc. etc. etc.'; 

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}