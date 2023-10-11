function calcTotalMatcheWinsByYear(matches) {
  let totalMatcheWinsByYear = {};

  matches.forEach((match) => {
    if (
      totalMatcheWinsByYear[match.season] &&
      totalMatcheWinsByYear[match.season][match.winner]
    ) {
      totalMatcheWinsByYear[match.season][match.winner]++;
    } else if (
      totalMatcheWinsByYear[match.season] &&
      !totalMatcheWinsByYear[match.season][match.winner]
    ) {
      totalMatcheWinsByYear[match.season][match.winner] = 1;
    } else {
      totalMatcheWinsByYear[match.season] = {};
      totalMatcheWinsByYear[match.season][match.winner] = 1;
    }
  });

  return totalMatcheWinsByYear;
}

module.exports = calcTotalMatcheWinsByYear;
