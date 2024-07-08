function function1(){
    console.log('hello');
    console.log(2+2);
}
function1();//calling the function

//the word function creates a new function

//function parameters

function calculate( first,tax=0.1){
    console.log(first*tax);
}
calculate(2000,0.1);//passing the value into the function
calculate(5000,0.3);