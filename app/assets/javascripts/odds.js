function EvaluateTheField($scope, total_of_dice) {
    if ($scope.field_bet > 0) {
        var game_helper_modal_headline = "Field Bet"
        var game_helper_modal_win_lose = "The Field is a One Roll Bet. It wins on any of the following numbers 2,3,4,9,10,11,12. Field Pays Even Money (2 pays double and 12 pays triple)"
        if (total_of_dice == 2) {
            var starting_bet = $scope.field_bet
            var ending_bet = $scope.field_bet * 2
            $scope.bank_roll_actual += ending_bet
            var game_helper_modal_message = "The Dice Rolled " + total_of_dice + ". This is a Winner in the field. Your bet of " + starting_bet + " Pays " + ending_bet
            PlayerGameCalls($scope, "WON", "#field_bet_modal", game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, starting_bet, ending_bet)
        }
        if (total_of_dice == 3 || total_of_dice == 4 || total_of_dice == 9 || total_of_dice == 10 || total_of_dice == 11) {
            var starting_bet = $scope.field_bet
            var ending_bet = $scope.field_bet
            $scope.bank_roll_actual += ending_bet
            var game_helper_modal_message = "The Dice Rolled " + total_of_dice + ". This is a Winner in the field. Your bet of " + starting_bet + " Pays " + ending_bet
            PlayerGameCalls($scope, "WON", "#field_bet_modal", game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, starting_bet, ending_bet)
        }
        if (total_of_dice == 12) {
            var starting_bet = $scope.field_bet
            var ending_bet = $scope.field_bet * 3
            $scope.bank_roll_actual += ending_bet
            var game_helper_modal_message = "The Dice Rolled " + total_of_dice + ". This is a Winner in the field. Your bet of " + starting_bet + " Pays " + ending_bet
            PlayerGameCalls($scope, "WON", "#field_bet_modal", game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, starting_bet, ending_bet)
        }
        if (total_of_dice == 5 || total_of_dice == 6 || total_of_dice == 7 || total_of_dice == 8) {
            $scope.bank_roll_actual -= $scope.field_bet
            $scope.field_bet = 0
            var game_helper_modal_message = "The Dice Rolled " + total_of_dice + ". This loses in the field." 
            PlayerGameCalls($scope, "LOST", "#field_bet_modal", game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
        }
    }
}

function PropBets($scope, random_1, random_2) {
    var propBetChecker = {'prop_bet_on_1_1':' Aces Bet','prop_bet_on_2_1':' Ace Deuce Bet','prop_bet_on_6_5':' Yo Bet','prop_bet_on_6_6':' Twelve Bet',
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
            var game_notice_actual_before = $scope.bank_roll_actual
            var game_helper_modal_headline = "Prop Bet on "+bet_actual.slice(-3).slice(0,1)+bet_actual.slice(-1)
            var game_helper_modal_win_lose = "The Field is a One Roll Bet. It wins on any of the following numbers 2,3,4,9,10,11,12. Field Pays Even Money (2 pays double and 12 pays triple)"
            if ((prop_var_1 == random_1 && prop_var_2 == random_2) || (prop_var_1 == random_2 && prop_var_2 == random_1)) {
                if (prop_var_1 == 1 && prop_var_2 == 1) {
                    var game_helper_modal_headline = "Prop Bet on Aces"
                    var game_helper_modal_win_lose = "Aces is a One Roll Bet. The dice must come 1-1 in order to win. Pays 31 for 1"
                } else if ((prop_var_1 == 5 && prop_var_2 == 6) || (prop_var_1 == 6 && prop_var_2 == 5)) {
                    var game_helper_modal_headline = "Prop Bet on Yo"
                    var game_helper_modal_win_lose = "Ace Deuce is a One Roll Bet. The dice must come 6-5 or 5-6 in order to win. Pays 16 for 1"
                } else if ((prop_var_1 == 1 && prop_var_2 == 2) || (prop_var_1 == 2 && prop_var_2 == 1)) {
                    var game_helper_modal_headline = "Prop Bet on Ace Deuce"
                    var game_helper_modal_win_lose = "Ace Deuce is a One Roll Bet. The dice must come 2-1 or 1-2 in order to win. Pays 16 for 1"
                } else if (prop_var_1 == 6 && prop_var_2 == 6) {
                    var game_helper_modal_headline = "Prop Bet on Twelve"
                    var game_helper_modal_win_lose = "Twelve is a One Roll Bet. The dice must come 6-6 in order to win. Pays 31 for 1"
                } else {
                    var highside_lowside = (prop_var_1 == prop_var_2 ? " 31 for 1" : " 16 for 1")
                    var game_helper_modal_headline = "Prop Bet on "+prop_var_1+"-"+prop_var_2+" Hopping"
                    var highside_lowside_wording = (prop_var_1 == prop_var_2 ? (prop_var_1+"-"+prop_var_2) : (prop_var_1+"-"+prop_var_2+" or "+prop_var_2+"-"+prop_var_1))
                    var game_helper_modal_win_lose = prop_var_1+"-"+prop_var_2+" Hopping is a One Roll Bet. The dice must come "+highside_lowside_wording+" in order to win. Pays "+highside_lowside
                }
                var game_helper_modal_id = "#"+bet_actual+"_modal"
                var game_helper_modal_message = "You Placed a " + game_helper_modal_headline+ " for " + $scope[bet_actual]
                var stay_up = $scope[bet_actual]
                var highside_payout = 30
                var lowside_payout = 15
                var stay_up_payout = $scope[bet_actual] * (random_1 == random_2 ? highside_payout : lowside_payout)
                $scope.bank_roll_actual += stay_up_payout
                PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
           } else {
                $scope.bank_roll_actual -= $scope[bet_actual]
                $scope[bet_actual] = 0
                if (prop_var_1 == 1 && prop_var_2 == 1) {
                    var game_helper_modal_headline = "Prop Bet on Aces"
                    var game_helper_modal_win_lose = "Aces is a One Roll Bet. The dice must come 1-1 in order to win. Pays 31 for 1"
                } else if ((prop_var_1 == 5 && prop_var_2 == 6) || (prop_var_1 == 6 && prop_var_2 == 5)) {
                    var game_helper_modal_headline = "Prop Bet on Yo"
                    var game_helper_modal_win_lose = "Ace Deuce is a One Roll Bet. The dice must come 6-5 or 5-6 in order to win. Pays 16 for 1"
                } else if ((prop_var_1 == 1 && prop_var_2 == 2) || (prop_var_1 == 2 && prop_var_2 == 1)) {
                    var game_helper_modal_headline = "Prop Bet on Ace Deuce"
                    var game_helper_modal_win_lose = "Ace Deuce is a One Roll Bet. The dice must come 2-1 or 1-2 in order to win. Pays 16 for 1"
                } else if (prop_var_1 == 6 && prop_var_2 == 6) {
                    var game_helper_modal_headline = "Prop Bet on Twelve"
                    var game_helper_modal_win_lose = "Twelve is a One Roll Bet. The dice must come 6-6 in order to win. Pays 31 for 1"
                } else {
                    var highside_lowside = (prop_var_1 == prop_var_2 ? " 31 for 1" : " 16 for 1")
                    var game_helper_modal_headline = "Prop Bet on "+prop_var_1+"-"+prop_var_2+" Hopping"
                    var game_helper_modal_id = "#"+bet_actual+"_modal"
                    var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
                    var highside_lowside_wording = (prop_var_1 == prop_var_2 ? (prop_var_1+"-"+prop_var_2) : (prop_var_1+"-"+prop_var_2+" or "+prop_var_2+"-"+prop_var_1))
                    var game_helper_modal_win_lose = prop_var_1+"-"+prop_var_2+" Hopping is a One Roll Bet. The dice must come "+highside_lowside_wording+" in order to win. Pays "+highside_lowside
                }
                PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
           }
        }
    })

    if ($scope.prop_bet_red > 0) {
        if (random_1 + random_2 == 7) {
            var stay_up = $scope.prop_bet_red
            var stay_up_payout = $scope.prop_bet_red * 4
            $scope.bank_roll_actual += stay_up_payout
            var game_helper_modal_headline = "Prop Bet on Any Seven"
            var game_helper_modal_win_lose = "Any Seven is a One Roll Bet. The dice must roll Seven in order to win. Pays 5 for 1"
            var game_helper_modal_id = "#prop_bet_red_modal"
            var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        } else {
            var game_helper_modal_headline = "Prop Bet on Any Seven"
            var game_helper_modal_win_lose = "Any Seven is a One Roll Bet. The dice must roll Seven in order to win. Pays 5 for 1"
            var game_helper_modal_id = "#prop_bet_red_modal"
            var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
            PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
            $scope.bank_roll_actual -= stay_up_payout
            $scope.prop_bet_red = 0
        }
    }
    if ($scope.prop_bet_craps > 0) {
        if ((random_1 + random_2 == 2) || (random_1 + random_2 == 3) || (random_1 + random_2 == 12)) {
            var stay_up = $scope.prop_bet_craps
            var stay_up_payout = $scope.prop_bet_craps * 7
            $scope.bank_roll_actual += stay_up_payout
            var game_helper_modal_headline = "Prop Bet on Any Craps"
            var game_helper_modal_win_lose = "Any Craps is a One Roll Bet. The dice must roll Craps (2,3, or 12) in order to win. Pays 8 for 1"
            var game_helper_modal_id = "#prop_bet_craps_modal"
            var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        } else {
            var game_helper_modal_headline = "Prop Bet on Any Craps"
            var game_helper_modal_win_lose = "Any Craps is a One Roll Bet. The dice must roll Craps (2,3, or 12) in order to win. Pays 8 for 1"
            var game_helper_modal_id = "#prop_bet_craps_modal"
            var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
            PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
            $scope.bank_roll_actual -= $scope.prop_bet_craps
            $scope.prop_bet_craps = 0
        }
    }
}
