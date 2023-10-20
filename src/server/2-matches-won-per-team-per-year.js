function calcMatchesWonPerTeamPerYear(matches) {

  const matchesWonPerTeamPerYear = matches.reduce((acc, match) => {

    if (acc[match.season] && acc[match.season][match.winner]) {
      acc[match.season][match.winner]++
    } else if (acc[match.season] && !(acc[match.season][match.winner])) {
      acc[match.season][match.winner] = 1
    } else {
      acc[match.season] = {}
      acc[match.season][match.winner] = 1
    }

    return acc
  }, {})

  return matchesWonPerTeamPerYear
}

module.exports = calcMatchesWonPerTeamPerYear;
