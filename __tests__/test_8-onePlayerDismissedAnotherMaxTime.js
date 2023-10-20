/* eslint-disable no-undef */
const findHighestDismissals = require('../src/server/8-onePlayerDismisedAnotherMaxTime');

test('highest dismissals', () => {
  const sampleDataDeliveries = [
    {
      match_id: 1,
      extra_runs: 0,
      bowling_team: 'MI',
      bowler: 'Malinga',
      player_dismissed: 'V Kohli',
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 2,
      extra_runs: 0,
      bowling_team: 'RR',
      bowler: 'Zaheer Khan',
      player_dismissed: 'Rituraj',
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 3,
      extra_runs: 0,
      bowling_team: 'MI',
      bowler: 'Malinga',
      player_dismissed: 'V Kohli',
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 4,
      extra_runs: 0,
      bowling_team: 'RR',
      bowler: 'Zaheer Khan',
      player_dismissed: 'Rituraj',
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 5,
      extra_runs: 0,
      bowling_team: 'RCB',
      bowler: 'Akash Deep',
      player_dismissed: 'DA Warner',
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 6,
      extra_runs: 0,
      bowling_team: 'MI',
      bowler: 'Anil kumble',
      player_dismissed: 'V Kohli',
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 7,
      extra_runs: 0,
      bowling_team: 'MI',
      bowler: 'Hardik pandya',
      player_dismissed: '',
      total_runs: 0,
      wide_runs: 0,
      noball_runs: 0,
    },
  ];
  const resultData = {
    maxDismissCount: 2,
    dismissedPlayer: 'V Kohli',
    bowler: { Malinga: 2, 'Zaheer Khan': 2 }
  }
  expect(findHighestDismissals(sampleDataDeliveries)).toEqual(resultData);
});
