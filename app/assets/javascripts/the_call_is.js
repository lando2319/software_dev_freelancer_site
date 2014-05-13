// function for each dice call 2 - 12

function TheCallIs2($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        LineAway($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        ComeAway($scope, total_of_dice)
    }
}

function TheCallIs3($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        LineAway($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        ComeAway($scope, total_of_dice)
    }
}

function TheCallIs4($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 3)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off_message = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.four = "Four"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.8) : $scope.place_bets_off_message = "Bets are off"
    }
}

function TheCallIs5($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.5)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off_message = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.five = "Five"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.4) : $scope.place_bets_off_message = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs6($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.2)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off_message = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.six = "Six"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += (($scope.place_bet_on_the_8 / 6  ) * 7 ) : $scope.place_bets_off_message = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs7($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        FrontLineWinner($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        console.log('hello')
        SevenOut($scope, total_of_dice)
    }
}

function TheCallIs8($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.2)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off_message = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.eight = "Eight"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += (($scope.place_bet_on_the_8 / 6  ) * 7 ) : $scope.place_bets_off_message = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs9($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.5)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off_message = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.nine = "Nine"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_9 * 1.4) : $scope.place_bets_off_message = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs10($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 3)
        $scope.odds_behind_the_line = 0
        $scope.place_bets_off_message = "Off Coming Out (uncheck if you wish to have your bets working)"
        $scope.ten = "Ten"
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.place_bets_are_off == false ? $scope.bank_roll_actual += ($scope.place_bet_on_the_10 * 1.8) : $scope.place_bets_off_message = "Bets are off"
        $scope.the_call_is = total_of_dice
    }
}

function TheCallIs11($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        FrontLineWinner($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        PayTheCome($scope, total_of_dice)
    }
}

function TheCallIs12($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        LineAway($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        ComeAway($scope, total_of_dice)
    }
}

