var names = ['sam', 'john', 'tobi', 'john', 'kelvin', 'felix'];
let identification = 'Oyeneye Oluwabukunmi Olajide'
console.log(names.length);
console.log(names.concat('remi', 'dami'))
console.log(identification.charAt(10));

for (var n of names) {
    console.log(n);
}


names.forEach(function (n, index) {
    console.log(index + ' - ' + n)
});



// Arithemetic operators

// - + / % * 

// const addition = 8 + 2; 
// const substraction = 10 - 2;
// const division = 6 / 2;
// const reminder = 5 % 2;
// const multiplication =  5 * 5;

// console.log(addition);
// console.log(substraction);
// console.log(division);
// console.log(reminder);
// console.log(multiplication);




// Functions

console.log('------Function start from here-------');

function addNumbers(number1, number2) {


    var result = number1 + number2;
    console.log(result);
}

addNumbers(20, 10);

// More Function

console.log('-------More function start from here--------');

// console.log(Object.keys({name: 'Buk', age: 20}));
// console.log(Object.values({name: 'Buk', age: 20}));

//Both Up and Bottom methods are the same thing

var person = { name: 'Buk', age: 20 }
console.log(Object.keys(person));
console.log(Object.values(person));

console.log('James Bond'.toLowerCase());
console.log('James Bond'.toUpperCase());
console.log('James Bond'.endsWith('Bonds'));
console.log('James Bond'.startsWith('James'));



// Loops

console.log('-----Loop start from here-------');

var persons = [
    { name: 'Joao', age: 22 },
    { name: 'kelvin', age: 25 },
]

for (var i = 0; i < persons.length; i++) {

    console.log(persons[i].name);
    console.log(persons[i].age);
    console.log('---------------');
}

// While Loop

console.log('------While loop start from here-------');

// var number = 0 

// while(number < 20) { 
//     console.log(number)
//     number += 1;
// };

var number = 0;

while (number < 5) {
    console.log(number);
    number += 4
}
// if the counterTwo variable was 10 or greater, then do/while loop would execute once, while your normal while loop would not execute the loop.
// Do while loop

console.log('----- DO -While loop start from here-------');

var i = 0;


do {
    i++;
    console.log(i);

} while (i < 5)


// The Break And Continue 

console.log('------The Break and Continue start here--------')
console.log('----continue-------');
var number = 0;

while (number < 5) {
    number++;

    if (number < 5) {
        continue;
    }

    console.log(number);

}

console.log('----Break-------');

var figure = 0;

while (figure < 20) {
    console.log(figure);
    if (figure == 10) {
        break;
    }
    figure++
}


console.log('--------This is if and else statement--------');

// var boolen = false;   //or false   // false will not return the value pass into the log but true does; 

var person = {
    name: 'John',
    age: 20,
};
// YOU CAN HAVE MANY ELSE IF STATEMENT 
if (person.age >= 20) {
    console.log(person.name + ' already an adult');
} else if (person.age == 18) {
    console.log(person.name + ' is an adult');
} else if (person.age == 17) {
    console.log(person.name + ' is about to be an adult');
} else {
    console.log(person.name + ' is not an adult');
};


// SWITCH 

console.log('--------switch statement--------');


const character = {
    name: 'Felix',
    age: 13,
};

switch (character.age) {
    case 17:
        console.log(character.name + ' is about to be an adult');
        break;
    case 18:
        console.log(character.name + ' is an adult');
        break;
    default:
        console.log('we dont know');
        break;
}

// Boolean 
console.log('------Boolean inside a switch statement-------');
switch (true) {
    case (character.age == 17):
        console.log(character.name + ' is about to an adult');
        break;
    case (character.age >= 18):
        console.log(character.name + ' is an adult');
        break;
    default:
        console.log(character.name + ' not an adult');
        break;
}


console.log('-------switch statement to get the date and the current day---------');

