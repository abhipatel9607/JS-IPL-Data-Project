function getMatchesPerYear(matches) {
  let matchesPerYear = matches.reduce((acc, match) => {
    if (acc[match.season]) {
      acc[match.season]++
    } else {
      acc[match.season] = 1
    }
    return acc
  }, {})
  return matchesPerYear
}

module.exports = getMatchesPerYear