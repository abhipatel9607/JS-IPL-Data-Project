// Modules Import
const csv = require("csv-parser");
const fs = require("fs");

// Import server Functions
const calcTotalMatches = require("./src/server/1-matches-per-year");
const calcTotalMatchesWinsByYear = require("./src/server/2-matches-won-per-team-per-year");
const calcExtraRunConcedePerTeam = require("./src/server/3-extraRunsConcededPerTeam");
const calcTop10BowlersIn2015 = require("./src/server/4-top10BowlersIn2015.js");
const getTeamWonTossAndMatchBoth = require("./src/server/5-teamWonTossAndMatchBoth");
const calcHighestTimeManOfTheMatchAwardEachSeason = require("./src/server/6-highestTimeManOfTheMatchAwardEachSeason");
// Import Utility Functions
const getMatchesIDByYear = require("./src/utilityFunctions/getMatchIDByRequirement");

// Read matches.csv File
const matches = [];
fs.createReadStream("./src/data/matches.csv")
  .pipe(csv({}))
  .on("data", (data) => matches.push(data))
  .on("end", () => {
    // 1-Matches per year
    const totalPlayedMatchesInYear = calcTotalMatches(matches);
    const jsonFilePath1 = "./src/public/output/1-matchesPerYear.json";
    fs.writeFileSync(
      jsonFilePath1,
      JSON.stringify(totalPlayedMatchesInYear, null, 2)
    );
    console.log(`Problem-01: totalPlayedMatchesInYear.json File saved`);

    // 2-Matches won per team per year
    const totalMatchesWinsByYear = calcTotalMatchesWinsByYear(matches);
    const jsonFilePath2 =
      "./src/public/output/2-totalMatchesWinEveryYearByTeam.json";
    fs.writeFileSync(
      jsonFilePath2,
      JSON.stringify(totalMatchesWinsByYear, null, 2)
    );
    console.log(`Problem-02: totalMatchesWinsByYear.json File saved`);

    // 5-Number of times each team won the toss and also won the match
    const teamWonTossAndMatchBoth = getTeamWonTossAndMatchBoth(matches);
    const jsonFilePath5 = "./src/public/output/5-teamWonTossAndMatchBoth.json";
    fs.writeFileSync(
      jsonFilePath5,
      JSON.stringify(teamWonTossAndMatchBoth, null, 2)
    );
    console.log(`Problem-05: teamWonTossAndMatchBoth.json File saved`);

    // 6-Player who has won the highest number of Player of the Match awards for each season
    const highestTimeManOfTheMatchAwardEachSeason =
      calcHighestTimeManOfTheMatchAwardEachSeason(matches);
    const jsonFilePath6 =
      "./src/public/output/6-highestTimeManOfTheMatchAwardEachSeason.json";
    fs.writeFileSync(
      jsonFilePath6,
      JSON.stringify(highestTimeManOfTheMatchAwardEachSeason, null, 2)
    );
    console.log(
      `Problem-06: highestTimeManOfTheMatchAwardEachSeason.json File saved`
    );

    // Read matches.csv File
    const deliveries = [];
    fs.createReadStream("./src/data/deliveries.csv")
      .pipe(csv({}))
      .on("data", (data) => deliveries.push(data))
      .on("end", () => {
        // 3-Extra runs conceded per team in the year 2016
        const allMatchesId2016 = getMatchesIDByYear(matches, 2016);
        const extraRunsConcededPerTeam = calcExtraRunConcedePerTeam(
          deliveries,
          allMatchesId2016
        );
        const jsonFilePath3 =
          "./src/public/output/3-extraRunsConcededPerTeam.json";
        fs.writeFileSync(
          jsonFilePath3,
          JSON.stringify(extraRunsConcededPerTeam, null, 2)
        );
        console.log(`Problem-03: extraRunsConcededPerTeam.json File saved`);

        // 4-Top 10 economical bowlers in the year 2015
        const allMatchesId2015 = getMatchesIDByYear(matches, 2015);
        const top10BowlersIn2015 = calcTop10BowlersIn2015(
          deliveries,
          allMatchesId2015
        );
        const jsonFilePath4 = "./src/public/output/4-top10BowlersIn2015.json";
        fs.writeFileSync(
          jsonFilePath4,
          JSON.stringify(top10BowlersIn2015, null, 2)
        );
        console.log(`Problem-04: top10BowlersIn2015.json File saved`);
      });
  });
