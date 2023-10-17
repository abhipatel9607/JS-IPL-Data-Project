function getOnePlayerDismissedAnotherMaxTime(deliveries) {
  // Initialize an array to store dismiss entries
  const dismissData = [];

  // Loop through deliveries and create dismiss entries
  deliveries.forEach((delivery) => {
    const batsman = delivery.player_dismissed;
    const bowler = delivery.bowler;

    if (batsman && bowler) {
      const dismissEntry = dismissData.find(
        (entry) => entry.batsman === batsman && entry.bowler === bowler,
      );
      if (dismissEntry) {
        dismissEntry.count++;
      } else {
        dismissData.push({ batsman, bowler, count: 1 });
      }
    }
  });

  // Sort dismiss entries based on count(descending order)
  dismissData.sort((a, b) => b.count - a.count);
  let maxOutCount = dismissData[0].count;
  let maxDismissData = [];
  for (let i = 0; i < dismissData.length; i++) {
    if (dismissData[i].count != maxOutCount) break;
    maxDismissData.push(dismissData[i]);
  }
  return maxDismissData;
}

module.exports = getOnePlayerDismissedAnotherMaxTime;
