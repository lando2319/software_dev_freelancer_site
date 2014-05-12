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
    console.log($scope.game_status)
    console.log($scope.point_is)
    console.log(total_of_dice)
	if ($scope.game_status == "Come Out Roll" && total_of_dice == ( 2 || 3 || 12 )) {
			$scope.dealer_call = "Craps Line Away "
      $scope.the_call_is = total_of_dice
	}
  else if ($scope.game_status == "Come Out Roll" && total_of_dice == ( 7 || 11 )) {
			$scope.dealer_call = "Front Line Winner"
      $scope.the_call_is = total_of_dice
	}
	else if ($scope.game_status == "Come Out Roll" && total_of_dice != (2 || 3 || 7 || 11 || 12)) {
      $scope.dealer_call = "We have a point "
      $scope.game_status = "Point is "
      $scope.point_is = total_of_dice
      $scope.the_call_is = total_of_dice
	}
	else if ($scope.game_status == "Point is " && total_of_dice == $scope.point_is) {
			$scope.dealer_call = "Frontline Winner"
			$scope.game_status = "Come Out Roll"
      $scope.point_is = ""
      $scope.the_call_is = total_of_dice
	}
	else if ($scope.game_status == "Point is " && total_of_dice == 7) {
			$scope.dealer_call = "Seven Out"
			$scope.game_status = "Come Out Roll"
      $scope.point_is = ""
      $scope.the_call_is = total_of_dice
	}
	else {
      $scope.the_call_is = total_of_dice
	}
}

function RollDice($scope) {
  $scope.game_status = "Come Out Roll"
  $scope.roll = function(){
    var current_roll_dice_2= new Array(1,2,3,4,5,6);
    var random_2 = current_roll_dice_2[Math.floor(Math.random() * current_roll_dice_2.length)];
    var current_roll_dice_1= new Array(1,2,3,4,5,6);
    var random_1 = current_roll_dice_1[Math.floor(Math.random() * current_roll_dice_1.length)];
    var total_of_dice = random_1 + random_2;
    EvaluatePassNoPass($scope, total_of_dice);
  };
}

