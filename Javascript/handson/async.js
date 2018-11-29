// async code

// const getUser = cb  => {
//     setTimeout(()=> cb({
//         name: 'rahul'
//     }) , 1000)
// }

// console.log('start')
// getUser((response)=> console.log(response)); // reponse is callback funtion

// console.log('stop');


// using promise

const getUser1 = cb => {
    const mockUser ={
        name : 'rao'
    };
    return new Promise((resolve , reject)=>{

        (mockUser ? setTimeout(_=> resolve(mockUser)):
        setTimeout(_=> reject({
            err : 'wrong'
        }, 1000))
        )
    })
};

getUser1()
.then(response => console.log(response))
.catch(err => console.log(err));



// the execution

new Promise((resolve , reject) =>{
    throw new Error("oops!");

}).catch((error)=> {
    console.log("the error is handled");
});