/* eslint-disable no-undef */
// Functions Import
const calcTotalMatchesWinsByYear = require('../src/server/2-matches-won-per-team-per-year');

test('played_matches_per_year', () => {
  const sampleData = [
    {
      id: '1',
      season: '2008',
      winner: 'Chennai',
    },
    {
      id: '2',
      season: '2009',
      winner: 'Hyderabad',
    },
    {
      id: '3',
      season: '2010',
      winner: 'Chandigarh',
    },
    {
      id: '4',
      season: '2009',
      winner: 'Mumbai',
    },
    {
      id: '5',
      season: '2010',
      winner: 'Chennai',
    },
    {
      id: '6',
      season: '2011',
      winner: 'Hyderabad',
    },
    {
      id: '7',
      season: '2009',
      winner: 'Chandigarh',
    },
    {
      id: '8',
      season: '2011',
      winner: 'Mumbai',
    },
    {
      id: '9',
      season: '2013',
      winner: 'Chennai',
    },
    {
      id: '10',
      season: '2010',
      winner: 'Hyderabad',
    },
    {
      id: '11',
      season: '2013',
      winner: 'Chandigarh',
    },
    {
      id: '12',
      season: '2009',
      winner: 'Mumbai',
    },
  ];

  const resultData = {
    2008: { Chennai: 1 },
    2009: { Chandigarh: 1, Hyderabad: 1, Mumbai: 2 },
    2010: { Chandigarh: 1, Hyderabad: 1, Chennai: 1 },
    2011: { Hyderabad: 1, Mumbai: 1 },
    2013: { Chandigarh: 1, Chennai: 1 },
  };
  expect(calcTotalMatchesWinsByYear(sampleData)).toEqual(resultData);
});
