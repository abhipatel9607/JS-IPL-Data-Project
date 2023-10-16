function getTeamWonTossAndMatchBoth(matches) {
  let teamWonTossAndMatchBoth = {};
  matches.forEach((match) => {
    if (match.toss_winner == match.winner) {
      if (teamWonTossAndMatchBoth[match.winner]) {
        teamWonTossAndMatchBoth[match.winner]++;
      } else {
        teamWonTossAndMatchBoth[match.winner] = 1;
      }
    }
  });
  return teamWonTossAndMatchBoth;
}


module.exports = getTeamWonTossAndMatchBoth;