switch (new Date().getDay()) {
    case 6:
        console.log('Saturday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 1:
        console.log('Tuesday');
        break;
    default:
        console.log('Sunday');
};

// Comparison and logical operators

console.log('------Comparison operators------');

// == && > < <= >= === 

console.log(10 == 10);
console.log(10 < 10);
console.log(10 <= 10);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 != 10);
console.log(10 != 11);

console.log('-----logical opearators------');
console.log('---&&---');
console.log(10 == 10 && 20 == 20);
console.log(10 == 10 && 20 != 20);

console.log('---||----');

console.log(10 == 10 || 20 == 30);

console.log(20 == 30 || 10 == 0);

console.log('---!()----');
console.log(!(10 == 10));
console.log(!(10 == 20));

console.log('----Examples of comparison operators----');
console.log(!('hello' == 'hllo'));


console.log('----Using if and else statement for comparison-----');
if (!(10 == 10) || (10 == 10)) {
    console.log('true');
} else {
    console.log('false');
}


// Equality without type coercion and 3 equal sign 

console.log('-----Equality without type coercion and 3 equal sign ----- ');


console.log('----With type coercion----');

console.log(typeof 0 + ' ' + typeof false);
console.log(0 == false);

console.log(typeof '0' + ' ' + typeof false);
console.log('0' == false);

console.log(typeof 1 + ' ' + typeof '1');
console.log(1 == '1');



// let numeric = 5
// let string = 'hello'

// let all = (numeric + string)
// console.log(all);
// console.log(typeof all);

console.log('----without type coercion-----');

console.log(typeof 0 + ' ' + typeof false);
console.log(0 === false);

console.log(typeof '0' + ' ' + typeof false);
console.log('0' === false);

console.log(typeof 1 + ' ' + typeof '1');
console.log(1 === '1');

// != !==  // Its okay to use tripple equal when using comparison


// console.log('---examples--- ');

// let studentScore = 30

// if (studentScore !== 20){
//     console.log('true');
// }else {
//     console.log('false');
// }


// Single vs double quotes and semi column

console.log('------Single and double quotes-----');

// You and your team can decide weather youre using double quote or single quote 
// make sure you add semi quote at the end of the quote 
// ESlint for structuring your project  



// Map | Filter | Reduce 

console.log('----------Map | Filter | Reduce ------------');


var map = [1, 2, 3, 4, 5].map(function (n) {
    return n * 2;
});

console.log('[].map');
console.log(map);

// numbers = [1, 2, 3, 4, 5];
// let newScore = [];
// for (i = 0; i  < numbers.length; i++) {
//     newScore.push(numbers[i] * 5) ;
// }

// console.log(newScore);


console.log('[].filter');

var filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(function (n) {
    return n % 2 == 0
})

console.log(filter);

console.log('[].reduce');

var reduce = [1, 2, 3, 4, 5].reduce(function (accumulator, current) {
    return accumulator + current;
});

console.log(reduce);

// Callbacks 
console.log('-----Callbacks----');

function callbackExamples(name, callback) {
    console.log(callback(name));
}

var callback = function (name) {
    return 'Hello ' + name;
}

callbackExamples('David', callback)

console.log('----------Another calling back examples---------------');

function repeating(name, greating) {
    console.log(greating(name));
}

var greating = function (name) {
    return 'How far ' + name
}

repeating('Bukunmi', greating)

first_name = 'Praise'
last_name = 'Emmanuel'
console.log(`Hey, my name is ${first_name} ${last_name}`);
console.log('My name is ' + first_name + ' ' + last_name);



//-Variable scope and let keyword

console.log('------Variable scope and let keyword------');



for (let i = 0; i < 10; i++) {
    console.log(i);
}

// const keyword
console.log('------const keyword------');

// const name = 'David';
// name = {};
// name = 2;

// const person = {};

person['name'] = 'David';

console.log(person.name);

const array = []
array.push('Maria from array')

console.log(array[0]);



// Template Literals
console.log('-----Template Literals-------');

const name = 'David';
const country = 'Nigeria'
const age = '21'

