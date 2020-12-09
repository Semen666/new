// const person = {
//     name: 'semen',
//     age: 15,
//     sayHello: function() {
//         console.log(hello);
//     }
// };



Object.prototype.newfunc = function() {
    console.log('gang');
};

const mens = {};
mens.newfunc();

const mmm = Object.create(mens);
mmm.newfunc();






const men = new Object({
    name: 'man',
    age: 15,
    sayHello: function() {
        console.log(hello);
    }
});

Object.prototype.greet = function() {
    console.log('greet');
};
men.greet();

const lena = Object.create(men);
// Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.
lena.name = "Elena";
lena.lastname = "Kyznetsova";
lena.greet();
console.log(lena);


const str = new String('Semen');

