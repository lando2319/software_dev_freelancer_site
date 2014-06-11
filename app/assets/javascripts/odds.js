function FourAndTenTrueOdds($scope, total_of_dice) {
    if (total_of_dice != 7) {
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 3)
        $scope.odds_behind_the_line = 0
    }
    else {
        console.log("testing")
        $scope.bank_roll_actual += ($scope.odds_behind_the_dont_pass_line * 1.5)
        $scope.odds_behind_the_dont_pass_line = 0
    }
    $scope.four = "4"
    $scope.ten = "10"
}

function FiveAndNineTrueOdds($scope, total_of_dice) {
    if (total_of_dice != 7) {
        $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.5)
        $scope.odds_behind_the_line = 0
    }
    else {
      $scope.bank_roll_actual += ($scope.odds_behind_the_dont_pass_line * (2 / 3))
      $scope.odds_behind_the_dont_pass_line = 0
    }
    $scope.five = "5"
    $scope.nine = "9"
}

function SixAndEightTrueOdds($scope, total_of_dice) {
    if (total_of_dice != 7) {
      $scope.bank_roll_actual += ($scope.odds_behind_the_line * 2.2)
      $scope.odds_behind_the_line = 0
    }
    else {
      $scope.bank_roll_actual += ($scope.odds_behind_the_dont_pass_line * (5 / 6))
      $scope.odds_behind_the_dont_pass_line = 0
    }
    $scope.eight = "8"
    $scope.six = "6"
}

function EvaluateTheField($scope, total_of_dice) {
    if (total_of_dice == 2) {
        $scope.bank_roll_actual += $scope.field_bet * 2
    }
    if (total_of_dice == 3 || total_of_dice == 4 || total_of_dice == 9 || total_of_dice == 10 || total_of_dice == 11) {
        $scope.bank_roll_actual += $scope.field_bet
          
        GameCalls($scope, $scope.field_bet, "won", "field")
    }
    if (total_of_dice == 12) {
        $scope.bank_roll_actual += $scope.field_bet * 3
    }
    if (total_of_dice == 5 || total_of_dice == 6 || total_of_dice == 7 || total_of_dice == 8) {
        $scope.bank_roll_actual -= $scope.field_bet
        $scope.field_bet = 0
    }
}

