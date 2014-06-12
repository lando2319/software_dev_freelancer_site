function FourAndTenTrueOdds($scope, total_of_dice) {
    if (total_of_dice != 7) {
        var starting_bet = $scope.odds_behind_the_line
        var ending_bet = $scope.odds_behind_the_line * 2
        $scope.bank_roll_actual += ending_bet + starting_bet
        if ($scope.odds_behind_the_line > 0) {
        }
        $scope.odds_behind_the_line = 0
    }
    else {
        if ($scope.odds_behind_the_line > 0) {
        }
        $scope.bank_roll_actual -= $scope.odds_behind_the_line
        $scope.odds_behind_the_line = 0
    }
    $scope.four = "4"
    $scope.ten = "10"
}

function FiveAndNineTrueOdds($scope, total_of_dice) {
    if (total_of_dice != 7) {
        var starting_bet = $scope.odds_behind_the_line
        var ending_bet = $scope.odds_behind_the_line * 1.5
        $scope.bank_roll_actual += ending_bet + starting_bet
        if ($scope.odds_behind_the_line > 0) {
        } 
        $scope.odds_behind_the_line = 0
    }
    else {
        if ($scope.odds_behind_the_line > 0) {
        }
        $scope.bank_roll_actual -= $scope.odds_behind_the_line
        $scope.odds_behind_the_line = 0
    }
    $scope.five = "5"
    $scope.nine = "9"
}

