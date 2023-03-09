// This is how to declare an array 

let name = ['Olajide', 'David', 'Agboola', 'Sunday', 'Bukunmi'];
console.log(name);
console.log('His name is ' +  name [4]);
console.log('His third name is ' + name [1]);


let footBallClub = ['Barcelona', 'Chelsea', 'Real Madrid' , ' Manchester United', 'Ajax']
console.log(footBallClub);
console.log(name [4] + ' football club is ' + footBallClub [1]);
console.log('My favourite video game club is ' + footBallClub[0]);

let info = {
    myName:  'david' ,
    myAge: 20 ,
    height: 7.5 ,
    brothersName: 'Olamide',
    surName: 'Oyeneye',
} ;
console.log(info);
console.log('The owner of this platform is ' + info.surName +' ' + info.myName + ' is ' + info.myAge + ' year old and is brothers name is ' + info.brothersName);


 

let girls = ['Tosin', 'serah', 'Biola' , 'Mercy', 'Faith' , 'Pam']
girls[3] = 'Anu'
console.log(girls);


// this how to declare object inside array


let family = [{
    husband: 'Olusegun',
    Age: 52,
    occupation: 'Politician',
},
{
  wife: 'Fatimoh'  ,
  Age: 50,
  occupation: 'Experience Trader'
}
]
console.log(family[0]);
console.log(family[1]);

console.log('The head of the family name is  ' + family[0].husband + ' and the wife name is ' + family[1].wife + ' and they both earn from ' + family[1].occupation);

// This is how access Array inside object 

let people ={
    firstName: 'Olamide',
    lastName: 'Kelvin',
    chilren: ['Felix', 'John', 'Lanre'],
    clubs: ['Machester United', 'Madrid'],
    wifes: ['Bolanle', 'Lateefa']
}
console.log(people);
console.log('The king name is '+ people.firstName + ' ' + people.lastName + ' and hes favourite child is ' + people.chilren[1] + ' , the mother of hes favourite child is ' + people.wifes[0]);