
function game() {
    var guessNum = prompt('guess a number between 1 and 10');
    var r = Math.floor(Math.random()*10);
    
    if(guessNum == r){
       console.log('correct');
    }
    else if(isNaN(guessNum)) {
        alert('That is not a number');
    }
    
    else if (guessNum < 1) {
        alert('number is too small');
    }
    
    else if (guessNum > 10) {
        alert('number is too big');
    }
    else {
        alert('try again!!!!! number was ' + r);
    }

}