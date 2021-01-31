//arrow function
// function doubleIt(num) {
//     return num * 2 ;
    
// }

// const result = doubleIt(12);
// console.log(result);







// const doubleIt = function myFunc(num) {
//     return num*2 ;
// }
// const result = doubleIt(12);
// console.log(result);


// const doubleIt = num => num*2 ;

// const result = doubleIt(102);
// console.log(result);


// const add = (x , y) => x+y;
// const result= add(5,6);
// console.log(result);


const multiFunction = (x,y) => {

    const sum = x+y ;
    const dif = x-y;
    const result = sum * dif;
    return result ;
}
const result3 = multiFunction(100,200);
console.log(result3);
