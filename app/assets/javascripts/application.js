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


function FrontLineWinner($scope, total_of_dice)
{
			$scope.dealer_call = "Front Line Winner"
      $scope.the_call_is = total_of_dice
      $scope.bank_roll_actual += $scope.line_bet
      $scope.point_is = ""
      $scope.game_status = "Come Out Roll"
      $scope.bets_are_off = true 
}

function LineAway($scope, total_of_dice) {
			$scope.dealer_call = "Craps Line Away"
      $scope.the_call_is = total_of_dice
      $scope.line_bet = 0
      $scope.point_is = ""
}

function SetsThePoint($scope, total_of_dice) {
      $scope.dealer_call = "We have a point "
      $scope.game_status = "Point is "
      $scope.point_is = total_of_dice
      $scope.the_call_is = total_of_dice
      $scope.bets_are_off = false 
      $scope.place_bets_off = ""
      if (total_of_dice == 4) {
        $scope.four = "Point Is Four"
      }
      if (total_of_dice == 5) {
        $scope.five = "Point Is Five"
      }
      if (total_of_dice == 6) {
        $scope.six = "Point Is Six"
      }
      if (total_of_dice == 8) {
        $scope.eight = "Point Is Eight"
      }
      if (total_of_dice == 9) {
        $scope.nine = "Point Is Nine"
      }
      if (total_of_dice == 10) {
        $scope.ten = "Point Is Ten"
      }
}

function ComeAway($scope, total_of_dice) {
      $scope.the_call_is = total_of_dice
}

function PayTheCome($scope, total_of_dice) {
      $scope.the_call_is = total_of_dice
}

function SevenOut($scope, total_of_dice) {
      $scope.the_call_is = total_of_dice
      $scope.line_bet = 0
      $scope.bets_are_off == false ? $scope.place_bet_on_the_4 = 0 : $scope.place_bets_off = "Bets are off, will work once new point is established"
      $scope.bets_are_off == false ? $scope.place_bet_on_the_5 = 0 : $scope.place_bets_off = "Bets are off, will work once new point is established"
      $scope.bets_are_off == false ? $scope.place_bet_on_the_6 = 0 : $scope.place_bets_off = "Bets are off, will work once new point is established"
      $scope.bets_are_off == false ? $scope.place_bet_on_the_8 = 0 : $scope.place_bets_off = "Bets are off, will work once new point is established"
      $scope.bets_are_off == false ? $scope.place_bet_on_the_9 = 0 : $scope.place_bets_off = "Bets are off, will work once new point is established"
      $scope.bets_are_off == false ? $scope.place_bet_on_the_10 = 0 : $scope.place_bets_off = "Bets are off, will work once new point is established"
      $scopt.four = "Four"
      $scopt.five = "Five"
      $scopt.six = "Six"
      $scopt.eight = "Eight"
      $scopt.nine = "Nine"
      $scopt.ten = "Ten"
      $scope.odds_behind_the_line = 0
      $scope.point_is = ""
      $scope.game_status = "Come Out Roll"
      $scope.dealer_call = "Seven Out Line Away"
}

function TheCallIs2($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        LineAway($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        ComeAway($scope, total_of_dice)
    }
}

function TheCallIs3($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        LineAway($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        ComeAway($scope, total_of_dice)
    }
}

function TheCallIs4($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 3)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.four = "Four"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        $scope.bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.8) : $scope.place_bets_off = "Bets are off"
    }
}

function TheCallIs5($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.5)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.five = "Five"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.4) : $scope.place_bets_off = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs6($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.2)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.six = "Six"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.bets_are_off == false ? $scope.bank_roll_actual += (($scope.place_bet_on_the_8 / 6  ) * 7 ) : $scope.place_bets_off = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs7($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        FrontLineWinner($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        SevenOut($scope, total_of_dice)
    }
}

function TheCallIs8($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.2)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.eight = "Eight"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.bets_are_off == false ? $scope.bank_roll_actual += (($scope.place_bet_on_the_8 / 6  ) * 7 ) : $scope.place_bets_off = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs9($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.5)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.nine = "Nine"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.4) : $scope.place_bets_off = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs10($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 3)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.ten = "Ten"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.8) : $scope.place_bets_off = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs11($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        FrontLineWinner($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        PayTheCome($scope, total_of_dice)
    }
}

function TheCallIs12($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        LineAway($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        ComeAway($scope, total_of_dice)
    }
}



function RollDice($scope) {
  $scope.game_status = "Come Out Roll"
  $scope.bank_roll_actual = 100
  $scope.line_bet = 0
  $scope.bets_are_off = true
  $scope.four = "Four"
  $scope.five = "Five"
  $scope.six = "Six"
  $scope.eight = "Eigth"
  $scope.nine = "Nine"
  $scope.ten = "Ten"
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
    if (total_of_dice == 2) {
      TheCallIs2($scope, total_of_dice)
    }
    else if (total_of_dice == 3) {
      TheCallIs3($scope, total_of_dice)
    }
    else if (total_of_dice == 4) {
      TheCallIs4($scope, total_of_dice)
    }
    else if (total_of_dice == 5) {
      TheCallIs5($scope, total_of_dice)
    }
    else if (total_of_dice == 6) {
      TheCallIs6($scope, total_of_dice)
    }
    else if (total_of_dice == 7) {
      TheCallIs7($scope, total_of_dice)
    }
    else if (total_of_dice == 8) {
      TheCallIs8($scope, total_of_dice)
    }
    else if (total_of_dice == 9) {
      TheCallIs9($scope, total_of_dice)
    }
    else if (total_of_dice == 10) {
      TheCallIs10($scope, total_of_dice)
    }
    else if (total_of_dice == 11) {
      TheCallIs11($scope, total_of_dice)
    }
    else if (total_of_dice == 12) {
      TheCallIs12($scope, total_of_dice)
    }
    console.log(total_of_dice)
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















