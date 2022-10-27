'use strict';
console.log('filter.js');



// .filter skirtas atrinkti reiksmes pagal salyga
// kai atrinktame masyve yra maziau reiksmiu ne is ko rinkom
// dazniausiai nenaudojamas pakesiti reiksmei

const nums = [1,-5,2,10,-4,3];

// atrinkti teigiamus
const positivesArr = nums.filter((sk) => {
    // if (sk > 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return sk > 0;
    
});
// console.log('positivesArr ===', positivesArr);

const elements = [1, 'true', 'green', false, null, undefined, 'blue', 50];
// atrinkti string ir skaicius

// const atrinktiArr = elements.filter((sk) => {
//     if (sk === Number) {
//         return true;
//     } 
//     if (sk === String) {
//         return true;
//     }

// });

const stringsArr = elements.filter ((el) => typeof el === 'string');
console.log('stringsArr ===', stringsArr);


const notStringNotNumberArr = elements.filter ((el) => typeof el !== 'string' && typeof el !== 'number');
console.log('notStringNotNumberArr ===', notStringNotNumberArr);