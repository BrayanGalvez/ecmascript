// clases
// definicion de una clase (Declaracion)
class User {}

// instanciar una clase
//const user = new User();

class user{
    //metodos
    greeting(){
        return 'Hello World';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//metodos constructor
class user{
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello World';
    }
};

const david = new user();

// this (elemento padre que contiene a los elementos hijos)
class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
//instanciar
const ana = new user('Ana');
console.log(ana.greeting());

// setters y getters
class user{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this._name}`;
    }

    get uAge(){
        return this._age;
    }
    set uAge(n){
        this._age = n;
    }
}

const bebeloper1 = new user('Jones', 20);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 25);