console.log('name:' + name + 'country:' + country + 'age:' + age);

console.log(`Name: ${name} country: ${country} age: ${age} `);   // You can also passed the colum signs in the console log 





// Array & Spread operators
console.log('------Array spread Operators-------');



const arrayOne = ['Kelvin', 'John', 'Alex'];
const arrayTWo = ['Annie', 'Felix', 'Dolapo'];

const concatArray = [...arrayOne, ...arrayTWo];
// console.log(concatArray);
concatArray.forEach(function (name) {
    console.log(name);
});

console.log('----------Another Examples of concatination--------------');

const nameOne = ['ishaya', 'Bolanle', 'Qudus'];
const nameTwo = ['Tope', 'Olawale', 'Genevie']

const concatBoth = [...nameOne, ...nameTwo];

concatBoth.forEach(function (name) {
    console.log(name);
})

console.log('----------Another Examples of calling back-----------');

function morningGreeting(name, greeting) {
    console.log(greeting(name));
}

var greeting = function (name) {
    return 'Good Morning' + ' ' + name
};

morningGreeting('Bukunmi', greeting)

console.log('-----Okay working fine-----');


console.log('-------Listing the word alphabet-----');

const identifier = 'Davids'

const concatIdentifier = [...identifier]

concatIdentifier.forEach(function (letter) {
    console.log(letter);
})



//// USING LOOP TO FIND THE EVEN AND ODD NUMBERS 
// for (i = 0; i <= 20; i++) {
//     if (i % 2 == 0){
//         console.log(i ,'even numbers');
//     }else if(i % 2 !== 0){
//         console.log(i , 'odd numbers');
//     }
// }




/// USING LOOP FOR ADD 10 TO EACH OF TH NUMBERS GIVEN
// var figures = [1,20,10,5,3,2,10]
// let newFigures = [];

// for(var i = 0; i < figures.length; i++){
//     newFigures.push(figures[i] + 10);
// };

// console.log(figures);
// console.log(newFigures);




/// USING FOREACH LOOP STATEMENT TO ADD 10 TO EACH OF THE NUMBERS 
// var figures = [1,20,10,5,3,2,10]

// var newFigures = [...figures]

// newFigures.forEach(function(numbers){
//     console.log(numbers + 10);
// })


const addNumber = function (n1, n2, n3) {
    return n1 + n2 + n3
}

const numbers = [1, 5, 19];

const addition = addNumber(...numbers)
console.log(addition);


// const givingUpNumbers = function(n1,n2,n3,n4,n5,n6){
//     return n1 + n2 + n3 + n4 + n5 + n6
// }

// const givenNumbers = [10,20,10,5,5,10];

// const whatNumbers = givingUpNumbers(...givenNumbers);
// console.log(whatNumbers);


console.log('----------Object spread operators--------------');

const address = {
    city: 'LA',
    country: 'USA',
    postCode: 'LA44'
};

const hisName = {
    firstName: 'David',
    lastName: 'Olajide'
};

const info = { ...address, ...hisName };

// console.log(JSON.stringify(info, null, ));

console.log(JSON.stringify(info));

// Arrow Function

console.log('---------Arrow Function----------');


const hello = () => {
    const es6 = 'ES6';
    return `Hello ${es6}`;
};

const power = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

const add = (n1, n2) => n1 + n2;

const milesTokm = (miles) => miles * 1.60934;


console.log(hello());
console.log(power);
console.log(add(100, 100));
console.log(milesTokm(100));

//  Lexical and This 

console.log('-------Lexical This------------');

const human = {
    name: 'David',
    cars: ['ferrari', 'Lambo'],
    toString: function () {
        console.log(`${this.name} has ${this.cars}`);
    }
}

human.toString();

const everySoul = {
    name: 'Praise',
    wifes: ['Shubomi', 'Genevie'],
    forEverySoul: function () {
        this.wifes.forEach(wife => {
            console.log(`${this.name} married to ${wife}`);
        })
    }
}

everySoul.forEverySoul();

