function getStrikeRateOfPlayerEachSeason(matches, deliveries, playerName) {

  const seasonById = matches.reduce((acc, match) => {
    acc[match.id] = match.season
    return acc
  }, {})

  const batsmanData = {}
  deliveries.forEach((delivery) => {
    if (delivery.batsman == playerName && delivery.is_super_over == "0") {
      const isWide = Number(delivery.wide_runs)
      if (!batsmanData[seasonById[delivery.match_id]]) {
        batsmanData[seasonById[delivery.match_id]] = {
          totalRuns: 0,
          totalBalls: 0,
        }
      }
      batsmanData[seasonById[delivery.match_id]].totalRuns += Number(delivery.batsman_runs)
      if (!isWide) batsmanData[seasonById[delivery.match_id]].totalBalls++
    }
  })

  const batsmanStrikeRateAllSeason = {}
  for (const season in batsmanData) {
    const strikeRate = Number(((batsmanData[season].totalRuns / batsmanData[season].totalBalls) * 100).toFixed(2))
    batsmanStrikeRateAllSeason[season] = strikeRate
  }

  return batsmanStrikeRateAllSeason
}


module.exports = getStrikeRateOfPlayerEachSeason;
