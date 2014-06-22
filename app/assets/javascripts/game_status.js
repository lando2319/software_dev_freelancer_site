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
        var game_helper_modal_headline = "Pass Line Bet"
        var game_helper_modal_win_lose = "The Pass Line during the \"Come Out Roll\" will win on 7 and 11, and lose on 2,3, and 12. Any other number becomes the point. Once the point has been established, only two numbers will affect the Pass Line, Rolling the Point will win and Rolling a Seven will lose."
        var game_helper_modal_id = "#line_bet_modal"
        var game_helper_modal_message = "You Placed a " + game_helper_modal_headline+ " for " + $scope.line_bet+" Coins"
        PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
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
        $scope.bank_roll_actual += stay_up_payout
        $scope.bank_roll_actual += $scope.line_bet
        var game_helper_modal_headline = "Odds Behind the Pass Line"
        var game_helper_modal_win_lose = odds_game_message
        var game_helper_modal_id = "#odds_behind_the_line_modal"
        var game_helper_modal_message = "You Placed " + game_helper_modal_headline+ " for " + $scope.odds_behind_the_line + " Coins this pays "+stay_up_payout+" Coins. The original Pass Line Bet (or Flat) always pays even money"
        PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        $scope.odds_behind_the_line = 0
    }

    if ($scope.dont_pass_line_bet > 0) {
        $scope.bank_roll_actual -= $scope.dont_pass_line_bet
        $scope.bank_roll_actual -= $scope.odds_behind_the_dont_pass_line
        var game_helper_modal_headline = ($scope.odds_behind_the_dont_pass_line == 0 ? " Don't Pass Line Bet" : " Don't Pass Line Bet with Lay")
        var game_helper_modal_win_lose = "The Don't Pass Line during the \"Come Out Roll\" will win on 2 and 3, 12 is a push and lose on 7 and 11. Any other number becomes the point. Once the point has been established, only two numbers will affect the Don't Pass Line, Rolling the Point will lose and Rolling a Seven will win."
        var game_helper_modal_id = "#odds_behind_the_line_modal"
        var game_helper_modal_message = "You Placed " + game_helper_modal_headline
        PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
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
    $scope.the_call_is = total_of_dice
    if ($scope.dont_pass_line_bet > 0 && $scope.odds_behind_the_dont_pass_line == 0) {
        var stay_up = $scope.dont_pass_line_bet
        var stay_up_payout = $scope.dont_pass_line_bet
        var game_helper_modal_headline = ($scope.odds_behind_the_dont_pass_line == 0 ? " Don't Pass Line Bet" : " Don't Pass Line Bet with Lay")
        var game_helper_modal_win_lose = "The Don't Pass Line during the \"Come Out Roll\" will win on 2 and 3, 12 is a push and lose on 7 and 11. Any other number becomes the point. Once the point has been established, only two numbers will affect the Don't Pass Line, Rolling the Point will lose and Rolling a Seven will win."
        var game_helper_modal_id = "#dont_pass_line_bet"
        if (total_of_dice == 12) {
            var game_helper_modal_message = "You Pushed on your " + game_helper_modal_headline
            PlayerGameCalls($scope, "INFO", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
        } else {
            $scope.bank_roll_actual += $scope.dont_pass_line_bet
            var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        }
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
        var game_helper_modal_headline = "Don't Pass Bet With Lay"
        var game_helper_modal_win_lose = odds_game_message
        var game_helper_modal_id = "#odds_behind_the_line_modal"
        var game_helper_modal_message = "You Placed a Don't Pass Bet for "+$scope.dont_pass_line_bet+" with " + stay_up + " Lay, The Lay paid "+stay_up_payout+". The original Don't Pass Line Bet (or Flat) always pays even money. Total Payout was "+(stay_up_payout+stay_up+$scope.dont_pass_line_bet)
        PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        $scope.bank_roll_actual += $scope.dont_pass_line_bet
        $scope.bank_roll_actual += stay_up_payout
        $scope.odds_behind_the_dont_pass_line = 0
    }

    if ($scope.line_bet > 0) {
        $scope.bank_roll_actual -= $scope.line_bet
        $scope.bank_roll_actual -= $scope.odds_behind_the_line
        var game_helper_modal_headline = ($scope.odds_behind_the_line == 0 ? " Pass Line Bet" : " Pass Line Bet with Odds")
        var game_helper_modal_win_lose = "The Pass Line during the \"Come Out Roll\" will win on 7 and 11, and lose on 2,3, and 12. Any other number becomes the point. Once the point has been established, only two numbers will affect the Pass Line, Rolling the Point will win and Rolling a Seven will lose."
        var game_helper_modal_id = "#line_bet_modal"
        var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
        PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
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
    var trueOdds = {4:2, 5:1.5, 6:1.2, 8:1.2, 9:1.5, 10:2};
    
    $scope.point_is_word = writtenWordCap[total_of_dice]

    if ($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] > 0) {
        $scope.bank_roll_actual += $scope['come_bet_flat_on_'+scopeNum[total_of_dice]]
        $scope['come_bet_flat_on_'+scopeNum[total_of_dice]] = 0
        if ($scope.odds_on_come_bets_are_off == false) {
            var stay_up = $scope['come_bet_odds_on_'+scopeNum[total_of_dice]]
            var stay_up_payout = $scope['come_bet_odds_on_'+scopeNum[total_of_dice]] * trueOdds[total_of_dice]
            $scope.bank_roll_actual += stay_up_payout
            $scope['come_bet_odds_on_'+scopeNum[total_of_dice]] = 0
            var current_game_message = "Come Bet and Odds On " + writtenWordCap[total_of_dice] 
            var game_helper_modal_headline = current_game_message
            var game_helper_modal_message = ($scope.line_bet > $scope.dont_pass_line_bet ? (writtenWordCap[total_of_dice] + " Rolls You Win, Seven Rolls you Lose") : (" Seven Rolls You Win, " + writtenWordCap[total_of_dice] + " Rolls you Lose"))
            var game_helper_modal_win_lose = "It was just the \"Come Out Roll\" Now we have a point of "+writtenWordCap[total_of_dice]+". You Called your Bets Working."
            var game_helper_modal_id = "#point_is_set_working_odds_modal"
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)

        } else {
            var stay_up = $scope['come_bet_flat_on_'+scopeNum[total_of_dice]]
            var stay_up_payout = $scope['come_bet_flat_on_'+scopeNum[total_of_dice]]
            $scope.bank_roll_actual += $scope['come_bet_flat_on_'+scopeNum[total_of_dice]]
            $scope['come_bet_flat_on_'+scopeNum[total_of_dice]] = 0
            $scope['come_bet_odds_on_'+scopeNum[total_of_dice]] = 0
            var current_game_message = "Come Bet On" + writtenWordCap[total_of_dice] 
            var game_helper_modal_headline = current_game_message
            var game_helper_modal_message = ($scope.line_bet > $scope.dont_pass_line_bet ? (writtenWordCap[total_of_dice] + " Rolls You Win, Seven Rolls you Lose") : (" Seven Rolls You Win, " + writtenWordCap[total_of_dice] + " Rolls you Lose"))
            var game_helper_modal_win_lose = "It was just the \"Come Out Roll\" Now we have a point of "+writtenWordCap[total_of_dice]+". You Come Bet wins because the number rolled before a Seven. The Odds are automatically Turned off on the \"Come Out Roll\", This can be overridden in the Adv Section."
            var game_helper_modal_id = "#point_is_set_modal"
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        }
    }
    $scope[writtenWord[total_of_dice]] = "ON"
    var game_helper_modal_message = "We Now Have A Point Of "+writtenWord[total_of_dice] 
    var game_helper_modal_win_lose = "It was just the \"Come Out Roll\" Now we have a point of "+writtenWordCap[total_of_dice]+"."
    var game_helper_modal_headline = "Poit is "+writtenWord[total_of_dice]
    var game_helper_modal_id = "#point_is_set_no_come_bet_modal"
    PlayerGameCalls($scope, "INFO", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
}

function PayPlaceBets($scope, total_of_dice) {
    var scopeNum = {4:'4', 5:'5', 6:'6', 8:'8', 9:'9', 10:'10'};
    var writtenWord = {4:'Four (5 pays 9)', 5:'Five (5 pays 7)', 6:'Six (6 pays 7)', 8:'Eight (6 pays 7)', 9:'Nine (5 pays 7)', 10:'Ten (5 pays 9)'};
    var placeBetOdds = {4:1.8, 5:1.4, 6:1.16667, 8:1.16667, 9:1.4, 10:1.8};

    if (total_of_dice == scopeNum[total_of_dice] && $scope['place_bet_on_the_'+scopeNum[total_of_dice]] > 0) {
        var stay_up = $scope['place_bet_on_the_'+scopeNum[total_of_dice]]
        var stay_up_payout = $scope['place_bet_on_the_'+scopeNum[total_of_dice]] * placeBetOdds[total_of_dice]
        var game_helper_modal_id = "#place_bet_on_the_"+scopeNum[total_of_dice]
        var game_helper_modal_headline = "Place Bet on "+scopeNum[total_of_dice]
        var game_helper_modal_win_lose = " You Placed a "+game_helper_modal_headline
        var game_helper_modal_message = "You Placed a Place Bet on the "+writtenWord[total_of_dice]+" for "+stay_up+" Coins this pays " + stay_up_payout + " Coins. Loses on a Seven Out." 
        if ($scope.place_bets_are_off == false ) {
            $scope.bank_roll_actual += stay_up_payout 
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        } else {
            $scope.place_bets_off_message = "Bets are off"
        }
    }
}



function ComesGoToThe($scope, total_of_dice) {
    var scopeNum = {4:'4', 5:'5', 6:'6', 8:'8', 9:'9', 10:'10'};
    var writtenWord = {4:'Four', 5:'Five', 6:'Six', 8:'Eight', 9:'Nine', 10:'Ten'};
    var trueOdds = {4:2, 5:1.5, 6:1.2, 8:1.2, 9:1.5, 10:2};

    if ($scope['dont_come_bet_flat_on_'+scopeNum[total_of_dice]] > 0) {
        $scope.bank_roll_actual -= $scope['dont_come_bet_flat_on_'+scopeNum[total_of_dice]]
        $scope.bank_roll_actual -= $scope['dont_come_bet_lay_on_'+scopeNum[total_of_dice]]
        var come_bet_message = ($scope['dont_come_bet_lay_on_'+scopeNum[total_of_dice]] > 0 ? (" Don't Come Bet with Lay against the "+writtenWord[total_of_dice]) : (" Don't Come Bet against the "+writtenWord[total_of_dice]))
        var game_helper_modal_headline = come_bet_message 
        var game_helper_modal_win_lose = "Once a Don't Come Bet has traveled to a number, rolling that number again will lose, Wins on Seven."
        var game_helper_modal_id = "#dont_come_bet_flat_on_"+scopeNum[total_of_dice]+"_modal"
        var game_helper_modal_message = "You Placed " + game_helper_modal_headline
        PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
        $scope['dont_come_bet_flat_on_'+scopeNum[total_of_dice]] = 0
        $scope['dont_come_bet_lay_on_'+scopeNum[total_of_dice]] = 0
    }

    if ($scope.place_dont_come_bet > 0) {
        $scope['dont_come_bet_flat_on_'+scopeNum[total_of_dice]] = $scope.place_dont_come_bet
        $scope.place_dont_come_bet = 0
        var game_helper_modal_message = "Your Don't Come Bet Traveled to the "+writtenWord[total_of_dice] 
        var game_helper_modal_win_lose = "Your Don't Come Bet just Traveled to the "+writtenWord[total_of_dice]+". This Bet will now LOSE on "+writtenWord[total_of_dice]+" and WIN on Seven. You also have the option to add a Lay by clicking on the bet. The Lay will win and lose on the same numbers, this is a way to increase your action against the "+writtenWord[total_of_dice]+"."
        var game_helper_modal_headline = "Don't Come Bet"
        var game_helper_modal_id = "#dont_come_travels_modal"
        PlayerGameCalls($scope, "INFO", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
    }

    if (($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] == $scope.place_come_bet) && $scope.place_come_bet != 0) {
        var stay_up = ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]])
        var stay_up_payout= ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]] * trueOdds[total_of_dice])
        $scope.bank_roll_actual += stay_up_payout + stay_up
        $scope.bank_roll_actual += $scope['come_bet_flat_on_'+scopeNum[total_of_dice]]
        var come_bet_message = "Because the bet you placed in the Come is the same amount as the flat on "+writtenWord[total_of_dice]+" the this is called \"off and on\"."

        if ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]] > 0) {
            var game_helper_modal_headline = " the Odds for your Come Bet"
            var game_helper_modal_win_lose = come_bet_message
            var game_helper_modal_id = "#come_bet_off_and_on_on_"+scopeNum[total_of_dice]+"_modal"
            var game_helper_modal_message = "Your Come Bet on "+writtenWord[total_of_dice]+" with " + stay_up + " Odds, The Odds paid "+stay_up_payout+". The original Come Bet (or Flat) always pays even money. Total Payout was "+(stay_up_payout+$scope['come_bet_flat_on_'+scopeNum[total_of_dice]])+", Your bet is still up to Win."
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        } else {
            var stay_up = $scope['come_bet_flat_on_'+scopeNum[total_of_dice]]
            var stay_up_payout = stay_up
            var game_helper_modal_headline = " Come Bet"
            var game_helper_modal_win_lose = " Come Bet"
            var game_helper_modal_id = "#come_bet_off_and_on_no_odds_on_"+scopeNum[total_of_dice]+"_modal"
            var game_helper_modal_message = "Your Come Bet on "+writtenWord[total_of_dice]+" Pays Even Money. The Odds pay a higer rate than Even Money. Once a Come Bet has traveled, click on it to place Odds."
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        }
    } else if ($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] != $scope.place_come_bet) {
        if ($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] != 0) {
            var stay_up = ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]])
            var stay_up_payout= ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]] * trueOdds[total_of_dice])
            $scope.bank_roll_actual += (stay_up_payout + stay_up + $scope['come_bet_flat_on_'+scopeNum[total_of_dice]])

            if ($scope['come_bet_odds_on_'+scopeNum[total_of_dice]] > 0) {
                var come_bet_message = " Odds on Come Bet, Even money for the Come Bet"

                var game_helper_modal_headline = " the Odds for your Come Bet"
                var game_helper_modal_win_lose = come_bet_message
                var game_helper_modal_id = "#come_bet_not_off_and_on_modal"
                var game_helper_modal_message = "Your Come Bet on "+writtenWord[total_of_dice]+" with " + stay_up + " Odds, The Odds paid "+stay_up_payout+". The original Come Bet (or Flat) always pays even money. Total Payout was "+(stay_up_payout+stay_up+$scope['come_bet_flat_on_'+scopeNum[total_of_dice]])
                PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
            } else {
                var stay_up = $scope['come_bet_flat_on_'+scopeNum[total_of_dice]]
                var stay_up_payout = stay_up
                var game_helper_modal_headline = " Come Bet"
                var game_helper_modal_win_lose = " Come Bet"
                var game_helper_modal_id = "#come_bet_off_and_on_no_odds_on_"+scopeNum[total_of_dice]+"_modal"
                var game_helper_modal_message = "Your Come Bet on "+writtenWord[total_of_dice]+" Pays Even Money. The Odds pay a higer rate than Even Money. Once a Come Bet has traveled, click on it to place Odds."
                PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
            }

            $scope['come_bet_flat_on_'+scopeNum[total_of_dice]] = 0
            $scope['come_bet_odds_on_'+scopeNum[total_of_dice]] = 0
            $scope['come_bet_flat_on_'+scopeNum[total_of_dice]] = $scope.place_come_bet
            $scope.place_come_bet = 0

        }
        if ($scope['come_bet_flat_on_'+scopeNum[total_of_dice]] == 0 && $scope.place_come_bet != 0) {
            $scope['come_bet_flat_on_'+scopeNum[total_of_dice]] = $scope.place_come_bet
            $scope.place_come_bet = 0

            var game_helper_modal_message = "Your Come Bet Traveled to the "+writtenWord[total_of_dice] 
            var game_helper_modal_win_lose = "Your Come Bet just Traveled to the "+writtenWord[total_of_dice]+". This Bet will now LOSE on Seven and Win on "+writtenWord[total_of_dice]+". You also have the option to adding Odds by clicking on the bet. The Odds will win and lose on the same numbers, this is a way to increase your action on the "+writtenWord[total_of_dice]+"."
            var game_helper_modal_headline = "Come Bet"
            var game_helper_modal_id = "#come_travels_modal"
            PlayerGameCalls($scope, "INFO", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)

        }
    }
}

