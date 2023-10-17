/* eslint-disable no-undef */
const calculateStrikeRatePerSeason = require('../src/server/7-strikeRateOfMSDhoniEachSeason');

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
      extra_runs: 1,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      batsman_runs: 0,
      total_runs: 1,
      wide_runs: 1,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 2,
      extra_runs: 0,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      batsman_runs: 2,
      total_runs: 2,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 3,
      extra_runs: 0,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      batsman_runs: 4,
      total_runs: 4,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 4,
      extra_runs: 1,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      batsman_runs: 0,
      total_runs: 1,
      wide_runs: 1,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 5,
      extra_runs: 0,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      batsman_runs: 1,
      total_runs: 1,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 6,
      extra_runs: 0,
      bowling_team: 'CSK',
      batsman: 'MS Dhoni',
      batsman_runs: 2,
      total_runs: 2,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
  ];

  const resultData = { 2010: '233.33', 2015: '200.00' };

  expect(
    calculateStrikeRatePerSeason(sampleDataMatches, sampleDataDeliveries),
  ).toEqual(resultData);
});
