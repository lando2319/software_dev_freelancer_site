//= require odds
// Game Status Functions

function FrontLineWinner($scope, total_of_dice)
{
    $scope.dealer_call = "Front Line Winner"
    $scope.the_call_is = total_of_dice
    if ($scope.line_bet > 0 && $scope.odds_behind_the_line == 0) {
        var stay_up = $scope.line_bet
        var stay_up_payout = $scope.line_bet
        $scope.bank_roll_actual += $scope.line_bet
        PlayerGameCalls($scope, $scope.line_bet, "WON", " Pass Line Bet", stay_up, stay_up_payout)
    } 
    if ($scope.line_bet > 0 && $scope.odds_behind_the_line > 0) {
        var stay_up = $scope.odds_behind_the_line
        if (total_of_dice == 4 || total_of_dice == 10) {
            var stay_up_payout = $scope.odds_behind_the_line * 2
            var odds_game_message = " Odds Behind the Line (pays double), Even money for the Line Bet"
        } else if (total_of_dice == 5 || total_of_dice == 9) {
            var stay_up_payout = $scope.odds_behind_the_line * 1.5
            var odds_game_message = " Odds Behind the Line (2 pays 3), Even money for the Line Bet"
        } else if (total_of_dice == 6 || total_of_dice == 8) {
            var stay_up_payout = $scope.odds_behind_the_line * 1.2
            var odds_game_message = " Odds Behind the Line (5 pays 6), Even money for the Line Bet"
        }
        PlayerGameCalls($scope, $scope.place_bet_on_the_4, "WON", odds_game_message, stay_up, stay_up_payout)
        $scope.bank_roll_actual += stay_up_payout
        $scope.bank_roll_actual += $scope.line_bet
        $scope.odds_behind_the_line = 0
    }

    if ($scope.dont_pass_line_bet > 0) {
        $scope.bank_roll_actual -= $scope.dont_pass_line_bet
        $scope.bank_roll_actual -= $scope.odds_behind_the_dont_pass_line
        var current_game_message = ($scope.odds_behind_the_dont_pass_line == 0 ? " Don't Pass Line Bet" : " Don't Pass Line Bet with Lay")
        PlayerGameCalls($scope, $scope.dont_pass_line_bet, "LOST", current_game_message)
        $scope.dont_pass_line_bet = 0
        $scope.odds_behind_the_dont_pass_line = 0
    } 

    $scope.eight = "8"
    $scope.six = "6"
    $scope.five = "5"
    $scope.nine = "9"
    $scope.four = "4"
    $scope.ten = "10"
}

