// constructio patters


function Employee(){}

let emp = new Employee();

console.log(Employee.prototype);
console.log(emp.prototype);
console.log(Object.getPrototypeOf(emp));


// If function is for object template then name should be noun
/*data Initialization
-> hardcoded
-> after object creation
 */ 

function Employee1(){
    this.id = 1;
    this.name = 'rahul';
    this.salary = '800';
    this.calculateSalary = function(){ // method
        return 1000 * this.salary;
    }

}

let employ  = new Employee1();

console.log(employ);

// how to log / get object properties

// object access properties . []

employ.name="Deep";

console.log(employ.id , employ.name , employ.salary , employ.calculateSalary());


function Employee2(id=1 , name='default',salary=0){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.calculateSalary = function(){ // method
        return 1000 * this.salary;
    }

}


let employ2  = new Employee2(12 , 'rocky' , 1000 , 20);

console.log( employ2);



/////////////////////////////////////////////////

//literal pattern

let customer = {
    id:1,
    name: 'ram'
}

console.dir(customer);



//--------------   ES 6 CLASS to create objects

class Account{

    constructor(){
        this.acno = 1;
        this.name = 'gujju';


    }

    withdraw(){
        return 'withdraw';
    }

    deposit(){
        return 'deposit';
    }
}

let account = new Account;
console.dir(account , account.withdraw() , account.deposit());


/// why javascript uses dictionary model to create objects ?

// object augmentation : instance level



// Empty

function Employeee (){

}

const emo = new Employee();

emo.id = 1;
emo.name = 'rao'
console.log(emo);

// augmentation iterration

for(var key in emo){
    console.log(key);
}


// augmenting exsisting object

const acc = new Object();

acc.id="12";
acc.name = "ravi";
acc.size = "XXl";
console.log(acc);

// object creations using function tasks

function Employee(){


}

const customera = function (){

}

console.dir(customera.prototype);

const Accountc = ()=>{

}

console.dir(Object.getPrototypeOf(Accountc));