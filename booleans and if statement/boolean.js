//prompt is used to ask data from user
// let name=prompt("what is your name?")
// console.log(name);

console.log(3<5);//returns true
console.log(3>5);//returns false
console.log(typeof true);

console.log(5 == '5.00');//returns true as it change the string to int
console.log(5==='5');//returns fale as it doesnt chnage the type

//using of if statement
if(false){
       console.log('hello');
}
else{
    console.log('else');
}

if(15>= 16) {
    console.log("you can vote");
}
else if ( 15>=14){
    console.log("almost there");
}
else{
    console.log('you cannot vote');
}

//and operator
console.log(true && true);

//or operator
console.log(true || false);

//not operator
console.log(!true);

//we call 0 as a falsy values
//falsy values contains false,0,''.NaN.undefined,null
if(0){
    console.log('truthy');
}

//ternary operator
true?'truthy':'falsy';