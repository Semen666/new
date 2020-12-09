const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve();
        }, ms);
    });
};

// delay(1000).then(() => console.log('4 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos';


// function fetchTodos() {
//     console.log('start fetch');
//     return delay(3000).then(() => {
//         return fetch(url);
//     }).then(responce => responce.json());
// }

// fetchTodos()
//     .then(data => {
//         console.log('data', data);
//     })
//     .catch(error => console.log(error));

////////////////////////////////
// ASYNC AWAIT
// async function fetchAsyncTodos() {
//     console.log('start fetch');
//     try {
//         await delay(2000);
//         const responce = await fetch(url);
//         const data = responce.json();
//         console.log('data', data);
//     } catch(error) {
//         console.error(error);
//     } finally {
//         console.log('finally');
//     }
// }

// fetchAsyncTodos();





// const delayy = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             return resolve();
//         }, ms);
//     });
// };
const urll = 'https://jsonplaceholder.typicode.com/todos';
async function todo() {
    // await delayy(1000);
    const responce = await fetch(urll);
    const json = await responce.json();
    console.log(json);
}
todo();




let num = 1 + 2;
console.log(`1 + ${num}`);

let quest = prompt('Сколько тебе лет?', 'напиши число');
alert(`тебе ${quest} лет`);

let aa = confirm('Нажми');
alert(aa);

const name = prompt('напиши своё имя');
alert(name);


const a = '3';
const b = '2';
const res = a/b;
console.log(typeof(String(res)));
console.log(res);

const a = 16 **(1/2);
console.log(a);


const a = (6 + '2' ); // 3, оба операнда приводятся к числам
console.log(typeof(a));


let a = 3;
a *= 3+5;
console.log(a); 


let counter = 0;

console.log(counter++);
console.log(counter++);
 // 0

let counter = 0;

console.log(++counter); // 0
console.log(++counter); // 0

let a = 'b';
let b = 'B';
console.log(a>b);


let age = +prompt('сколько вам лет?', '')
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);


let ques = prompt('офиц название js?', '');
if(ques == 'ECMAScript') {
    alert('verno');
} else {
    alert('не знаете? ECMAScript ');
}

let num = +prompt('Введите число', '');
if (num > 0) {
    alert(1);
} else if (num < -1) {
    alert(-1);
} else {
    alert('значение равно нулю');
}


age = 9;
if(age > 14 && age >= 90 ) {
    console.log('true');
} else {
    console.error('error');
}

if(age >= 14 && age >= 90) {

}



if (!(age > 14 && age < 90));

console.log(-1 && -2);


let start = prompt('Кто там?');
if(start == 'admin') {
    let password = prompt('введите пароль');
    if(password == 'admin') {
        alert('Hello');
    } else if (password == null || '') {
        alert('otmena');
    } else {
        alert('password is no right');
    }
} else if(start == null) {
    alert('otmena');
} else {
    alert('I dont know u');
}


for (let i = 0; i < 3; i++) { // используем существующую переменную
  console.log(i); // 0, 1, 2
}

console.log(i);


for(let p = 0; p < 10; p++) {
    if (p % 2 == 0) continue;

    console.log(p);
}


outer:
    for(let i = 0; i<3; i ++) {
        for(let j = 0; j < 3; j++) {
            let input = +prompt(`введите координатf[ ${i} ${j}`, '');
            if(!input) {
                break outer;
            }
        }
    }
    alert('good boy');




let n = +prompt('ВВеди число больше 100', '');
if (n > 100) {
    alert('ee');
} else if {
    prompt('ВВеди число больше 100', '');
}



do {
    let n = +prompt('ВВеди число больше 100', '');
}
   while (n < 100);
    // if(n > 100) {
    //     alert('good');
    // } else if( n == null) {
    //     break;
    // }
// }






































let sum;

do {
    sum = +prompt('number', '');
} while(sum <= 100 && sum);



let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}









let k = 10;

out:
    for(let i = 2; i < k; i++) {
        for(let j = 1; j < i; j ++) {
            if(i % j == 0) continue out;
        }
        alert(i);
    }


    // let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }