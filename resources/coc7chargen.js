function oneD6() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x
}

function charPropertyGen(roll_one, roll_two, roll_three) {
  this.roll_one = oneD6();
  this.roll_two = oneD6();
  this.roll_three = oneD6();
  this.two_dices = this.roll_one + this.roll_two;
  this.three_dices = this.roll_one + this.roll_two + this.roll_three;
  this.roll_results_2d = this.roll_one + ", " + this.roll_two;
  this.roll_results_3d = this.roll_one + ", " + this.roll_two + ", " + this.roll_three;
}


var str_roll = new charPropertyGen();

document.getElementById("str_roll").innerHTML = str_roll.roll_results_3d;
document.getElementById("str").innerHTML = str_roll.three_dices * 5;
