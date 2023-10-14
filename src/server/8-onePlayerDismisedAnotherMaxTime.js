function getOnePlayerDismissedAnotherMaxTime(deliveries) {
  // Initiate Variable for hold dismissed Batman, Bowler and count Data
  let dismissedData = {};
  //   loop through deliveries and store dismissed data for each batsman
  deliveries.forEach((entry) => {
    if (
      dismissedData[entry.player_dismissed] &&
      dismissedData[entry.player_dismissed][entry.bowler]
    ) {
      dismissedData[entry.player_dismissed][entry.bowler]++;
    } else if (
      dismissedData[entry.player_dismissed] &&
      !dismissedData[entry.player_dismissed][entry.bowler]
    ) {
      dismissedData[entry.player_dismissed][entry.bowler] = 1;
    } else if (!dismissedData[entry.player_dismissed]) {
      dismissedData[entry.player_dismissed] = {};
      dismissedData[entry.player_dismissed][entry.bowler] = 1;
    }
  });

  //   initialize a Variable to hold our final Max times dismissed a player by another player data
  let playerDismissedAnotherPlayerMaxTimeData = {};
  let maxCount = 0;
  //   logic for extract require data
  for (const [batsman, bowlerObj] of Object.entries(dismissedData)) {
    for (const [bowler, outCount] of Object.entries(bowlerObj)) {
      if (batsman && outCount > maxCount) {
        maxCount = outCount;
        playerDismissedAnotherPlayerMaxTimeData = {
          player_dismissed: batsman,
          bowler_name: bowler,
          count: outCount,
        };
      }
    }
  }
  return playerDismissedAnotherPlayerMaxTimeData;
}

module.exports = getOnePlayerDismissedAnotherMaxTime;
