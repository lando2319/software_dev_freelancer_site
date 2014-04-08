// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function EvaluateThePoint(total_of_dice)
{
	if (game_status == total_of_dice) {
			//Front Line Winner
			line_call = "Front Line Winner"
			game_status = "Come Out Roll"
		document.getElementById("game_status").innerHTML=game_status;
		document.getElementById("line_call").innerHTML=line_call;
	}
	else if (total_of_dice == 7) {
			line_call = "Seven Out"
			game_status = "Come Out Roll"
		document.getElementById("line_call").innerHTML=line_call;
		document.getElementById("game_status").innerHTML=game_status;
	}
	else if (game_status == "Come Out Roll") {
		line_call = "Point is"
		game_status = total_of_dice
		document.getElementById("line_call").innerHTML=line_call;
		document.getElementById("game_status").innerHTML=game_status;
	}
	else {
		line_call = "Point is"
		document.getElementById("line_call").innerHTML=line_call;
	}
}

function ComeOutRoll(total_of_dice)
{
	if (total_of_dice == 2 || total_of_dice == 3 || total_of_dice == 12) {
		line_call = "Line Away"
		game_status = "Come Out Roll"
		document.getElementById("game_status").innerHTML=game_status;
		document.getElementById("line_call").innerHTML=line_call;
	} else if (total_of_dice == 11 || total_of_dice == 7) {
		line_call = "Front Line Winner"
		game_status = "Come Out Roll"
		document.getElementById("line_call").innerHTML=line_call;
		document.getElementById("game_status").innerHTML=game_status;
		} else {
		line_call = "Point is"
		game_status = total_of_dice
		document.getElementById("line_call").innerHTML=line_call;
		document.getElementById("game_status").innerHTML=game_status;
	}
}

function RollDice()
{
    var current_roll_dice_2= new Array(1,2,3,4,5,6);
    var random_2 = current_roll_dice_2[Math.floor(Math.random() * current_roll_dice_2.length)];
    var current_roll_dice_1= new Array(1,2,3,4,5,6);
    var random_1 = current_roll_dice_1[Math.floor(Math.random() * current_roll_dice_1.length)];
		var total_of_dice = random_1 + random_2
		var hard_number = ""
		var possible_hard_numbers = [4,6,8,10]
		var total_of_dice = random_1 + random_2
		if (possible_hard_numbers.indexOf(total_of_dice) >= 0) {
				if ( random_1 == random_2) {
						var hard_number = "hard"
				} else {
						var hard_number = "soft"
				}
		}
		console.log("Game Status")
		console.log(game_status)
		console.log("Dice Rolled")
		console.log(total_of_dice)
		if (game_status == "Come Out Roll") {
			ComeOutRoll(total_of_dice)
		}
		else {
			EvaluateThePoint(total_of_dice)
		}
   document.getElementById("message_2").innerHTML=random_2;
   document.getElementById("message_1").innerHTML=random_1;
   document.getElementById("total_of_dice").innerHTML=total_of_dice;
   document.getElementById("hard_number").innerHTML=hard_number;
}
