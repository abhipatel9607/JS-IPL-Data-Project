function calcTop10BowlersIn2015(deliveries, allMatchesId2015) {
  // Initiate Variable for hold Bowler's Data
  const bowlerData = {};

  // Loop through each delivery
  deliveries.forEach((eachDelivery) => {
    allMatchesId2015.forEach((id) => {
      if (eachDelivery.match_id == id) {
        // Logic for retrieve require data of Bowler
        if (bowlerData[eachDelivery.bowler]) {
          bowlerData[eachDelivery.bowler].totalRunConceded += Number(
            eachDelivery.total_runs
          );
        } else {
          bowlerData[eachDelivery.bowler] = {
            totalRunConceded: Number(eachDelivery.total_runs),
            totalFairDeliveries: 0,
          };
        }
        if (
          !(Number(eachDelivery.wide_runs) || Number(eachDelivery.noball_runs))
        ) {
          bowlerData[eachDelivery.bowler].totalFairDeliveries++;
        }
      }
    });
  });

  // Initiate Variable for hold Top 10 economical Bowler's Data
  let top10BowlersIn2015 = [];

  // Loop through each bowler data which we retrieved
  for (const bowler in bowlerData) {
    // calculate total over he balled
    bowlerData[bowler].totalOver = Number(
      (bowlerData[bowler].totalFairDeliveries / 6).toFixed(2)
    );
    // calculate economy
    bowlerData[bowler].economy = (
      bowlerData[bowler].totalRunConceded / bowlerData[bowler].totalOver
    ).toFixed(2);
    top10BowlersIn2015.push({
      name: bowler,
      economy: Number(bowlerData[bowler].economy),
    });
  }
  // console.log(bowlerData);

  // Sort Top 10 economical Bowler's Data
  top10BowlersIn2015.sort((a, b) => {
    return a.economy - b.economy;
  });
  top10BowlersIn2015.length = 10;

  return top10BowlersIn2015;
}

module.exports = calcTop10BowlersIn2015;
