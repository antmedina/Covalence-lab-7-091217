//set an array for new objects to populate//
var objArray = [];
// create object class //
var Dice = function (value) {
    this.value = this.roll();
    this.div = document.createElement("div");
    this.div.innerText = this.value;
    this.div.className = "dice";
//append created dice elements to container
    document.getElementById('container').appendChild(this.div);
//event to "roll" the value of each dice
    this.div.addEventListener("click", function () {
        this.value = this.roll();
        this.div.innerText = this.value;
    }.bind(this));
//remove a dice from array   
    // this.div.addEventListener("dblclick", function () {
    //     this.div.remove();
    //     var id = objArray.indexOf(this);
    // }.bind(this));
}

//object class function to randomize dice roll//
Dice.prototype.roll = function () {
    return Math.floor((Math.random() * 6) + 1);
};
//this generates a new dice and pushes it to the obj array//
document.getElementById('genDie').addEventListener('click', function () {
    var d = new Dice();
    objArray.push(d);
});
//created rollDice function
document.getElementById("rollDice").addEventListener("click", function () {
//runs the length of the array
    for (var i = 0; i < objArray.length; i++) {
//create new value
        objArray[i].value = objArray[i].roll();
//append new value
        objArray[i].div.innerText = objArray[i].value;
    }
});
//create sumDice function
document.getElementById("sumDice").addEventListener("click", function () {
 //set base total of 0 and create variable
    var total = 0;
 //set function to run the length of the array
    for (var i = 0; i < objArray.length; i++) {
//adds total + the extent of the array's values
        total += objArray[i].value;
    }
//make an window pop up on click
    alert("The sum of all dice add up to " + total);
});
//extra pracite with multiplication
document.getElementById("multiplyDice").addEventListener("click", function () {
//set base total of 1 because it's multiplication
    var total = 1;
//set function to run the length of the array
    for (var i = 0; i < objArray.length; i++) {
//multiplies total + the extent of the array's values
        total *= objArray[i].value;
    }
//make an window pop up on click
    alert("The sum of all dice add up to " + total);
});



