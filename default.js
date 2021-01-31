// function add(num1 , num2) {
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     return num1 + num2 ;
// }

// const total= add(45);
// console.log(total);



//es6 update given below


function add(num1 , num2=0) {
    return num1 + num2 ;
}

const total= add(45);
console.log(total);


