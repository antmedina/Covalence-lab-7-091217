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
}

//object class function to randomize dice roll//
    Dice.prototype.roll = function () {
        return Math.floor((Math.random() * 6) + 1);
    };
//this generates a new dice and pushes it to the obj array//
    document.getElementById('genDie').addEventListener('click',function(){
            var d = new Dice();
            objArray.push(d);
    })    

// }.bind(this);


// function addDice() {
//     var newDice = document.createElement("div");
//     newDice.className = "dice"
//     newDice.innerText = this.value;
//     document.body.appendChild(newDice);
//     container.appendChild(newDice);
// }


