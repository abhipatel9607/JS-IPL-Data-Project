/* eslint-disable no-undef */
const findBestEconomySuperOverBowler = require('../src/server/9-bestBowlerEconomyInSuperOver');

test('bowler with highest economy', () => {
  const sampleDataDeliveries = [
    {
      match_id: 1,
      extra_runs: 0,
      bowling_team: 'RCB',
      bowler: 'Akash Deep',
      player_dismissed: '',
      is_super_over: 1,
      total_runs: 4,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 2,
      extra_runs: 0,
      bowling_team: 'MI',
      bowler: 'Jasprit Bumrah',
      player_dismissed: '',
      is_super_over: 1,
      total_runs: 2,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 3,
      extra_runs: 0,
      bowling_team: 'RCB',
      bowler: 'Akash Deep',
      player_dismissed: '',
      is_super_over: 0,
      total_runs: 2,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 4,
      extra_runs: 0,
      bowling_team: 'MI',
      bowler: 'Jasprit Bumrah',
      player_dismissed: '',
      is_super_over: 1,
      total_runs: 1,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 5,
      extra_runs: 0,
      bowling_team: 'RCB',
      bowler: 'Akash Deep',
      player_dismissed: '',
      is_super_over: 1,
      total_runs: 1,
      wide_runs: 1,
      noball_runs: 0,
    },
    {
      match_id: 6,
      extra_runs: 0,
      bowling_team: 'RCB',
      bowler: 'Akash Deep',
      player_dismissed: '',
      is_super_over: 1,
      total_runs: 1,
      wide_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 7,
      extra_runs: 0,
      bowling_team: 'MI',
      bowler: 'Jasprit Bumrah',
      player_dismissed: '',
      is_super_over: 1,
      total_runs: 3,
      wide_runs: 0,
      noball_runs: 0,
    },
  ];
  const resultData = { 'Akash Deep': 12, 'Jasprit Bumrah': 12 };
  expect(findBestEconomySuperOverBowler(sampleDataDeliveries)).toEqual(
    resultData,
  );
});
