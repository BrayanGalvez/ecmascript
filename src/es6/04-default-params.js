// 04 Default Params

function newuser (name, age, country){
    var name = name || 'default';
    var age = age || 0;
    var country = country || 'default';
    console.log(name, age, country);
}

newuser();
newuser('oscar', 32, 'CO');


// es6
function newuser2 (name = 'default', age = 0, country = 'default'){
    console.log(name, age, country);
}

newuser2();
newuser2('oscar', 32, 'CO');

// es6
function usuarios (newuser3 = {name:'default', age : 0, country : 'default'}, newUser4 = {name :'defaulr', age : 0, country : 'default'} ){
    return {...newuser3, ...newUser4}
}

console.log(usuarios({name:'oscar', age : 32, country : 'CO'}, {name :'yesica', age : 27, country : 'CO'})); // { name: 'yesica', age: 27, country: 'CO' } porque se sobreescribe el primer objeto con el segundo