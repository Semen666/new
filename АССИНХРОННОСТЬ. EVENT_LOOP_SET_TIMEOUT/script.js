function after2sec() {
    console.log('передаем функцию в setTimeout');
}
setTimeout(after2sec, 3000);


// window.setTimeout(function dd() {
//     console.log('222');
// }, 2000);


console.log('start');
console.log('start2');





function time() {
    setTimeout(() => {
        console.log('порядковый номер');
    }, 2000);
}
time();


function eld() {
    console.log('пара новых кросс');
}
setTimeout(eld, 2000);

