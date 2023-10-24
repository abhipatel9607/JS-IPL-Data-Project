/* eslint-disable no-undef */
// 1-matchesPerYear
fetch('./output/1-matchesPerYear.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        matchesPerYear(data)
    });

// 2-totalMatchesWinEveryYearPerTeam
fetch('./output/2-totalMatchesWinEveryYearByTeam.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        totalMatchesWinEveryYearPerTeam(data)
    });

// 3-extraRunConcededPerTeamPerYear
fetch('./output/3-extraRunConcedePerTeamIn2016.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        extraRunConcededPerTeamPerYear(data)
    });

// 4-top10EconomyBowlerIn2015
fetch('./output/4-top10BestEconomyBowlersIn2015.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        top10EconomyBowlerIn2015(data)
    });

// 5-teamWonTossAndMatchesBoth
fetch('./output/5-teamWonTossAndMatchBoth.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        teamWonTossAndMatchesBoth(data)
    });

// 6-highestTimeManOfTheAwardEachSeason
fetch('./output/6-highestTimeManOfTheMatchAwardEachSeason.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        highestTimeManOfTheAwardEachSeason(data)
    });

// 7-strikeRateOfPlayerEachSeason
fetch('./output/7-strikeRateOfPlayerEachSeason.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        strikeRateOfPlayerEachSeason(data)
    });

// 8-onePlayerDismissedAnotherMaxTime
fetch('./output/8-onePlayerDismissedAnotherMaxTime.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        onePlayerDismissedAnotherMaxTime(data)
    });

// 9-bestBowlerEconomyInSuperOver
fetch('./output/9-bestBowlerEconomyInSuperOver.json')
    .then((res) => res.json())
    .then((data) => {
        console.log();
        bestBowlerEconomyInSuperOver(data)
    });
