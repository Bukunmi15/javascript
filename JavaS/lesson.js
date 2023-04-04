//  Challenge 1: Your Age in Days 

function ageinDays() {
    var birthYear = prompt('What year were you born... Good friend?');
    var ageinDayss = (2023 - birthYear) * 365 ;
    var h1 = document.createElement ('h1');
    var textAnswer =  document.createTextNode('You are ' + ageinDayss + ' days old');
    h1.setAttribute('Id', 'age');   // this is creating of html element in javascript file.    // id and its 
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset () {
    document.getElementById('age').remove();    // reset the id function called in the first function h1 setAttribute
}


// Challenge 2: Cat genarator 

function generateCat(){
    var image = document.createElement ('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif" ;
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors

function rpsGame (yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:' , botChoice);

    result = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won 
    console.log(result)

    message = finalMessage(result); //{'message': You won!, 'color': 'green'}vc
    console.log(message);
    // rpsFrontEnd(yourChoice.id , botChoice , message)


}

function randToRpsInt (){
    return Math.floor(Math.random() * 3);

}

function numberToChoice(Number) {
    return ['Rock', 'Paper', 'Scissors'][Number]
}

function decideWinner (yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourChoice = rpsDatabase[yourChoice][computerChoice];
    var computerChoice = rpsDatabase[computerChoice][yourChoice];

    return [yourChoice, computerChoice];
}

function finalMessage([yourScore, computerScore]){
    if(yourChoice === 0 ){
        return {'message': 'You lost!', 'color': 'red'};
    }else if (yourChoice === 0.5 ){
        return {'message': 'You tied!', 'color': 'yellow'};
    }else {
        return {'message': 'You won!' , 'color': 'green'};
    }
}
