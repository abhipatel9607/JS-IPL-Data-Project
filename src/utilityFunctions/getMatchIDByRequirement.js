function getMatchesIDByYear(matches, year) {
  let matchesID = [];
  matches.forEach((match) => {
    if (match.season == year) {
      matchesID.push(match.id);
    }
  });
  return matchesID;
}

module.exports = getMatchesIDByYear;
