// Modules Import
const csv = require("csv-parser");
const fs = require("fs");

// Functions Import
const calcTotalMatches = require("./src/server/1-matches-per-year");
const calcTotalMatchesWinsByYear = require("./src/server/2-matches-won-per-team-per-year");

const matches = [];
fs.createReadStream("./src/data/matches.csv")
  .pipe(csv({}))
  .on("data", (data) => matches.push(data))
  .on("end", () => {
    // 1-Matches per year
    const totalPlayedMatchesInYear = calcTotalMatches(matches);
    const jsonFilePath1 = "./src/public/output/matchesPerYear.json";
    fs.writeFileSync(
      jsonFilePath1,
      JSON.stringify(totalPlayedMatchesInYear, null, 2)
    );
    console.log(`Problem-01: Solved, JSON file saved in ./src/public/output/`);

    // 2-Matches won per team per year
    const totalMatcheWinsByYear = calcTotalMatchesWinsByYear(matches);
    const jsonFilePath2 =
      "./src/public/output/totalMatchesWinEveryYearByTeam.json";
    fs.writeFileSync(
      jsonFilePath2,
      JSON.stringify(totalMatcheWinsByYear, null, 2)
    );
    console.log(`Problem-02: Solved, JSON file saved in ./src/public/output/`);
  });
