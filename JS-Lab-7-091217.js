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
    this.div.addEventListener("dblclick", function (){
        this.div.remove();
        var id = objArray.indexOf(this);
    }.bind(this));
}

//object class function to randomize dice roll//
    Dice.prototype.roll = function () {
        return Math.floor((Math.random() * 6) + 1);
    };
//this generates a new dice and pushes it to the obj array//
    document.getElementById('genDie').addEventListener('click',function(){
            var d = new Dice();
            objArray.push(d);
    });    

document.getElementById("rollDice").addEventListener("click",function (){
    for (var i = 0; i<objArray.length; i++){
    objArray[i].value = objArray[i].roll();
    objArray[i].div.innerText = objArray[i].value;
    }
})