function ComeAway($scope, total_of_dice) {
    if ($scope.place_come_bet > 0) {
        $scope.bank_roll_actual -= $scope.place_come_bet 

        var game_helper_modal_headline = "Come Bet"
        var game_helper_modal_win_lose = "Once you place a Come Bet it will win on 7 and 11, and lose on 2,3, and 12. Otherwise your Come Bet will travel to whatever number is rolled."
        var game_helper_modal_id = "#come_bet_travels_to_modal"
        var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
        PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)

        $scope.place_come_bet = 0
    }
    if ($scope.place_dont_come_bet > 0) {
        var stay_up = $scope.place_dont_come_bet
        var stay_up_payout = $scope.place_dont_come_bet

        if (total_of_dice == 12) {
            var stay_up_payout = 0
            var game_helper_modal_headline = "Don't Come Bet"
            var game_helper_modal_win_lose = "Once you place a Don't Come Bet it will win on 2, 3 and push on 12, and lose on 7 and 11. Otherwise your Don't Come Bet will travel to whatever number is rolled."
            var game_helper_modal_id = "#dont_come_bet_travels_to_modal"
            var game_helper_modal_message = "You Placed a "+game_helper_modal_headline
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        } else {
            $scope.bank_roll_actual += $scope.place_dont_come_bet 
            var game_helper_modal_headline = "Don't Come Bet"
            var game_helper_modal_win_lose = "Once you place a Don't Come Bet it will win on 2, 3 and push on 12, and lose on 7 and 11. Otherwise your Don't Come Bet will travel to whatever number is rolled."
            var game_helper_modal_id = "#dont_come_bet_travels_to_modal"
            var game_helper_modal_message = "You Placed a "+game_helper_modal_headline
            PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)
        }

    }
}

