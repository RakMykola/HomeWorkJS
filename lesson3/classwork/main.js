//1.  зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
let arrTen = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i<arrTen.length) {
    console.log(arrTen[i]);
    i++;
}

// 2. перебрати його циклом for
for (let number of arrTen) {
    console.log(number);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j<arrTen.length) {

    if (j%2 !== 0){
    console.log(arrTen[j]);
    }
    j++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < arrTen.length; k++) {
    if (k%2 !== 0){console.log(arrTen[k]);
}
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
m = 0;
while (m<arrTen.length) {
    if (arrTen[m]%2 === 0){
        console.log(arrTen[m]);
    }
    m++;
}

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let n = 0; n < arrTen.length; n++){
    if (arrTen[n]%2 === 0){
        console.log(arrTen[n]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let w = 0; w < arrTen.length; w++) {
    let arrTenElement = arrTen[w];
    if (arrTenElement%3===0){
        arrTenElement = 'okten';
    }
    console.log(arrTenElement);
}


// 8. вивести масив в зворотньому порядку.
for (let r = arrTen.length - 1; r >= 0; r--) {
    // const user = arrTen[r];
    console.log(arrTen[r]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let b = arrTen.length - 1;
while (b>=0) {
    console.log(arrTen[b]);
    b--;
}

let p = arrTen.length - 1;
while (p>=0) {

    if (p%2 !== 0){
        console.log(arrTen[p]);
    }
    p--;
}

for (let f = arrTen.length - 1; f >=0; f--) {
    if (f%2 !== 0){console.log(arrTen[f]);
    }
}

q = arrTen.length - 1;
while (q>=0) {
    if (arrTen[q]%2 === 0){
        console.log(arrTen[q]);
    }
    q--;
}

for (let w = arrTen.length - 1; w >=0; w--){
    if (arrTen[w]%2 === 0){
        console.log(arrTen[w]);
    }
}

for (let s = arrTen.length - 1; s >=0; s--) {
    const arrTenElement = arrTen[s];
    if (arrTenElement%3===0){
        console.log(arrTen[s]+' '+'okten');
    }
}