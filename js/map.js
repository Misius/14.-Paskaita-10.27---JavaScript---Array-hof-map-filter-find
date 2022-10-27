'use strict';
console.log('map.js');



// .map skirtas pakeisti struktura, grazina nauja masyva tokio pat ilgio su tiek par nariu masyva

const nums = [1,2,3];
// const nums0 = [{id: 1},{id: 2},{id: 3}];

const rez = nums.map((sk,i,arr) => {
    console.log(i,sk);
    return sk;
})

console.log(rez);
 
const numsObj = nums.map((sk) => {
   const newObjForArr = {id: sk};
   return newObjForArr;
})
console.log('numsObj ===', numsObj);


const nums0 = [
    '<li>1</li>',
    '<li>2</li>',
    '<li>3</li>'
];



const numsLiArrFormMap = nums.map((sk) => {
    const liHtmlString = `<li>${sk}</li>`;
    return liHtmlString;
});
console.log('numsLiArrFormMap ===', numsLiArrFormMap);


const pakelta2 = nums.map((sk) => {
    return sk **2;
});
console.log('pakelta2 ===', pakelta2);