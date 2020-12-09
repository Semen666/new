const person = Object.create({}, {
    name: {
        value: 'Semen',
        enumerable: true, //позволяет пройти по циклу.
        writable: true, //позволяет менять
        configurable: true //позволяет удалять
    },
    age: {
        value: 24,
        enumerable: true
    }
}); //метод, позволяющий создавать новый объект

person.name = 'Maxim';

console.log(person);
delete person.name;
for (let key in person) {
    console.log('key', key);
}

//////////////////////////////////////////////////////////////
//getter//setter

const p = Object.create({
    calculateAge() {
        console.log('Age', new Date().getFullYear() - this.birth);
    }
},
 {
    name: {
        value: 'Semen',
        enumerable: true, //позволяет пройти по циклу.
        writable: true, //позволяет менять
        configurable: true //позволяет удалять
    },
    birth: {
        value: 1996,
        enumerable: true
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birth;
        },
        set(value) {
            document.body.style.background = 'red'; 
            //изменяем background при задаче нового значения
            console.log('setAge', value);
        }
    }
});
console.log(p);

for (let key in p) {
    if (p.hasOwnProperty(key))
    console.log('key', key, p[key]);
}

