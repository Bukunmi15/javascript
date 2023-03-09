
let non = 'Oyeneye Oluwabukunmi Olajide'
console.log(non.charAt(18));
console.log(non.length);
console.log(non.concat(' David', '' , 's'))
console.log(non.indexOf('e'));
console.log(non.lastIndexOf('e'));
console.log(non.toUpperCase());
// console.log(non.search('i'));

// javascript mathematics

console.log(Math.PI)
console.log(Math.SQRT1_10);
console.log(Math.min(35 , 355));
console.log(Math.max(2478 ,3747));


let myAge =  8
let yourAge = '8'

// let isEqual = myAge === yourAge 
// console.log(isEqual);


console.log(typeof yourAge);

const person ={
    firstName: 'Oyeneye' ,
    lastName: 'David' ,
    age: 20 ,
    eyecolor: 'white',
    profession: 'Software Engineer' ,
}

console.log(person.firstName + ' ' + person.lastName + ' is ' + person.age + ' years old and hes eye color is ' + person.eyecolor + ' hes also a ' + person.profession);


let color = 'Yellow'
let paint =  'Black'

console.log(color + ' ' +  paint);

if(paint.length > 8){
    console.log('Paint');
}else if (paint.length >= 5){
    console.log(paint.length)
}else{
    console.log('i do not have an info');
}


if (color.length > 4) {
    console.log('color');
} else {
    console.log('false');
}


if (color.length > 10){
    console.log('Yes')
}else if(color.length <=6){
    console.log(color.length);
}else{
    console.log('Yellow');
}

