let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let input = document.querySelector('input');
let newValue = document.querySelector("h1");
let value = "";


function incrementValue(value){
    return value++;
 }

plusBtn.addEventListener('click', function(evt){
newValue.innerHTML = value++;
input.newValue = "";
})
incrementValue();

function decrementValue(value){
    return value--;
}
minusBtn.addEventListener('click', function(evt){
newValue.innerHTML = value--;
input.newValue = "";
})
decrementValue();
