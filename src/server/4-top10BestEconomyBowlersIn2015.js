function getTop10BestEconomyBowlersIn2015(deliveries, matches) {
  // Initialize the bowlerData object
  const bowlerData = {};

  // Iterate through deliveries and matches directly
  deliveries.forEach((delivery) => {
    const match = matches.find((match) => match.id === delivery.match_id);
    if (match && match.season === '2015' && delivery.is_super_over === '0') {
      // Logic for retrieving required data for bowlers
      if (bowlerData[delivery.bowler]) {
        bowlerData[delivery.bowler].totalRunConceded += Number(
          delivery.total_runs,
        );
      } else {
        bowlerData[delivery.bowler] = {
          totalRunConceded: Number(delivery.total_runs),
          totalFairDeliveries: 0,
        };
      }
      if (!(Number(delivery.wide_runs) || Number(delivery.noball_runs))) {
        bowlerData[delivery.bowler].totalFairDeliveries++;
      }
    }
  });
  // calculate economy
  let top10BowlersIn2015 = [];
  for (const bowler in bowlerData) {
    bowlerData[bowler].economy = (
      (bowlerData[bowler].totalRunConceded /
        bowlerData[bowler].totalFairDeliveries) *
      6
    ).toFixed(2);
    top10BowlersIn2015.push({
      name: bowler,
      economy: Number(bowlerData[bowler].economy),
    });
  }

  // Sort Bowler's Data
  top10BowlersIn2015.sort((a, b) => {
    return a.economy - b.economy;
  });

  // Crop top10 best Economy Bowlers
  if (top10BowlersIn2015.length > 10) {
    top10BowlersIn2015 = top10BowlersIn2015.slice(0, 10);
  }
  return top10BowlersIn2015;
}

module.exports = getTop10BestEconomyBowlersIn2015;
