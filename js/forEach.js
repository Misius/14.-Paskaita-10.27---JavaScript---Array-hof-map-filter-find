'use strict';
console.log('forEach.js');



// forEach skirtas labiau side effect'am
const nums = [1,2,3];

nums.forEach((sk,i,arr) => {
    console.log(i,sk);
})

nums.forEach((sk) => console.log('sk ===',sk));

// suskaiciuoti suma
let suma = 0;
nums.forEach((sk) => {
    suma += sk;
});
console.log(suma);