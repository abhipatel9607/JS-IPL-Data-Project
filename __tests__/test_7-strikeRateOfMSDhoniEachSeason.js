const calculateStrikeRatePerSeason = require("../src/server/7-strikeRateOfMSDhoniEachSeason");

test("calculate Strike Rate Per Person", () => {
  const sampleDataMatches = [
    {
      id: 1,
      season: 2008,
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
  ];

  const sampleDataDeliveries = [
    {
      match_id: 1,
      extra_runs: 2,
      bowling_team: "Kolkata Knight Riders",
      batsman: "TS Mills",
      batsman_runs: 4,
      total_runs: 3,
      wide_runs: 3,
      bye_runs: 0,
      legbye_runs: 1,
      noball_runs: 0,
    },
    {
      match_id: 2,
      extra_runs: 0,
      bowling_team: "Mumbai Indians",
      batsman: "MS Dhoni",
      batsman_runs: 2,
      total_runs: 0,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 1,
      noball_runs: 0,
    },
    {
      match_id: 3,
      extra_runs: 1,
      bowling_team: "Mumbai Indians",
      batsman: "TS Mills",
      batsman_runs: 4,
      total_runs: 2,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 4,
      extra_runs: 3,
      bowling_team: "Rajasthan Royals",
      batsman: "MS Dhoni",
      batsman_runs: 4,
      total_runs: 2,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
    {
      match_id: 5,
      extra_runs: 0,
      bowling_team: "Royal Challengers Bangalore",
      batsman: "MS Dhoni",
      batsman_runs: 4,
      total_runs: 6,
      wide_runs: 0,
      bye_runs: 0,
      legbye_runs: 0,
      noball_runs: 0,
    },
  ];

  const resultData = { 2010: "400.00", 2015: "600.00" };

  expect(
    calculateStrikeRatePerSeason(sampleDataMatches, sampleDataDeliveries)
  ).toEqual(resultData);
});
