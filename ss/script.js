let k = 10;

out:
    for(let i = 2; i < k; i++) {
        for(let j = 2; j < i; j ++) {
            if(i % j == 0) continue out;
        }
        console.log(i);
    }























let k = 10
out:
for(let i = 2; i < k; i++) {
    for(let j = 2; j < i; j++) {
        if (i % j == 0) continue out;
    }
    console.log(i);
}



function showMessage(from, text = anotherFunction()) {
    console.log(from + text);
  }
function anotherFunction (text) {
      console.log(text);
 }
anotherFunction('ttttt');
showMessage('первая функция');




function sum(a, b) {
     a + b;
}
  
let result = sum(1, 2);
console.log( result ); // 3





function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

checkAge(13);

function checkAge(age) {
    return (age > 18) || confirm('А родители разрешили?')
}

checkAge(13);


function minNum(a,b) {
    if(a>b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNum(5,5));

function minNum(a,b) {
   return (a > b) ? a : b;
}

console.log(minNum(5,4));



let xx = prompt('x?', '');
let yy = prompt('y?', '');

function pow(xx,nn) {
    return xx**nn;
}

if (yy > 1) {
    console.log(pow(xx,yy));
} else {
    console.log('you are not right');
}


function sayHi() {
    console.log( "Привет" );
  }
  
console.log(sayHi()); 
let func = sayHi;
func();


function funcs(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

function showYes() {
    alert('you are agree');
}

function showNo() {
    alert('you are disagree');
}

funcs('Вы согласны?', showYes, showNo);



function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

ask(
    'Вы согласны?',
    function() {alert('you are agree');},
    function() {alert('you are disagree');}
);


let age = prompt("Сколько Вам лет?", 18);

// в зависимости от условия объявляем функцию
if (age < 18) {

  function welcome() {
    alert("Привет!");
  }

} else {

  function welcome() {
    alert("Здравствуйте!");
  }

}

// ...не работает
welcome(); // Error: welcome is not defined






















let q = +prompt('Сколько вам лет?', '18');
if (q > 18) {
    welcome();
    function welcome() {
        alert('welcome');
    }
} else {
    welcome();
    function welcome() {
        alert('goodbye');
    }
}




let welc;
let qq = prompt('how old are u?', '18');
if(qq > 18) {
    welc = function() {
        alert('welcome');
    };
} else {
    welc = function() {
        alert('goodbue');
    };
}
welc();





let qqqq = prompt('old?', '18');
let w = (qqqq > 18) ?
    () => alert('welc'):
    () => alert('godbue');
w();

let s = () => alert('hello');
s();

let r = n => n ** 4;
r(3);



let sum2 = (a,b) => {
    return a+b;
};
console.log(sum2(3,4));



let ask2 = (question, yes, no) => {
    if(prompt(question)) yes();
    else no();
};
ask2(
    ('are you agree?'),
    () => alert('welcome'),
    () => alert('no')
);







let a = (q, y, n) => {
    if(confirm(q)) y();
    else n();
};

a (
    'are you agree?',
    () => alert('agree'),
    () => alert('disagree')
);

let aa = (q, y, n) => {
    if(prompt(q) > 18) y();
    else n();
};
aa(
    'сколько лет?',
    () => alert('yes') ,     
    () => alert('no')      
);








let a = (qust, y, n) => {
    if(prompt(qust) > 18 ) y();
    else n();
};
a (
    'old?',
    () => alert('welc'),
    () => alert('good')
);


let qus = (question, y, n) => {
    if(prompt(question) > 18) y();
    else n();
};

qus (
    'вам есть 18?',
    () => alert('йййййй'),
    () => alert('eeeeeee'),
);











let a = {
    name: 'Sema',
    lastname: 'Ladin'
};
delete a.name;
// console.log(a);
a['like bulls'] = 'like';
console.log(a);


























let a = {
    name: 'Sema',
    lastname: 'Ladin'
};

let b = 'Nikolaevich';
a[b] = true;
console.log(a);

let user = {
    name: "John",
    age: 30,
    lastname: 'ladin'
  };
  
  let key = prompt("Что вы хотите узнать о пользователе?", "");
  
  // доступ к свойству через переменную
  alert( user[key] );












  function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...другие свойства
    };
  }
  
  let user = makeUser("John", 30);
  console.log(user); // John
























