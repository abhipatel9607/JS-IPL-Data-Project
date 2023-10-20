/* eslint-disable no-undef */
const getHighestTimeManOfTheMatchAwardEachSeason = require('../src/server/6-highestTimeManOfTheMatchAwardEachSeason');

test('player who won the highest number of match awards', () => {
  const sampleData = [
    {
      id: '1',
      season: '2008',
      winner: 'RCB',
      player_of_match: 'V Kohli',
    },
    {
      id: '2',
      season: '2009',
      winner: 'CSK',
      player_of_match: 'Rituraj',
    },
    {
      id: '3',
      season: '2010',
      winner: 'MI',
      player_of_match: 'SPD Smith',
    },
    {
      id: '4',
      season: '2011',
      winner: 'MI',
      player_of_match: 'Rashid Khan',
    },
    {
      id: '5',
      season: '2010',
      winner: 'RCB',
      player_of_match: 'Maxwell',
    },
    {
      id: '6',
      season: '2011',
      winner: 'MI',
      player_of_match: 'Rashid Khan',
    },
    {
      id: '7',
      season: '2011',
      winner: 'MI',
      player_of_match: 'Sachin Tendulkar',
    },
  ];
  const resultData = {
    '2008': { 'V Kohli': 1 },
    '2009': { Rituraj: 1 },
    '2010': { 'SPD Smith': 1, Maxwell: 1 },
    '2011': { 'Rashid Khan': 2 }
  }
  expect(getHighestTimeManOfTheMatchAwardEachSeason(sampleData)).toEqual(
    resultData,
  );
});
