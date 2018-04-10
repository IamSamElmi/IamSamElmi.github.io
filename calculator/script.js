//selecting the id of the JS.
var box = document.getElementById("box");



// This function is running when clicking the buttons.
function toScreen(x) {
    box.value += x;

}

// this funciton will the function that give you the answer after you calculate.

function answer() {
    x = box.value;
    x = eval(x);
    box.value = x;
}

// this function is clearing the input whenever you want to.. you click the c button and everything will be clear. 

function toScreen(x){
  box.value+=x;
  if(x==='C'){
    box.value='';
  }
  
}


