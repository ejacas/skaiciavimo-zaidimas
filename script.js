// // Numbers
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")

var playingTo = document.getElementById("playingTo")

// // Buttons
var one = document.getElementById("one")
var two = document.getElementById("two")
var reset = document.getElementById("reset")




one.addEventListener("click", function(){
    num1++;
})

two.addEventListener("click", function(){
    num2.innerText = +1
})

reset.addEventListener("reset", function(){
    num1 = 0
    num2.innerText = "0"
})