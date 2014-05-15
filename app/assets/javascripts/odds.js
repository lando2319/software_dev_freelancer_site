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
