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
//= require game_status
//= require odds

function RollDice($scope) {
  // sets game status
  $scope.game_status = "Come Out Roll"
  $scope.place_bets_are_off = true
  $scope.odds_on_come_bets_are_off = true

  // Sets each possible point with the default stat.
  $scope.four = "Four"
  $scope.five = "Five"
  $scope.six = "Six"
  $scope.eight = "Eigth"
  $scope.nine = "Nine"
  $scope.ten = "Ten"

  // Sets all betting values to 0
  $scope.bank_roll_actual = 100
  $scope.line_bet = 0
  $scope.odds_behind_the_line = 0
  $scope.place_bet_on_the_4 = 0
  $scope.place_bet_on_the_5 = 0
  $scope.place_bet_on_the_6 = 0
  $scope.place_bet_on_the_8 = 0
  $scope.place_bet_on_the_9 = 0
  $scope.place_bet_on_the_10 = 0
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

  // rolling the dice
  $scope.roll = function() {
    var current_roll_dice_2= new Array(1,2,3,4,5,6);
    var random_2 = current_roll_dice_2[Math.floor(Math.random() * current_roll_dice_2.length)];
    $scope.die_one = random_2;
    var current_roll_dice_1= new Array(1,2,3,4,5,6);
    var random_1 = current_roll_dice_1[Math.floor(Math.random() * current_roll_dice_1.length)];
    $scope.die_two = random_1;
    var total_of_dice = random_1 + random_2;
    console.log(total_of_dice)
      
    EvaluateTheField($scope, total_of_dice)

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

  // connecting each place to bet with bank_roll_actual
  var places_to_watch = ['line_bet', 'odds_behind_the_line', 'place_come_bet', 'come_bet_odds_on_4', 'come_bet_odds_on_5', 'come_bet_odds_on_6', 'come_bet_odds_on_8', 'come_bet_odds_on_9', 'come_bet_odds_on_10', 'come_bet_flat_on_4', 'come_bet_flat_on_5', 'come_bet_flat_on_6', 'come_bet_flat_on_8', 'come_bet_flat_on_9', 'come_bet_flat_on_10', 'place_bet_on_the_4', 'place_bet_on_the_5', 'place_bet_on_the_6', 'place_bet_on_the_8', 'place_bet_on_the_9', 'place_bet_on_the_10']

  angular.forEach(places_to_watch, function(value) {
    $scope.$watch(value, function(newVal, oldVal) {
        AdjustBankRoll($scope, newVal, oldVal)
    });
  }) 

  function AdjustBankRoll($scope, newVal, oldVal) {
      the_difference = newVal - oldVal
      $scope.bank_roll_actual -= the_difference
  }
}

