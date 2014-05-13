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

//= require the_call_is
//= game_status

function RollDice($scope) {
  $scope.game_status = "Come Out Roll"
  $scope.bank_roll_actual = 100
  $scope.line_bet = 0
  $scope.place_bets_are_off = true
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
  $scope.place_come_bet = 0
  $scope.come_bet_flat_on_4 = 0
  $scope.come_bet_flat_on_5 = 0
  $scope.come_bet_flat_on_6 = 0
  $scope.come_bet_flat_on_8 = 0
  $scope.come_bet_flat_on_9 = 0
  $scope.come_bet_flat_on_10 = 0
  $scope.come_bet_odds_on_4 = 0
  $scope.come_bet_odds_on_5 = 0
  $scope.come_bet_odds_on_6 = 0
  $scope.come_bet_odds_on_8 = 0
  $scope.come_bet_odds_on_9 = 0
  $scope.come_bet_odds_on_10 = 0

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
  };

  $scope.$watch('place_come_bet', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('line_bet', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_odds_on_4', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_odds_on_5', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_odds_on_6', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_odds_on_8', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_odds_on_9', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_odds_on_10', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_flat_on_4', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_flat_on_5', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_flat_on_6', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_flat_on_8', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_flat_on_9', function(newVal, oldVal) {
    the_difference = newVal - oldVal
    $scope.bank_roll_actual -= the_difference
  });
  $scope.$watch('come_bet_flat_on_10', function(newVal, oldVal) {
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

