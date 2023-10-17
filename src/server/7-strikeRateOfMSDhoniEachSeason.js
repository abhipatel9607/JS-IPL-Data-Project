function getStrikeRateOfMSDhoniEachSeason(matches, deliveries) {
  // Initiate Variable for hold Bowler's Data
  let strikeRateByYear = {};
  //   Loop through each matches and each delivery
  matches.forEach((match) => {
    deliveries.forEach((entry) => {
      //  Logic to retrieve total run and played ball each year
      if (match.id == entry.match_id && entry.batsman == 'MS Dhoni') {
        if (!strikeRateByYear[match.season]) {
          strikeRateByYear[match.season] = {
            totalRunScored: Number(0),
            totalBallPlayed: 0,
          };
        }
        // calculate total runs
        strikeRateByYear[match.season].totalRunScored += Number(
          entry.batsman_runs,
        );
        // calculate total legal ball
        if (!Number(entry.wide_runs)) {
          strikeRateByYear[match.season].totalBallPlayed++;
        }
      }
    });
  });

  //   loop through all years strikeRateByYear which we just extract
  for (const year in strikeRateByYear) {
    // calculate Strike rate
    let strikeRate = (
      (strikeRateByYear[year].totalRunScored /
        strikeRateByYear[year].totalBallPlayed) *
      100
    ).toFixed(2);
    // Update strikeRateByYear variable to striker rate by year
    strikeRateByYear[year] = strikeRate;
  }
  return strikeRateByYear;
}

module.exports = getStrikeRateOfMSDhoniEachSeason;
