function getTeamWonTossAndMatchBoth(matches) {
  const teamWonTossAndMatchBoth = matches.reduce((acc, match) => {
    if (match.toss_winner == match.winner) {
      if (acc[match.winner]) {
        acc[match.winner]++
      } else {
        acc[match.winner] = 1
      }
    }
    return acc
  }, {})
  return teamWonTossAndMatchBoth
}

module.exports = getTeamWonTossAndMatchBoth;
