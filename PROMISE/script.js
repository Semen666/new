// setTimeout(() => {
//     console.log('preparind data');
//     const backendData = {
//         server: 'avs',
//         post: 2000,
//         status: 'working'
//     };
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('data received', backendData);
//     }, 5000);
// },3000);

//////////////////////////////////////
// console.log('request data');
// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('preparind data');
//         const backendData = {
//             server: 'avs',
//             post: 2000,
//             status: 'working'
//         };
//         resolve(backendData);
//     }, 4000);
// });
// p.then((data) => {
//     const p2 = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             console.log('data received');
//             resolve(data);
//             }, 5000);
//     });
//     p2.then(clientData => {
//         console.log('Data received', clientData);
//     });
// });



const pp = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('preparind data');
        const backendData = {
            server: 'avs',
            post: 2000,
            status: 'working'
        };
        resolve(backendData);
    }, 4000);
});

pp.then(data => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            data.modified = true;
            reject(data);
        }, 2000);
    });
})
    .then(clientData => {
    console.log('Data received', clientData);
    clientData.fromPromise = true;
    return clientData;
})
    .then(data => {
    console.log('Modifiel', data);
})
    .catch(err => console.error('error ', err)) 
    .finally(() => console.log('Это сообщение выведется в любом случае'));



    //////////////////////////////////////////////////

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        },ms);
    });
};

sleep(2000).then(() => console.log('after 2 sec'));
sleep(5000).then(() => console.log('after 5 sec'));



const time = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            semen = {
                name:'ladin'
            };
            resolve(semen);
        },ms);
    });
};
time(3000).then((data) => console.log(data.name = 'altuk'));


const sila = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            const t = {
                name: 'semen'
            };
            resolve(t);
        },ms);
    });
};
// sila(3300).then((data) => console.log(data.name = 'ladin'));


Promise.all([sila(2000), sila(5000)])
    .then(() => {
        console.log('All promises');
    });

Promise.race([sila(2000), sila(5000)])
    .then(() => {
        console.log('Race promises');
    });




const p = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            semen = {
                name:'semen',
                lastname:'ladin'
            };
            resolve(semen);
        }, ms);
          
    });
};

p(3000).then((data) => console.log(data.otch = 'nick'));




const p = ms => {
    return new Promise(resolve=> {
        setTimeout(() => {
            semen = {
                name:'dd',
                lastname:'qwerty'
            };
            resolve(semen);
        }, ms);
    });
};

p(3000).then((data) => console.log(data.name));












const p = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            semen = {
                name: 'semen',
                lastname: 'ladin'
            };
            resolve(semen);
        },ms);
    });
};

p(2000).then((data) => {
    console.log(data);
    return data
})
 .then((newData) => console.log(newData.name));


