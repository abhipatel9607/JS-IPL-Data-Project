// Modules Import
const csv = require("csv-parser");
const fs = require("fs");

// Import server Functions
const calcTotalMatches = require("./src/server/1-matches-per-year");
const calcMatchesWonPerTeamPerYear = require("./src/server/2-matches-won-per-team-per-year");
const getExtraRunConcedePerTeamIn2016 = require("./src/server/3-extraRunsConcededPerTeamIn2016");
const getTop10BestEconomyBowlersIn2015 = require("./src/server/4-top10BestEconomyBowlersIn2015");
const getTeamWonTossAndMatchBoth = require("./src/server/5-teamWonTossAndMatchBoth");
const calcHighestTimeManOfTheMatchAwardEachSeason = require("./src/server/6-highestTimeManOfTheMatchAwardEachSeason");
const getStrikeRateOfMSDhoniEachSeason = require("./src/server/7-strikeRateOfMSDhoniEachSeason");

// All json file paths
const jsonFilePath1 = "./src/public/output/1-matchesPerYear.json";
const jsonFilePath2 =
  "./src/public/output/2-totalMatchesWinEveryYearByTeam.json";
const jsonFilePath3 = "./src/public/output/3-extraRunsConcededPerTeam.json";
const jsonFilePath4 =
  "./src/public/output/4-top10BestEconomyBowlersIn2015.json";
const jsonFilePath5 = "./src/public/output/5-teamWonTossAndMatchBoth.json";
const jsonFilePath6 =
  "./src/public/output/6-highestTimeManOfTheMatchAwardEachSeason.json";
const jsonFilePath7 =
  "./src/public/output/7-strikeRateOfMSDhoniEachSeason.json";
const jsonFilePath8 =
  "./src/public/output/8-onePlayerDismissedAnotherMaxTime.json";
const jsonFilePath9 = "./src/public/output/9-bestBowlerEconomyInSuperOver.json";

// Read matches.csv File
const matches = [];
fs.createReadStream("./src/data/matches.csv")
  .pipe(csv({}))
  .on("data", (data) => matches.push(data))
  .on("end", () => {
    // Read deliveries.csv File
    const deliveries = [];
    fs.createReadStream("./src/data/deliveries.csv")
      .pipe(csv({}))
      .on("data", (data) => deliveries.push(data))
      .on("end", () => {
        // 1-Matches per year
        const totalPlayedMatchesInYear = calcTotalMatches(matches);
        fs.writeFileSync(
          jsonFilePath1,
          JSON.stringify(totalPlayedMatchesInYear, null, 2)
        );
        console.log(`Problem-01: totalPlayedMatchesInYear.json File saved`);

        // 2-Matches won per team per year
        const totalMatchesWinsByYear = calcMatchesWonPerTeamPerYear(matches);
        fs.writeFileSync(
          jsonFilePath2,
          JSON.stringify(totalMatchesWinsByYear, null, 2)
        );
        console.log(`Problem-02: totalMatchesWinsByYear.json File saved`);

        // 3-Extra runs conceded per team in the year 2016
        const extraRunsConcededPerTeamIn2016 = getExtraRunConcedePerTeamIn2016(
          deliveries,
          matches
        );
        fs.writeFileSync(
          jsonFilePath3,
          JSON.stringify(extraRunsConcededPerTeamIn2016, null, 2)
        );
        console.log(
          `Problem-03: extraRunsConcededPerTeamIn2016.json File saved`
        );

        // 4-Top 10 economical bowlers in the year 2015
        const top10BestEconomyBowlersIn2015 = getTop10BestEconomyBowlersIn2015(
          deliveries,
          matches
        );
        fs.writeFileSync(
          jsonFilePath4,
          JSON.stringify(top10BestEconomyBowlersIn2015, null, 2)
        );
        console.log(
          `Problem-04: top10BestEconomyBowlersIn2015.json File saved`
        );

        // 5-Number of times each team won the toss and also won the match
        const teamWonTossAndMatchBoth = getTeamWonTossAndMatchBoth(matches);
        fs.writeFileSync(
          jsonFilePath5,
          JSON.stringify(teamWonTossAndMatchBoth, null, 2)
        );
        console.log(`Problem-05: teamWonTossAndMatchBoth.json File saved`);

        // 6-Player who has won the highest number of Player of the Match awards for each season
        const highestTimeManOfTheMatchAwardEachSeason =
          calcHighestTimeManOfTheMatchAwardEachSeason(matches);

        fs.writeFileSync(
          jsonFilePath6,
          JSON.stringify(highestTimeManOfTheMatchAwardEachSeason, null, 2)
        );
        console.log(
          `Problem-06: highestTimeManOfTheMatchAwardEachSeason.json File saved`
        );

        // 8-Find the highest number of times one player has been dismissed by another player
        const getOnePlayerDismissedAnotherMaxTime = require("./src/server/8-onePlayerDismisedAnotherMaxTime");
        const onePlayerDismissedAnotherMaxTime =
          getOnePlayerDismissedAnotherMaxTime(deliveries);

        fs.writeFileSync(
          jsonFilePath8,
          JSON.stringify(onePlayerDismissedAnotherMaxTime, null, 2)
        );
        console.log(
          `Problem-08: onePlayerDismissedAnotherMaxTime.json File saved`
        );

        // 9-Find the bowler with the best economy in super overs
        const getBestBowlerEconomyInSuperOver = require("./src/server/9-bestBowlerEconomyInSuperOver");
        const bestBowlerEconomyInSuperOver =
          getBestBowlerEconomyInSuperOver(deliveries);

        fs.writeFileSync(
          jsonFilePath9,
          JSON.stringify(bestBowlerEconomyInSuperOver, null, 2)
        );
        console.log(`Problem-09: bestBowlerEconomyInSuperOver.json File saved`);

        // 7-Find the strike rate of a batsman for each season
        const strikeRateOfMSDhoniEachSeason = getStrikeRateOfMSDhoniEachSeason(
          matches,
          deliveries
        );
        fs.writeFileSync(
          jsonFilePath7,
          JSON.stringify(strikeRateOfMSDhoniEachSeason, null, 2)
        );
        console.log(
          `Problem-07: strikeRateOfMSDhoniEachSeason.json File saved`
        );
      });
  });
