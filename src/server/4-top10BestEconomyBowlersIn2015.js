function getTop10BestEconomyBowlersIn2015(matches, deliveries) {

  const playedMatchesIn2015 = matches.reduce((acc, match) => {
    if (match.season == "2015") {
      if (!acc[match.id]) {
        acc[match.id] = 1
      }
    }
    return acc
  }, {})

  let bowlerData = {}
  deliveries.forEach((delivery) => {
    if (playedMatchesIn2015[delivery.match_id]) {
      const isWide = Number(delivery.wide_runs)
      const isNoBall = Number(delivery.noball_runs)
      const isBye = Number(delivery.bye_runs)
      const isLegBye = Number(delivery.legbye_runs)
      const isPenalty = Number(delivery.penalty_runs)
      if (!bowlerData[delivery.bowler]) {
        bowlerData[delivery.bowler] = {
          totalBall: 0,
          totalRunConcede: 0
        }
      }
      if (!isBye && !isLegBye && !isPenalty) {
        bowlerData[delivery.bowler]["totalRunConcede"] += Number(delivery.total_runs)
      }
      if (!isWide && !isNoBall) {
        bowlerData[delivery.bowler]["totalBall"]++
      }
    }
  })

  let bowlersEconomy2015 = []
  for (const bowler in bowlerData) {
    const economy = Number((((bowlerData[bowler].totalRunConcede / bowlerData[bowler].totalBall) * 6)).toFixed(2))
    bowlersEconomy2015.push({ [bowler]: economy })
  }

  bowlersEconomy2015.sort((a, b) => {
    return Object.values(a)[0] - Object.values(b)[0]
  })

  let top10EconomyBowlers = bowlersEconomy2015
  if (bowlersEconomy2015.length > 10) {
    top10EconomyBowlers = bowlersEconomy2015.slice(0, 10)
  }

  return (top10EconomyBowlers);
}


module.exports = getTop10BestEconomyBowlersIn2015;