function PayTheLastCome($scope, total_of_dice) {
    if ($scope.place_come_bet > 0) {
        var stay_up = $scope.place_come_bet
        var stay_up_payout = $scope.place_come_bet

        var game_helper_modal_headline = "Come Bet"
        var game_helper_modal_win_lose = "Once you place a Come Bet it will win on 7 and 11, and lose on 2,3, and 12. Otherwise your Come Bet will travel to whatever number is rolled."
        var game_helper_modal_id = "#come_bet_travels_to_modal"
        var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
        PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)

        $scope.bank_roll_actual += $scope.place_come_bet 
        $scope.place_come_bet = 0
    }
    if ($scope.place_dont_come_bet > 0) {
        $scope.bank_roll_actual -= $scope.place_dont_come_bet 

        var game_helper_modal_headline = "Don't Come Bet"
        var game_helper_modal_win_lose = "Once you place a Don't Come Bet it will win on 2, 3 and push on 12, and lose on 7 and 11. Otherwise your Don't Come Bet will travel to whatever number is rolled."
        var game_helper_modal_id = "#dont_come_bet_travels_to_modal"
        var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
        PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)

        $scope.place_dont_come_bet = 0
    }
}

function SevenOut($scope, total_of_dice) {
      $scope.the_call_is = total_of_dice
      LineAway($scope, total_of_dice)
      PayTheLastCome($scope, total_of_dice)
      if ($scope.odds_on_come_bets_are_off != true) {
        LoseFlatAndOddsOnComeBets($scope, total_of_dice)
      }
      else if ($scope.odds_on_come_bets_are_off == true) {
        GiveBackTheOdds($scope, total_of_dice)
      } 

      if ($scope.place_bets_are_off != true) {
          var pointNumVars = {'4':' Four','5':' Five','6':' Six','8':' Eight','9':' Nine','10':' Ten'};
          angular.forEach(pointNumVars, function(written_word, num_actual) {
              if ($scope['place_bet_on_the_'+num_actual] > 0) {
                  $scope.bank_roll_actual -= $scope['place_bet_on_the_'+num_actual] 

                  var game_helper_modal_headline = "Place Bet Bet on "+written_word
                  var game_helper_modal_win_lose = "Place Bets lose on SevenOut. Place Bets are Off on the Come Out Roll (this can be overridden in the Adv Setting)."
                  var game_helper_modal_id = "#come_bet_travels_to_modal"
                  var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
                  PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)

                  $scope['place_bet_on_the_'+num_actual] = 0        
              }
          })
      } else if ($scope.place_bets_are_off == true) {
        //$scope.player_game_calls.push({call_actual: "Place Bets were off, will work once next point is established", player_rescue: true})
      } 
      
      var pointNumVars = {'4':'Four','5':'Five','6':'Six','8':'Eight','9':'Nine','10':'Ten'};

      angular.forEach(pointNumVars, function(written_word, bet_actual) {
          if ($scope['dont_come_bet_flat_on_'+bet_actual] > 0 && $scope['dont_come_bet_lay_on_'+bet_actual] == 0) {
              var stay_up = $scope['dont_come_bet_flat_on_'+bet_actual]
              var stay_up_payout = $scope['dont_come_bet_flat_on_'+bet_actual]
              $scope.bank_roll_actual += $scope['dont_come_bet_flat_on_'+bet_actual]

              var game_helper_modal_headline = "Don't Come Bet on "+written_word
              var game_helper_modal_win_lose = "You had a Don't Come Bet behind the "+written_word+" This Pays Even Money."
              var game_helper_modal_id = "#dont_come_bet_behind_the_"+bet_actual+"_modal"
              var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
              PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)

          } 
          if ($scope['dont_come_bet_flat_on_'+bet_actual] > 0 && $scope['dont_come_bet_lay_on_'+bet_actual] > 0) {
              var stay_up = $scope['dont_come_bet_lay_on_'+bet_actual]
              if ($scope.point_is == 4 || $scope.point_is == 10) {
                  var stay_up_payout = $scope['dont_come_bet_lay_on_'+bet_actual] * .5
                  var odds_game_message = " (pays half) "
              } else if ($scope.point_is == 5 || $scope.point_is == 9) {
                  var stay_up_payout = $scope['dont_come_bet_lay_on_'+bet_actual] * (2/3)
                  var odds_game_message = " (pays 2/3) "
              } else if ($scope.point_is == 6 || $scope.point_is == 8) {
                  var stay_up_payout = $scope['dont_come_bet_lay_on_'+bet_actual] * (5/6)
                  var odds_game_message = " (6 pays 5) "
              }

              var game_helper_modal_headline = "Don't Come Bet against the "+written_word+" with Lay"
              var game_helper_modal_win_lose = "You had a Don't Come Bet with Lay behind the "+written_word+". The Lay of "+stay_up+" paid "+stay_up_payout+odds_game_message
              var game_helper_modal_id = "#dont_come_bet_behind_the_"+bet_actual+"_modal"
              var game_helper_modal_message = "You Placed a " + game_helper_modal_headline
              PlayerGameCalls($scope, "WON", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose, stay_up, stay_up_payout)

          }
          $scope['dont_come_bet_lay_on_'+bet_actual] = 0
          $scope['dont_come_bet_flat_on_'+bet_actual] = 0
      })

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

            if ($scope['come_bet_odds_on_'+num_actual] > 0 ) {
                var game_helper_modal_headline = "Flat Bet On "+written_word+" your odds of "+$scope['come_bet_odds_on_'+num_actual]+" gets returned"
                var game_helper_modal_win_lose = "Once a Come Bet has Traveled to a Number, if the Seven comes before that number the bet loses. The Odds on Come Bets are automatically off on the Come Out Roll (this can be overridden in the Adv Settings)."
                var game_helper_modal_id = "#give_back_the_odds_on_"+num_actual+"_modal"
                var game_helper_modal_message = "You Placed " + game_helper_modal_headline
                PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)
            } else {
                var game_helper_modal_headline = "Flat Bet On "+written_word
                var game_helper_modal_win_lose = "Once a Come Bet has Traveled to a Number, if the Seven comes before that number the bet loses. The Odds on Come Bets are automatically off on the Come Out Roll (this can be overridden in the Adv Settings)."
                var game_helper_modal_id = "#come_bet_flat_loses_on_"+num_actual+"_modal"
                var game_helper_modal_message = "You Placed " + game_helper_modal_headline
                PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)

            }

            $scope['come_bet_flat_on_'+num_actual] = 0        
            $scope['come_bet_odds_on_'+num_actual] = 0        
        }
    })
}

