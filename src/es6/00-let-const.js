console.log(animal);

const fruit = () => {
    if(true) {
        var fruit1 = 'apple'; // var is function scoped
        let fruit2 = 'banana'; // let is block scoped
        const fruit3 = 'kiwi'; // const is block scoped
        }
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
fruit();