function LineAway($scope, total_of_dice) {
    $scope.dealer_call = "Craps Line Away"
    $scope.the_call_is = total_of_dice
    if ($scope.dont_pass_line_bet > 0 && $scope.odds_behind_the_dont_pass_line == 0) {
        var stay_up = $scope.dont_pass_line_bet
        var stay_up_payout = $scope.dont_pass_line_bet
        $scope.bank_roll_actual += $scope.dont_pass_line_bet
        PlayerGameCalls($scope, $scope.dont_pass_line_bet, "WON", " Don't Pass Line Bet", stay_up, stay_up_payout)
    } 
    if ($scope.dont_pass_line_bet > 0 && $scope.odds_behind_the_dont_pass_line > 0) {
        var stay_up = $scope.odds_behind_the_dont_pass_line
        if ($scope.point_is == 4 || $scope.point_is == 10) {
            var stay_up_payout = $scope.odds_behind_the_dont_pass_line * .5
            var odds_game_message = " Lay on the Don't Pass (pays half), Even money for the Don't Pass Bet"
        } else if ($scope.point_is == 5 || $scope.point_is == 9) {
            var stay_up_payout = $scope.odds_behind_the_dont_pass_line * (2/3)
            var odds_game_message = " Lay on the Don't Pass (pays 2/3), Even money for the Don't Pass Bet"
        } else if ($scope.point_is == 6 || $scope.point_is == 8) {
            var stay_up_payout = $scope.odds_behind_the_dont_pass_line * (5/6)
            var odds_game_message = " Odds Behind the Line (6 pays 5), Even money for the Don't Pass Bet"
        }
        PlayerGameCalls($scope, $scope.odds_behind_the_dont_pass_line, "WON", odds_game_message, stay_up, stay_up_payout)
        $scope.odds_behind_the_dont_pass_line = 0
    }

    if ($scope.line_bet > 0) {
        $scope.bank_roll_actual -= $scope.line_bet
        $scope.bank_roll_actual -= $scope.odds_behind_the_line
        var current_game_message = ($scope.odds_behind_the_line == 0 ? " Pass Line Bet" : " Pass Line Bet with Odds")
        PlayerGameCalls($scope, $scope.line_bet, "LOST", current_game_message)
        $scope.line_bet = 0
        $scope.odds_behind_the_line = 0
    } 
    $scope.eight = "8"
    $scope.six = "6"
    $scope.five = "5"
    $scope.nine = "9"
    $scope.four = "4"
    $scope.ten = "10"
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
        $scope.four = "ON"
      }
      if (total_of_dice == 5) {
        $scope.come_bet_odds_on_5 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_5
        $scope.come_bet_flat_on_5 = 0
        $scope.five = "ON"
      }
      if (total_of_dice == 6) {
        $scope.come_bet_odds_on_6 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_6
        $scope.come_bet_flat_on_6 = 0
        $scope.six = "ON"
      }
      if (total_of_dice == 8) {
        $scope.come_bet_odds_on_8 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_8
        $scope.come_bet_flat_on_8 = 0
        $scope.eight = "ON"
      }
      if (total_of_dice == 9) {
        $scope.come_bet_odds_on_9 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_9
        $scope.come_bet_flat_on_9 = 0
        $scope.nine = "ON"
      }
      if (total_of_dice == 10) {
        $scope.come_bet_odds_on_10 = 0
        $scope.bank_roll_actual += $scope.come_bet_flat_on_10 
        $scope.come_bet_flat_on_10 = 0
        $scope.ten = "ON"
      }
}

function PayPlaceBets($scope, total_of_dice) {
    if (total_of_dice == 4 && $scope.place_bet_on_the_4 > 0) {
        var stay_up = $scope.place_bet_on_the_4
        var stay_up_payout = $scope.place_bet_on_the_4 * 1.8
        PlayerGameCalls($scope, $scope.place_bet_on_the_4, "WON", " Place Bet on the Four (5 pays 9)", stay_up, stay_up_payout)
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += stay_up_payout : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 5 && $scope.place_bet_on_the_5 > 0) {
        var stay_up = $scope.place_bet_on_the_5
        var stay_up_payout = $scope.place_bet_on_the_5 * 1.4
        PlayerGameCalls($scope, $scope.place_bet_on_the_5, "WON", " Place Bet on the Five (5 pays 7)", stay_up, stay_up_payout)
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += stay_up_payout : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 6 && $scope.place_bet_on_the_6 > 0) {
        var stay_up = $scope.place_bet_on_the_6
        var stay_up_payout = (($scope.place_bet_on_the_6 / 6) * 7)
        PlayerGameCalls($scope, $scope.place_bet_on_the_5, "WON", " Place Bet on the Six (6 pays 8)", stay_up, stay_up_payout)
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += stay_up_payout : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 8 && $scope.place_bet_on_the_8 > 0) {
        var stay_up = $scope.place_bet_on_the_8
        var stay_up_payout = (($scope.place_bet_on_the_8 / 6) * 7)
        PlayerGameCalls($scope, $scope.place_bet_on_the_8, "WON", " Place Bet on the Eight (6 pays 8)", stay_up, stay_up_payout)
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += stay_up_payout : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 9 && $scope.place_bet_on_the_9 > 0) {
        var stay_up = $scope.place_bet_on_the_9
        var stay_up_payout = $scope.place_bet_on_the_9 * 1.4
        PlayerGameCalls($scope, $scope.place_bet_on_the_9, "WON", " Place Bet on the Nine (5 pays 7)", stay_up, stay_up_payout)
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += stay_up_payout : $scope.place_bets_off_message = "Bets are off"
    }
    if (total_of_dice == 10 && $scope.place_bet_on_the_10 > 0) {
        var stay_up = $scope.place_bet_on_the_10
        var stay_up_payout = $scope.place_bet_on_the_10 * 1.8
        PlayerGameCalls($scope, $scope.place_bet_on_the_10, "WON", " Place Bet on the Ten (5 pays 9)", stay_up, stay_up_payout)
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += stay_up_payout : $scope.place_bets_off_message = "Bets are off"
    }
}