function objectT(name, job, age) {
    return {
        name: name,
        job: job,
        age: age
    };
}
let my = objectT('Semen', 'web-developer', '13');
console.log(my);
console.log('job' in my);




let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}


user = {
    name: 'Jonh',
    surname: 'Smith'
};
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);





let obj = {
};

function checkKey(someobj) {
    for (let key in someobj) {
        return console.log(`в этом свойстве есть ключ ${key}`);
    }
        return console.log('это пустой объект');
}

checkKey(obj);




let d = {
    name: 'oleg'
};

function dd(obj) {
    for (key in obj) {
        return false;
    } 
    return true;
}
console.log(dd(d));





const obj = {
    num1: 30,
    num2: 40,
    num3: 30
};
let sum = 0;
for (let key in obj) {
    sum += obj[key];
}
console.log(sum);



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        } 
    }
}
multiplyNumeric(menu);
console.log(menu);



let user = { name: "Иван" };

let admin = user; // копируется ссылка
let add = admin;
console.log(user);
console.log(admin);
console.log(add);


let user = {
    name: "Иван",
    age: 30
  };
  
  let clone = Object.assign({}, user);
  console.log(clone);
  clone.name = 'Semen';
  console.log(user);
  console.log(clone);






let user = {
    name: "Иван",
    age: 30,
    size: {
        num1: 'hello'
    }
};

let clone = _.cloneDeep(user);
console.log(clone);


user = {
    name: 'semen',
    sayHi() { // то же самое, что и "sayHi: function()"
      return "Привет";
    }
  };
console.log(user.sayHi());



let user = {
    name: "Джон",
    age: 30,
  
    sayHi: function() {
      // this - это "текущий объект"
      console.log(this.age);
    }
  
  };
  
  user.sayHi();



let t = {
    name: 'Vanya'
};
t.f = sayHi;
console.log(t.f());

function sayHi() {
    return this.name;
}




let calculator = {
    read() {
        this.a = +prompt('a', '');
        this.b = +prompt('b', '');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());






let loader = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};

loader.up().up().up().up().down().showStep();



let a = (ques, y, n) => {
    if(prompt(ques) > 18) y();
    else n();
};

a (
    'how old u',
    () => alert('hello'),
    () => alert('good')
);

let qus = (question, y, n) => {
    if(prompt(question) > 18) y();
    else n();
};

qus (
    'вам есть 18?',
    () => alert('йййййй'),
    () => alert('eeeeeee'),
);















function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Вася");
  
  console.log(user.name); // Вася
  console.log(user.isAdmin);



let ivan = new Obj('Петр', 'Ladin');
let svan = new Obj('Игнат', 'Петров');
function Obj(name, surname) {
    this.name = name;
    this.surname = surname;
}

console.log(ivan.name = 'slava'); // Slava
console.log(ivan); // slava
console.log(svan); // ignat





let user = new function() {
    this.name = "Вася";
    this.isAdmin = false;
  
    // ...другой код для создания пользователя
    // возможна любая сложная логика и выражения
    
// локальные переменные и т. д.
  };
console.log(user);
user.name = 'Grusha';
console.log(user);




function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Вася");
  
  alert(user.name); // Вася
  alert(user.isAdmin); // fals
  console.log(user);


function One(name, age, phone) {
    this.name = name,
    this.age = age,
    this.phone = phone,
    this.hi = function() {
        return(this.age + this.phone);
    };
}

let semen = new One('semen', 25, 2);
console.log(semen.hi());

let dima = new One('dima', 13, 2);
console.log(dima.hi());




console.log( 0.1 + 0.2 );



function Calculator () {
    this.read = function() {
        this.a = +prompt('a?',0);
        this.b = +prompt('b?',0);
    };
    this.sum = function() {
        return this.a * this.b;
    },
    this.mul = function() {
        return this.a * this.b;
    };
}

let train = new Calculator();
train.read();
alert('sum=' + train.sum() );
alert('mul=' + train.mul() );





function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );



  let id = Symbol("id");
  let user = {
    [id]: 123
  };
  
  let clone = Object.assign({}, user);
  
console.log( clone ); // 123







