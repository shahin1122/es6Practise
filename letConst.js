const cname = "mr jack" ; 

console.log(cname);


const numbers = [12,14];
numbers[0] = 17 ;
numbers.push(12);
// numbers= [12,222,12,01]; or any string value

console.log(numbers);


// we can change spacific value of an object bt we cant change obj
const hero = {
    name: 'Jason satham' ,
    age : 12
}

console.log(hero);


let patitentName = 'rahim khan' ;
patitentName = 'karim khan';
console.log(patitentName);


let sum = 0;
//we cant call outside of the second braket ;
//let = leak proof
for(var i= 0 ; i< 10 ; i++){
    sum = sum + i ;
}

console.log(i);