function ComesGoToThe($scope, total_of_dice) {
    var scopeNum = {4:'4', 5:'5', 6:'6', 8:'8', 9:'9', 10:'10'};
    var writtenWord = {4:'Four', 5:'Five', 6:'Six', 8:'Eight', 9:'Nine', 10:'Ten'};
    var trueOdds = {4:2, 5:1.5, 6:1.2, 8:1.2, 9:1.5, 10:2};

    if ($scope['dont_come_flat_on_'+scopeNum[total_of_dice]] > 0) {
        $scope.bank_roll_actual -= $scope['dont_come_bet_flat_on_'+scopeNum[total_of_dice]]
        $scope.bank_roll_actual -= $scope['dont_come_bet_lay_on_'+scopeNum[total_of_dice]]
        var come_bet_message = ($scope['dont_come_bet_lay_on_'+scopeNum[total_of_dice]] > 0 ? " Don't Come Bet with Lay" : " Don't Come Bet")
        PlayerGameCalls($scope, $scope.line_bet, "LOST", come_bet_message)
        $scope['dont_come_bet_flat_on_'+scopeNum[total_of_dice]] = 0
        $scope['dont_come_bet_lay_on_'+scopeNum[total_of_dice]] = 0
    }

    if ($scope.place_dont_come_bet > 0) {
        $scope['dont_come_bet_flat_on_'+scopeNum[total_of_dice]] = $scope.place_dont_come_bet
        $scope.place_dont_come_bet = 0
        $scope.player_game_calls = [{call_actual: ("Don't Come Bet Traveled to the " + writtenWord[total_of_dice] + " click it to lay odds" ), player_rescue: true}]
    }

    if ($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] == $scope.place_come_bet && $scope.place_come_bet != 0) {
        var stay_up = ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]])
        var stay_up_payout= ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]] * trueOdds[total_of_dice])
        $scope.bank_roll_actual += stay_up_payout + stay_up
        var come_bet_message = " Odds on Come Bet (off and on), Even money for the Come Bet"
        PlayerGameCalls($scope, $scope.line_bet, "WON", come_bet_message, stay_up, stay_up_payout)
    } else if ($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] != $scope.place_come_bet) {
        if ($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] != 0) {
            var stay_up = ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]])
            var stay_up_payout= ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]] * trueOdds[total_of_dice])
            $scope.bank_roll_actual += (stay_up_payout + stay_up)
            var come_bet_message = " Odds on Come Bet, Even money for the Come Bet"
            PlayerGameCalls($scope, $scope.line_bet, "WON", come_bet_message, stay_up, stay_up_payout)
            $scope['come_bet_flat_on_'+scopeNum[total_of_dice]] = 0
            $scope['come_bet_odds_on_'+scopeNum[total_of_dice]] = 0
        }
        if ($scope.place_come_bet != 0) {
            $scope['come_bet_flat_on_'+scopeNum[total_of_dice]] = $scope.place_come_bet
            $scope.place_come_bet = 0
            $scope.player_game_calls = [{call_actual: ("Come Bet Traveled to the " + writtenWord[total_of_dice] + " click it to place odds" ), player_rescue: true}]
        }
    }
}

function ComeAway($scope, total_of_dice) {
      $scope.bank_roll_actual -= $scope.place_come_bet 
      $scope.bank_roll_actual += $scope.place_dont_come_bet 
      $scope.place_come_bet = 0
      $scope.the_call_is = total_of_dice
}

function PayTheLastCome($scope, total_of_dice) {
      $scope.bank_roll_actual += $scope.place_come_bet
      $scope.the_call_is = total_of_dice
      $scope.bank_roll_actual -= $scope.place_dont_come_bet 
      $scope.place_dont_come_bet = 0
      $scope.place_come_bet = 0
}

