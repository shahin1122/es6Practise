const primaryNumbers = [12,25,14,25,36,12,441,21,25,123,4];
const secondaryNumbers = [12,25,36,21,552,14,12,144];
// const allNumbers = primaryNumbers.concat(secondaryNumbers);
// console.log(allNumbers);
// const allNumbers2 = [primaryNumbers , 2 , secondaryNumbers ];
// console.log(allNumbers2);

// in mordan javascript ES6

const allNumbers3 = [...primaryNumbers , 2 , ...secondaryNumbers ];
console.log(allNumbers3);

// const buisness = 454 ;
// const minister = 456 ;
// const shochib = 577 ;
// const maximum = Math.max(buisness,minister,shochib);
// console.log(`The maximum number is `+maximum);

const amountHolder = [451,135,254,364];
const max = Math.max(...amountHolder);
console.log(max); 


 

