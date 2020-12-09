function count() {
    let c = 0;
    return function() {
        return c++;
        // console.log(c);
    };
}
const aa = count();
console.log(aa());
console.log(aa());
console.log(aa());

/////////////////////////////////////////////////////////////////////
function abc(num1) {
    return function(num2) {
        return `${num1} * ${num2}`;
    };
}

let c = abc(3);
console.log(c(3));

///////////////////////////////////////////////////////////////////////////
function t1() {
    let a = 0;
    return function() {
        a = a + 1;
        return a;
    };
}

let b = t1();
let cc = t1();

console.log(b);
console.log(b()); //1
console.log(b()); //2

console.log(cc()); //1
console.log(cc());//2

////////////////////////////////////////////////////////////////////
function tt2() {
    let a = 0;
    return function() {
        return a += 1;
        
    };
}

let zam = tt2();
console.log(zam());
console.log(zam());
console.log(zam());
console.log(zam());
///////////////////////////////////////////////////////////////////////////

function first(n) {
    let a = 0;
    return function() {
        return a += 1 + n;
    };
}

let bb = first(3);
console.log(bb()); //4
console.log(bb()); //8
console.log(bb()); //12
console.log(bb);
////////////////////////////////////////////////////////////////////////////

function createCalcFunction(n) {
    return function() {
        return 1000 * n;
    };
}

let calc = createCalcFunction(3);
console.log(calc); //получаем функцию
console.log(calc()); //3000
////////////////////////

function createIncrementor(n) {
    return function(num) {
        return n + num;
    };
}

let addOne = createIncrementor(1); //ниже получаем ответ при вызове функции
// ƒ (num) {
//     return n + num;
// }
console.log(addOne(10));
console.log(addOne(42));

let addTen = createIncrementor(10);
console.log(addTen(5)); //15

/////////////////////////////////////////////////////////////////////////////////

function urlGenerate(domain) {
    return function(url) {
        return `htpps://${url}.${domain}`;
    };
}

let comUrl = urlGenerate('com');
console.log(comUrl('google'));

let ruUrl = urlGenerate('ru');
console.log(ruUrl('yandex'));


function thefirst($) {
    return function($$) {
        console.log(`${$} and ${$$}`);
    };
}
const app = thefirst(1);
app(3);