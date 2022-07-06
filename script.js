// var systemGuess = Math.floor(Math.random()*100) // 0 to 99
var systemGuess = Math.floor(Math.random()*100) + 1 
var guess = 0

function guessNumber(){
    
    var number = document.getElementById('in').value;
    if(number === '' || number > 100 || number < 1){
        document.getElementById('out').innerText = 'Invalid Input' 
    }
    else{
        guess++
        var number = parseInt(document.getElementById('in').value);
        if(number === systemGuess){
            document.getElementById('out').innerHTML = 'Yay! You have guessed it right. You took&nbsp;' + guess + '&nbsp;guess';
            document.getElementById('button-grp').innerHTML = "<button onclick='window.location.reload(true)'>Play Again</button>";
        }
        else if(number > systemGuess){
            document.getElementById('out').innerText = 'Hint: Guess a smaller number' 
        }
        else{
            document.getElementById('out').innerText = 'Hint: Guess a greater number' 
        }
    }
}