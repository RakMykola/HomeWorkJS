// setTimeout(() =>{
//     let counter = 0;
//     console.log('07:00 - Прокинувся');
//     setTimeout(() =>{
//         counter++;
//         console.log('07:10 - Вмивання');
//         setTimeout(() =>{
//             counter++;
//             console.log('07:30 - Сніданок');
//             setTimeout(() =>{
//                 counter++;
//                 console.log('08:00 - Порядок в хаті');
//                 setTimeout(() =>{
//                     counter++;
//                     console.log('08:30 - Порозвозити дітей');
//                     setTimeout(() =>{
//                         counter++;
//                         console.log('09:30 - На роботу');
//                         setTimeout(() =>{
//                             counter++;
//                             console.log('20:00 - Додому');
//                             setTimeout(() =>{
//                                 counter++;
//                                 console.log('21:00 - Навчання IT');
//                                 setTimeout(() =>{
//                                     counter++;
//                                     console.log('02:00 - Спати');
//
//                                 },5500)
//                             },5000)
//                         },4500)
//                     },4000)
//                 },3500)
//             },3000)
//         },2500)
//         },2000)
//     },1500)


function timeoutFn(counter,milis) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('година:', counter);
            counter++;
            resolve(counter);
        },milis)
    });
}
timeoutFn('07:00 - Прокинувся',1000)
    .then(value => {
        return timeoutFn('07:10 - Вмивання',1500);
    })
    .then(value => timeoutFn('07:30 - Сніданок',2000))
    .then(value => timeoutFn('08:00 - Порядок в хаті',2500))
    .then(value => timeoutFn('08:30 - Порозвозити дітей',3000))
    .then(value => timeoutFn('09:30 - На роботу',3500))
    .then(value => timeoutFn('20:00 - Додому',4000))
    .then(value => timeoutFn('21:00 - Навчання IT',4500))
    .then(value => timeoutFn('02:00 - Спати',5000));