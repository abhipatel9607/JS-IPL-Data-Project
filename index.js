// Modules Import
const csv = require("csv-parser");
const fs = require("fs");

// -------------------------------------------------------------------------------------------------
// Problem 01- Number of matches played per year for all the years in IPL.
// Functions Import
const calcTotalMatches = require("./src/server/1-matches-per-year");

const matches = [];
fs.createReadStream("./src/data/matches.csv")
  .pipe(csv({}))
  .on("data", (data) => matches.push(data))
  .on("end", () => {
    const totalPlayedMatchesInYear = calcTotalMatches(matches);

    // save the JSON data
    const jsonFilePath = "./src/public/output/matchesPerYear.json";
    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(totalPlayedMatchesInYear, null, 2)
    );

    // Print message to console
    console.log(
      `Problem-01: Solved,
        Number of matches played per year for all the years in IPL:
        JSON data saved to ` + jsonFilePath
    );
  });

//-------------------------------------------------------------------------------------------------
// Problem 02- Number of matches played per year for all the years in IPL.
// Functions Import
const calcTotalMatcheWinsByYear = require("./src/server/2-matches-won-per-team-per-year");

const matchesObj = [];
fs.createReadStream("./src/data/matches.csv")
  .pipe(csv({}))
  .on("data", (data) => matchesObj.push(data))
  .on("end", () => {
    const totalMatcheWinsByYear = calcTotalMatcheWinsByYear(matchesObj);

    // save the JSON data
    const jsonFilePath =
      "./src/public/output/totalMatchesWinEveryYearByTeam.json";

    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(totalMatcheWinsByYear, null, 2)
    );

    // Print message to console
    console.log(
      `Problem-02: Solved,
        Number of matches won per team per year in IPL.:
        JSON data saved to ` + jsonFilePath
    );
  });
