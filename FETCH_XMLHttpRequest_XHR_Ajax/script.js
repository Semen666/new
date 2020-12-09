// const requestURL = 'https://jsonplaceholder.typicode.com/users';

const { default: Axios } = require("axios");

// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestURL); //открыли запрос
// xhr.onload = () => {
//     if(xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(typeof(xhr.response)); //string
//         console.log(JSON.parse(xhr.response));
//     }

// };
// xhr.onerror = () => {
//     console.log(xhr.response);
// };
// xhr.send();//отправили запрос

Axios.get('https://jsonplaceholder.typicode.com/posts/1')
    // .then(responce => console.log('responce', responce))
    .then(responce => console.log('responceeee', responce.data)).then(data => console.log('1' + data.id));

