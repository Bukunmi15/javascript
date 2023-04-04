students = [{
  first_name: "Loria",
  last_name: "Brigginshaw",
  test_score: 28,
  exam_score: 23,
  aggregate: null,
  grade: null
}, {
  first_name: "Catriona",
  last_name: "Braithwaite",
  test_score: 4,
  exam_score: 19,
  aggregate: null,
  grade: null
}, {
  first_name: "Edita",
  last_name: "Skinn",
  test_score: 11,
  exam_score: 42,
  aggregate: null,
  grade: null
}, {
  first_name: "Barnie",
  last_name: "Pimbley",
  test_score: null,
  exam_score: 68,
  aggregate: null,
  grade: null
}, {
  first_name: "Liane",
  last_name: "Ector",
  test_score: 26,
  exam_score: 54,
  aggregate: null,
  grade: null
}, {
  first_name: "Emile",
  last_name: "Izchaki",
  test_score: 5,
  exam_score: 24,
  aggregate: null,
  grade: null
}, {
  first_name: "Adella",
  last_name: "Prior",
  test_score: 3,
  exam_score: 41,
  aggregate: null,
  grade: null
}, {
  first_name: "Luise",
  last_name: "Meany",
  test_score: 13,
  exam_score: 7,
  aggregate: null,
  grade: null
}, {
  first_name: "Nevin",
  last_name: "Hulme",
  test_score: 22,
  exam_score: 32,
  aggregate: null,
  grade: null
}, {
  first_name: "Emogene",
  last_name: "Fassman",
  test_score: 22,
  exam_score: 3,
  aggregate: null,
  grade: null
}]

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  // This is how to get the aggregate
  student.aggregate = student.exam_score + student.test_score

  // To get the grades 
  if (student.aggregate >= 70) {
    student.grade = 'A'
  } else if (student.aggregate < 70 && student.aggregate >= 60) {
    student.grade = 'B'
  } else if (student.aggregate < 60 && student.aggregate >= 50) {
    student.grade = 'C'
  } else if (student.aggregate < 50 && student.aggregate >= 40) {
    student.grade = 'D'
  } else if (student.aggregate < 40 && student.aggregate >= 30) {
    student.grade = 'E'
  } else if (student.aggregate < 30) {
    student.grade = 'F'
  }
}

// console.log(students)

function add_two_numbers(a,b) {
  let sum = a + b;
  console.log(sum);
}

// add_two_numbers(23,23)

function max (a , b){
  // console.log(a===b);
  if(a > b){
    console.log(a, 'is greater than', b);
  }else if(b > a){
    console.log(b, 'is greater than', a);
  }else if(a === b){
    console.log(a, 'and', b,'are equal');
  }
}

max(23,45)



function getGrade(score) {
  
}





function max(a, b, c, d, e) {
  if( a > b && a > c && a > d && a > e){
    console.log(a, 'is greater than the others');
  }else if( b > a && b > c && b > d && b > e ){
    console.log(b, 'is greater than the others');
  }else if( c > a && c > b && c > d && c > e ){
    console.log(c, 'is greater than the others');
  }else if( d > a && d > b && d > c && d > e ){
    console.log(d, 'is greater than the others');
  }else if( e > a && e > b && e > c && e > d ){
    console.log(e, 'is greater than the others');
  }
}

max(23,72,25,23,53)

console.log('#####=====Adding figures together====####');

score = [1,2,3,4,5,356]
sum = 0
for (i = 0; i < score.length; i++) {
  sum += score[i]
}
console.log(sum);


console.log('#####=====Adding figures together====####');


function addup (array) { 
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  
  console.log(total);
};

let total  = 0
let numbers = [2,39,38,274,293,38];
addup (numbers); 



// for Max 

console.log('#######====Checking the biggest figure====########')

let figures = [28,30,389,13,93,83,944,493,39]
max_No = figures[0]

for (i = 0; i <= figures.length; i++) {
  if (figures[i] > max_No){
   var max_No = figures[i]
  }
}
console.log(max_No);