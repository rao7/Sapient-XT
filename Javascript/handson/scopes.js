'use strict';

// scopes

// static or lexical scope

var a =10;
var th = this;
th.arr = 'this a';
function print_a (){ console.log(a);  }

function run_a (){ var a = 100; print_a(); console.log(a)}
run_a(); // output 10

///////// this binding

// actor :1 (callee)

function greet(){  console.log(this)}

// actor:2 default caller window

greet();

// or

window.greet(); // here 



// dynamic

function getCoordinate(name){
    console.log(`this is ${name} X is ${this.x} and Y is ${this.y}`);
}
// no caller or no owner no target
// getCoordinate();


// binding on Map using call()

const map = {
    x :135545.5656,
    y : 56456.56
}

getCoordinate.call(map , 'google map');

window.x = 356;
window.y = 9809;

getCoordinate.call(window , 'browser window');


// binding using apply

function getStocks(...stocks){
    console.log(`${this.name} `);
    console.log(stocks);
}

const stocks = ['test1' , 'xxxsd']
const obj = { name : 'sapient'}

getStocks.apply(obj , stocks);

// apply secound arg is arry , when we pass arrray ,
// the funciton does't take array as input(input arg type not array)



// bind

function increment(){
    return this.count++;
}

const CounterApp = {
    count:0
}
const inc = increment.bind(CounterApp);
console.log('counter',inc());


///////////////////////

const  traiinig = {
    name:'werwer',
    teach: function(){
        console.log('java');
    }
}

traiinig.teach();


name = 'ravi';
const train = {
    name: 'jaja',
   
    teaches:function(){ // global scope
        let self = this;
        console.log('teach', this.name);
        let learn = function(){  // teach scope <-- global scope
            //console.log('learn : ', this.name);

           // console.log('learn : ', train.name);

           // with self convention

           console.log('learn : ', self.name);
        }
       // learn();
    }
}

train.teaches();

// partial binding and curry function task <---
// arrow functions are lexically scope and can't be dynamic binded

function sessionStart(){
    function Trainer(name){
        this.name = name;
        this.doTeach = function(sub){
            console.log(this.name+ " teaching" + sub);
            let that = this;
            let notes = "js-notes";
            let doLearn = function(){
                console.log(this.name + " learning "+ sub + " with " + notes + " from " + that.name);

            }

            console.log('teachhing ends');
            return doLearn;
        }
    }
    function Employee(name){

        this.name = name;
    }
        const tnr = new Trainer ('subramanium');
        const e1 = new Employee('E1');
        const e2 = new Employee('E2');
        const doLearn = tnr.doTeach('.js');
    
        doLearn.call(e1);
        const e2LearnFunction = doLearn.bind(e2);
        e2LearnFunction();
        e2LearnFunction();
    
  
}

// hands on the above program in strict mode without using new keyword and using this only



sessionStart();