function Accumulator(startingValue) {
    this.b = +prompt('прибавить число к значению');
    this.c = +prompt('прибавить число к значению');
    this.read = function() {
        return startingValue + this.b + this.c;
    };
}

let acc = new Accumulator(1);
alert(acc.read());


function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);



let str = "Привет";
console.log( str.toUpperCase() ); // ПРИВЕТ
console.log(str);//Привет
str = str.toUpperCase();
console.log(str); //ПРИВЕТ
console.log(str);

let n = 1.234;
console.log(n.toFixed(2)); //1.23
console.log(n); // 1.234
// ------------------------------------
let bb = 1.234;
bb = bb.toFixed(2);
console.log(bb); //1.23




let num = Number("123");
console.log(typeof(num)); //number












function Car() {
    this.a = +prompt('how', 0);
    this.b = +prompt('how', 0);
    this.sum = function() {
        return this.a + this.b;
    };
    this.mult = function() {
        return this.a * this.b;
    };
}

let car = new Car();
alert(car.sum());
alert(car.mult());



function Live(liv, name, age) {
    //this {}
    this.liv = liv;
    this.name = name;
    this.age = age;
    this.love = function() {
        return this.age * 3;
    };
}

let live = new Live('myLife', 'Semen', 24);
console.log(live);
console.log(live.love());

let chose = new Live('myShoce', 'Artem', 88);
console.log(chose);
console.log(chose.love());


console.log(1e3);




let a = 1000;
console.log(a === 1e3); //true


console.log(1e-3); //0.001



console.log(Math.floor(3,51));
console.log(Math.floor(3,49));
console.log(Math.floor(3,5));


console.log(Math.floor(3.9));//3
console.log(Math.ceil(3.1)); //4
console.log(Math.round(2.1)); //2
console.log(Math.round(2.8)); //3
console.log(Math.trunc(5.8)); //5


let num = 5.66;
let num2 = 5.33;
console.log(num.toFixed(1));//5.7
console.log(num2.toFixed(1));//5.3


console.log(isNaN(3)); //false
console.log(isNaN('a')); //true



let num = +prompt("Enter a number", '');
if(isFinite(num)) {
    alert('welcome');
} else {
    alert('goodbue');
}

console.log(parseInt('365px')); //365
console.log(parseFloat('423.37px')); //423.37

console.log(Math.random());
console.log(Math.random().toFixed(2));


console.log(Math.max(3,4,-10,15)); //15
console.log(Math.min(3,4,-10,15)); //-10
console.log(Math.max([3,4,-10,15]));


console.log(Math.pow(2,3)); //8
console.log(Math.pow(3,3)); //27
console.log(Math.pow(5,3)); //125



let a = +prompt('num1', 0);
let b = +prompt('num1', 0);
if((isFinite(a && b))) {
    alert(a+b);
}




function readNubmer() {
    let a = +prompt('number', 0);
    if(isFinite(a) > 0) {
        alert(a);
    } else if (a === '' || a === null) {
        return null;
    } else {
        readNubmer();
    }
}
readNubmer();


for (let q of "Hello") {
    console.log(q); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
  }



let str = 'ослик иа-иф посмотрел на тебя';

let target = 'о';
let pos = 0;
while(true) {
    let foundpos= str.indexOf(target, pos);
    if(foundpos == -1) break;
    console.log(`найдено тут : ${foundpos}`);
    pos = foundpos+1;
}




let puss = 'hello my olf friend ooold grieno';
let target = 'o';
let pus = 0;
while(true) {
    let findO = puss.indexOf(target, pus);
    if(findO == -1) break;
    console.log(`букву 0 нашли здесь ${findO}`);
    pus = findO + 1;
}
// букву 0 нашли здесь 4
// букву 0 нашли здесь 9
// букву 0 нашли здесь 20
// букву 0 нашли здесь 21
// букву 0 нашли здесь 22
// букву 0 нашли здесь 31



console.log('my name is name'.includes('a')); //true
console.log('my name is'.includes('a', 6 )); //false



let avg = 'semen ladin';
console.log(avg.slice(0,5)); //semen

let mem = 'semen ladin';
console.log(mem.substring(6, 9)); //lad


let meth = 'javaScript';
console.log(meth.substr(4,5)); //Scrip;



ucFirst("вася") == "Вася";
let a = 'вася'[0].toUpperCase();
console.log('vasya'[0].toUpperCase());


