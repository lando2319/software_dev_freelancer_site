function FourAndTenTrueOdds($scope, total_of_dice) {
    $scope.bank_roll_actual += ($scope.odds_behind_the_line * 3)
    $scope.odds_behind_the_line = 0
    $scope.four = "Four"
    $scope.ten = "Ten"
}

function FiveAndNineTrueOdds($scope, total_of_dice) {
    $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.5)
    $scope.odds_behind_the_line = 0
    $scope.five = "Five"
    $scope.nine = "Nine"
}

function SixAndEightTrueOdds($scope, total_of_dice) {
    $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.2)
    $scope.odds_behind_the_line = 0
    $scope.eight = "Eight"
    $scope.six = "Six"
}

function EvaluateTheField($scope, total_of_dice) {
    if (total_of_dice == 2) {
        $scope.bank_roll_actual += $scope.field_bet * 2
    }
    if (total_of_dice == 3 || total_of_dice == 4 || total_of_dice == 9 || total_of_dice == 10 || total_of_dice == 11) {
        $scope.bank_roll_actual += $scope.field_bet
    }
    if (total_of_dice == 12) {
        $scope.bank_roll_actual += $scope.field_bet * 3
    }
    if (total_of_dice == 5 || total_of_dice == 6 || total_of_dice == 7 || total_of_dice == 8) {
        $scope.bank_roll_actual -= $scope.field_bet
        $scope.field_bet = 0
    }
}
