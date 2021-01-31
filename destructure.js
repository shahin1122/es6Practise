const persion = {name : 'jack william' , age : 14 , job : 'facebook' , address : 'kochukhet' , phone:'01758224633' , friends : ['tom hanks' , 'tom crouse' , 'Tom yearn'] };

// const jobVaccency = persion.job; 

// console.log(jobVaccency);

// in es6

// we can call most possible property form an object or array element as much as we can

const {phone , friends , salary} = persion ;

console.log(phone , friends , salary);



const Jfriends = ['salman khan' , 'shahrukh khan' , 'Teesmar khnn' , 'Irrfan khan' , 'Saif Ali Khan'];

const[first , ...restFriends] = Jfriends;
console.log(first ,...restFriends);


const complexObj = {
    name : 'Shahin Shah',
    info:{
        address : '38/8 , Road 4 , Future Nilima , Shayamoli' ,
        leader : 'GK Shamim'
    }

    
}

const {leader} = complexObj.info;
console.log(leader);