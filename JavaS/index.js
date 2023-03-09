
let value = 2
let powerValue = value ** 5;

console.log(powerValue);


let newValue = 4
let newValue2 = 10

newValue += value
newValue2 += value
console.log(newValue);
console.log(newValue2)

let answer = 232 == 132;
console.log(answer);


let evenNumbers = []
let oddNumbers = []
let  i;

for( i = 0 ; i < 20 ; i++){
    if(i % 2 == 0){
        evenNumbers.push(i)
    }else if (i % 2 !== 0){
        oddNumbers.push(i)
    }
}

console.log(evenNumbers);
console.log(oddNumbers);