let vas = 'вася';
function ucFirst() {
   console.log(vas[0].toUpperCase() + vas.slice(1));
}

ucFirst(); //Вася



function checkSpam(str) {
    let toLower = str.toLowerCase();
    return toLower.includes('viagra') || toLower.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));



function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '...';
    } else {
        return str;
    }
}

console.log(truncate('dsdsdsdasdadadasdaaca', 20));
console.log(truncate('dsdsdsdasdadadasdaaca', 10));
console.log(truncate('Seeeeemen', 5));




function tonum(num) {
    return +num.slice(1);
}

console.log(tonum('$120'));
console.log(tonum('R120'));
7
console.log(parseInt('365px')); //365


let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // "a","b",function
console.log(arr.length);



let mass = ['pp', {name: 'Джон', age: 15}, function() {return('ky ky')}];
console.log(mass[2]()); //kuku






let massive = [1, 2, 3, 4, 5];
massive.length = 3;
console.log(massive); //[1,2,3]


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix.length);//3
console.log(matrix[1][1]); //5


console.log([1] + 1); //11
console.log([1] + '1'); //11
console.log([1,23] + '1'); //1,231




let styles = ['Djaz', 'Bluz'];
styles.push('Rock`nRoll');
styles[1] = 'Classic';
styles.shift();
styles.unshift('rap', 'reggi');
console.log(styles);



let mas2 = ['a','b'];
mas2.push(function() {
    return (this);
});
console.log(mas2[2]()); //[ 'a', 'b', [Function] ]
console.log(mas2.length); //3





function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }
  
console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-1, -2, -3]) ); // 0

function maxNumber(arr) {
    let max = 0;
    let current = 0;
    for (let item of arr) {
        current += item;
        max = Math.max(max, current);
        if (current < 0) {
            current = 0;
        }
    }
    return max;
}

console.log( maxNumber([-1, 2, 3, -9]) ); // 5
console.log( maxNumber([-1, 2, 3, -9, 11]) ); // 11
console.log( maxNumber([-2, -1, 1, 2]) ); // 3
console.log( maxNumber([100, -9, 2, -3, 5]) ); // 100
console.log( maxNumber([1, 2, 3]) ); // 6
console.log( maxNumber([-1, -2, -3]) ); // 0

str1 = 'javaScript';
console.log(str1.slice(-6));



const abc = [1,2,5];
abc.splice(2,0,3,4);
console.log(abc);

let arr2 = ["Я", "изучаю", "JavaScript"];
arr2.splice(1,1);
console.log(arr2);


let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr2.splice(1,2, 'танцую');
console.log(arr2); // [ 'Я', 'танцую', 'прямо', 'сейчас' ]



let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 2 первых элемента
let removed = arr.splice(0, 2);

console.log( removed );


let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
arr2.splice(2,0, 'сложный');
console.log(arr2); //[ 'Я', 'изучаю', 'сложный', 'JavaScript', 'прямо', 'сейчас' ]



let arr = ['j', 'a', 'v', 'a', 's','r','i', 'p', 't'];
console.log(arr.slice(0,4)); //[ 'j', 'a', 'v', 'a' ]

let arr = ['j', 'a', 'v', 'a', 's','r','i', 'p', 't'];
console.log(arr.slice(-5)); //[ 's', 'r', 'i', 'p', 't' ]




let n1 = [1,2,3];
let n2 = [4,5,6];
let n3 = [7,8,9];

let toget = [];
let arr = toget.concat(n1,n2,n3);
console.log(arr);  //[1,2,3,4,5,6,7,8,9]

let b = toget.concat(n1, 3, 5,7);
console.log(b); // [1,2,3,3,5,7]

 
let each = ['i', 'm', 'java', 'script'];
each.forEach(item => console.log(item));

let each = ['i', 'm', 'java', 'script'];
each.forEach((item, index, arr) => {
    console.log(`this ${item} has number ${index} in arr ${arr}`);
});
// this i has number 0 in arr i,m,java,script
// this m has number 1 in arr i,m,java,script
// this java has number 2 in arr i,m,java,script
// this script has number 3 in arr i,m,java,script



let index = [1,2,false, null, 3, 7];
console.log(index.indexOf(3)); //4

