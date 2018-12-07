/*const  {
    name,
    age,
    calculateSalary,
    isActive,
    address,
    skills
} = require('./mylib');

console.log(calculate(10,30));
console.log(name,age,calculateSalary(),isActive);
*/


const {
    add
} = require('./add');
exports.calculate = function (a,b){  return add(a,b);}