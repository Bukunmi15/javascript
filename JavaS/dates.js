const date = new Date ()
console.log(date);

console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getDate());
console.log(date.getMonth()+8);


const students =[
    {firstName: 'David' , lastName: 'Bukunmi' , age: 20 },
    {firstName: 'Fred' , lastName: 'Anuoluwapo' , age: 21 },
    {firstName: 'Susan' , lastName: 'Igene' , age: 18 },
    {firstName: 'Cynthia' , lastName: 'Morgan' , age: 19 },
];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

console.log(students[0].firstName , students[3].lastName, students[1].age);
console.log(students[2].firstName , students[1].lastName, students[2].age);
console.log(students[1].firstName , students[0].lastName, students[0].age);