function PropBets($scope, random_1, random_2) {
    if (random_1 == 1 && random_2 == 1) {
      var stay_up_craps = $scope.prop_bet_craps
      $scope.bank_roll_actual += $scope.prop_bet_craps * 7
      var stay_up = $scope.prop_bet_aces
      $scope.bank_roll_actual += $scope.prop_bet_aces * 30
      ClearAllProps($scope)
      $scope.prop_bet_aces = stay_up
      $scope.prop_bet_craps = stay_up_craps
    }
    else if ((random_1 == 2 && random_2 == 1) || (random_1 == 1 && random_2 == 2)) {
      var stay_up_craps = $scope.prop_bet_craps
      $scope.bank_roll_actual += $scope.prop_bet_craps * 7
      var stay_up = $scope.prop_bet_ace_deuce
      $scope.bank_roll_actual += $scope.prop_bet_ace_deuce * 15
      ClearAllProps($scope)
      $scope.prop_bet_ace_deuce = stay_up
      $scope.prop_bet_craps = stay_up_craps
    }
    else if ((random_1 == 3 && random_2 == 1) || (random_1 == 1 && random_2 == 3)) {
      var stay_up = $scope.prop_bet_on_3_1
      $scope.bank_roll_actual += $scope.prop_bet_on_3_1 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_3_1 = stay_up
    }
    else if (random_1 == 2 && random_2 == 2) {
      var stay_up = $scope.prop_bet_on_2_2
      $scope.bank_roll_actual += $scope.prop_bet_on_2_2 * 30
      ClearAllProps($scope)
      $scope.prop_bet_on_2_2 = stay_up
    }
    else if ((random_1 == 4 && random_2 == 1) || (random_1 == 1 && random_2 == 4)) {
      var stay_up = $scope.prop_bet_on_4_1
      $scope.bank_roll_actual += $scope.prop_bet_on_4_1 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_4_1 = stay_up
    }
    else if ((random_1 == 2 && random_2 == 3) || (random_1 == 3 && random_2 == 2)) {
      var stay_up = $scope.prop_bet_on_3_2
      $scope.bank_roll_actual += $scope.prop_bet_on_3_2 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_3_2 = stay_up
    }
    else if ((random_1 == 5 && random_2 == 1) || (random_1 == 1 && random_2 == 5)) {
      var stay_up = $scope.prop_bet_on_5_1
      $scope.bank_roll_actual += $scope.prop_bet_on_5_1 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_5_1 = stay_up
    }
    else if ((random_1 == 4 && random_2 == 2) || (random_1 == 2 && random_2 == 4)) {
      var stay_up = $scope.prop_bet_on_4_2
      $scope.bank_roll_actual += $scope.prop_bet_on_4_2 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_4_2 = stay_up
    }
    else if (random_1 == 3 && random_2 == 3) {
      var stay_up = $scope.prop_bet_on_3_3
      $scope.bank_roll_actual += $scope.prop_bet_on_3_3 * 30
      ClearAllProps($scope)
      $scope.prop_bet_on_3_3 = stay_up
    }
    else if ((random_1 == 6 && random_2 == 1) || (random_1 == 1 && random_2 == 6)) {
      var stay_up_red = $scope.prop_bet_red
      $scope.bank_roll_actual += $scope.prop_bet_red * 4
      var stay_up = $scope.prop_bet_on_6_1
      $scope.bank_roll_actual += $scope.prop_bet_on_6_1 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_6_1 = stay_up
      $scope.prop_bet_red = stay_up_red
    }
    else if ((random_1 == 5 && random_2 == 2) || (random_1 == 2 && random_2 == 5)) {
      var stay_up_red = $scope.prop_bet_red
      $scope.bank_roll_actual += $scope.prop_bet_red * 4
      var stay_up = $scope.prop_bet_on_5_2
      $scope.bank_roll_actual += $scope.prop_bet_on_5_2 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_5_2 = stay_up
      $scope.prop_bet_red = stay_up_red
    }
    else if ((random_1 == 4 && random_2 == 3) || (random_1 == 3 && random_2 == 4)) {
      var stay_up_red = $scope.prop_bet_red
      $scope.bank_roll_actual += $scope.prop_bet_red * 4
      var stay_up = $scope.prop_bet_on_4_3
      $scope.bank_roll_actual += $scope.prop_bet_on_4_3 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_4_3 = stay_up
      $scope.prop_bet_red = stay_up_red
    }
    else if ((random_1 == 6 && random_2 == 2) || (random_1 == 2 && random_2 == 6)) {
      var stay_up = $scope.prop_bet_on_6_2
      $scope.bank_roll_actual += $scope.prop_bet_on_6_2 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_6_2 = stay_up
    }
    else if ((random_1 == 5 && random_2 == 3) || (random_1 == 3 && random_2 == 5)) {
      var stay_up = $scope.prop_bet_on_5_1
      $scope.bank_roll_actual += $scope.prop_bet_on_5_1 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_5_1 = stay_up
    }
    else if (random_1 == 4 && random_2 == 4) {
      var stay_up = $scope.prop_bet_on_4_4
      $scope.bank_roll_actual += $scope.prop_bet_on_4_4 * 30
      ClearAllProps($scope)
      $scope.prop_bet_on_4_4 = stay_up
    }
    else if ((random_1 == 6 && random_2 == 3) || (random_1 == 3 && random_2 == 6)) {
      var stay_up = $scope.prop_bet_on_6_3
      $scope.bank_roll_actual += $scope.prop_bet_on_6_3 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_6_3 = stay_up
    }
    else if ((random_1 == 5 && random_2 == 4) || (random_1 == 4 && random_2 == 5)) {
      var stay_up = $scope.prop_bet_on_5_4
      $scope.bank_roll_actual += $scope.prop_bet_on_5_4 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_5_4 = stay_up
    }
    else if ((random_1 == 6 && random_2 == 4) || (random_1 == 3 && random_2 == 4)) {
      var stay_up = $scope.prop_bet_on_4_3
      $scope.bank_roll_actual += $scope.prop_bet_on_4_3 * 15
      ClearAllProps($scope)
      $scope.prop_bet_on_4_3 = stay_up
    }
    else if (random_1 == 5 && random_2 == 5) {
      var stay_up = $scope.prop_bet_on_5_5
      $scope.bank_roll_actual += $scope.prop_bet_on_5_5 * 30
      ClearAllProps($scope)
      $scope.prop_bet_on_5_5 = stay_up
    }
    else if ((random_1 == 6 && random_2 == 5) || (random_1 == 5 && random_2 == 6)) {
      var stay_up = $scope.prop_bet_yo
      $scope.bank_roll_actual += $scope.prop_bet_yo * 15
      ClearAllProps($scope)
      $scope.prop_bet_yo = stay_up
    }
    else if (random_1 == 6 && random_2 == 6) {
      var stay_up_craps = $scope.prop_bet_craps
      $scope.bank_roll_actual += $scope.prop_bet_craps * 7
      var stay_up = $scope.prop_bet_twelve
      $scope.bank_roll_actual += $scope.prop_bet_twelve * 30
      ClearAllProps($scope)
      $scope.prop_bet_twelve = stay_up
      $scope.prop_bet_craps = stay_up_craps
    }
}

