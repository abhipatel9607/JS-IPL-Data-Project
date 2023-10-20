/* eslint-disable no-undef */
const calculateStrikeRatePerSeason = require('../src/server/7-strikeRateOfPlayerEachSeason');

test('calculate Strike Rate Per Person', () => {
  const sampleDataMatches = [
    {
      id: 1,
      season: 2015,
    },
    {
      id: 2,
      season: 2015,
    },
    {
      id: 3,
      season: 2010,
    },
    {
      id: 4,
      season: 2015,
    },
    {
      id: 5,
      season: 2010,
    },
    {
      id: 6,
      season: 2010,
    },
  ];

  const sampleDataDeliveries = [
    {
      match_id: 1,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      is_super_over: 0,
      batsman_runs: 0,
      total_runs: 1,
      wide_runs: 1,
    },
    {
      match_id: 2,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      is_super_over: 0,
      batsman_runs: 2,
      total_runs: 2,
      wide_runs: 0,
    },
    {
      match_id: 3,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      is_super_over: 0,
      batsman_runs: 2,
      total_runs: 2,
      wide_runs: 0,
    },
    {
      match_id: 4,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      is_super_over: 0,
      batsman_runs: 0,
      total_runs: 1,
      wide_runs: 1,
    },
    {
      match_id: 5,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      is_super_over: 1,
      batsman_runs: 1,
      total_runs: 1,
      wide_runs: 0,
    },
    {
      match_id: 6,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      is_super_over: 0,
      batsman_runs: 1,
      total_runs: 1,
      wide_runs: 0,
    },
  ];

  const resultData = { '2010': 150, '2015': 200 }

  expect(
    calculateStrikeRatePerSeason(sampleDataMatches, sampleDataDeliveries, "MS Dhoni"),
  ).toEqual(resultData);
});
