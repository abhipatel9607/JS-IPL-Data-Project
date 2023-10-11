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
