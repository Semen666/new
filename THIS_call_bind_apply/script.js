function hello() {
    console.log('hello', this);
}

const person = {
    name:'Semen',
    age:25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this), //window//document
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`name is ${this.name}`);
        console.log(`age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
};

const lena = {
    name: 'Elena',
    age: 23
};

person.logInfo.bind(lena, 'WEB-DEVELOPER', '8931-541-85-59')();
person.logInfo.call(lena, 'WEB-DEVELOPER', '8931-541-85-59');
person.logInfo.apply(lena, ['WEB-DEVELOPER', '8931-541-85-59']);


////////////////////////////////////////////////////////////////////////
const array = [1, 2, 3, 4, 5];
Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i*n;
    });
};
console.log(array.multBy(5));
////////////////////////////////////////////////////////
const semen = {
    name: 'ss',
    tel: '8-99-99-99',
    hello: function(job,phone) {
        console.log(`name in ${this.name} my tel is ${this.tel}`);
        console.log(`my work is ${job}`);
        console.log(`my tel is ${phone}`);
    }
};

const ladin = {
    name: "egor",
    tel: '4-20-32'
};

semen.hello.bind(ladin, 'web-developer', '99999')();
//////////////////////////////////



const person1 = {
    name: 'Misha',
    age: 22,
    job: 'Frontend',
    logInfo: function () {
        return `my work is ${this.job}, my age is ${this.age}, my name is ${this.name}`;
    }
};

const person2 = {
    name: 'Elena',
    age: 19,
    job: 'SMM'
};

console.log(person1.logInfo.bind(person2)());




const maks = {
    name: 'Semen',
    age: 25,
    fff: function(phone) {
        return `${this.name} and i am living here ${this.age} year, my phone is ${phone}`;
    }
};

const pavel = {
    name: 'pasha',
    age: 22
};
console.log(maks.fff.bind(pavel, '89315418559')());


