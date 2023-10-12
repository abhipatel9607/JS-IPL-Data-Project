function calcTotalMatchesWinsByYear(matches) {
  let totalMatchesWinsByYear = {};

  matches.forEach((match) => {
    if (
      totalMatchesWinsByYear[match.season] &&
      totalMatchesWinsByYear[match.season][match.winner]
    ) {
      totalMatchesWinsByYear[match.season][match.winner]++;
    } else if (
      totalMatchesWinsByYear[match.season] &&
      !totalMatchesWinsByYear[match.season][match.winner]
    ) {
      totalMatchesWinsByYear[match.season][match.winner] = 1;
    } else {
      totalMatchesWinsByYear[match.season] = {};
      totalMatchesWinsByYear[match.season][match.winner] = 1;
    }
  });

  return totalMatchesWinsByYear;
}

module.exports = calcTotalMatchesWinsByYear;
