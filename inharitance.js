class Parent{
    constructor(){
        this.fathersName = 'schwarzenegger';
    }
}
class Child extends Parent{
    constructor(name ){
        super(); //for extends form parent class
        this.name = name ;

    }
    getFullName(){
        return this.name +' '+ this.fathersName ;
    }
}

const baby = new Child('Haradhon');
const baby2 = new Child('Narayon');

console.log(baby.getFullName());
console.log(baby2.getFullName());