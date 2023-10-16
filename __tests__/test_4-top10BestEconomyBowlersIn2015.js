const top10BowlersIn2015 = require("../src/server/4-top10BestEconomyBowlersIn2015");

test("economical bowlers year 2015", () => {
    let sampleDataDeliveries = [
        {
            match_id: "1",
            is_super_over: "0",
            bowler: "Zaheer Khan",
            total_runs: 2,
            wide_runs: "0",
            noball_runs: "0",
        },
        {
            match_id: "2",
            is_super_over: "0",
            bowler: "Ashish Nehra",
            total_runs: 0,
            wide_runs: "1",
            noball_runs: "0",
        },
        {
            match_id: "3",
            is_super_over: "0",
            bowler: "Zaheer Khan",
            total_runs: 2,
            wide_runs: "0",
            noball_runs: "0",
        },
        {
            match_id: "4",
            is_super_over: "0",
            bowler: "Jasprit Bumrah",
            total_runs: 2,
            wide_runs: "0",
            noball_runs: "0",
        }, {
            match_id: "5",
            is_super_over: "0",
            bowler: "Ashish Nehra",
            total_runs: 2,
            wide_runs: "0",
            noball_runs: "0",
        }, {
            match_id: "6",
            is_super_over: "0",
            bowler: "Jasprit Bumrah",
            total_runs: 1,
            wide_runs: "0",
            noball_runs: "0",
        }, {
            match_id: "7",
            is_super_over: "0",
            bowler: "Ashish Nehra",
            total_runs: 3,
            wide_runs: "0",
            noball_runs: "0",
        }, {
            match_id: "8",
            is_super_over: "0",
            bowler: "Zaheer Khan",
            total_runs: 2,
            wide_runs: "0",
            noball_runs: "0",
        },
    ];
    let sampleDataMatches = [
        { id: "1", season: "2015" },
        { id: "2", season: "2014" },
        { id: "3", season: "2015" },
        { id: "4", season: "2015" },
        { id: "5", season: "2015" },
        { id: "6", season: "2015" },
        { id: "7", season: "2015" },
        { id: "8", season: "2015" },
    ];

    const resultData = [
        { name: 'Jasprit Bumrah', economy: 9 },
        { name: 'Zaheer Khan', economy: 12 },
        { name: 'Ashish Nehra', economy: 15 }
    ]
    expect(top10BowlersIn2015(sampleDataDeliveries, sampleDataMatches)).toEqual(
        resultData
    );
});