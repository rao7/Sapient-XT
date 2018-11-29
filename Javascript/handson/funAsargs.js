'use strict';
/*
# Function can be passed as parameter , 
can be storedd in a variable, that variable points function , can be executed later
*/
function greeter (greet){
    greet('rahul');

}

const hi = (name) => { console.log('hi', name)}

greeter(hi);

greeter(function(name){ console.log('hello',name);})

// Nested functions
// login must be cancelled once the user data is available

const getUser = cb => cb({
    user : 'rahulrao'
})

const login = (resolve , reject) =>{
    //console.log('login')

    let mockUser = {
        name:'rahul',
        password:'admin'
    }

    // biz logic

if(mockUser){
    resolve(mockUser);
}else {
    reject({
        err: 'something went wrong'
    });
}

}

const successhandler = user => { login(user)}

const failurehandler = err => { console.log(err)}

getUser(handler);