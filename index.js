const fs = require("fs"); // Internal module 
const csv = require("csv-parser"); // External module 

// Custom modules
const getMatchesPerYear = require("./src/server/1-matches-per-year")
const getTotalMatchesWinEveryYearPerTeam = require("./src/server/2-matches-won-per-team-per-year")
const getExtraRunConcedePerTeamIn2016 = require("./src/server/3-extraRunsConcededPerTeamIn2016")
const getTop10BestEconomyBowlersIn2015 = require("./src/server/4-top10BestEconomyBowlersIn2015")
const getTeamWonTossAndMatchBoth = require("./src/server/5-teamWonTossAndMatchBoth")
const getHighestTimeManOfTheMatchWinnerEachSeason = require("./src/server/6-highestTimeManOfTheMatchAwardEachSeason")
const getStrikeRateOfPlayerEachSeason = require("./src/server/7-strikeRateOfPlayerEachSeason")
const getOnePlayerDismissedAnotherMaxTime = require("./src/server/8-onePlayerDismisedAnotherMaxTime")
const getBestBowlerEconomyInSuperOver = require("./src/server/9-bestBowlerEconomyInSuperOver")

// Read matches.csv
let matches = []
fs.createReadStream("./src/data/matches.csv", "utf-8")
  .pipe(csv({}))
  .on("data", (data) => { matches.push(data) })
  .on("end", () => {
    // Read deliveries.csv
    let deliveries = []
    fs.createReadStream("./src/data/deliveries.csv", "utf-8")
      .pipe(csv({}))
      .on("data", data => { deliveries.push(data) })
      .on("end", () => {

        // 1, MatchesPerYear
        const matchesPerYear = getMatchesPerYear(matches)
        fs.writeFileSync("./src/public/output/1-matchesPerYear.json", JSON.stringify(matchesPerYear, null, 2))

        // 2, totalMatchesWinEveryYearPerTeam
        const totalMatchesWinEveryYearPerTeam = getTotalMatchesWinEveryYearPerTeam(matches)
        fs.writeFileSync("./src/public/output/2-totalMatchesWinEveryYearByTeam.json", JSON.stringify(totalMatchesWinEveryYearPerTeam, null, 2))

        // 3, extraRunConcedePerTeamIn2016
        const extraRunConcedePerTeamIn2016 = getExtraRunConcedePerTeamIn2016(matches, deliveries)
        fs.writeFileSync("./src/public/output/3-extraRunConcedePerTeamIn2016.json", JSON.stringify(extraRunConcedePerTeamIn2016, null, 2))

        // 4, getTop10BestEconomyBowlersIn2015
        const top10BestEconomyBowlersIn2015 = getTop10BestEconomyBowlersIn2015(matches, deliveries)
        fs.writeFileSync("./src/public/output/4-top10BestEconomyBowlersIn2015.json", JSON.stringify(top10BestEconomyBowlersIn2015, null, 2))


        // 5, getTeamWonTossAndMatchBoth
        const teamWonTossAndMatchBoth = getTeamWonTossAndMatchBoth(matches)
        fs.writeFileSync("./src/public/output/5-teamWonTossAndMatchBoth.json", JSON.stringify(teamWonTossAndMatchBoth, null, 2))

        // 6, highestTimeManOfTheMatchAwardEachSeason
        const highestTimeManOfTheMatchWinnerEachSeason = getHighestTimeManOfTheMatchWinnerEachSeason(matches)
        fs.writeFileSync("./src/public/output/6-highestTimeManOfTheMatchAwardEachSeason.json", JSON.stringify(highestTimeManOfTheMatchWinnerEachSeason, null, 2))

        // 7, strikeRateOfAPlayerEachSeason
        const playerName = "MS Dhoni"
        const strikeRateOfPlayerEachSeason = getStrikeRateOfPlayerEachSeason(matches, deliveries, playerName)
        fs.writeFileSync("src/public/output/7-strikeRateOfPlayerEachSeason.json", JSON.stringify(strikeRateOfPlayerEachSeason, null, 2))

        // 8, OnePlayerDismissedAnotherMaxTime
        const onePlayerDismissedAnotherMaxTime = getOnePlayerDismissedAnotherMaxTime(deliveries)
        fs.writeFileSync("src/public/output/8-onePlayerDismissedAnotherMaxTime.json", JSON.stringify(onePlayerDismissedAnotherMaxTime, null, 2))

        // 9, bestBowlerEconomyInSuperOver
        const bestBowlerEconomyInSuperOver = getBestBowlerEconomyInSuperOver(deliveries)
        fs.writeFileSync("src/public/output/9-bestBowlerEconomyInSuperOver.json", JSON.stringify(bestBowlerEconomyInSuperOver, null, 2))
      })
  })