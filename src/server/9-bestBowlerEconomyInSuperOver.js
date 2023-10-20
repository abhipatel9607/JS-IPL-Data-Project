function getBestBowlerEconomyInSuperOver(deliveries) {

  const bowlerData = deliveries.reduce((acc, delivery) => {

    if (delivery.is_super_over == "1") {
      const isWide = Number(delivery.wide_runs)
      const isNoBall = Number(delivery.noball_runs)
      const isBye = Number(delivery.bye_runs)
      const isLegBye = Number(delivery.legbye_runs)
      const isPenalty = Number(delivery.penalty_runs)

      if (!acc[delivery.bowler]) {
        acc[delivery.bowler] = { totalRunConcede: 0, totalBalls: 0 }
      }
      if (!isWide && !isNoBall) {
        acc[delivery.bowler].totalBalls++
      }
      if (!isBye && !isLegBye && !isPenalty) {
        acc[delivery.bowler].totalRunConcede += Number(delivery.total_runs)
      }

    }
    return acc
  }, {})

  let bestEconomy = null
  let bestBowlerEconomyInSuperOver = {};
  for (const bowler in bowlerData) {
    const economy = Number(((bowlerData[bowler].totalRunConcede / bowlerData[bowler].totalBalls) * 6).toFixed(2))

    if (bestEconomy == null || bestEconomy > economy) {
      bestEconomy = economy
      bestBowlerEconomyInSuperOver = { [bowler]: economy }
    } else if (bestEconomy == economy) {
      bestBowlerEconomyInSuperOver[bowler] = economy
    }
  }
  return bestBowlerEconomyInSuperOver
}

module.exports = getBestBowlerEconomyInSuperOver;
