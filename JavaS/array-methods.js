let students_names = ['Emmanuel', 'Praize', 'Femi', 'Bukunmi', 'Fatimoh', ]
console.log(students_names);

// 1 toString
// this will seprate the strings with comma

console.log('1', students_names.toString());


// 2 join
// this will separate the strings with any identify separator e.g = + - 
console.log(students_names);
console.log('2', students_names.join('='));

// 3 pop 
// this will remove the last index from the array 

console.log(students_names);
console.log('3', students_names.pop(), 'was removed');

// 4 push 
// this will add a new element to the last index of an array and return the new lenght of the arry

console.log(students_names);
console.log('4', students_names.push('Olawale'));

// 5 shift
// this will authomatically remove the first element of an arry 

console.log(students_names);
console.log('5', students_names.shift(), 'ws removed');


// 6 unshift 
// this will add a new element to the begining of an array 
console.log(students_names);
console.log('6' , students_names.unshift('Olaitan'));
console.log(students_names);


// 7 changing of element 
// array element can be changed using their index numbers 

students_names[2] = 'Seyi'
console.log(students_names);


// new element can be add using .length 
students_names[students_names.length] = 'Feranmi'
console.log(students_names);


// 8. delete() Method
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.


delete students_names[3];
console.log(students_names);

let new_students = ['Feranmi', 'Ade', 'Ayo', 'Ope', 'Ajayi']
let old_students = ['Bayo', 'John', 'Frank', 'Joy', 'Prince']
let all_students = new_students.concat(old_students , students_names)
console.log('9', all_students);


for (let index = 0; index < all_students.length; index++) {
    const element = all_students[index];
    console.log(element);    
}

