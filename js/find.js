'use strict';
console.log('find.js');

// ,find skirtas surasti 1 reiksme pagal salyga

const nums = [1,-5,2,10,-4,3];

// surasti sk 2

const sk2 =nums.find ((sk) => sk === 2);

if (sk2 !== undefined) {
    console.log('sk2 ===', sk2);
}

// console.log('sk2 ===', sk2);


const arrayOfObjects = [

    {
  
      title: 'HTML',
  
      author: 'James B.',
  
      year: 2022,
  
    },
  
    {
  
      title: 'CSS',
  
      author: 'Mike T.',
  
      year: 2012,
  
    },
  
    {
  
      title: 'JS',
  
      author: 'Jane D.',
  
      year: 2020,
  
    },
  
  ];
  let foundPost = null;

  foundPost = arrayOfObjects.find((postObj) => {
    if (postObj.title == 'CSS') {
        return true;
    }
  });
  console.log('  foundPost ===',   foundPost);
  

//   surasto arrayOfObjects posta kurio autoriaus reiksme yra zodis 'ja'
foundPost = null;

const isThereJa = arrayOfObjects.find((pObj) => pObj.author.includes('Ja'));
console.log('isThereJa ===', isThereJa);


const isThereJaFilter = arrayOfObjects.filter((pObj) => pObj.author.includes('Jam'));
console.log('isThereJaFilter ===', isThereJaFilter);