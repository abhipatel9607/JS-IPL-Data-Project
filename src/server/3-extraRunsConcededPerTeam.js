function calcExtraRunConcedePerTeam(deliveries, matches) {
  // initiate a variable to hold each Match ID of 2016
  let matchesID = [];
  matches.forEach((match) => {
    if (match.season == 2016) {
      matchesID.push(match.id);
    }
  });
  let extraRunsConcededPerTeam = {};
  // loop over each deliveries
  deliveries.forEach((eachDelivery) => {
    matchesID.forEach((match) => {
      // Logic for extra run conceded per team in 2016
      if (eachDelivery.match_id == match && eachDelivery.extra_runs != 0) {
        let bowlTeam = eachDelivery.bowling_team;
        let extraRunConceded = eachDelivery.extra_runs;

        if (extraRunsConcededPerTeam[bowlTeam]) {
          extraRunsConcededPerTeam[bowlTeam] += parseInt(extraRunConceded);
        } else {
          extraRunsConcededPerTeam[bowlTeam] = parseInt(extraRunConceded);
        }
      }
    });
  });
  return extraRunsConcededPerTeam;
}

module.exports = calcExtraRunConcedePerTeam;
