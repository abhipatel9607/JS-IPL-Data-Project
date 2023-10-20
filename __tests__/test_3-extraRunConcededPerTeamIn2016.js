/* eslint-disable no-undef */
const calExtraRunConcededPerTeam = require('../src/server/3-extraRunsConcededPerTeamIn2016');

test('extra run conceded per team', () => {
  const sampleDataMatches = [
    {
      id: '1',
      season: '2016',
      winner: 'KKR',
    },
    {
      id: '1',
      season: '2016',
      winner: 'MI',
    },
    {
      id: '3',
      season: '2014',
      winner: 'MI',
    },
    {
      id: '4',
      season: '2015',
      winner: 'RR',
    },
    {
      id: '5',
      season: '2013',
      winner: 'RCB',
    },
    {
      id: '6',
      season: '2016',
      winner: 'RR',
    },
    {
      id: '7',
      season: '2015',
      winner: 'KKR',
    },
    {
      id: '8',
      season: '2016',
      winner: 'RCB',
    },
    {
      id: '9',
      season: '1014',
      winner: 'RR',
    },
    {
      id: '10',
      season: '2016',
      winner: 'MI',
    },
    {
      id: '11',
      season: '2016',
      winner: 'KKR',
    },
  ];

  const sampleDataDeliveries = [
    {
      match_id: '1',
      extra_runs: 2,
      bowling_team: 'KKR',
    },
    {
      match_id: '2',
      extra_runs: 0,
      bowling_team: 'MI',
    },
    {
      match_id: '3',
      extra_runs: 1,
      bowling_team: 'MI',
    },
    {
      match_id: '4',
      extra_runs: 0,
      bowling_team: 'RR',
    },
    {
      match_id: '5',
      extra_runs: 1,
      bowling_team: 'RCB',
    },
    {
      match_id: '6',
      extra_runs: 1,
      bowling_team: 'RR',
    },
    {
      match_id: '7',
      extra_runs: 0,
      bowling_team: 'KKR',
    },
    {
      match_id: '8',
      extra_runs: 2,
      bowling_team: 'RCB',
    },
    {
      match_id: '9',
      extra_runs: 1,
      bowling_team: 'RR',
    },
    {
      match_id: '10',
      extra_runs: 1,
      bowling_team: 'MI',
    },
    {
      match_id: '11',
      extra_runs: 1,
      bowling_team: 'KKR',
    },
  ];

  const resultData = { KKR: 3, MI: 1, RR: 1, RCB: 2 }

  expect(
    calExtraRunConcededPerTeam(sampleDataMatches, sampleDataDeliveries),
  ).toEqual(resultData);
});
