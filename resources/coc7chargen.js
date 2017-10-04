function oneD6() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x
}

function charPropertyGen() {
  this.roll_one = oneD6();
  this.roll_two = oneD6();
  this.roll_three = oneD6();
  this.roll_dices_2d = this.roll_one + this.roll_two;
  this.roll_dices_3d = this.roll_one + this.roll_two + this.roll_three;
  this.roll_results_2d = this.roll_one + ", " + this.roll_two;
  this.roll_results_3d = this.roll_one + ", " + this.roll_two + ", " + this.roll_three;
}


var str_roll = new charPropertyGen();
document.getElementById("str_roll").innerHTML = str_roll.roll_results_3d;
document.getElementById("str").innerHTML = str_roll.roll_dices_3d * 5;

var con_roll = new charPropertyGen();
document.getElementById("con_roll").innerHTML = con_roll.roll_results_3d;
document.getElementById("con").innerHTML = con_roll.roll_dices_3d * 5;

var siz_roll = new charPropertyGen();
document.getElementById("siz_roll").innerHTML = siz_roll.roll_results_2d;
document.getElementById("siz").innerHTML = (siz_roll.roll_dices_2d + 6) * 5;

var dex_roll = new charPropertyGen();
document.getElementById("dex_roll").innerHTML = dex_roll.roll_results_3d;
document.getElementById("dex").innerHTML = dex_roll.roll_dices_3d * 5;

var app_roll = new charPropertyGen();
document.getElementById("app_roll").innerHTML = app_roll.roll_results_3d;
document.getElementById("app").innerHTML = app_roll.roll_dices_3d * 5;

var int_roll = new charPropertyGen();
document.getElementById("int_roll").innerHTML = int_roll.roll_results_2d;
document.getElementById("int").innerHTML = (int_roll.roll_dices_2d + 6) * 5;

var pow_roll = new charPropertyGen();
document.getElementById("pow_roll").innerHTML = pow_roll.roll_results_3d;
document.getElementById("pow").innerHTML = pow_roll.roll_dices_3d * 5;

var edu_roll = new charPropertyGen();
document.getElementById("edu_roll").innerHTML = edu_roll.roll_results_2d;
document.getElementById("edu").innerHTML = (edu_roll.roll_dices_2d + 6) * 5;
