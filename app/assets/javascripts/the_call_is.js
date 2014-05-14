// function for each dice call 2 - 12

// Craps Numbers
function TheCallIs2($scope, total_of_dice) {
    AcesAceDeuceTwelve($scope, total_of_dice)
}

function TheCallIs3($scope, total_of_dice) {
    AcesAceDeuceTwelve($scope, total_of_dice)
}

function TheCallIs12($scope, total_of_dice) {
    AcesAceDeuceTwelve($scope, total_of_dice)
}

// Point Numbers
function TheCallIs4($scope, total_of_dice) {
    PointNumbers($scope, total_of_dice)
}

function TheCallIs5($scope, total_of_dice) {
    PointNumbers($scope, total_of_dice)
}

function TheCallIs6($scope, total_of_dice) {
    PointNumbers($scope, total_of_dice)
}

function TheCallIs8($scope, total_of_dice) {
    PointNumbers($scope, total_of_dice)
}

function TheCallIs9($scope, total_of_dice) {
    PointNumbers($scope, total_of_dice)
}

function TheCallIs10($scope, total_of_dice) {
    PointNumbers($scope, total_of_dice)
}

// Naturals
function TheCallIs7($scope, total_of_dice) {
    Naturals($scope, total_of_dice)
}

function TheCallIs11($scope, total_of_dice) {
    Naturals($scope, total_of_dice)
}

// groups similar actions of each category
function AcesAceDeuceTwelve($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        LineAway($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        ComeAway($scope, total_of_dice)
    }
}

function PointNumbers($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll") {
        SetsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is == total_of_dice)) {
        FrontLineWinner($scope, total_of_dice)
        HitsThePoint($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is " && ($scope.point_is != total_of_dice)) {
        $scope.the_call_is = total_of_dice
        ComesGoToThe($scope, total_of_dice)
        PayPlaceBets($scope, total_of_dice)
    }
}

function Naturals($scope, total_of_dice) {
    if ($scope.game_status == "Come Out Roll" ) {
        FrontLineWinner($scope, total_of_dice)
    }
    else if ($scope.game_status == "Point is ") {
        PayTheCome($scope, total_of_dice)
    }
}