function SixAndEightTrueOdds($scope, total_of_dice) {
    if (total_of_dice != 7) {
        var starting_bet = $scope.odds_behind_the_line
        var ending_bet = $scope.odds_behind_the_line * 1.2
        $scope.bank_roll_actual += ending_bet + starting_bet
        if ($scope.odds_behind_the_line > 0) {
        }
        $scope.odds_behind_the_line = 0
    }
    else {
        if ($scope.odds_behind_the_line > 0) {
        }
        $scope.bank_roll_actual -= $scope.odds_behind_the_line
        $scope.odds_behind_the_line = 0
    }
    $scope.eight = "8"
    $scope.six = "6"
}

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
    if ($scope.prop_bet_aces > 0) {
        if (random_1 == 1 && random_2 == 1) {
            var stay_up = $scope.prop_bet_aces
            var stay_up_payout = $scope.prop_bet_aces * 30
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_aces, "WON", " Prop Bet on Aces Bet", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_aces, "LOST", " Prop Bet on Aces Bet")
            $scope.prop_bet_aces = 0
        }
    } 
    if ($scope.prop_bet_twelve > 0) {
        if (random_1 == 6 && random_2 == 6) {
            var stay_up = $scope.prop_bet_twelve
            var stay_up_payout = $scope.prop_bet_twelve * 30
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_aces, "WON", " Prop Bet on Twelve Bet", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_twelve, "LOST", " Prop Bet on Twelve Bet")
            $scope.prop_bet_twelve = 0
        }
    } 
    if ($scope.prop_bet_on_4_4 > 0) {
        if (random_1 == 4 && random_2 == 4) {
            var stay_up = $scope.prop_bet_on_4_4
            var stay_up_payout = $scope.prop_bet_on_4_4 * 30
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_4_4, "WON", " Prop Bet on 4 4 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_4_4, "LOST", " Prop Bet on 4 4 Hop")
            $scope.prop_bet_on_4_4 = 0
        }

    }
    if ($scope.prop_bet_on_5_5 > 0) {
        if (random_1 == 5 && random_2 == 5) {
            var stay_up = $scope.prop_bet_on_5_5
            var stay_up_payout = $scope.prop_bet_on_5_5 * 30
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_5_5, "WON", " Prop Bet on 5 5 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_5_5, "LOST", " Prop Bet on 5 5 Hop")
            $scope.prop_bet_on_5_5 = 0
        }

    }
    if ($scope.prop_bet_on_2_2 > 0) {
        if (random_1 == 2 && random_2 == 2) {
            var stay_up = $scope.prop_bet_on_2_2
            var stay_up_payout = $scope.prop_bet_on_2_2 * 30
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_2_2, "WON", " Prop Bet on 2 2 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_2_2, "LOST", " Prop Bet on 2 2 Hop")
            $scope.prop_bet_on_2_2 = 0
        }

    }
    if ($scope.prop_bet_on_3_3 > 0) {
        if (random_1 == 3 && random_2 == 3) {
            var stay_up = $scope.prop_bet_on_3_3
            var stay_up_payout = $scope.prop_bet_on_3_3 * 30
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_3_3, "WON", " Prop Bet on 3 3 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_3_3, "LOST", " Prop Bet on 3 3 Hop")
            $scope.prop_bet_on_3_3 = 0
        }

    }
    if ($scope.prop_bet_on_6_4 > 0) {
        if ((random_1 == 4 && random_2 == 6) || (random_1 == 6 && random_2 == 4)) {
            var stay_up = $scope.prop_bet_on_6_4
            var stay_up_payout = $scope.prop_bet_on_6_4 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_6_4, "WON", " Prop Bet on 6 4 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_6_4, "LOST", " Prop Bet on 6 4 Hop")
            $scope.prop_bet_on_6_4 = 0
        }
    }
    if ($scope.prop_bet_on_5_4 > 0) {
        if ((random_1 == 4 && random_2 == 5) || (random_1 == 5 && random_2 == 4)) {
            var stay_up = $scope.prop_bet_on_5_4
            var stay_up_payout = $scope.prop_bet_on_5_4 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_5_4, "WON", " Prop Bet on 5 4 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_5_4, "LOST", " Prop Bet on 5 4 Hop")
            $scope.prop_bet_on_5_4 = 0
        }
    }
    if ($scope.prop_bet_on_6_3 > 0) {
        if ((random_1 == 3 && random_2 == 6) || (random_1 == 6 && random_2 == 3)) {
            var stay_up = $scope.prop_bet_on_6_3
            var stay_up_payout = $scope.prop_bet_on_6_3 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_6_3, "WON", " Prop Bet on 6 3 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_6_3, "LOST", " Prop Bet on 6 3 Hop")
            $scope.prop_bet_on_6_3 = 0
        }
    }
    if ($scope.prop_bet_on_5_3 > 0) {
        if ((random_1 == 3 && random_2 == 5) || (random_1 == 5 && random_2 == 3)) {
            var stay_up = $scope.prop_bet_on_5_3
            var stay_up_payout = $scope.prop_bet_on_5_3 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_5_3, "WON", " Prop Bet on 5 3 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_5_3, "LOST", " Prop Bet on 5 3 Hop")
            $scope.prop_bet_on_5_3 = 0
        }
    }
    if ($scope.prop_bet_on_6_2 > 0) {
        if ((random_1 == 2 && random_2 == 6) || (random_1 == 6 && random_2 == 2)) {
            var stay_up = $scope.prop_bet_on_6_2
            var stay_up_payout = $scope.prop_bet_on_6_2 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_6_2, "WON", " Prop Bet on 6 2 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_6_2, "LOST", " Prop Bet on 6 2 Hop")
            $scope.prop_bet_on_6_2 = 0
        }
    }
    if ($scope.prop_bet_on_4_2 > 0) {
        if ((random_1 == 4 && random_2 == 2) || (random_1 == 2 && random_2 == 4)) {
            var stay_up = $scope.prop_bet_on_4_2
            var stay_up_payout = $scope.prop_bet_on_4_2 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_4_2, "WON", " Prop Bet on 4 2 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_4_2, "LOST", " Prop Bet on 4 2 Hop")
            $scope.prop_bet_on_4_2 = 0
        }
    }
    if ($scope.prop_bet_on_5_1 > 0) {
        if ((random_1 == 1 && random_2 == 5) || (random_1 == 5 && random_2 == 1)) {
            var stay_up = $scope.prop_bet_on_5_1
            var stay_up_payout = $scope.prop_bet_on_5_1 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_5_1, "WON", " Prop Bet on 5 1 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_5_1, "LOST", " Prop Bet on 5 1 Hop")
            $scope.prop_bet_on_5_1 = 0
        }
    }
    if ($scope.prop_bet_on_4_1 > 0) {
        if ((random_1 == 1 && random_2 == 4) || (random_1 == 4 && random_2 == 1)) {
            var stay_up = $scope.prop_bet_on_4_1
            var stay_up_payout = $scope.prop_bet_on_4_1 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_4_1, "WON", " Prop Bet on 4 1 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_4_1, "LOST", " Prop Bet on 4 1 Hop")
            $scope.prop_bet_on_4_1 = 0
        }
    }
    if ($scope.prop_bet_on_3_2 > 0) {
        if ((random_1 == 2 && random_2 == 3) || (random_1 == 3 && random_2 == 2)) {
            var stay_up = $scope.prop_bet_on_3_2
            var stay_up_payout = $scope.prop_bet_on_3_2 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_3_2, "WON", " Prop Bet on 3 2 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_3_2, "LOST", " Prop Bet on 3 2 Hop")
            $scope.prop_bet_on_3_2 = 0
        }
    }
    if ($scope.prop_bet_on_3_1 > 0) {
        if ((random_1 == 1 && random_2 == 3) || (random_1 == 3 && random_2 == 1)) {
            var stay_up = $scope.prop_bet_on_3_1
            var stay_up_payout = $scope.prop_bet_on_3_1 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_3_1, "WON", " Prop Bet on 3 1 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_3_1, "LOST", " Prop Bet on 3 1 Hop")
            $scope.prop_bet_on_3_1 = 0
        }
    }
    if ($scope.prop_bet_on_4_3 > 0) {
        if ((random_1 == 3 && random_2 == 4) || (random_1 == 4 && random_2 == 3)) {
            var stay_up = $scope.prop_bet_on_4_3
            var stay_up_payout = $scope.prop_bet_on_4_3 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_4_3, "WON", " Prop Bet on 4 3 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_4_3, "LOST", " Prop Bet on 4 3 Hop")
            $scope.prop_bet_on_4_3 = 0
        }
    }
    if ($scope.prop_bet_on_5_2 > 0) {
        if ((random_1 == 2 && random_2 == 5) || (random_1 == 5 && random_2 == 2)) {
            var stay_up = $scope.prop_bet_on_5_2
            var stay_up_payout = $scope.prop_bet_on_5_2 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_5_2, "WON", " Prop Bet on 5 2 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_5_2, "LOST", " Prop Bet on 5 2 Hop")
            $scope.prop_bet_on_5_2 = 0
        }
    }
    if ($scope.prop_bet_on_6_1 > 0) {
        if ((random_1 == 1 && random_2 == 6) || (random_1 == 6 && random_2 == 1)) {
            var stay_up = $scope.prop_bet_on_6_1
            var stay_up_payout = $scope.prop_bet_on_6_1 * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_on_6_1, "WON", " Prop Bet on 6 1 Hop", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_on_6_1, "LOST", " Prop Bet on 6 1 Hop")
            $scope.prop_bet_on_6_1 = 0
        }
    }
    if ($scope.prop_bet_yo > 0) {
        if ((random_1 == 5 && random_2 == 6) || (random_1 == 6 && random_2 == 5)) {
            var stay_up = $scope.prop_bet_yo
            var stay_up_payout = $scope.prop_bet_yo * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_yo, "WON", " Prop Bet on Yo (eleven)", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_yo, "LOST", " Prop Bet on Yo (eleven)")
            $scope.prop_bet_yo = 0
        }
    }
    if ($scope.prop_bet_ace_deuce > 0) {
        if ((random_1 == 2 && random_2 == 1) || (random_1 == 1 && random_2 == 2)) {
            var stay_up = $scope.prop_bet_ace_deuce
            var stay_up_payout = $scope.prop_bet_ace_deuce * 15
            $scope.bank_roll_actual += stay_up_payout
            PlayerGameCalls($scope, $scope.prop_bet_ace_deuce, "WON", " Prop Bet on Ace Deuce", stay_up, stay_up_payout)
        } else {
            PlayerGameCalls($scope, $scope.prop_bet_ace_deuce, "LOST", " Prop Bet on Ace Deuce")
            $scope.prop_bet_ace_deuce = 0
        }
    }
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
