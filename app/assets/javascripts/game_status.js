//= require odds
// Game Status Functions

function FrontLineWinner($scope, total_of_dice)
{
			$scope.dealer_call = "Front Line Winner"
      $scope.the_call_is = total_of_dice
      $scope.bank_roll_actual += $scope.line_bet
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
      $scope.place_bets_off_message = ""
      if (total_of_dice == 4) {
        $scope.come_bet_odds_on_4 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_4
        $scope.come_bet_flat_on_4 = 0
        $scope.four = "Point Is Four"
      }
      if (total_of_dice == 5) {
        $scope.come_bet_odds_on_5 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_5
        $scope.come_bet_flat_on_5 = 0
        $scope.five = "Point Is Five"
      }
      if (total_of_dice == 6) {
        $scope.come_bet_odds_on_6 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_6
        $scope.come_bet_flat_on_6 = 0
        $scope.six = "Point Is Six"
      }
      if (total_of_dice == 8) {
        $scope.come_bet_odds_on_8 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_8
        $scope.come_bet_flat_on_8 = 0
        $scope.eight = "Point Is Eight"
      }
      if (total_of_dice == 9) {
        $scope.come_bet_odds_on_9 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_9
        $scope.come_bet_flat_on_9 = 0
        $scope.nine = "Point Is Nine"
      }
      if (total_of_dice == 10) {
        $scope.come_bet_odds_on_10 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_10 
        $scope.come_bet_flat_on_10 = 0
        $scope.ten = "Point Is Ten"
      }
}

function PayPlaceBets($scope, total_of_dice) {
    if (total_of_dice == 4) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_4 * 1.8) : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 5) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_5 * 1.4) : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 6) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += (($scope.place_bet_on_the_6 / 6) * 7) : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 8) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += (($scope.place_bet_on_the_8 / 6) * 7) : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 9) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_9 * 1.4) : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 10) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.8) : $scope.place_bets_off_message = "Bets are off"
    }
}



function ComesGoToThe($scope, total_of_dice) {
      if (total_of_dice == 4) {
          if ($scope.come_bet_flat_on_4 == $scope.place_come_bet && $scope.place_come_bet != 0) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_4 * 3)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_4 * 2)
              $scope.base_dealer_message = "Off and On"
          }
          else if ($scope.come_bet_flat_on_4 != $scope.place_come_bet) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_4 * 3)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_4 * 2)
              $scope.come_bet_odds_on_4 = 0
              $scope.come_bet_flat_on_4 = 0
              $scope.come_bet_flat_on_4 = $scope.place_come_bet 
              $scope.place_come_bet = 0
          }

      }
      if (total_of_dice == 5) {
          if ($scope.come_bet_flat_on_5 == $scope.place_come_bet && $scope.place_come_bet != 0) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_5 * 2.5)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_5 * 2)
              $scope.base_dealer_message = "Off and On"
          }
          else if ($scope.come_bet_flat_on_5 != $scope.place_come_bet) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_5 * 2.5)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_5 * 2)
              $scope.come_bet_odds_on_5 = 0
              $scope.come_bet_flat_on_5 = 0
              $scope.come_bet_flat_on_5 = $scope.place_come_bet 
              $scope.place_come_bet = 0
          }

      }
      if (total_of_dice == 6) {
          if ($scope.come_bet_flat_on_6 == $scope.place_come_bet && $scope.place_come_bet != 0) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_6 * 2.2)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_6 * 2)
              $scope.base_dealer_message = "Off and On"
          }
          else if ($scope.come_bet_flat_on_6 != $scope.place_come_bet) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_6 * 1.2)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_6 * 2)
              $scope.come_bet_odds_on_6 = 0
              $scope.come_bet_flat_on_6 = 0
              $scope.come_bet_flat_on_6 = $scope.place_come_bet 
              $scope.place_come_bet = 0
          }

      }
      if (total_of_dice == 8) {
          if ($scope.come_bet_flat_on_8 == $scope.place_come_bet && $scope.place_come_bet != 0) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_8 * 1.2)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_8 * 2)
              $scope.base_dealer_message = "Off and On"
          }
          else if ($scope.come_bet_flat_on_8 != $scope.place_come_bet) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_8 * 1.2)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_8 * 2)
              $scope.come_bet_odds_on_8 = 0
              $scope.come_bet_flat_on_8 = 0
              $scope.come_bet_flat_on_8 = $scope.place_come_bet 
              $scope.place_come_bet = 0
          }

      }
      if (total_of_dice == 9) {
          if ($scope.come_bet_flat_on_9 == $scope.place_come_bet && $scope.place_come_bet != 0) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_9 * 3)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_9 * 2)
              $scope.base_dealer_message = "Off and On"
          }
          else if ($scope.come_bet_flat_on_9 != $scope.place_come_bet) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_9 * 3)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_9 * 2)
              $scope.come_bet_odds_on_9 = 0
              $scope.come_bet_flat_on_9 = 0
              $scope.come_bet_flat_on_9 = $scope.place_come_bet 
              $scope.place_come_bet = 0
          }

      }
      if (total_of_dice == 10) {
          if ($scope.come_bet_flat_on_10 == $scope.place_come_bet && $scope.place_come_bet != 0) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_10 * 3)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_10 * 2)
              $scope.base_dealer_message = "Off and On"
          }
          else if ($scope.come_bet_flat_on_10 != $scope.place_come_bet) {
              $scope.bank_roll_actual += ($scope.come_bet_odds_on_10 * 3)
              $scope.bank_roll_actual += ($scope.come_bet_flat_on_10 * 2)
              $scope.come_bet_odds_on_10 = 0
              $scope.come_bet_flat_on_10 = 0
              $scope.come_bet_flat_on_10 = $scope.place_come_bet 
              $scope.place_come_bet = 0
          }

      }
}

