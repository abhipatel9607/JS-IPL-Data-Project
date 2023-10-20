function getHighestTimeManOfTheMatchAwardEachSeason(matches) {

  let playersManOfTheMatchCount = matches.reduce((acc, match) => {
    if (acc[match.season] && acc[match.season][match.player_of_match]) {
      acc[match.season][match.player_of_match]++
    } else if (acc[match.season] && !acc[match.season][match.player_of_match]) {
      acc[match.season][match.player_of_match] = 1
    } else {
      acc[match.season] = {
        [match.player_of_match]: 1,
        maxCount: 1,
        player: {}
      }
    }
    // Logic for trace MaxCount Player
    if (acc[match.season][match.player_of_match] > acc[match.season].maxCount) {
      acc[match.season].maxCount = acc[match.season][match.player_of_match]
      acc[match.season]["player"] = {}
      acc[match.season]["player"][match.player_of_match] = acc[match.season].maxCount
    } else if (acc[match.season][match.player_of_match] == acc[match.season].maxCount) {
      acc[match.season]["player"][match.player_of_match] = acc[match.season].maxCount
    }

    return acc
  }, {})

  const highestTimeManOfTheMatchAwardEachSeason = {}
  for (const season in playersManOfTheMatchCount) {
    highestTimeManOfTheMatchAwardEachSeason[season] = playersManOfTheMatchCount[season]["player"]
  }

  return (highestTimeManOfTheMatchAwardEachSeason);
}

module.exports = getHighestTimeManOfTheMatchAwardEachSeason;
