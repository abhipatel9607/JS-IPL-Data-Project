function getBestBowlerEconomyInSuperOver(deliveries) {
  // initiate a variable which hold only SuperOver Deliveries
  let superOversDeliveries = deliveries.filter((entry) => {
    return entry.is_super_over == "1";
  });
  // initiate a variable which hold only SuperOver Bowlers data
  let bowlerData = {};
  //   loop over all superOver deliveries
  superOversDeliveries.forEach((delivery) => {
    if (bowlerData[delivery.bowler]) {
      bowlerData[delivery.bowler]["totalRuns"] += Number(delivery.total_runs);
      bowlerData[delivery.bowler]["totalBalls"]++;
    } else {
      bowlerData[delivery.bowler] = {
        totalRuns: Number(delivery.total_runs),
        totalBalls: 1,
      };
    }
  });
  // Calculate economy and update Variables
  let bestEconomy = null;
  let bestEconomyBowlers = {};


  for (const bowler in bowlerData) {
    let economy = (bowlerData[bowler].totalRuns / bowlerData[bowler].totalBalls) * 6;
    bowlerData[bowler] = economy;

    // Find Best Economy Logic
    if (bestEconomy === null || economy < bestEconomy) {
      bestEconomyBowlers = {}
      bestEconomy = economy;
      bestEconomyBowlers[bowler] = economy;
    } else if (economy === bestEconomy) {
      bestEconomyBowlers[bowler] = economy
    }
  }

  return bestEconomyBowlers
}

module.exports = getBestBowlerEconomyInSuperOver;
