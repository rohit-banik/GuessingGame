// var systemGuess = Math.floor(Math.random()*100) // 0 to 99
var systemGuess = Math.floor(Math.random()*100) + 1 
var guess = 0
console.log(systemGuess)

function guessNumber(){
    
    var number = document.getElementById('in').value;
    if(number === '' || number > 100 || number < 1){
        console.log('Invalid Input');
        document.getElementById('out').innerText = 'Invalid Input' 
    }
    else{
        guess++
        var number = parseInt(document.getElementById('in').value);
        if(number === systemGuess){
            console.log('Got the answer correctly' + guess)
            document.getElementById('out').innerHTML = 'Yay! You have guessed it right. You took&nbsp;' + guess + '&nbsp;guess';
            document.getElementById('button-grp').innerHTML = "<button onclick='window.location.reload(true)'>Play Again</button>";
        }
        else if(number > systemGuess){
            console.log('Guess a smaller number')
            document.getElementById('out').innerText = 'Hint: Guess a smaller number' 
        }
        else{
            console.log('Guess a greater number')
            document.getElementById('out').innerText = 'Hint: Guess a greater number' 
        }
    }
}