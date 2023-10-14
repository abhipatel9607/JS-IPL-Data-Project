function getBestBowlerEconomyInSuperOver(deliveries) {
  // initiate a variable which hold only SuperOver Deliveries
  let superOversDeliveries = deliveries.filter((entry) => {
    return entry.is_super_over == "1";
  });
  // initiate a variable which hold only SuperOver Bowlers data
  let bowlerData = {};
  //   loop over all superOver deliveries
  superOversDeliveries.forEach((entry) => {
    if (bowlerData[entry.bowler]) {
      bowlerData[entry.bowler]["totalRuns"] += Number(entry.total_runs);
      bowlerData[entry.bowler]["totalBalls"]++;
    } else {
      bowlerData[entry.bowler] = {
        totalRuns: Number(entry.total_runs),
        totalBalls: 1,
      };
    }
  });
  //calculate economy and update Variables
  let bestEconomy = null;
  let bestEconomyBowler;
  for (const bowler in bowlerData) {
    let economy =
      (bowlerData[bowler].totalRuns / bowlerData[bowler].totalBalls) * 6;
    bowlerData[bowler] = economy;
    // Find Best Economy Logic
    if (bestEconomy == null || economy < bestEconomy) {
      bestEconomy = economy;
      bestEconomyBowler = bowler;
    }
  }
  return { bestEconomyBowler: bestEconomy };
}

module.exports = getBestBowlerEconomyInSuperOver;
