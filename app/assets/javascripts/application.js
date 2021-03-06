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
//= require bootstrap
//= require_tree .
//= require angular
//= require angular-animate

//= require the_call_is
//= require game_status
//= require odds

var crapsGame = angular.module('crapsGame', ['ngAnimate']);

crapsGame.controller('crapsGameplay', ['$scope', function($scope) {
  $scope.game_calls = [{call_actual: "Need a Line Bet to Shoot", last_roll: true}]
  $scope.dealer_call = "Come Out Roll"
  $scope.die_one = 2
  $scope.die_two = 2
  $scope.increase_decrease = "+"
  $scope.bet_denomination = 5
  // sets game status
  $scope.headline_statement = "You Need a Line Bet"
  $scope.game_status = "Come Out Roll"
  $scope.place_bets_are_off = true
  $scope.odds_on_come_bets_are_off = true

  // Sets each possible point with the default stat.
  $scope.four = "4"
  $scope.five = "5"
  $scope.six = "6"
  $scope.eight = "8"
  $scope.nine = "9"
  $scope.ten = "10"

  // Sets all betting values to 0
  $scope.bank_roll_actual = 100
  $scope.line_bet = 0
  $scope.odds_behind_the_line = 0
  $scope.field_bet = 0

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

  // Dark Side
  $scope.dont_pass_line_bet = 0
  $scope.odds_behind_the_dont_pass_line = 0
  $scope.place_dont_come_bet = 0

  $scope.dont_come_bet_flat_on_4 = 0
  $scope.dont_come_bet_flat_on_5 = 0
  $scope.dont_come_bet_flat_on_6 = 0
  $scope.dont_come_bet_flat_on_8 = 0
  $scope.dont_come_bet_flat_on_9 = 0
  $scope.dont_come_bet_flat_on_10 = 0

  $scope.dont_come_bet_lay_on_4 = 0
  $scope.dont_come_bet_lay_on_5 = 0
  $scope.dont_come_bet_lay_on_6 = 0
  $scope.dont_come_bet_lay_on_8 = 0
  $scope.dont_come_bet_lay_on_9 = 0
  $scope.dont_come_bet_lay_on_10 = 0

  // Prop Bets
  $scope.prop_bet_hard_6 = 0
  $scope.prop_bet_hard_8 = 0
  $scope.prop_bet_hard_4 = 0
  $scope.prop_bet_hard_10 = 0

  $scope.prop_bet_craps = 0
  $scope.prop_bet_red = 0

  $scope.prop_bet_aces = 0
  $scope.prop_bet_ace_deuce = 0
  $scope.prop_bet_twelve = 0

  $scope.prop_bet_yo = 0

  $scope.prop_bet_on_6_1 = 0
  $scope.prop_bet_on_5_2 = 0
  $scope.prop_bet_on_4_3 = 0

  $scope.prop_bet_on_3_1 = 0
  $scope.prop_bet_on_2_2 = 0
  $scope.prop_bet_on_3_2 = 0
  $scope.prop_bet_on_4_1 = 0
  $scope.prop_bet_on_5_1 = 0
  $scope.prop_bet_on_4_2 = 0
  $scope.prop_bet_on_3_3 = 0
  $scope.prop_bet_on_6_2 = 0
  $scope.prop_bet_on_5_3 = 0
  $scope.prop_bet_on_4_4 = 0
  $scope.prop_bet_on_6_3 = 0
  $scope.prop_bet_on_5_4 = 0
  $scope.prop_bet_on_6_4 = 0
  $scope.prop_bet_on_5_5 = 0



  $scope.increase_decrease_button = function() {
    if ($scope.increase_decrease == "+") {
        $scope.increase_decrease = "-"
    } else {
        $scope.increase_decrease = "+"
    }
  }
  $scope.bet_denomination_button = function() {
    console.log($scope.bet_denomination)
    if ($scope.bet_denomination == 1 ) {
        $scope.bet_denomination = 5
    } else if ($scope.bet_denomination == 5 ) {
        $scope.bet_denomination = 25
    } else {
        $scope.bet_denomination = 1
    }
  }
  $scope.place_bet_on_4_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_bet_on_the_4 -= $scope.bet_denomination : $scope.place_bet_on_the_4 += $scope.bet_denomination
  }
  $scope.place_bet_on_5_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_bet_on_the_5 -= $scope.bet_denomination : $scope.place_bet_on_the_5 += $scope.bet_denomination
  }
  $scope.place_bet_on_6_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_bet_on_the_6 -= $scope.bet_denomination : $scope.place_bet_on_the_6 += $scope.bet_denomination
  }
  $scope.place_bet_on_8_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_bet_on_the_8 -= $scope.bet_denomination : $scope.place_bet_on_the_8 += $scope.bet_denomination
  }
  $scope.place_bet_on_9_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_bet_on_the_9 -= $scope.bet_denomination : $scope.place_bet_on_the_9 += $scope.bet_denomination
  }
  $scope.place_bet_on_10_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_bet_on_the_10 -= $scope.bet_denomination : $scope.place_bet_on_the_10 += $scope.bet_denomination
  }

  $scope.place_come_bet_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_come_bet -= $scope.bet_denomination : $scope.place_come_bet += $scope.bet_denomination
  }
  $scope.place_field_bet_button = function() {
    $scope.increase_decrease == "-" ? $scope.field_bet -= $scope.bet_denomination : $scope.field_bet += $scope.bet_denomination
  }
  $scope.place_dont_come_bet_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_dont_come_bet -= $scope.bet_denomination : $scope.place_dont_come_bet += $scope.bet_denomination
  }
  $scope.line_bet_button = function() {
    $scope.increase_decrease == "-" ? $scope.line_bet -= $scope.bet_denomination : $scope.line_bet += $scope.bet_denomination
  }
  $scope.odds_behind_the_line_button = function() {
    $scope.increase_decrease == "-" ? $scope.odds_behind_the_line -= $scope.bet_denomination : $scope.odds_behind_the_line += $scope.bet_denomination
  }
  $scope.dont_pass_line_bet_button = function() {
    $scope.increase_decrease == "-" ? $scope.dont_pass_line_bet -= $scope.bet_denomination : $scope.dont_pass_line_bet += $scope.bet_denomination
  }
  $scope.odds_behind_the_dont_pass_line_button = function() {
    $scope.increase_decrease == "-" ? $scope.odds_behind_the_dont_pass_line -= $scope.bet_denomination : $scope.odds_behind_the_dont_pass_line += $scope.bet_denomination
  }

  $scope.prop_bet_red_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_red -= $scope.bet_denomination : $scope.prop_bet_red += $scope.bet_denomination
  }
  $scope.prop_bet_craps_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_craps -= $scope.bet_denomination : $scope.prop_bet_craps += $scope.bet_denomination
  }
  $scope.prop_bet_hard_6_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_hard_6 -= $scope.bet_denomination : $scope.prop_bet_hard_6 += $scope.bet_denomination
  }
  $scope.prop_bet_hard_8_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_hard_8 -= $scope.bet_denomination : $scope.prop_bet_hard_8 += $scope.bet_denomination
  }
  $scope.prop_bet_hard_4_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_hard_4 -= $scope.bet_denomination : $scope.prop_bet_hard_4 += $scope.bet_denomination
  }
  $scope.prop_bet_hard_10_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_hard_10 -= $scope.bet_denomination : $scope.prop_bet_hard_10 += $scope.bet_denomination
  }
  $scope.prop_bet_aces_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_aces -= $scope.bet_denomination : $scope.prop_bet_aces += $scope.bet_denomination
  }
  $scope.prop_bet_ace_deuce_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_ace_deuce -= $scope.bet_denomination : $scope.prop_bet_ace_deuce += $scope.bet_denomination
  }
  $scope.prop_bet_twelve_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_twelve -= $scope.bet_denomination : $scope.prop_bet_twelve += $scope.bet_denomination
  }
  $scope.prop_bet_yo_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_yo -= $scope.bet_denomination : $scope.prop_bet_yo += $scope.bet_denomination
  }
  $scope.prop_bet_on_6_1_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_6_1 -= $scope.bet_denomination : $scope.prop_bet_on_6_1 += $scope.bet_denomination
  }
  $scope.prop_bet_on_5_2_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_5_2 -= $scope.bet_denomination : $scope.prop_bet_on_5_2 += $scope.bet_denomination
  }
  $scope.prop_bet_on_4_3_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_4_3 -= $scope.bet_denomination : $scope.prop_bet_on_4_3 += $scope.bet_denomination
  }
  $scope.prop_bet_on_3_1_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_3_1 -= $scope.bet_denomination : $scope.prop_bet_on_3_1 += $scope.bet_denomination
  }
  $scope.prop_bet_on_2_2_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_2_2 -= $scope.bet_denomination : $scope.prop_bet_on_2_2 += $scope.bet_denomination
  }
  $scope.prop_bet_on_3_2_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_3_2 -= $scope.bet_denomination : $scope.prop_bet_on_3_2 += $scope.bet_denomination
  }
  $scope.prop_bet_on_4_1_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_4_1 -= $scope.bet_denomination : $scope.prop_bet_on_4_1 += $scope.bet_denomination
  }
  $scope.prop_bet_on_5_1_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_5_1 -= $scope.bet_denomination : $scope.prop_bet_on_5_1 += $scope.bet_denomination
  }
  $scope.prop_bet_on_4_2_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_4_2 -= $scope.bet_denomination : $scope.prop_bet_on_4_2 += $scope.bet_denomination
  }
  $scope.prop_bet_on_3_3_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_3_3 -= $scope.bet_denomination : $scope.prop_bet_on_3_3 += $scope.bet_denomination
  }
  $scope.prop_bet_on_6_2_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_6_2 -= $scope.bet_denomination : $scope.prop_bet_on_6_2 += $scope.bet_denomination
  }
  $scope.prop_bet_on_5_3_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_5_3 -= $scope.bet_denomination : $scope.prop_bet_on_5_3 += $scope.bet_denomination
  }
  $scope.prop_bet_on_4_4_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_4_4 -= $scope.bet_denomination : $scope.prop_bet_on_4_4 += $scope.bet_denomination
  }
  $scope.prop_bet_on_6_3_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_6_3 -= $scope.bet_denomination : $scope.prop_bet_on_6_3 += $scope.bet_denomination
  }
  $scope.prop_bet_on_5_4_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_5_4 -= $scope.bet_denomination : $scope.prop_bet_on_5_4 += $scope.bet_denomination
  }
  $scope.prop_bet_on_6_4_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_6_4 -= $scope.bet_denomination : $scope.prop_bet_on_6_4 += $scope.bet_denomination
  }
  $scope.prop_bet_on_5_5_button = function() {
    $scope.increase_decrease == "-" ? $scope.prop_bet_on_5_5 -= $scope.bet_denomination : $scope.prop_bet_on_5_5 += $scope.bet_denomination
  }

  
  // rolling the dice
  // $scope.roll = Dice.roll()
  $scope.roll = function() {
    NewGameCall($scope, "this is a shortcut")
    $scope.hide_dice = !$scope.hide_dice
    var current_roll_dice_2= new Array(1,2,3,4,5,6);
    var random_2 = current_roll_dice_2[Math.floor(Math.random() * current_roll_dice_2.length)];
    $scope.die_one = random_2;
    var current_roll_dice_1= new Array(1,2,3,4,5,6);
    var random_1 = current_roll_dice_1[Math.floor(Math.random() * current_roll_dice_1.length)];
    $scope.die_two = random_1;
    // random_1 = 5;
    // random_2 = 2;
    var total_of_dice = random_1 + random_2;

    EvaluateTheField($scope, total_of_dice)
    PropBets($scope, random_1, random_2)

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
  var places_to_watch =
    ['line_bet', 'odds_behind_the_line', 'place_come_bet', 'field_bet', 'come_bet_odds_on_4', 'come_bet_odds_on_5',
      'come_bet_odds_on_6', 'come_bet_odds_on_8', 'come_bet_odds_on_9', 'come_bet_odds_on_10', 'come_bet_flat_on_4',
      'come_bet_flat_on_5', 'come_bet_flat_on_6', 'come_bet_flat_on_8', 'come_bet_flat_on_9', 'come_bet_flat_on_10',
      'place_bet_on_the_4', 'place_bet_on_the_5', 'place_bet_on_the_6', 'place_bet_on_the_8', 'place_bet_on_the_9',
      'place_bet_on_the_10', 'prop_bet_aces', 'prop_bet_ace_deuce', 'prop_bet_twelve', 'prop_bet_yo', 'prop_bet_on_6_1',
      'prop_bet_on_5_2', 'prop_bet_on_4_3', 'prop_bet_on_3_1', 'prop_bet_on_2_2', 'prop_bet_on_3_2', 'prop_bet_on_4_1', 'prop_bet_on_5_1',
      'prop_bet_on_4_2', 'prop_bet_on_3_3', 'prop_bet_on_6_2', 'prop_bet_on_5_3', 'prop_bet_on_4_2', 'prop_bet_on_6_3', 'prop_bet_on_5_4',
      'prop_bet_on_6_4', 'prop_bet_on_5_5', 'dont_pass_line_bet', 'odds_behind_the_dont_pass_line', 'place_dont_come_bet', 'dont_come_bet_lay_on_4', 'dont_come_bet_lay_on_5',
      'dont_come_bet_lay_on_6', 'dont_come_bet_lay_on_8', 'dont_come_bet_lay_on_9', 'dont_come_bet_flat_on_10', 'dont_come_bet_flat_on_4',
      'dont_come_bet_flat_on_5', 'dont_come_bet_flat_on_6', 'dont_come_bet_flat_on_8', 'dont_come_bet_flat_on_9', 'dont_come_bet_flat_on_10',
      'prop_bet_hard_4', 'prop_bet_hard_6', 'prop_bet_hard_8', 'prop_bet_hard_10', 'prop_bet_red']


  angular.forEach(places_to_watch, function(value) {
    $scope.$watch(value, function(newVal, oldVal) {
        AdjustBankRoll($scope, newVal, oldVal)
    });
  })

  function AdjustBankRoll($scope, newVal, oldVal) {
      the_difference = newVal - oldVal
      $scope.bank_roll_actual -= the_difference
  }
}]);

crapsGame.directive("diceRollActual", function($animate) {
    return function(scope, element, attrs) {
        scope.$watch(attrs.diceRollActual, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "text-animated-two");
                $animate.removeClass(element, "text-animated-one");
            } else {
                $animate.removeClass(element, "text-animated-two");
                $animate.addClass(element, "text-animated-one");
            }
        })
    }
});

function NewGameCall($scope, new_game_call_actual) {
    $scope.game_calls.push({call_actual: new_game_call_actual, done:false});    
}
