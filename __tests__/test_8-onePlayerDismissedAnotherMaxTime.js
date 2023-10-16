const findHighestDismissals = require("../src/server/8-onePlayerDismisedAnotherMaxTime");

test("highest dismissals", () => {
    const sampleDataDeliveries = [
        {
            match_id: 1,
            extra_runs: 0,
            bowling_team: "MI",
            bowler: "Malinga",
            player_dismissed: "V Kohli",
            total_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
        },
        {
            match_id: 2,
            extra_runs: 0,
            bowling_team: "RR",
            bowler: "Zaheer Khan",
            player_dismissed: "Rituraj",
            total_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
        },
        {
            match_id: 3,
            extra_runs: 0,
            bowling_team: "MI",
            bowler: "Malinga",
            player_dismissed: "V Kohli",
            total_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
        },
        {
            match_id: 4,
            extra_runs: 0,
            bowling_team: "RR",
            bowler: "Zaheer Khan",
            player_dismissed: "Rituraj",
            total_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
        },
        {
            match_id: 5,
            extra_runs: 0,
            bowling_team: "RCB",
            bowler: "Akash Deep",
            player_dismissed: "DA Warner",
            total_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
        },
    ];
    const resultData = [
        { batsman: 'V Kohli', bowler: 'Malinga', count: 2 },
        { batsman: 'Rituraj', bowler: 'Zaheer Khan', count: 2 }
    ]
    expect(findHighestDismissals(sampleDataDeliveries)).toEqual(resultData);
});