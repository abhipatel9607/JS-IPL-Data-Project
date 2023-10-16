const getNumberOfTimesTeamWonTheTossAndMatch = require("../src/server/5-teamWonTossAndMatchBoth");

test("number-of-times-team-won-the-toss-and-match", () => {
    const sampleDataMatches = [
        {
            id: "1",
            season: "2008",
            toss_winner: "CSK",
            winner: "CSK",
        },
        {
            id: "2",
            season: "2009",
            toss_winner: "CSK",
            winner: "MI",
        },
        {
            id: "3",
            season: "2010",
            toss_winner: "MI",
            winner: "MI",
        },
        {
            id: "4",
            season: "2009",
            toss_winner: "CSK",
            winner: "RCB",
        },
        {
            id: "5",
            season: "2010",
            toss_winner: "CSK",
            winner: "RR",
        },
        {
            id: "6",
            season: "2011",
            toss_winner: "CSK",
            winner: "RCB",
        },
        {
            id: "7",
            season: "2009",
            toss_winner: "CSK",
            winner: "CSK",
        },
        {
            id: "8",
            season: "2011",
            toss_winner: "RR",
            winner: "RR",
        },
        {
            id: "9",
            season: "2013",
            toss_winner: "RCB",
            winner: "RCB",
        },
        {
            id: "10",
            season: "2010",
            toss_winner: "CSK",
            winner: "RR",
        },
        {
            id: "11",
            season: "2013",
            toss_winner: "RR",
            winner: "RR",
        },
        {
            id: "12",
            season: "2009",
            toss_winner: "CSK",
            winner: "CSK",
        },
    ];
    const resultData = { CSK: 3, MI: 1, RR: 2, RCB: 1 };
    expect(getNumberOfTimesTeamWonTheTossAndMatch(sampleDataMatches)).toEqual(
        resultData
    );
});