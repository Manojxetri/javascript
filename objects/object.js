// const product={
//     name:'socks',
//     price:1000
// };//this is an object
// console.log(product);
// console.log(product.name);//displays socks
// console.log(product.price);//displays 1000


// product.name = 'shoes';//changes socks to shoes
// console.log(product.name);

// product.newProperty =true;//creates new value in objects
// console.log(product);

// delete product.newProperty;//delete the values
// console.log(product);

// const product2={
//     tshirtName :'shirt',
//    [' delivery-time']:'1 day',
//    //nested objects
//    rating:{
//           stars:4.5,
//           count:87
//    },
//    //putting function in objects
//    fun:function function1(){
//     console.log('function inside object');
//    }
// };
// console.log(product2);
// console.log(product2.tshirtName);
// console.log(product2['tshirtName']);//same as product2.tshrtName
// // console.log(product2.delivery-time); gives error as js thinks - as minus sign here
// console.log(product2['delivery-time']);//doesnt gives erroe
// console.log(product2.rating);
// console.log(product2.rating.stars);

// product2.fun();

// //function inside object=method

// // console.log(typeof console); is a object
// // console.log(typeof console.log); is a function
// //console and math are built in objects
// //more built in objects:JSON i.e javascript object notation
// //and another one is localstorage
// //json contains "" quotation
// //json doesnt contain function and is understand by every language

// console.log(JSON.stringify(product2));//it only gives string 

// const jsonString=JSON.stringify(product2);
// console.log(JSON.parse(jsonString));//converts json object back to js object

// //to save the value under local storage
// localStorage.setItem();


// console.log('hello'.length);
// console.log('hello'.toUpperCase());


// //objects are references
// const  object1={
//     message: 'hello'
// };
// const object2=object1;
// console.log(object2);//copy by refernce

// object1.message='good job';//changing the value of hello to good job even though its in const
// console.log(object1);

// console.log(object2);//it was changed for object 2 also

// const object3={
// message:'good job'
// };
// console.log(object3 === object1);//returns false as objects are refernces
// console.log(object2===object1);//retuns true as both objects have same refernces

// //shortcuts for objects:
// const object4={
//     message:'good job',
//     price:799
//     };
//    //const message = object4.message;
//    const {message,price}=object4;//taking property out of object and saving in message and price
//    console.log(message);
//    console.log(price);


//    const object5={
//    // message: message//takes value from message variable
//    message,
//   // method: function function2(){
    //console.log('method');
   //}
//    method(){
//     console.log('method')
//    }
//    };
//    console.log(object5);
//    object5.method();

const product={
      name:'basketball',
      price:2095
};
console.log(product);
let increase=product.price+500;
console.log(increase);

product.deliveryTime=3;
console.log(product);

function comparePrice(product1,product2){
    if(product1.price<product2.price){
        return product1;
    }
    else{
        return product2;
    }
}

const product1={
    name:'basketball',
    price:500
};

const product2={
    name:'football',
    price:1000
};
console.log(comparePrice(product1,product2));

console.log('GOOD MORNING'.toLowerCase());
console.log('test'.repeat(2))//repeats test two times