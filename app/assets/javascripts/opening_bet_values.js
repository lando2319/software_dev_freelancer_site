
function OpeningBetValues($scope)
{
  $scope.player_game_calls = []
  $scope.dealer_call = "Come Out Roll"
  $scope.die_one = 2
  $scope.die_two = 2
  $scope.increase_decrease = "+"
  $scope.bet_denomination = 5
  // sets game status
  $scope.game_helper_modal_id = '#comeOutRollHelp'
  $scope.game_helper_modal = 'comeOutRollHelp'
  $scope.game_helper_modal_message = 'As the shooter, or the person who throws the dice, you will need a line bet, Click on "Don\'t Pass" or "Pass Line"'
  //$scope.player_game_calls = [{call_actual: "You Need A Line Bet", player_rescue: true}]

  $scope.headline_statement = "You Need a Line Bet"
  $scope.game_status = "Come Out Roll"
  $scope.place_bets_are_off = true
  $scope.odds_on_come_bets_are_off = true
  $scope.hardways_are_off = true

  // Sets each possible point with the default stat.
  $scope.four = "4"
  $scope.five = "5"
  $scope.six = "6"
  $scope.eight = "8"
  $scope.nine = "9"
  $scope.ten = "10"

  // Sets all betting values to 0
  $scope.bank_roll_actual = 100
  $scope.line_bet = 0
  $scope.odds_behind_the_line = 0
  $scope.field_bet = 0

  $scope.place_bet_on_the_4 = 0
  $scope.place_bet_on_the_5 = 0
  $scope.place_bet_on_the_6 = 0
  $scope.place_bet_on_the_8 = 0
  $scope.place_bet_on_the_9 = 0
  $scope.place_bet_on_the_10 = 0

  $scope.place_come_bet = 0

  $scope.come_bet_flat_on_4 = 0
  $scope.come_bet_flat_on_5 = 0
  $scope.come_bet_flat_on_6 = 0
  $scope.come_bet_flat_on_8 = 0
  $scope.come_bet_flat_on_9 = 0
  $scope.come_bet_flat_on_10 = 0

  $scope.come_bet_odds_on_4 = 0
  $scope.come_bet_odds_on_5 = 0
  $scope.come_bet_odds_on_6 = 0
  $scope.come_bet_odds_on_8 = 0
  $scope.come_bet_odds_on_9 = 0
  $scope.come_bet_odds_on_10 = 0

  // Dark Side
  $scope.dont_pass_line_bet = 0
  $scope.odds_behind_the_dont_pass_line = 0
  $scope.place_dont_come_bet = 0

  $scope.dont_come_bet_flat_on_4 = 0
  $scope.dont_come_bet_flat_on_5 = 0
  $scope.dont_come_bet_flat_on_6 = 0
  $scope.dont_come_bet_flat_on_8 = 0
  $scope.dont_come_bet_flat_on_9 = 0
  $scope.dont_come_bet_flat_on_10 = 0

  $scope.dont_come_bet_lay_on_4 = 0
  $scope.dont_come_bet_lay_on_5 = 0
  $scope.dont_come_bet_lay_on_6 = 0
  $scope.dont_come_bet_lay_on_8 = 0
  $scope.dont_come_bet_lay_on_9 = 0
  $scope.dont_come_bet_lay_on_10 = 0

  // Prop Bets
  $scope.prop_bet_hard_6 = 0
  $scope.prop_bet_hard_8 = 0
  $scope.prop_bet_hard_4 = 0
  $scope.prop_bet_hard_10 = 0

  $scope.prop_bet_craps = 0
  $scope.prop_bet_red = 0

  $scope.prop_bet_on_1_1 = 0
  $scope.prop_bet_on_2_1 = 0
  $scope.prop_bet_on_6_6 = 0

  $scope.prop_bet_on_6_5 = 0

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
