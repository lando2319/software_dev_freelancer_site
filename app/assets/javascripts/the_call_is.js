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
        HitsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        PayPlaceBets($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.come_bet_odds_on_4 * 3)
        $scope.bank_roll_actual += ($scope.come_bet_flat_on_4 * 2)
        $scope.come_bet_flat_on_4 = 0
        $scope.come_bet_odds_on_4 = 0
        ComesGoToThe($scope, total_of_dice)
    }
}

function TheCallIs5($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        HitsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        PayPlaceBets($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.come_bet_odds_on_5 * 2.5)
        $scope.bank_roll_actual += ($scope.come_bet_flat_on_5 * 2)
        $scope.come_bet_flat_on_5 = 0
        $scope.come_bet_odds_on_5 = 0
        ComesGoToThe($scope, total_of_dice)
    }
}

function TheCallIs6($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        HitsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        PayPlaceBets($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.come_bet_odds_on_6 * 2.2)
        $scope.bank_roll_actual += ($scope.come_bet_flat_on_6 * 2)
        $scope.come_bet_flat_on_6 = 0
        $scope.come_bet_odds_on_6 = 0
        ComesGoToThe($scope, total_of_dice)
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
        HitsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        PayPlaceBets($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.come_bet_odds_on_8 * 2.2)
        $scope.bank_roll_actual += ($scope.come_bet_flat_on_8 * 2)
        $scope.come_bet_flat_on_8 = 0
        $scope.come_bet_odds_on_8 = 0
        ComesGoToThe($scope, total_of_dice)
    }
}

function TheCallIs9($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        HitsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        PayPlaceBets($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.come_bet_odds_on_9 * 2.5)
        $scope.bank_roll_actual += ($scope.come_bet_flat_on_9 * 2)
        $scope.come_bet_flat_on_9 = 0
        $scope.come_bet_odds_on_9 = 0
        ComesGoToThe($scope, total_of_dice)
    }
}

function TheCallIs10($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        HitsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        PayPlaceBets($scope, total_of_dice)
        $scope.bank_roll_actual += ($scope.come_bet_odds_on_10 * 3)
        $scope.bank_roll_actual += ($scope.come_bet_flat_on_10 * 2)
        $scope.come_bet_flat_on_10 = 0
        $scope.come_bet_odds_on_10 = 0
        ComesGoToThe($scope, total_of_dice)
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