let index = [1,2,false, null, 3, 7];
console.log(index.includes(null)); //true

let index = [1,2,false, null, 3, 7];
console.log(index.lastIndexOf(7)); //


let users = [
    {id:1, name:'Semen'},
    {id:2, name:'Pasha'},
    {id:3, name:'Sasha'},
    {id:4, name:'Masha'}
]

let user = users.find(item => item.id == 1);
console.log(user); //{ id: 1, name: 'Semen' }
let user2 = users.findIndex(item => item.id == 3);
console.log(user2); //2





let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 4, name: "Маша"},
    {id: 5, name: "Маша"},
    {id: 6, name: "Маша"},
  ];
  
let user = users.filter(item => item.id > 3);
console.log(user);
//
// [
//     { id: 4, name: 'Маша' },
//     { id: 5, name: 'Маша' },
//     { id: 6, name: 'Маша' }
//   ]


let car = ['audi', 'mersedes', 'bmw'];
let carmap = car.map(item => item + 'zzzz');
console.log(carmap);
//[ 'audizzzz', 'mersedeszzzz', 'bmwzzzz' ]


let num = [2, 3, 1, 15, 4, 12];
let s = num.sort((a,b) => a-b);
console.log(s);


let arr = [1,2,2,4].reverse();
console.log(arr); //[ 4, 2, 2, 1 ]



let names = 'Вася, Петя, Маша';
let arr = names.split(',');
console.log(arr); // [ 'Вася', ' Петя', ' Маша' ]

for(let name of arr) {
    console.log(`this messange for ${name}`);
}
// this messange for Вася
// this messange for  Петя
// this messange for  Маша

let str = "тест";

console.log( str.split('') ); 
//[ 'т', 'е', 'с', 'т' ]



let arr3 = ['Semen', 'Pasha', 'Petr'];
let str = arr3.join(',');
console.log(str); //Semen,Pasha,Petr



let someArr = [1,2,3,5,76,4];
let result = someArr.reduce((accum, current) => {
    return accum + current;
}, 0);
console.log(result); //91


let someArr = [1,[11],[33], '3', 100];
let result = someArr.reduce((accum, current) => {
    return accum + current;
}, 0);
console.log(result); //91


console.log(Array.isArray({})); // false
console.log(Array.isArray([])); //true



function camelize(str) {
    str.split('').map(item=> item.)
}


let names = 'Вася-Петя';
let arr = names.split('-'); // [Вася, Петя]
let map = arr.join('');
console.log(map);



function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['background', 'color']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['background', 'color'] в ['background', 'Color']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['background', 'Color'] в 'backgroundColor'
  }
 console.log( camelize("background-color"));


let f = [2,4,5,6];
 console.log(f.slice(1)); 







function camelize(str) {
    return str.split('-').map((word, i) => i == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}
console.log( camelize("background-color"));
console.log( camelize("list-style-image"));
console.log( camelize("-webkit-transition"));







function camelize(str) {
    return str.split('-').map((word, i) => {
        if(i == 0) {
            return word;
        } else {
            return word[0].toUpperCase() + word.slice(1);
        }
    }).join('');
}
console.log( camelize("background-color")); //backgroundColor
console.log( camelize("list-style-image")); //listStyleImage
console.log( camelize("-webkit-transition")); //WebkitTransition







let a = ['test', 'test']
let b = a.slice(1);
console.log(b);





let aa = [5,3,8,1];
function filterRange(arr, a, b) {
    return arr.filter(item => (item > a && item < b));
};

let bb = filterRange(aa, 1, 6)
console.log(bb);




let aa = [5,3,8,1];
function filterRange(arr, a, b) {
    return arr.filter((item,i) => (a < item[i] < b));
};

console.log(filterRange(aa, 1, 4));



let ar = [5,3,8,1]

function filterr(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value > b || value < a) {
            arr.splice(i,1);
            i--
        }
    }
}
filterr(ar, 1, 4); 
console.log( ar ); // [3, 1]

let ar = [5,3,8,1]

function train(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value > b || value < a) {
            arr.splice(i,1)
            i--
        }
    }
}
train(ar, 1, 4);
console.log(ar);





let b = [2,4,5,2,1,5,7,8,9,0,5,6,7,8]
function read(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value > b || value < a) {
            arr.splice(i,1);
            i--;
        }
    }
}
read(b, 5, 9);
console.log(b);
// [
//     5, 5, 7, 8, 9,
//     5, 6, 7, 8
//   ]

