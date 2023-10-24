/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// 01: MatchesPerYear
function matchesPerYear(data) {

    const chartData = [];
    for (const year in data) {
        if (data[year]) {
            chartData.push({
                x: parseInt(year),
                y: data[year]
            });
        }
    }

    Highcharts.chart('matchesPerYear', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Matches Per Year'
        },
        xAxis: {
            title: {
                text: 'Year'
            }
        },
        yAxis: {
            title: {
                text: 'Matches'
            }
        },
        series: [{
            name: 'Matches Played',
            data: chartData
        }]
    });
}


// 02: matchesWonPerTeamPerYear
function totalMatchesWinEveryYearPerTeam(data) {

    const seriesData = [];
    for (const teamName in data["2008"]) {
        let teamSeries = {
            name: teamName,
            data: []
        }
        for (const year in data) {
            teamSeries.data.push([year, data[year][teamName]])
        }
        seriesData.push(teamSeries)
    }

    Highcharts.chart('matchesWonPerTeamPerYear', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'IPL Team Performance Over the Years'
        },
        xAxis: {
            title: {
                text: 'Year'
            },
            categories: Object.keys(data)
        },
        yAxis: {
            title: {
                text: 'Matches Won'
            }
        },
        series: seriesData
    });
}


// 3-extraRunConcededPerTeamPerYear
function extraRunConcededPerTeamPerYear(data) {

    const dataSeries = []
    for (const teamName in data) {
        dataSeries.push({ name: teamName, y: parseInt(data[teamName]) })
    }

    Highcharts.chart("extraRunConcededPerTeamPerYear", {
        chart: {
            type: "column"
        },
        title: {
            text: "Extra run Conceded per Team in 2016"
        },
        xAxis: {
            title: {
                text: "Teams"
            },
            categories: Object.keys(data),
        },
        yAxis: {
            title: {
                text: "Runs conceded"
            },
            min: 60,
            tickInterval: 10,
        },
        series: [{
            name: "Extra Runs",
            data: dataSeries
        }]
    });
}


// 4-top10EconomyBowlerIn2015
function top10EconomyBowlerIn2015(data) {

    const allPlayersName = []
    const allEconomy = []
    data.forEach((playerData) => {
        let name = Object.keys(playerData)[0]
        let economy = Object.values(playerData)[0]
        allPlayersName.push(name)
        allEconomy.push(economy)
    })

    Highcharts.chart('top10EconomyBowlerIn2015', {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Top 10 Economy Bowlers in 2015'
        },
        xAxis: {
            categories: allPlayersName,
            title: {
                text: null
            },
            accessibility: {
                description: 'Players'
            }
        },
        yAxis: {
            title: {
                text: null
            },
            min: 3.5,
            tickInterval: 0.5,
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                }
            }
        },
        tooltip: {
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        series: [
            {
                name: 'Economy',
                color: '#a5d6a7',
                borderColor: '#60A465',
                data: allEconomy
            }
        ]
    });
}


// 5-teamWonTossAndMatchesBoth
function teamWonTossAndMatchesBoth(data) {

    Highcharts.chart('teamWonTossAndMatchesBoth', {
        chart: {
            type: 'column',
        },
        title: {
            text: 'Team Won Toss and Matches Both'
        },
        xAxis: {
            categories: Object.keys(data),
            title: {
                text: "Team"
            },
        },
        yAxis: {
            title: {
                text: "Count"
            },
            min: 0,
            tickInterval: 10,
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                }
            }
        },
        series: [
            {
                name: 'Wheat exportation in 2019',
                data: Object.values(data),
                borderColor: '#5997DE'
            }
        ]
    });
}


// 6-highestTimeManOfTheAwardEachSeason
function highestTimeManOfTheAwardEachSeason(data) {

    const categories = Object.keys(data);
    const seriesData = [];
    let playerName = {}
    Object.values(data).forEach(playerObj => {
        for (const player in playerObj) {
            // eslint-disable-next-line no-prototype-builtins
            if (!playerName.hasOwnProperty(player)) {
                playerName[player] = 0
                const playerData = {
                    name: player,
                    data: []
                };
                categories.forEach(year => {
                    playerData.data.push(data[year][player] || 0);
                });
                seriesData.push(playerData);
            }
        }
    });

    Highcharts.chart('highestTimeManOfTheAwardEachSeason', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Highest Time Man Of the Match Award Winner'
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'Wickets'
            }
        },
        series: seriesData
    });
}


// 07: strikeRateOfPlayerEachSeason
function strikeRateOfPlayerEachSeason(data) {

    const chartData = [];
    for (const year in data) {
        if (data[year]) {
            chartData.push({
                x: parseInt(year),
                y: parseInt(data[year])
            });
        }
    }

    Highcharts.chart('strikeRateOfPlayerEachSeason', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Strike Rate of MS Dhoni'
        },
        xAxis: {
            title: {
                text: 'Year'
            }
        },
        yAxis: {
            title: {
                text: 'Strike Rate'
            }
        },
        series: [{
            name: 'Strike Rate',
            data: chartData
        }]
    });
}


// 8-onePlayerDismissedAnotherMaxTime
function onePlayerDismissedAnotherMaxTime(data) {

    const bowlerData = Object.entries(data.bowler).map(([name, count]) => ({ name, count }));

    Highcharts.chart('onePlayerDismissedAnotherMaxTime', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Highest time Dismissals by Bowler'
        },
        xAxis: {
            categories: bowlerData.map(item => item.name),
            title: {
                text: 'Bowler'
            }
        },
        yAxis: {
            title: {
                text: 'Dismissal Count'
            }
        },
        series: [{
            name: data.dismissedPlayer,
            data: bowlerData.map(item => item.count)
        }]
    });
}


// 9-bestBowlerEconomyInSuperOver
function bestBowlerEconomyInSuperOver(data) {
    Highcharts.chart('bestBowlerEconomyInSuperOver', {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Best Bowler Economy in Super Over'
        },

        xAxis: {
            title: {
                text: null
            },
            categories: Object.keys(data),
            accessibility: {
                description: 'Players'
            },
            min: 0,
            tickInterval: 2,

        },
        yAxis: {
            title: {
                text: null
            },
            min: 3,
            tickInterval: 0.5,
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                }
            }
        },
        tooltip: {
            stickOnContact: true,
            backgroundColor: 'rgba(255, 255, 255, 0.93)'
        },
        series: [
            {
                name: 'Economy',
                color: '#a5d6a7',
                borderColor: '#60A465',
                data: Object.values(data)
            }
        ]
    });
}