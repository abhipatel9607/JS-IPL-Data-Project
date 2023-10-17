function getExtraRunConcedePerTeamIn2016(deliveries, matches) {
  let extraRunsConcededPerTeam = {};
  // loop over each deliveries and Matches played in 2016
  deliveries.forEach((delivery) => {
    matches.forEach((match) => {
      // Logic for extra run conceded per team in 2016
      if (
        delivery.match_id == match.id &&
        match.season == '2016' &&
        delivery.extra_runs != 0
      ) {
        let bowlTeam = delivery.bowling_team;
        let extraRunConceded = delivery.extra_runs;

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

module.exports = getExtraRunConcedePerTeamIn2016;