let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => b-a);
console.log(arr); //[ 8, 5, 2, 1, -10 ]



let num = [2, 3, 1, 15, 4, 12];
let s = num.sort((a,b) => a-b);
console.log(s);
//[ 1, 2, 3, 4, 12, 15 ]


let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
function copySorted(massive) {
    return massive.concat().sort();
} 
console.log(sorted); //[ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr); // [ 'HTML', 'JavaScript', 'CSS' ]





let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

console.log(names); 
//[ 'Вася', 'Петя', 'Маша' ]


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map((item, index) => ({
    fullName: `${item.name} ${item.surname}`,
    id: `${+1 + index}`
})
)
console.log(usersMapped)
//[
//     { fullName: 'Вася Пупкин', id: '1' },
//     { fullName: 'Петя Иванов', id: '2' },
//     { fullName: 'Маша Петрова', id: '3' }
//   ]















let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

arr.sort((a,b) => {
    return a.age - b.age;
})
console.log(arr);
// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
let aa = arr.reduce((occum, user) => (occum + user.age), 0) /arr.length;
console.log(aa) //// (25 + 30 + 29) / 3 = 28




let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  console.log(arr.pop({d: 0})); // World (метод работает)
  



















let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function uniq(arr) {
    let result = [];
    for (let i of arr) {
        if(!result.includes(i)) {
            result.push(i)
        } 
    }
    return result

}

console.log( uniq(strings) );


















// Map, Set, WeakMap, WeakSet

//Map

const obj = {
    name: 'Semen',
    age: 25,
    job: 'fullstek'
};


const arr = [
    ['name', 'Semen'],
    ['age', 25],
    ['job', 'fullstek']
]

console.log(Object.entries(obj)); 
// позволяет перевести объект к записи в массиве
// [ [ 'name', 'Semen' ], [ 'age', 25 ], [ 'job', 'fullstek' ] ]

console.log(Object.fromEntries(arr));
// позволяет перевести массив к записи в объект
// { name: 'Semen', age: 25, job: 'fullstek' }


//Мар => структура данных => схожа с обычными объектами

const train = new Map(arr)
console.log(train);
// Map { 'name' => 'Semen', 'age' => 25, 'job' => 'fullstek' }
console.log(train.get('job')); 
//fullstek

// Отичие Map от Object => мы можем обращаться через разные методы к полям.
// Ключами могут являться любые значения, в том числе и объекты.
train.set('newField', 42).set(obj, 'Value of object');
console.log(train);
console.log(train.get(obj)); //'Value of object'
// Map {
//     'name' => 'Semen',
//     'age' => 25,
//     'job' => 'fullstek',
//     'newField' => 42
//   }


// const train = new Map([
//     ['name', 'age']
// ])

// возвращает булевое значение=> если удаление успешно, то true
train.delete('job');
console.log(train.has('job')); // false

console.log(train.size); //4 => количество ключей

//очистить всю карту
// train.clear();
// console.log(train.size);
 //0



//////////////////////////////////////////////

for (let [key, value] of train.entries()) {
    console.log(key, value);
}
//name Semen
// age 25
// newField 42
// { name: 'Semen', age: 25, job: 'fullstek' } Value of object


//чтобы получить только значение
for (let val of train.values()) {
    console.log(val);
}
//Semen
// 25
// 42
// Value of object


// чтобы получить ключи
for (let key of train.keys()) {
    console.log(key);
}
//name
// age
// newField
// { name: 'Semen', age: 25, job: 'fullstek' }


//с помощью forEach
train.forEach((value, key, map) => {
    console.log(value, key);
});
//Semen name
// 25 age
// 42 newField
// Value of object { name: 'Semen', age: 25, job: 'fullstek' }


const array = [...train];
console.log(array); 
//вывели значение карты
//[
    // [ 'name', 'Semen' ],
    // [ 'age', 25 ],
    // [ 'newField', 42 ],
    // [ { name: 'Semen', age: 25, job: 'fullstek' }, 'Value of object' ]
//   ]

