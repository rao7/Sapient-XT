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

            console.log('teaching ends');
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
sessionStart();