function ClearAllProps($scope) {
$scope.bank_roll_actual -=   $scope.prop_bet_aces
$scope.bank_roll_actual -=   $scope.prop_bet_ace_deuce
$scope.bank_roll_actual -=   $scope.prop_bet_twelve
$scope.bank_roll_actual -=   $scope.prop_bet_yo

$scope.bank_roll_actual -=   $scope.prop_bet_red
$scope.bank_roll_actual -=   $scope.prop_bet_craps

$scope.bank_roll_actual -=   $scope.prop_bet_on_6_1
$scope.bank_roll_actual -=   $scope.prop_bet_on_5_2
$scope.bank_roll_actual -=   $scope.prop_bet_on_4_3

$scope.bank_roll_actual -=   $scope.prop_bet_on_3_1
$scope.bank_roll_actual -=   $scope.prop_bet_on_2_2
$scope.bank_roll_actual -=   $scope.prop_bet_on_3_2
$scope.bank_roll_actual -=   $scope.prop_bet_on_4_1
$scope.bank_roll_actual -=   $scope.prop_bet_on_5_1
$scope.bank_roll_actual -=   $scope.prop_bet_on_4_2
$scope.bank_roll_actual -=   $scope.prop_bet_on_3_3
$scope.bank_roll_actual -=   $scope.prop_bet_on_6_2
$scope.bank_roll_actual -=   $scope.prop_bet_on_5_3
$scope.bank_roll_actual -=   $scope.prop_bet_on_4_4
$scope.bank_roll_actual -=   $scope.prop_bet_on_6_3
$scope.bank_roll_actual -=   $scope.prop_bet_on_5_4
$scope.bank_roll_actual -=   $scope.prop_bet_on_6_4
$scope.bank_roll_actual -=   $scope.prop_bet_on_5_5

  $scope.prop_bet_aces = 0
  $scope.prop_bet_ace_deuce = 0
  $scope.prop_bet_twelve = 0
  $scope.prop_bet_yo = 0

  $scope.prop_bet_red = 0
  $scope.prop_bet_craps = 0

  $scope.prop_bet_on_6_1 = 0
  $scope.prop_bet_on_5_2 = 0
  $scope.prop_bet_on_4_3 = 0

  $scope.prop_bet_on_3_1 = 0
  $scope.prop_bet_on_2_2 = 0
  $scope.prop_bet_on_3_2 = 0
  $scope.prop_bet_on_4_1 = 0
  $scope.prop_bet_on_5_1 = 0
  $scope.prop_bet_on_4_2 = 0
  $scope.prop_bet_on_3_3 = 0
  $scope.prop_bet_on_6_2 = 0
  $scope.prop_bet_on_5_3 = 0
  $scope.prop_bet_on_4_4 = 0
  $scope.prop_bet_on_6_3 = 0
  $scope.prop_bet_on_5_4 = 0
  $scope.prop_bet_on_6_4 = 0
  $scope.prop_bet_on_5_5 = 0
}