//cделаем объект из карты
const array2 = Array.from(train)
const mapObj = Object.fromEntries(train.entries())
console.log(mapObj);
//{
    // name: 'Semen',
    // age: 25,
    // newField: 42,
    // '[object Object]': 'Value of object'
//   }







///пример с Map
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map() 
visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))


function lastVisit(user) {
    return visits.get(user);
}
console.log(lastVisit(users[1]));


///// SET

const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
console.log(set);
//Set { 1, 2, 3, 4, 5, 6 }
// не дублирует значения => значения хранятся в единственном экземпляре.

//метод, позволяющий добавить новое значение
set.add(10).add(20);
console.log(set);

//метод, проверяющий есть ли в set значение 
console.log(set.has(20));//true

//размер текущего set
console.log(set.size); //8


//метод удаления
set.delete(10)

//размер текущего set
console.log(set.size); //7

//очистить весь set
// set.clear() 

//получить значения в разных форматах
console.log(set.values()); 
console.log(set.keys()); //
console.log(set.entries()); //
// [ 1, 1 ],
//   [ 2, 2 ],
//   [ 3, 3 ],
//   [ 4, 4 ],
//   [ 5, 5 ],
//   [ 6, 6 ],
//   [ 20, 20 ]

for(let key of set) {
    console.log(key);
} //ключ === значение


//практика set
function uniqValues(array) {
    return [...new Set(array)]
    // return Array from(new Set(array))
}
console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6, 6]));
//[ 1, 2, 4, 5, 6 ]










//WeakMap.js
// d
// можем избегать различных утечек данных в js
let obj = {name: 'weakmap'}
// const arr = [obj]
// obj = null;
// console.log(arr); // значение осталось (объект остался в памяти)

//
const map = new WeakMap([
    [obj, 'obj data']
])
//get set delete has

console.log(map.has(obj)); //true
console.log(map.get(obj)); //obj data
/////////////////////////////////////////////
const cache = new WeakMap()
function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}
cacheUser(lena);
cacheUser(alex);

lena = null // память очищена

console.log(cache.has(lena)) // true
console.log(cache.has(alex)) // true



///////////////
// WeakSet => 
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visit = new WeakSet()
//
users.splice(1,1);
visit.add(users[0]).add(users[1]);

console.log(visit.has(users[0]));
console.log(visit.has(users[1])); //false







const map = new Map();
const keyObj = {name: 'alex'};
const keyFunc = function() {
    return 13
}
const keyString = 'I am key - string';


map.set(keyObj, 'lastname => petrov');
map.set(keyFunc, 'function');
map.set(keyString, 'string');
console.log(map); 

console.log(map.has(keyString)); 

for(let [key, value] of map.entries()) {
    console.log(key + ' ' + value)
}



let john = { name: "John" };

// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);

console.log (visitsCountMap.get(john)); // 123



let obj = {
    name: "John",
    surname: 'Ladin',
    age: 30
};
  
let map = new Map(Object.entries(obj));
console.log(map)
//Map { 'name' => 'John', 'surname' => 'Ladin', 'age' => 30 }

console.log(Object.fromEntries(map));
//{ name: 'John', surname: 'Ladin', age: 30 }



let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
console.log(map)
console.log(Object.fromEntries(map));


let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
for (let value of set) console.log(value);
//{ name: 'John' }
// { name: 'Pete' }
// { name: 'Mary' }








var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true



for (let item of mySet) console.log(typeof(item));
// 1
// "some text"



let arr = ['Ilia', 'Kantor']
let [onelet, twolet] = arr;

console.log(typeof(onelet)) //string
console.log(onelet); // Ilia
console.log(twolet); // Kantor

let [firstName, surname] = "Ilya Kantor".split(' ');

console.log(firstName); //Ilya
console.log(surname); //Kantor


let user = {};
[user.name, user.surname] = 'Semen Ladin'.split(' ')
console.log(user.name);
console.log(typeof(user.name));






let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200


let user = {
    name: "John",
    years: 30
};
let {name, years:age, isAdmin ="false"} = user
console.log(name);
console.log(age);
console.log(isAdmin);




let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


function topSalary(salaries) {
    let name;
    for(const [name, salary] of Object.entries(salaries)) {
       
    }
    return name
}

topSalary();








let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title: t, width: w, height: h} = options;


console.log(t);  // Menu
console.log(w);  // 100
console.log(h); // 200