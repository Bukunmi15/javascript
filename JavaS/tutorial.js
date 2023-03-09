 console.log('Hello');

//  alert('Hello this is David')   this is how to use pop up in javasript 


// VARIABLE
var b = 'Chivita';
console.log(b);

var someNumbers =  57;
console.log(someNumbers);



// MANIPULATING DOC WITH JAVASCRIPT 
// IT'S JUST A FANCY WAY OF CHANGING HMTL WITH JAVASCRIPT

// var age = prompt('whats your age');

// document.getElementById('someText').innerHTML = age;


// Numbers in Javacript 

var num1 = 10

// INCREMENT BY 1 
num1++;

// num1+=2;  //it also the same things as the top one. 
// console.log(num1);


// DECREMENT BY 1
num1--;
// console.log(num1);



// MULTIPLY * , DIVIDED / , REMINDER % 

// console.log(num1 * 5);
// console.log(num1 / 5);
// console.log(num1 % 6);


// INCREMENT AND DECREMENT BT ANY NUMBER YOU WANT 

num1 += 10;
console.log(num1);


/* FUNCTION 
1.Create a Function
2.Call the Function
*/


// CREATE
function fun(){
    console.log('this is a function');
}

//CALL
fun();


/* LET'S CREATE A FUNCTION THAT TAKE IN A NAME AND SAYS HELLO FOLLOWED BY YOUR NAME 

FOR EXAMPLE
NAME = 'David'
RETURN = 'Hello David'
*/

function greetings (yourName){
    var result =('Hello'+ ' '+ yourName)    //string concatenation
    console.log(result);
}

// var name = prompt('What is your name')
// greetings(name)



// HOW DO ARGUMENTS WORKS IN FUNCTION 
// How to add two number together using functions

function sumNumbers(number1 , number2) {
    var result = (number1 + number2)
    console.log(result);
}

// sumNumbers('David' , ' Peter')
sumNumbers(20 , 20) 


// WHILE LOOP

// var number = 0 ;
// while (number < 50) {
//     number += 1
//     console.log(number);
// }


// FOR LOOP


for(let num = 0; num <= 100 ; num++){
    console.log(num);
}


// DATA TYPES 
var yourAge = 20  // this a number

var myName = 'David'  // this a strings

let names = {firstName: 'David', lastName: 'Olajide'}   // this is an object 

let truth = false  /// this a boolen

let groceries = ['Banana', 'Mango', 'Pineapple', 'Pawwpaw']  // this is an array

let randon;  // this is Undefined

let nothing = null  // value null



// STRINGS IN JAVASCRIPT (COMMON METHOD) 

let fruit = 'Banana' ;
let moreFruit = 'Pineapple/watermelon '