// enhaced object literals ES6
function newUser(user, age, country){
    return {
        user,
        age,
        country,
    }
}

console.log(newUser('oscar', 32, 'CO'));