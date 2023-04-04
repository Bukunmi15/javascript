console.log('Hello');

//  alert('Hello this is David')   this is how to use pop up in javasript 


// VARIABLE
var b = 'Chivita';
console.log(b);

var someNumbers = 57;
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
function fun() {
    console.log('this is a function');
}

//CALL
fun();


/* LET'S CREATE A FUNCTION THAT TAKE IN A NAME AND SAYS HELLO FOLLOWED BY YOUR NAME 

FOR EXAMPLE
NAME = 'David'
RETURN = 'Hello David'
*/

function greetings(yourName) {
    var result = ('Hello' + ' ' + yourName)    //string concatenation
    console.log(result);
}

// var name = prompt('What is your name')
// greetings(name)



// HOW DO ARGUMENTS WORKS IN FUNCTION 
// How to add two number together using functions

function sumNumbers(number1, number2) {
    var result = (number1 + number2)
    console.log(result);
}

// sumNumbers('David' , ' Peter')
sumNumbers(20, 20)


// WHILE LOOP

// var number = 0 ;
// while (number < 50) {
//     number += 1
//     console.log(number);
// }


// FOR LOOP


for (let num = 0; num <= 100; num++) {
    console.log(num);
}


// DATA TYPES 
var yourAge = 20  // this a number

var myName = 'David'  // this a strings

let names = { firstName: 'David', lastName: 'Olajide' }   // this is an object 

let truth = false  /// this a boolen

let groceries = ['Banana', 'Mango', 'Pineapple', 'Pawwpaw']  // this is an array

let randon;  // this is Undefined

let nothing = null  // value null



// STRINGS IN JAVASCRIPT (COMMON METHOD) 

let fruit = 'Banana,apple,orange,blackberry';
let moreFruit = 'Pineapple\nwatermelon '             //this is new line break
console.log(fruit);
console.log(moreFruit);


console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(0, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));     // index of a string
console.log(fruit[2]);
console.log(fruit.split(','));  // split by a comma
console.log(fruit.split(''));   //  slit by characters 


// ARRAY

let fruits = ['Banana', 'Apple', 'Orange', 'Pineapple'];

fruits = new Array('Banana', 'Apple', 'Orange', 'Pineapple');

console.log(fruits[3]);   /// access value at index 3 
console.log(fruits);
fruits[0] = 'Sugar'
console.log(fruits);


for (index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}


// ARRAY COMMON METHODS
console.log(fruits.toString());    // this will separate with comma 
console.log(fruits.join('='));     // this will separate with specified character 
console.log(fruits.pop(), ' was removed ');   // this will remove the last index from the item 
console.log(fruits.push('Strawberry'));       // this will add to the last index and return the length of items 
console.log(fruits);
fruits[fruits.length] = 'Coconut';          // same method with push 
console.log(fruits);
console.log(fruits.shift(), ' was removed');   /// this will remove the first element of items
console.log(fruits.unshift('Pawpaw'));          /// return a new element to the first index of items 

let vegetables = ['Brocoli', 'Tomato', 'Bitter Leaf']
let allGroceries = fruits.concat(vegetables);  //  combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 8));
console.log(allGroceries.reverse());


let Numbers = [15, 133, 65, 24, 22, 25, 2, 2, 2, 37];
console.log(Numbers.sort(function (a, b) { return a - b }));  // sorted i ascending order 
console.log(Numbers.sort(function (a, b) { return b - a }));  // sorted in decending orders 


let emptyArray = new Array();

for (let num = 0; num <= 10; num++) {
    emptyArray.push(num)
}

console.log(emptyArray);



// OBJECTS IN JAVASCRIPT

let students = {
    first: 'David',
    last: 'Bukunmi',
    age: 20,
    height: 170,

    studentsInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

// console.log(students.first);
// console.log(students.last);
// students.first = 'Agboola'  // Changing of Value
// console.log(students);
students.age++
console.log(students.age);

console.log(students.studentsInfo());    // this will print out the first name and the last name pluus the age  



// CONDITIONAL , CONTROL FLOWS (IF AND ELSE)
// 18 - 35 IS MY TARGET DEMOGRAPHIC 
// && AND 
// || OR

// var age = prompt('what is you age');

// if (age >= 18 && age <= 35) {
//     status = 'Target demo';
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);
// }


// SWITCH STATEMENT 
// DIFFERENTIATE BETWEEN WEEKDAY VS. WEEKEND 
// DAY 0 --> SUNDAY ---> WEEKEND
// DAY 1 --> MONDAY  ---> WEEKDAY
// DAY 2 --> TUESDAY  ---> WEEKDAY
// DAY 3 --> WEDNESDAY   ---> WEEKDAY
// DAY 4 --> THURSADY  ---> WEEKDAY
// DAY 5 --> FRIDAY  ---> WEEKEND
// DAY 6 --> SATURDAY  --> WEEKEND


switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 1:
        text = 'weekday';
        break;
    case 2:
        text = 'weekday';
        break;
    case 3:
        text = 'weekday';
        break;
    case 4:
        text = 'weekday';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
}


console.log(text);
