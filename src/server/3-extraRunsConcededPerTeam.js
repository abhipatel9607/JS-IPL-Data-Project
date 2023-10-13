function calcExtraRunConcedePerTeam(deliveries, allMatchesId2016) {
  let extraRunsConcededPerTeam = {};

  deliveries.forEach((eachDelivery) => {
    allMatchesId2016.forEach((match) => {
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
