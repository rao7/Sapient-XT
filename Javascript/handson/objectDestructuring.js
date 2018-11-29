'use strict';

function getEmployee (employe){
    console.log(`employee id is ${employe.id}`);
    console.log(`employee name is ${employe.name}`);
    console.log(`employee profile is ${employe.profile}`);
} //getEmployee(employe);

var employe = {
    id: '1',
    name:'rtodh dutyd',
    profile: 'IT'
}


// object destructuring with returning object

// const getStocks = ()=>{
//     return {
//         id:1,
//         value:345345,
//         symbol:"NYT"
//     };
// }

const getStocks = ()=> ({
  // without return
        id:1,
        value:345345,
        symbol:"NYT"

});

console.log(getStocks());

const getStocks2 = (id = 0,value = 0,symbol = 'rt')=> ({
    // without return and dynamic value
          id,
          value,
          symbol
  
  });
  console.log(getStocks2(1,128,'AUI'));
  // nested object destructuring
  const getCustomers = ({id,address}) => {
        console.log(id, address.city);
  }

  const customer = {
      id:1,
      address:{
          city:"delhi"
      }
  }

  getCustomers(customer);
