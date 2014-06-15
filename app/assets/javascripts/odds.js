function EvaluateTheField($scope, total_of_dice) {
    if ($scope.field_bet > 0) {
        if (total_of_dice == 2) {
            var starting_bet = $scope.field_bet
            var ending_bet = $scope.field_bet * 2
            $scope.bank_roll_actual += ending_bet
        }
        if (total_of_dice == 3 || total_of_dice == 4 || total_of_dice == 9 || total_of_dice == 10 || total_of_dice == 11) {
            $scope.bank_roll_actual += $scope.field_bet
            var starting_bet = $scope.field_bet
        }
        if (total_of_dice == 12) {
            var starting_bet = $scope.field_bet
            var ending_bet = $scope.field_bet * 3
            $scope.bank_roll_actual += ending_bet
            PlayerGameCalls($scope, $scope.field_bet, "WON", " Field Bet", starting_bet, ending_bet)
        }
        if (total_of_dice == 5 || total_of_dice == 6 || total_of_dice == 7 || total_of_dice == 8) {
            $scope.bank_roll_actual -= $scope.field_bet
            $scope.field_bet = 0
            PlayerGameCalls($scope, $scope.field_bet, "LOST", " Field Bet")
        }
    }
}

function PropBets($scope, random_1, random_2) {
    var propBetChecker = {'prop_bet_on_1_1':' Aces Bet','prop_bet_on_2_1':' Ace Deuce Bet','prop_bet_on_6_1':' Yo Bet','prop_bet_on_6_6':' Twelve Bet',
      'prop_bet_on_6_1':' Six One Hop', 'prop_bet_on_5_2':' Five Two Hop', 'prop_bet_on_4_3':' Four Three Hop','prop_bet_on_3_1':' Three One Hop', 
      'prop_bet_on_2_2':' Hard Four Hop', 'prop_bet_on_3_2':' Three Two Hop', 'prop_bet_on_4_1':' Four One Hop','prop_bet_on_5_1':' Five One Hop', 
      'prop_bet_on_4_2':' Four Two Hop', 'prop_bet_on_3_3':' Hard Six Hop', 'prop_bet_on_6_2':' Six Two Hop','prop_bet_on_5_3':' Five Three Hop', 
      'prop_bet_on_4_4':' Hard Eight Hop', 'prop_bet_on_6_3':' Six Three Hop', 'prop_bet_on_5_4':' Five Four Hop','prop_bet_on_6_4':' Six Four Hop', 
      'prop_bet_on_5_5':' Hard Ten Hop',}

    angular.forEach(propBetChecker, function(game_call_actual, bet_actual) {
        var pair_of_props_vars = bet_actual.slice(-3)
        var prop_var_1 = pair_of_props_vars[0]
        var prop_var_2 = pair_of_props_vars[2]
      
        if ($scope[bet_actual] > 0) {
             if ((prop_var_1 == random_1 && prop_var_2 == random_2) || (prop_var_1 == random_2 && prop_var_2 == random_1)) {
                  var stay_up = $scope[bet_actual]
                  var highside_payout = 30
                  var lowside_payout = 15
                  var stay_up_payout = $scope[bet_actual] * (random_1 == random_2 ? highside_payout : lowside_payout)
                  $scope.bank_roll_actual += stay_up_payout
                  PlayerGameCalls($scope, $scope[bet_actual], "WON", game_call_actual, stay_up, stay_up_payout)
             } else {
                  PlayerGameCalls($scope, $scope[bet_actual], "LOST", game_call_actual)
                  $scope.bank_roll_actual -= $scope[bet_actual]
                  $scope[bet_actual] = 0
             }
        }
    })

    if ($scope.prop_bet_red > 0) {
        if (random_1 + random_2 == 7) {
            var stay_up = $scope.prop_bet_red
            var stay_up_payout = $scope.prop_bet_red * 4
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_red, "WON", " Prop Bet on Red (any seven)", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_red, "LOST", " Prop Bet on Red (any seven")
            $scope.prop_bet_red = 0
        }
    }
    if ($scope.prop_bet_craps > 0) {
        if ((random_1 + random_2 == 2) || (random_1 + random_2 == 3) || (random_1 + random_2 == 12)) {
            var stay_up = $scope.prop_bet_craps
            var stay_up_payout = $scope.prop_bet_craps * 7
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_craps, "WON", " Prop Bet on Craps", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_craps, "LOST", " Prop Bet on Craps")
            $scope.prop_bet_craps = 0
        }
    }
}
