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

//= require game_status
//= require odds
//= require opening_bet_values

var crapsGame = angular.module('crapsGame', ['ngAnimate']);

crapsGame.service('diceService', function() {
  this.change_denomination = function(a) {
    if (a == 1) {
        return 5
    } else if (a == 5) {
        return 25
    } else {
        return 1
    }
  }
 
});

crapsGame.controller('crapsGameplay', ['$scope', 'diceService', function($scope, diceService) {
  OpeningBetValues($scope)
  $scope.player_game_calls = [{call_actual: "You Need A Line Bet", player_rescue: true}]

  $scope.increase_decrease_button = function() { $scope.increase_decrease == "+" ? $scope.increase_decrease = "-" : $scope.increase_decrease = "+" }
  $scope.bet_denomination_button = function() {
    $scope.bet_denomination = diceService.change_denomination($scope.bet_denomination)
  }

  var pointNumVars = ['4','5','6','8','9','10'];

  angular.forEach(pointNumVars, function(value) {
        $scope['place_bet_on_'+value+'_button'] = function() {
            $scope.increase_decrease == "-" ? $scope['place_bet_on_the_'+value] -= $scope.bet_denomination : $scope['place_bet_on_the_'+value] += $scope.bet_denomination
        }
        $scope['come_bet_odds_on_'+value+'_button'] = function() {
            $scope.increase_decrease == "-" ? $scope['come_bet_odds_on_'+value] -= $scope.bet_denomination : $scope['come_bet_odds_on_'+value] += $scope.bet_denomination
        }
  })

  var gameButtonsMisc = ['place_come_bet', 'line_bet', 'odds_behind_the_line', 'dont_pass_line_bet', 'odds_behind_the_dont_pass_line', 'prop_bet_red', 
      'prop_bet_craps', 'prop_bet_hard_6', 'prop_bet_hard_8', 'prop_bet_hard_4', 'prop_bet_hard_10', 'prop_bet_aces', 'prop_bet_ace_deuce', 
      'prop_bet_twelve', 'prop_bet_yo','prop_bet_on_6_1', 'prop_bet_on_5_2', 'prop_bet_on_4_3', 'prop_bet_on_3_1', 'prop_bet_on_2_2', 'prop_bet_on_3_2', 
      'prop_bet_on_4_1', 'prop_bet_on_5_1', 'prop_bet_on_4_2', 'prop_bet_on_3_3', 'prop_bet_on_6_2', 'prop_bet_on_5_3', 'prop_bet_on_4_2', 'prop_bet_on_6_3', 
      'prop_bet_on_5_4', 'prop_bet_on_6_4', 'prop_bet_on_5_5',]

  angular.forEach(gameButtonsMisc, function(value) {
      $scope[value + "_button"] = function() {
          $scope.increase_decrease == "-" ? $scope[value] -= $scope.bet_denomination : $scope[value] += $scope.bet_denomination
      }
  })

  $scope.place_field_bet_button = function() {
    $scope.increase_decrease == "-" ? $scope.field_bet -= $scope.bet_denomination : $scope.field_bet += $scope.bet_denomination
  }
  $scope.place_dont_come_bet_button = function() {
    $scope.increase_decrease == "-" ? $scope.place_dont_come_bet -= $scope.bet_denomination : $scope.place_dont_come_bet += $scope.bet_denomination
  }


  $scope.roll = function() {
      $scope.player_game_calls = []
      $scope.hide_dice = !$scope.hide_dice
      var current_roll_dice_2= new Array(1,2,3,4,5,6);
      var random_2 = current_roll_dice_2[Math.floor(Math.random() * current_roll_dice_2.length)];
      // random_2 = 2;
      $scope.die_one = random_2;
      var current_roll_dice_1= new Array(1,2,3,4,5,6);
      var random_1 = current_roll_dice_1[Math.floor(Math.random() * current_roll_dice_1.length)];
      // random_1 = 1;
      $scope.die_two = random_1;
      var total_of_dice = random_1 + random_2;

      EvaluateTheField($scope, total_of_dice)
      PropBets($scope, random_1, random_2)

      if (total_of_dice == 2 || total_of_dice == 3 || total_of_dice == 12) {
          if ($scope.game_status == "Come Out Roll" ) {
              LineAway($scope, total_of_dice)
          }
          else if ($scope.game_status == "Point is ") {
              ComeAway($scope, total_of_dice)
          }
      }
      if (total_of_dice == 4 || total_of_dice == 5 || total_of_dice == 6 || total_of_dice == 8 || total_of_dice == 9 || total_of_dice == 10 ) {
          if ($scope.game_status == "Come Out Roll") {
              SetsThePoint($scope, total_of_dice)
              ComesGoToThe($scope, total_of_dice)
              PayPlaceBets($scope, total_of_dice)
              $scope.odds_on_come_bets_are_off = false
              $scope.place_bets_are_off = false 
          }
          else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
              FrontLineWinner($scope, total_of_dice)
              ComesGoToThe($scope, total_of_dice)
              $scope.point_is = ""
              $scope.game_status = "Come Out Roll"
              $scope.place_bets_are_off = true 
              $scope.odds_on_come_bets_are_off = true 
          }
          else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
              $scope.the_call_is = total_of_dice
              ComesGoToThe($scope, total_of_dice)
              PayPlaceBets($scope, total_of_dice)
          }
      }
      if (total_of_dice == 7) {
          if ($scope.game_status == "Come Out Roll" ) {
              FrontLineWinner($scope, total_of_dice)
              GiveBackTheOdds($scope, total_of_dice)
          }
          else if ($scope.game_status == "Point is ") {
              SevenOut($scope, total_of_dice)
          }
      }
      if (total_of_dice == 11) {
          if ($scope.game_status == "Come Out Roll" ) {
              FrontLineWinner($scope, total_of_dice)
          }
          else if ($scope.game_status == "Point is ") {
              PayTheLastCome($scope, total_of_dice)
          }
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

// creates the dice fade effect
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

// win/lose announcement
function PlayerGameCalls($scope, scope_actual, win_or_lose, named_bet, starting_bet, ending_bet) {
    if (win_or_lose == "WON") {
        var bet_winning_var = "You " + win_or_lose + " " + ending_bet + " for your " + starting_bet + named_bet

        $scope.player_game_calls.push({call_actual: bet_winning_var})

    }
    else {
        var bet_losing_var = "You " + win_or_lose + " your " + named_bet

        $scope.player_game_calls.push({call_actual: bet_losing_var, losing_bet: true})


    }
}
