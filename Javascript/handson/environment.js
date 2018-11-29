// lexical environment

function one() {
// env 1
    function two() {
        // env 2
        function three(){
            // env 3
        }
    }
}



function createCounter(){
    let count = 0;
    return {
        increment(){
            count++;
            return count();
        },
        decrement(){
            count--;
            return count();
        }

}
}
