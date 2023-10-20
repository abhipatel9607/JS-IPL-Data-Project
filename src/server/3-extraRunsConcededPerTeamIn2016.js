function getExtraRunConcedePerTeamIn2016(matches, deliveries) {

  let playedMatchesIn2016 = matches.reduce((acc, match) => {
    if (match.season == "2016") {
      if (!acc[match.id]) {
        acc[match.id] = 1
      }
    }
    return acc
  }, {})

  let extraRunConcedePerTeamIn2016 = {}

  deliveries.forEach((delivery) => {
    if (playedMatchesIn2016[delivery.match_id]) {
      if (extraRunConcedePerTeamIn2016[delivery.bowling_team]) {
        extraRunConcedePerTeamIn2016[delivery.bowling_team] += Number(delivery.extra_runs)
      } else {
        extraRunConcedePerTeamIn2016[delivery.bowling_team] = Number(delivery.extra_runs)
      }
    }
  })

  return extraRunConcedePerTeamIn2016
}

module.exports = getExtraRunConcedePerTeamIn2016;
