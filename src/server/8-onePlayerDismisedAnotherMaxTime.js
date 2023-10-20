function getPlayerWithMaxDismissalsByBowler(deliveries) {
  let maxDismissalsData = {
    maxDismissCount: 0,
    dismissedPlayer: "",
    bowler: "",
  };

  // eslint-disable-next-line no-unused-vars
  let dismissalsData = deliveries.reduce((acc, delivery) => {
    if (delivery.player_dismissed) {
      const dismissedPlayer = delivery.player_dismissed;
      const bowler = delivery.bowler;

      if (acc[dismissedPlayer] && acc[dismissedPlayer][bowler]) {
        acc[dismissedPlayer][bowler]++
      } else if (acc[dismissedPlayer] && !acc[dismissedPlayer][bowler]) {
        acc[dismissedPlayer][bowler] = 1
      } else {
        acc[dismissedPlayer] = {
          [bowler]: 1,
        }
      }

      const dismissalCount = acc[dismissedPlayer][bowler]

      if (dismissalCount > maxDismissalsData.maxDismissCount) {
        maxDismissalsData = {
          maxDismissCount: dismissalCount,
          dismissedPlayer: dismissedPlayer,
          bowler: { [bowler]: dismissalCount },
        };
      } else if (dismissalCount == maxDismissalsData.maxDismissCount) {
        maxDismissalsData.bowler[bowler] = dismissalCount;
      }
    }
    return acc;
  }, {});

  return maxDismissalsData;
}

module.exports = getPlayerWithMaxDismissalsByBowler;