function SevenOut($scope, total_of_dice) {
      $scope.the_call_is = total_of_dice
      LineAway($scope, total_of_dice)
      if ($scope.place_come_bet > 0) {
          var stay_up = $scope.place_come_bet
          var stay_up_payout = $scope.place_come_bet
          PlayerGameCalls($scope, $scope.place_come_bet, "WON", " Come Bet", stay_up, stay_up_payout)
          $scope.bank_roll_actual += $scope.place_come_bet 
          $scope.place_come_bet = 0
      }
      if ($scope.odds_on_come_bets_are_off != true) {
        LoseFlatAndOddsOnComeBets($scope, total_of_dice)
      }
      else if ($scope.odds_on_come_bets_are_off == true) {
        GiveBackTheOdds($scope, total_of_dice)
      } 



      if ($scope.place_bets_are_off != true) {
          if ($scope.place_bet_on_the_4 > 0) {
              $scope.bank_roll_actual -= $scope.place_bet_on_the_4 
              PlayerGameCalls($scope, $scope.place_bet_on_the_4, "LOST", " Place Bet on the Four")
              $scope.place_bet_on_the_4 = 0        
          }
          if ($scope.place_bet_on_the_5 > 0) {
              $scope.bank_roll_actual -= $scope.place_bet_on_the_5 
              PlayerGameCalls($scope, $scope.place_bet_on_the_5, "LOST", " Place Bet on the Five")
              $scope.place_bet_on_the_5 = 0 
          }
          if ($scope.place_bet_on_the_6 > 0) {
              $scope.bank_roll_actual -= $scope.place_bet_on_the_6 
              PlayerGameCalls($scope, $scope.place_bet_on_the_6, "LOST", " Place Bet on the Six")
              $scope.place_bet_on_the_6 = 0 
          }
          if ($scope.place_bet_on_the_8 > 0) {
              $scope.bank_roll_actual -= $scope.place_bet_on_the_8 
              PlayerGameCalls($scope, $scope.place_bet_on_the_8, "LOST", " Place Bet on the Eight")
              $scope.place_bet_on_the_8 = 0 
          }
          if ($scope.place_bet_on_the_9 > 0) {
              $scope.bank_roll_actual -= $scope.place_bet_on_the_9 
              PlayerGameCalls($scope, $scope.place_bet_on_the_9, "LOST", " Place Bet on the Nine")
              $scope.place_bet_on_the_9 = 0 
          }
          if ($scope.place_bet_on_the_10 > 0) {
              $scope.bank_roll_actual -= $scope.place_bet_on_the_10
              PlayerGameCalls($scope, $scope.place_bet_on_the_10, "LOST", " Place Bet on the Ten")
              $scope.place_bet_on_the_10 = 0
          }

      }
      else if ($scope.place_bets_are_off == true) {
        $scope.place_bets_off_message = "Place Bets were off, will work once new point is established"
      } 
      
      $scope.point_is = ""
      $scope.game_status = "Come Out Roll"
      $scope.dealer_call = "Seven Out Line Away"
      $scope.place_bets_are_off = true
}