function LoseFlatAndOddsOnComeBets($scope, total_of_dice) {

    var pointNumVars = {'4':' Four','5':' Five','6':' Six','8':' Eight','9':' Nine','10':' Ten'};
    angular.forEach(pointNumVars, function(written_word, num_actual) {
        if ($scope['come_bet_flat_on_'+num_actual] > 0) {
            $scope.bank_roll_actual -= $scope['come_bet_flat_on_'+num_actual] 
            $scope.bank_roll_actual -= $scope['come_bet_odds_on_'+num_actual] 

            var game_helper_modal_headline = "Odds and Flat Bet On "+written_word
            var game_helper_modal_win_lose = "Once a Come Bet has Traveled to a Number, if the Seven comes before that number the bet loses. The Odds on Come Bets are automatically off on the Come Out Roll (this can be overridden in the Adv Settings)."
            var game_helper_modal_id = "#come_bet_flat_and_odds_loses_on_"+written_word+"_modal"
            var game_helper_modal_message = "You Placed " + game_helper_modal_headline
            PlayerGameCalls($scope, "LOST", game_helper_modal_id, game_helper_modal_message, game_helper_modal_headline, game_helper_modal_win_lose)

            $scope['come_bet_flat_on_'+num_actual] = 0        
            $scope['come_bet_odds_on_'+num_actual] = 0        
        }
    })
}