function ComeAway($scope, total_of_dice) {
      $scope.bank_roll_actual -= $scope.place_come_bet 
      $scope.place_come_bet = 0
      $scope.the_call_is = total_of_dice
}

function PayTheCome($scope, total_of_dice) {
      $scope.bank_roll_actual += $scope.place_come_bet 
      $scope.the_call_is = total_of_dice
}

function SevenOut($scope, total_of_dice) {
      $scope.the_call_is = total_of_dice
      $scope.line_bet = 0
      $scope.bank_roll_actual -= $scope.odds_behind_the_line 
      $scope.bank_roll_actual -= $scope.line_bet 
      $scope.odds_behind_the_line = 0
      $scope.bank_roll_actual += $scope.place_come_bet 
      $scope.place_come_bet = 0

      if ($scope.odds_on_come_bets_are_off != true) {
        LoseFlatAndOddsOnComeBets($scope, total_of_dice)
      }
      else if ($scope.odds_on_come_bets_are_off == true) {
        GiveBackTheOdds($scope, total_of_dice)
      } 

      if ($scope.place_bets_are_off != true) {
        $scope.bank_roll_actual -= $scope.place_bet_on_the_4 
        $scope.bank_roll_actual -= $scope.place_bet_on_the_5 
        $scope.bank_roll_actual -= $scope.place_bet_on_the_6 
        $scope.bank_roll_actual -= $scope.place_bet_on_the_8 
        $scope.bank_roll_actual -= $scope.place_bet_on_the_9 
        $scope.bank_roll_actual -= $scope.place_bet_on_the_10

        $scope.place_bet_on_the_4 = 0        
        $scope.place_bet_on_the_5 = 0 
        $scope.place_bet_on_the_6 = 0 
        $scope.place_bet_on_the_8 = 0 
        $scope.place_bet_on_the_9 = 0 
        $scope.place_bet_on_the_10 = 0
      }
      else if ($scope.place_bets_are_off == true) {
        $scope.place_bets_off_message = "Place Bets were off, will work once new point is established"
      } 
      
      $scope.four = "Four"
      $scope.five = "Five"
      $scope.six = "Six"
      $scope.eight = "Eight"
      $scope.nine = "Nine"
      $scope.ten = "Ten"
      $scope.point_is = ""
      $scope.game_status = "Come Out Roll"
      $scope.dealer_call = "Seven Out Line Away"
      $scope.place_bets_are_off = true
}

function GiveBackTheOdds($scope, total_of_dice) {
      $scope.odds_on_come_bets_message = "Odds were off, flat bet ALWAYS works"
      // Lose the flat
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_4 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_5 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_6 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_8 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_9 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_10

      $scope.come_bet_flat_on_4 = 0        
      $scope.come_bet_flat_on_5 = 0 
      $scope.come_bet_flat_on_6 = 0 
      $scope.come_bet_flat_on_8 = 0 
      $scope.come_bet_flat_on_9 = 0 
      $scope.come_bet_flat_on_10 = 0

      // give back the odds
      $scope.come_bet_odds_on_4 = 0        
      $scope.come_bet_odds_on_5 = 0 
      $scope.come_bet_odds_on_6 = 0 
      $scope.come_bet_odds_on_8 = 0 
      $scope.come_bet_odds_on_9 = 0 
      $scope.come_bet_odds_on_10 = 0
}

function LoseFlatAndOddsOnComeBets($scope, total_of_dice) {
      $scope.bank_roll_actual -= $scope.come_bet_odds_on_4 
      $scope.bank_roll_actual -= $scope.come_bet_odds_on_5 
      $scope.bank_roll_actual -= $scope.come_bet_odds_on_6 
      $scope.bank_roll_actual -= $scope.come_bet_odds_on_8 
      $scope.bank_roll_actual -= $scope.come_bet_odds_on_9 
      $scope.bank_roll_actual -= $scope.come_bet_odds_on_10


      $scope.bank_roll_actual -= $scope.come_bet_flat_on_4 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_5 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_6 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_8 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_9 
      $scope.bank_roll_actual -= $scope.come_bet_flat_on_10

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

}


function HitsThePoint($scope, total_of_dice) {
      if (total_of_dice == 4 || total_of_dice == 10) {
          FourAndTenTrueOdds($scope, total_of_dice)
      }
      if (total_of_dice == 5 || total_of_dice == 9) {
          FiveAndNineTrueOdds($scope, total_of_dice)
      }
      if (total_of_dice == 6 || total_of_dice == 8) {
          SixAndEightTrueOdds($scope, total_of_dice)
      }
}
