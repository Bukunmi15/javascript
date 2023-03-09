let cars = ['Toyota','Honda','Mercedes','Chevrolet']
console.log(cars);

console.log('This is a boy');

function addTwo(suppliedValue) {
    return suppliedValue + 2
}

console.log(addTwo(8));

function addValuetwoValue(Value1, value2) {
    return Value1 + value2
}

console.log(addValuetwoValue(25 , 25));


function printSalary(name,salary) {
    let bonus = salary * (10 / 100)
    let total = salary + bonus
    console.log(name + ' salary is ' + salary);
    console.log(name + ' bonus is ' + bonus);
    console.log('Total is '  + total);
    return 'Done' 
}

console.log(printSalary('David' , 1000000))


console.log('############# '+'New Line'+' ##########');

function directorSalary(name , salary , bonus) {
    let token = salary * bonus
    let total = salary + token
    console.log(name + ' salary is ' + salary);
    console.log('Bonus is '+ bonus);
    console.log('Total is ' + total);
    return 'Done'
}


console.log(directorSalary('Felix', 1000000, 10))



console.log('############# '+'New Line'+' ##########');

let names = [
    'bukunmi',
    'praise',
    'halleluya',
    'lanre',
    'sunkanmi',
    'anu',
]


function shareItemes(array , items) {
    let i;
    for(i = 0; i < array.length; i++){
        console.log(array[i] + ' take ' + items)
    }
}

console.log(shareItemes(names , 'Watermelon'));