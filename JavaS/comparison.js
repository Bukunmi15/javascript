let  p = 'Oluwabukunmi';
let q = 20;

// AND EXAMPLE

console.log(p == 'Oluwabukunmi' && q == 20);
console.log(p == 'Oluwabukunmi' && q == 21);
console.log(p == 'Oluwabukunmis' && q == 20);
console.log(p == 'Oluwabukunmis' && q == 201);


if (p == 'Oluwabukunmi' && q == 20) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}

if (p == 'Oluwabukunm' && q == 20) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}

if (p == 'Oluwabukunmi' && q == 19) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}

if (p == 'Oluwabukunm2' && q == 30) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}


// OR EXAMPLE

console.log(p == 'Oluwabukunmi' || q == 20)
console.log(p == 'Oluwabukunm' || q == 20)
console.log(p == 'Oluwabukunmi' || q == 19)
console.log(p == 'Oluwabukunm' || q == 19)

if (p == 'Oluwabukunmi' || q == 20) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}
if (p == 'Oluwabukunm3' || q == 20) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}
if (p == 'Oluwabukunmi' || q == 200) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}
if (p == 'Oluwabukunm' || q == 250) {
    console.log('Youre right');
} else {
    console.log('Sorry Youre wrong');
}





// This is another method on how to find the biggest numbers /

x = 40
y = 30

if( x > y){
    console.log( x ,'Biggest' );
}else{
    console.log( y , 'Lowest');
}

Biggest = Math.max(x,y)
console.log(Biggest);

lowest = Math.min(x,y)
console.log(lowest);


a = 5;
b = 3;
c = 4; 
d = -2 
e = 8;

solution = Math.max(a,b,c,d,e)
console.log(solution);

// using if and else statement to find the biggest value

if( a > b && a > c && a > d && a > e){
    console.log(a);
}else if( b > a && b > c && b > d && b > e ){
    console.log(b);
}else if( c > a && c > b && c > d && c > e ){
    console.log(c);
}else if( d > a && d > b && d > c && d > e ){
    console.log(d);
}else if( e > a && e > b && e > c && e > d ){
    console.log(e);
}


let score = 50

if (score > 70){
    console.log('its a pass mark')
}else{
    console.log('its a below mark');
    let newScore = score + 50
    console.log('Your initial score was ' + score + ' '+ 'its now upgraded to '+ newScore );
}

h = 20
k = 20
a = 20*20
console.log(a);
if( a > 500){
    console.log('True');
}else{
    console.log('False');
}



// This how to find a even and odd numbers 
let evenNumbers = []
let oddNumbers = []

let i;

for(i = 0 ; i <=10 ; i++){
    if (i % 2 == 0){
        console.log(i, 'Even Numbers');
    } else if(i % 2 !== 0){
        console.log(i, 'Odd Numbers');
    }
}









