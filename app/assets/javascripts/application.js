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
//= require angular

function EvaluatePassNoPass($scope, total_of_dice)
{
	if ($scope.game_status == "Come Out Roll") {
    if (total_of_dice ==  2 || total_of_dice == 3 || total_of_dice == 12 ) {
			$scope.dealer_call = "Craps Line Away "
      $scope.the_call_is = total_of_dice
      $scope.line_bet = 0
    } 
    else if (total_of_dice == 7 || total_of_dice == 11) {
			$scope.dealer_call = "Front Line Winner"
      $scope.the_call_is = total_of_dice
      $scope.bank_roll_actual += $scope.line_bet
    }
    else {
      $scope.dealer_call = "We have a point "
      $scope.game_status = "Point is "
      $scope.point_is = total_of_dice
      $scope.the_call_is = total_of_dice
    }
  }
	else if ($scope.game_status == "Point is ") {
    if (($scope.point_is == 6 || $scope.point_is == 8) && $scope.point_is == total_of_dice ) {
			$scope.dealer_call = "Frontline Winner"
			$scope.game_status = "Come Out Roll"
      $scope.point_is = ""
      $scope.the_call_is = total_of_dice
      $scope.bank_roll_actual += $scope.line_bet
      $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.2)
      $scope.odds_behind_the_line = 0
    }
    else if (($scope.point_is == 5 || $scope.point_is == 9) && $scope.point_is == total_of_dice ) {
			$scope.dealer_call = "Frontline Winner"
			$scope.game_status = "Come Out Roll"
      $scope.point_is = ""
      $scope.the_call_is = total_of_dice
      $scope.bank_roll_actual += $scope.line_bet
      $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.5)
      $scope.odds_behind_the_line = 0
    }
    else if (($scope.point_is == 4 || $scope.point_is == 10) && $scope.point_is == total_of_dice ) {
			$scope.dealer_call = "Frontline Winner"
			$scope.game_status = "Come Out Roll"
      $scope.point_is = ""
      $scope.the_call_is = total_of_dice
      $scope.bank_roll_actual += $scope.line_bet
      $scope.bank_roll_actual += ($scope.odds_behind_the_line * 3)
      $scope.odds_behind_the_line = 0
    }
    else if (total_of_dice == 7) {
			$scope.dealer_call = "Seven Out"
			$scope.game_status = "Come Out Roll"
      $scope.point_is = ""
      $scope.the_call_is = total_of_dice
      $scope.line_bet = 0
      $scope.odds_behind_the_line = 0
    }
    else if (total_of_dice == 6) {
      $scope.bank_roll_actual += (($scope.place_bet_on_the_6 / 6) * 7)
      $scope.the_call_is = total_of_dice
    }
    else if (total_of_dice == 8) {
      $scope.bank_roll_actual += (($scope.place_bet_on_the_8 / 6) * 7)
      $scope.the_call_is = total_of_dice
    }
    else if (total_of_dice == 5) {
      $scope.bank_roll_actual += ($scope.place_bet_on_the_9 * 1.8)
      $scope.the_call_is = total_of_dice
    }
    else if (total_of_dice == 9) {
      $scope.bank_roll_actual += ($scope.place_bet_on_the_9 * 1.8)
      $scope.the_call_is = total_of_dice
    }
    else if (total_of_dice == 2) {
      $scope.the_call_is = total_of_dice
    }
    else if (total_of_dice == 3) {
      $scope.the_call_is = total_of_dice
    }
    else if (total_of_dice == 11) {
      $scope.the_call_is = total_of_dice
    }
    else if (total_of_dice == 12) {
      $scope.the_call_is = total_of_dice
    }
	}
}

function RollDice($scope) {
  $scope.game_status = "Come Out Roll"
  $scope.bank_roll_actual = 100
  $scope.line_bet = 0
  $scope.place_bet_on_the_4 = 0
  $scope.place_bet_on_the_5 = 0
  $scope.place_bet_on_the_6 = 0
  $scope.place_bet_on_the_8 = 0
  $scope.place_bet_on_the_9 = 0
  $scope.place_bet_on_the_10 = 0
  $scope.odds_behind_the_line = 0
  $scope.roll = function() {
    var current_roll_dice_2= new Array(1,2,3,4,5,6);
    var random_2 = current_roll_dice_2[Math.floor(Math.random() * current_roll_dice_2.length)];
    $scope.die_one = random_2;
    var current_roll_dice_1= new Array(1,2,3,4,5,6);
    var random_1 = current_roll_dice_1[Math.floor(Math.random() * current_roll_dice_1.length)];
    $scope.die_two = random_1;
    var total_of_dice = random_1 + random_2;
    EvaluatePassNoPass($scope, total_of_dice);
  };
  $scope.$watch('line_bet', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('place_bet_on_the_4', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('place_bet_on_the_5', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('place_bet_on_the_6', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('place_bet_on_the_8', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('place_bet_on_the_9', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('place_bet_on_the_10', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
}















