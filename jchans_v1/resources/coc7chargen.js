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
var str = str_roll.roll_dices_3d * 5;
document.getElementById("str").innerHTML = str;

var con_roll = new charPropertyGen();
document.getElementById("con_roll").innerHTML = con_roll.roll_results_3d;
var con = con_roll.roll_dices_3d * 5;
document.getElementById("con").innerHTML = con;

var siz_roll = new charPropertyGen();
document.getElementById("siz_roll").innerHTML = siz_roll.roll_results_2d;
var siz = (siz_roll.roll_dices_2d + 6) * 5;
document.getElementById("siz").innerHTML = siz;

var dex_roll = new charPropertyGen();
document.getElementById("dex_roll").innerHTML = dex_roll.roll_results_3d;
var dex = dex_roll.roll_dices_3d * 5;
document.getElementById("dex").innerHTML = dex;

var app_roll = new charPropertyGen();
document.getElementById("app_roll").innerHTML = app_roll.roll_results_3d;
var app = app_roll.roll_dices_3d * 5;
document.getElementById("app").innerHTML = app;

var inte_roll = new charPropertyGen();
document.getElementById("inte_roll").innerHTML = inte_roll.roll_results_2d;
var inte = (inte_roll.roll_dices_2d + 6) * 5;
document.getElementById("inte").innerHTML = inte;

var pow_roll = new charPropertyGen();
document.getElementById("pow_roll").innerHTML = pow_roll.roll_results_3d;
var pow = pow_roll.roll_dices_3d * 5;
document.getElementById("pow").innerHTML = pow;

var edu_roll = new charPropertyGen();
document.getElementById("edu_roll").innerHTML = edu_roll.roll_results_2d;
var edu = (edu_roll.roll_dices_2d + 6) * 5;
document.getElementById("edu").innerHTML = edu;

var luck_roll = new charPropertyGen();
document.getElementById("luck_roll").innerHTML = luck_roll.roll_results_3d;
var luck = luck_roll.roll_dices_3d * 5;
document.getElementById("luck").innerHTML = luck;
