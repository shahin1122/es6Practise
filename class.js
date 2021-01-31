class student{
    constructor(sID , sNAme){
        this.id  =sID ;
        this.name = sNAme;
        this.school = 'Javascript Developer';
    }

}

const student1 = new student(12,'Hasin');
const student2 = new student(14 , 'haider');
const student3 = new student(54 , 'bappi')

console.log(student1.name , student2.school , student3.name);
