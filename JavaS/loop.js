let score = [1,2,3,4,5,6,7,8,9,10];

for ( i = 1 ; i < score.length ; i++){
    if( score[i] === 5){
        continue;
    }
    console.log(score[i]);
}


let students = ['David', 'Samuuel' , 'Tolulope', 'ibrahim' , 'anuoluwapo'] ;

for(i = 0; i < students.length  ; i+=2){
    console.log(students[i] , 'take apple');
}


const scores = [30,20,40,60,20,30,90,50,80,20,]
newScore = []
let x

for (x = 0 ; x < scores.length;  x++){
    newScore.push(scores[x] + 20)
}
console.log(scores);
console.log(newScore);


let numbers = [38,39,38,23,28,13,39]
let result = []
let y;

for(y = 0; y < numbers.length; y++){
    result.push(numbers[y] + 10);
}
console.log(numbers);
console.log(result);