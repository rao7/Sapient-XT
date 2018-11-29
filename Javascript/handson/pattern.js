// ES 5 syntax

function Address(doorNo , street, city,zipcode,state) {
    this.doorNo = doorNo;
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    this.state = state;
}

function Employee(id = 1,name = 'anme',address = new Address()){
    this.id = id;
    this.name = name;
    this.address = address;
}

let emp = new Employee();
console.log(emp.id , emp.name, emp.address.city);

let address = new Address ('1','10thstreet','LKO','7567','HP');


////////////////////////////////////


class Order {

    constructor(orderid = '000AA', value = 0){
        this.orderid = orderid;
        this.value  = value;

    }
}

class Customer {
    constructor(cid = 1 , name = 'name' , order = new Order()){
        this.cid = cid;
        this.name = name;
        this.order = order;
    }
}

let order = new Order('we45', 3);
console.log(order.orderid , order.value);

let customer1 = new Customer(45 ,'rahul',order);
console.log(customer1.cid , customer1.name , customer1.order.value);


//////// another way

class CustomerComp {
    constructor(){
        console.log('Customer UI is called');
    }

    render(){
        let order  = new Order('Q001', 1000.98);
        let customer1 = new Customer(45 ,'rahul',order);
        console.log(customer1.cid , customer1.name , customer1.order.value);
    }
}

new CustomerComp().render();


//......................................................................

 function Account(){

    this.name = 'rao';
    this.atype = 'saving';
   
 }

 Account.prototype.calculateInterest = function(p= 1000,r = 1 ,t = 1){
        return p*r*t/100;
 }


 const acount = new Account();

 console.log(acount.calculateInterest());


 //.......................................


 // performance : when we lookup property it starts apply lookup algorithm this gives negative impactive on performance.


 // Object.hasOwnproperty

console.log(Account.hasOwnProperty('calculateInterest')); // false
console.log(Account.hasOwnProperty('name')); // true

//------------------- lining two functions

function Person(name = '==>default rao'){
console.log('person called');
this.name = name;
}


function Employer(name){
    Person.call(this , name); // inherinting the parent properties in ES5 
    console.log('employer called');
}

Employer.prototype = Object.create(Person.prototype);

let emp0 = new Employer();
console.log(emp0.name);



let emp1 = new Employer('regal');
console.log(emp1.name);


let emp2 = new Employer('rocky');
console.log(emp2.name);

//--------------es6 way

class Acnt {
    constructor(balance = 0){
        console.log('account');
        this.balance = balance;
    }
}

class SavAcnt extends Account{
    constructor(accNo= 1 , name = 'default' , balance){
        super(balance);
        this.accNo = accNo;
        this.name = name;
        console.log('savings account');
        // anything added outside will be global 
    }

    calculateInterest(){
        return 10.7 * super.calculateInterest();
    }

    debit(){
        return 12;
    }

    
}

const newUser = new SavAcnt(13134, 'Rahul','1200');
console.log(newUser); 
//console.log(newUser.calculateInterest());

newUser.balance = '111111';
SavAcnt.prototype.foo = 'foo';
console.log(newUser.balance , newUser.foo , newUser.calculateInterest());


const FavFood = {
    name: 'rice', 
    toString(){
        return this.FavFood
    }
}

console.log(FavFood.toString());


// can you redefine(override) Object's prototype methods?
// yes but don't do so


//////////////////////////////////////////////////////////////////// static variable simulation

function Utility (){

}

// static api simulation

Utility.add = function(a,b){
    return a + b ;
}

console.log(Utility.add(2,4));

// builtin Math utility

console.log(Math.random())


class MathUtility{
    static add(a,b){
        return a + b;
    }

    static multiply(a,b){
        return a * b;
    }
    static substract(a,b){
        return a - b;
    }
}

console.log(MathUtility.add(4,9));
console.log(MathUtility.substract(4,9));
console.log(MathUtility.multiply(4,9));


//........................................ javascript builtin Objects

// POJO objects or ISOMORPIC objects : Code which is portable on browser or node or js enabled engine.

// Object -> Parent
//Every object is the instance of the object.

class Yu {

}

const yureka = new Yu();
console.log('Check youreka is instance of the Yu'+yureka instanceof Yu);


/*Object apis
Object.create
Object.toString

task ..

Object.assign
Object.freeze
Object.seal
Object.preventExtension


Wrapper Objects

string => Number = > function String(){}
Boolean => Boolean = > function Boolean(){}
string => Number = > function String(){}
string => Number = > function String(){}

Math

Date = > date and time

*/