function GiveBackTheOdds($scope, total_of_dice) {
    $scope.odds_on_come_bets_message = "Odds were off, flat bet ALWAYS works"
      // Lose the flat
    if ($scope.come_bet_flat_on_4 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_4 
        var odds_message = $scope.come_bet_odds_on_4 > 0 ? " Come Bet on Four, Odds Returned" : " Come Bet on Four"
        PlayerGameCalls($scope, $scope.come_bet_flat_on_4, "LOST", odds_message)
        $scope.come_bet_flat_on_4 = 0        
        $scope.come_bet_odds_on_4 = 0        
    }
    if ($scope.come_bet_flat_on_5 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_5 
        var odds_message = $scope.come_bet_odds_on_5 > 0 ? " Come Bet on Five, Odds Returned" : " Come Bet on Five"
        PlayerGameCalls($scope, $scope.come_bet_flat_on_5, "LOST", odds_message)
        $scope.come_bet_flat_on_5 = 0 
        $scope.come_bet_odds_on_5 = 0 
    }
    if ($scope.come_bet_flat_on_6 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_6 
        var odds_message = $scope.come_bet_odds_on_6 > 0 ? " Come Bet on Six, Odds Returned" : " Come Bet on Six"
        PlayerGameCalls($scope, $scope.come_bet_flat_on_6, "LOST", odds_message)
        $scope.come_bet_flat_on_6 = 0 
        $scope.come_bet_odds_on_6 = 0 
    }
    if ($scope.come_bet_flat_on_8 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_8 
        var odds_message = $scope.come_bet_odds_on_8 > 0 ? " Come Bet on Eight, Odds Returned" : " Come Bet on Eight"
        PlayerGameCalls($scope, $scope.come_bet_flat_on_8, "LOST", odds_message)
        $scope.come_bet_flat_on_8 = 0 
        $scope.come_bet_odds_on_8 = 0 
    }
    if ($scope.come_bet_flat_on_9 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_9 
        var odds_message = $scope.come_bet_odds_on_9 > 0 ? " Come Bet on Nine, Odds Returned" : " Come Bet on Nine"
        PlayerGameCalls($scope, $scope.come_bet_flat_on_9, "LOST", odds_message)
        $scope.come_bet_flat_on_9 = 0 
        $scope.come_bet_odds_on_9 = 0 
    }
    if ($scope.come_bet_flat_on_10 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_10
        var odds_message = $scope.come_bet_odds_on_10 > 0 ? " Come Bet on Ten, Odds Returned" : " Come Bet on Ten"
        PlayerGameCalls($scope, $scope.come_bet_flat_on_10, "LOST", odds_message)
        $scope.come_bet_flat_on_10 = 0
        $scope.come_bet_odds_on_10 = 0
    }
}

function LoseFlatAndOddsOnComeBets($scope, total_of_dice) {
    if ($scope.come_bet_flat_on_4 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_4 
        $scope.bank_roll_actual -= $scope.come_bet_odds_on_4 
        PlayerGameCalls($scope, $scope.come_bet_odds_on_4, "LOST", " Your Come Bet on Four")
        $scope.come_bet_odds_on_4 = 0        
        $scope.come_bet_flat_on_4 = 0        
    }
    if ($scope.come_bet_flat_on_5 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_odds_on_5 
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_5 
        PlayerGameCalls($scope, $scope.come_bet_odds_on_5, "LOST", " Your Come Bet on Five")
        $scope.come_bet_flat_on_5 = 0 
        $scope.come_bet_odds_on_5 = 0 
    }
    if ($scope.come_bet_flat_on_6 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_odds_on_6 
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_6 
        PlayerGameCalls($scope, $scope.come_bet_odds_on_6, "LOST", " Your Come Bet on Six")
        $scope.come_bet_flat_on_6 = 0 
        $scope.come_bet_odds_on_6 = 0 
    }
    if ($scope.come_bet_flat_on_8 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_odds_on_8 
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_8 
        PlayerGameCalls($scope, $scope.come_bet_odds_on_8, "LOST", " Your Come Bet on Eight")
        $scope.come_bet_flat_on_8 = 0 
        $scope.come_bet_odds_on_8 = 0 
    }
    if ($scope.come_bet_flat_on_9 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_odds_on_9 
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_9 
        PlayerGameCalls($scope, $scope.come_bet_odds_on_9, "LOST", " Your Come Bet on Nine")
        $scope.come_bet_flat_on_9 = 0 
        $scope.come_bet_odds_on_9 = 0
    }
    if ($scope.come_bet_flat_on_10 > 0) {
        $scope.bank_roll_actual -= $scope.come_bet_odds_on_10
        $scope.bank_roll_actual -= $scope.come_bet_flat_on_10
        PlayerGameCalls($scope, $scope.come_bet_odds_on_10, "LOST", " Your Come Bet on Ten")
        $scope.come_bet_flat_on_10 = 0
        $scope.come_bet_odds_on_10 = 0 
    }
}
