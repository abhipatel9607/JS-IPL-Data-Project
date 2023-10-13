function calcHighestTimeManOfTheMatchAwardEachSeason(matches) {
  // Initiate a variable which will hold all Seasons and Total played Matches

  let allYearsAndPlayedMatches = {};
  matches.forEach((match) => {
    if (allYearsAndPlayedMatches[match.season]) {
      allYearsAndPlayedMatches[match.season]++;
    } else {
      allYearsAndPlayedMatches[match.season] = 1;
    }
  });

  //   Initiate a variable to hold all unique Seasons
  let seasons = Object.keys(allYearsAndPlayedMatches);
  //   Initiate a variable to hold all Seasons and its Players of the Season
  let highestTimeManOfTheMatchAwardEachSeason = {};
  // calculate how many time any player won Man of the match by Season
  seasons.forEach((season) => {
    let manOfMatchWinnerAndCount = {};
    matches.forEach((match) => {
      if (season == match.season) {
        if (manOfMatchWinnerAndCount[match.player_of_match]) {
          manOfMatchWinnerAndCount[match.player_of_match]++;
        } else {
          manOfMatchWinnerAndCount[match.player_of_match] = 1;
        }
      }
    });

    // Calculate which Player won max Times Man of the Match
    let max = 0;
    let maxPlayer;
    for (const key in manOfMatchWinnerAndCount) {
      if (manOfMatchWinnerAndCount[key] > max) {
        max = manOfMatchWinnerAndCount[key];
        maxPlayer = key;
      }
    }

    // assign final result to highestTimeManOfTheMatchAwardEachSeason
    highestTimeManOfTheMatchAwardEachSeason[season] = maxPlayer;
  });

  return highestTimeManOfTheMatchAwardEachSeason;
}

module.exports = calcHighestTimeManOfTheMatchAwardEachSeason;
