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

    var scopeNum = {4:'4', 5:'5', 6:'6', 8:'8', 9:'9', 10:'10'};
    var writtenWordCap = {4:'Four', 5:'Five', 6:'Six', 8:'Eight', 9:'Nine', 10:'Ten'};
    var writtenWord = {4:'four', 5:'five', 6:'six', 8:'eight', 9:'nine', 10:'ten'};

      if (total_of_dice == scopeNum[total_of_dice]) {
        $scope['come_bet_odds_on_'+scopeNum[total_of_dice]] = 0
        $scope.bank_roll_actual += $scope['come_bet_odds_on_'+scopeNum[total_of_dice]]
        $scope['come_bet_odds_on_'+scopeNum[total_of_dice]] = 0
        $scope[writtenWord[total_of_dice]] = "ON"
        var current_game_message = "You Now Have a Point Of " + writtenWordCap[total_of_dice] 
        $scope.player_game_calls.push({call_actual: current_game_message, player_rescue: true})
        var current_game_message = ($scope.line_bet > $scope.dont_pass_line_bet ? (writtenWordCap[total_of_dice] + " Rolls You Win, Seven Rolls you Lose") : (" Seven Rolls You Win, " + writtenWordCap[total_of_dice] + " Rolls you Lose"))
        $scope.player_game_calls.push({call_actual: current_game_message, player_rescue: true})

      }
}

function PayPlaceBets($scope, total_of_dice) {
    var scopeNum = {4:'4', 5:'5', 6:'6', 8:'8', 9:'9', 10:'10'};
    var writtenWord = {4:'Four (5 pays 9)', 5:'Five (5 pays 7)', 6:'Six (6 pays 7)', 8:'Eight (6 pays 7)', 9:'Nine (5 pays 7)', 10:'Ten (5 pays 9)'};
    var placeBetOdds = {4:1.8, 5:1.4, 6:1.16667, 8:1.16667, 9:1.4, 10:1.8};

    if (total_of_dice == scopeNum[total_of_dice] && $scope['place_bet_on_the_'+scopeNum[total_of_dice]] > 0) {
        var stay_up = $scope['place_bet_on_the_'+scopeNum[total_of_dice]]
        var stay_up_payout = $scope['place_bet_on_the_'+scopeNum[total_of_dice]] * placeBetOdds[total_of_dice]
        var current_game_message = " Place Bet on the " + writtenWord[total_of_dice]
        PlayerGameCalls($scope, $scope.place_bet_on_the_4, "WON", current_game_message, stay_up, stay_up_payout)
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
            $scope.player_game_calls.push({call_actual: ("Come Bet Traveled to the " + writtenWord[total_of_dice] + " click it to place odds" ), player_rescue: true})
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
          var pointNumVars = {'4':' Four','5':' Five','6':' Six','8':' Eight','9':' Nine','10':' Ten'};
          angular.forEach(pointNumVars, function(written_word, num_actual) {
              console.log(num_actual)
              if ($scope['place_bet_on_the_'+num_actual] > 0) {
                  $scope.bank_roll_actual -= $scope['place_bet_on_the_'+num_actual] 
                  PlayerGameCalls($scope, $scope['place_bet_on_the_'+num_actual], "LOST", " Place Bet on the "+written_word)
                  $scope['place_bet_on_the_'+num_actual] = 0        
              }
          })
      } else if ($scope.place_bets_are_off == true) {
        $scope.player_game_calls.push({call_actual: "Place Bets were off, will work once next point is established", player_rescue: true})
      } 
      
      $scope.point_is = ""
      $scope.game_status = "Come Out Roll"
      $scope.dealer_call = "Seven Out Line Away"
      $scope.place_bets_are_off = true
}

function GiveBackTheOdds($scope, total_of_dice) {
    $scope.odds_on_come_bets_message = "Odds were off, flat bet ALWAYS works"

    var pointNumVars = {'4':' Four','5':' Five','6':' Six','8':' Eight','9':' Nine','10':' Ten'};
    angular.forEach(pointNumVars, function(written_word, num_actual) {
        if ($scope['come_bet_flat_on_'+num_actual] > 0) {
            $scope.bank_roll_actual -= $scope['come_bet_flat_on_'+num_actual] 
            var odds_message = $scope['come_bet_odds_on_'+num_actual] > 0 ? (" Flat Bet on "+written_word+", Odds Are off on the come out roll") : " Flat Bet on Four"
            PlayerGameCalls($scope, $scope['come_bet_flat_on_'+num_actual], "LOST", odds_message)
            $scope['come_bet_flat_on_'+num_actual] = 0        
            $scope['come_bet_odds_on_'+num_actual] = 0        
        }
    })
}

function LoseFlatAndOddsOnComeBets($scope, total_of_dice) {




//    var pointNumVars = {'4':' Four','5':' Five','6':' Six','8':' Eight','9':' Nine','10':' Ten'};
//    angular.forEach(pointNumVars, function(written_word, num_actual) {
//        if ($scope['come_bet_flat_on_'+num_actual] > 0) {
//            $scope.bank_roll_actual -= $scope['come_bet_flat_on_'+num_actual] 
//            var odds_message = $scope['come_bet_odds_on_'+num_actual] > 0 ? (" Flat Bet on "+written_word+", Odds Are off on the come out roll") : " Flat Bet on Four"
//            PlayerGameCalls($scope, $scope['come_bet_flat_on_'+num_actual], "LOST", odds_message)
//            $scope['come_bet_flat_on_'+num_actual] = 0        
//            $scope['come_bet_odds_on_'+num_actual] = 0        
//        }
//    })




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
