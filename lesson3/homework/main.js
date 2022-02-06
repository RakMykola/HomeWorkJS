//1.  --створити масив з:
//    - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const arrNum = [10, 20, 50, 85, 35];
const arrStr = ['yes','no','best','help','home',];
const arrFullType = [[5, 10, 15, 20, 25],['file','class','work','window','run'],[true,false]];
console.log(arrNum,arrStr,arrFullType);

//2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного
// індексу. Вивести в консоль
const arrWork = [ ];
arrWork[0]= 20;
arrWork[1]= 'lesson';
arrWork[2]= true;
arrWork[3]= '150';
console.log(arrWork);





//3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
   document.write(`<div>довільний текст</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
   document.write(`<div>${i}  довільний текст</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i<20) {
   document.write(`<h1> довільний текст</h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j<20) {
   document.write(`<h1>${j} довільний текст</h1>`);
   j++;
}


//4. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumers = [10, 20, 50, 60, 95, 105, 91, 27, 250, 88];
for (let number of arrNumers) {
   console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrStrings = ['fd','df','wrtw','twt','tytr','twgdsg','fsg','fgs','qwe','ferwe',];
for (let arrString of arrStrings) {
   console.log(arrString);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrRundom = ['fd','df',25,'twt',16,'twgdsg',27,'fgs',true,'ferwe',undefined];
for (let arrRundomElement of arrRundom) {
   console.log(arrRundomElement)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrBool = ['fd',true,25,'twt',16,'twgdsg',27,'fgs',true,'ferwe',false];
for (let arrBoolElement of arrBool) {
   if (typeof arrBoolElement === "boolean") {
      console.log(arrBoolElement);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrNumSol = ['fd',true,25,'twt',16,'twgdsg',27,'fgs',true,'ferwe',false];
for (let arrNumSolElement of arrNumSol) {
   if (typeof arrNumSolElement === "number") {
      console.log(arrNumSolElement);
   }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrStrSol = ['fd',true,25,'twt',16,'twgdsg',27,'fgs',true,'ferwe',false];
for (let arrStrSolElement of arrStrSol) {
   if (typeof arrStrSolElement === "string") {
      console.log(arrStrSolElement);
   }
}


//5. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrElements =[];
arrElements[0]= 'Day';
arrElements[1]= 25;
arrElements[2]= false;
arrElements[3]= 'new';
arrElements[4]= true;
arrElements[5]= 725;
arrElements[6]= 1015;
arrElements[7]= 'many';
arrElements[8]= true;
arrElements[9]= 'tools';
for (let arrElement of arrElements) {
   console.log(arrElement);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k <= 10; k++) {
   console.log('Крок'+' ' +k )
   document.write(`<div>крок  ${k}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let n = 0; n <= 100; n++) {
   console.log('Крок'+' ' +n )
   document.write(`<div>крок  ${n}</div>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let m = 0; m <= 100; m+=2) {
   console.log('Крок'+' ' +m )
   document.write(`<div>крок  ${m}</div>`);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let l = 0; l <= 100; l++) {
   if (l%2===0){
   console.log('Парні'+' ' +l )
   document.write(`<div>парні  ${l}</div>`);
   }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let r = 0; r <= 100; r++) {
   if (r%2){
      console.log('НЕ парні'+' ' +r )
      document.write(`<div>Не парні  ${r}</div>`);
   }
}