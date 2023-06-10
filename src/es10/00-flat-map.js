//flat map
//es una combinacion de map y flat
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]; //array aplanado
console.log(array.flat(2)); //2 niveles de profundidad

//flat map
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));