//  b
// let grade = (number1, number2) => number1 + number2

// let result = grade(10,20)
// console.log(result);

// Enhanced Object Properties 

console.log('--------Enhanced Object Properties ----------');

const priceProName = 'PRICE'

const calculator = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2
        },
        [priceProName.toLocaleLowerCase()]: price
    }
}

const calc = calculator('casio', 19.99)
console.log(calc.name,);
console.log(calc.add(10, 20));
console.log(calc.price);


// Array Descruturing 

console.log('---------- Array Descruturing------------');

const peoples = ['Anna', 'Mariam', 'Jacob', 'Saheed', 'Tolulope']
// const anna = peoples[0];
// const mariam = peoples[1];
// const jacob = peoples[2];

const [anna, mariam, ...restOfNames] = peoples;

console.log(`${anna} ${mariam}`);
console.log(restOfNames);


// const villagers = ['akanji', 'alade', 'kemi', 'ayanfe', 'tolu']

// const [akanji, kemi,  ...restOfvillagers] = villagers;


// console.log(`${akanji}  ${kemi}`);

// console.log(restOfvillagers);


// Object Destructuring 


console.log('-------Object Destructuring-----');

const getUser = () => {
    return {
        hesname: 'John',
        surname: 'Doe',
        gender: 'male',
        resident: {
            country: 'United State',
            city: 'California',
            postCode: 'CA',
            fullAddress: {
                doorNumber: 22,
                street: 'LA st'
            },
        },
        lifetime: 29
    }
};

const user = getUser();

// const hesname = user.hesname;
// const lifetime = user.lifetime;
// const resident = user.resident.country;
// const doorNumber = user.resident.fullAddress.doorNumber


const { hesname: theNamme, lifetime: hesAge, resident: { country: theresident } } = user;
const { resident: { fullAddress: { doorNumber: houseNumber } } } = user;
// You can give a variable name in the curly bracket by addiing a column nad asign the variable name you wish
console.log(theNamme);
console.log(hesAge);
console.log(theresident);
console.log(houseNumber);


//   Function Default Parameters 

const calculatePAy = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}
console.log(calculatePAy(22000, { teamBonus: 10000, employeeBonus: 6000 }));


//  Classes and Nutshell 

// OOP = OBJECT ORIENTED PROGRAMMING 

// CREATING CLASSES 

class Animal {
    constructor(name, age) {
        console.log(`${name} is an animal and was created`);
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    wakeUp() {
        console.log(`${this.name} is waking up`)
    }

    logAge(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}


const bobby = new Animal ('bobby', 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();

console.log('----------------------');

const marshall = new Animal ('marshall', 3);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.sleep();
marshall.wakeUp();
marshall.logAge();





// class asoRock {
//     constructor(name, age) {
//         console.log(`${this.name} is the next president of Nigeria`);
//         this.name = name;
//         this.age = age;
//     }

//     sleep () {
//         console.log(`${this.name} is sleeping `);
//     }

//     tribe ( ) {
//         console.log(`${this.name} is a Yoruba`);
//     }
// }

// const Tinubu = new asoRock ('Asiwaju Bola Ahmed Tinubu', 75)

// Tinubu.sleep();
// Tinubu.tribe();

console.log('---------------------');


class Dog extends Animal {
    constructor (name, age, breed) {
        super(name,age)
        this.breed  = breed  
    }

    logBreed() {
        console.log(`${this.name} is a  ${this.breed}`);
    }
    logAgeFromDog(){
        super.logAge();
    }
}


class Cat extends Animal {
    constructor (name, age ) {
        super(name,age)
        this.breed  = breed  
    }

    logAgeFromCat(){
        super.logAge();
    }
}

const mike = new Dog ('Mike', 4 ,'Bulldog')
mike.logBreed();
mike.logAgeFromDog();

console.log('----------------------');

const Josh = new Dog ('Josh', 2)
Josh.logAgeFromCat();
Josh.eat();
Josh.sleep();
Josh.wakeUp();
Josh.logAge();