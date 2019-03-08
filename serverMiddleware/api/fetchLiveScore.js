const express = require("express"),
      moment = require("moment"),
      admin = require("firebase-admin"),
      slugifyFunction = require("../../helpers/slugify"),
      unirest = require('unirest');

const app = express();
// const api_key = process.env.LIVESCORE_API_KEY;
// const api_key = process.env.APIFOOTBALL_KEY;
// console.log('api_key: ', api_key);
// axios.defaults.headers.common['X-RapidAPI-Key'] = api_key;
// unirest.defaults.headers.common['X-RapidAPI-Key'] = api_key;

// function getLiveScore() {
//     const url = "https://api-football-v1.p.rapidapi.com/fixtures/live";
//     return axios.get(url);
// }

// function getLiveScore2() {
//     unirest.get("https://api-football-v1.p.rapidapi.com/fixtures/live")
//         .header("X-RapidAPI-Key", "V5NyybcqoimshrFl7oR8yKKDMyxhp10zkcfjsnGw3uB6ZeMcDI")
//         .end(function (result) {
//             console.log('api_key: ', api_key);
//             console.log(result.status, result.body.api);
//             return result.body;
//         });
// }

function getLiveScore () {
    const url = "https://api-football-v1.p.rapidapi.com/fixtures/live";
    return unirest.get(url).headers({
        'Accept': 'application/json',
        'X-RapidAPI-Key': 'V5NyybcqoimshrFl7oR8yKKDMyxhp10zkcfjsnGw3uB6ZeMcDI'
    });
}

function getLeagueStanding (league) {
    const url = `https://api-football-v1.p.rapidapi.com/leagueTable/${league}`;

    return unirest.get(url).headers({
        'Accept': 'application/json',
        'X-RapidAPI-Key': 'V5NyybcqoimshrFl7oR8yKKDMyxhp10zkcfjsnGw3uB6ZeMcDI'
    });
}

// To be called every minute
module.exports = app.use(async function(req, res, next) {
    try {
        // 1) First, retrieve all competitions
        // const competitionIdsArray = [];
        const competitionsArray = [];
        const competitions = await admin.database().ref('/competitions').once('value');
        competitions.forEach(competition => {
            if (competition.val().status === 'active') {
                // competitionIdsArray.push(String(competition.val().livescore_api_id))
                competitionsArray.push({
                    name: competition.val().name,
                    slug: competition.val().slug,
                    league_id: competition.val().apifootball_id,
                    status: competition.val().status,
                    countries: competition.val().countries
                });
            }
        });
        // competitionIdsArray.push('277')
        console.log('competitionsArray: ', competitionsArray);
        // console.log('competitionIdsArray: ', competitionIdsArray)
        // return
        // axios.get("https://api-football-v1.p.rapidapi.com/fixtures/live")
        const response = await getLiveScore();
        // console.log('abc');
        console.log('response.status: ', response.status);
        // console.log('response.body: ', response.body);
        // console.log('response.body.api: ', response.body.api);
        console.log('response.body.api.fixtures: ', response.body.api.fixtures);
        // console.log('response.body.api.results: ', response.body.api['results']);

        let updates = {};
        // Object.values(response.body.api.fixtures).forEach(match => {
        // Object.values(response.body.api.fixtures).forEach(() => { async match => {
        for (let match of Object.values(response.body.api.fixtures)) {

            // console.log('match: ', match);
            console.log('match.league_id: ', match.league_id);
            if (competitionsArray.find(competition => competition.apifootball_id == match.league_id)) {
                console.log('match: ', match);
                const id = match.fixture_id;
                updates[`/events_new3/${id}/status`] = match.status;
                updates[`/events_new3/${id}/statusShort`] = match.statusShort;
                updates[`/events_new3/${id}/goalsHomeTeam`] = match.goalsHomeTeam;
                updates[`/events_new3/${id}/goalsAwayTeam`] = match.goalsAwayTeam;
                updates[`/events_new3/${id}/halftime_score`] = match.halftime_score;
                updates[`/events_new3/${id}/final_score`] = match.final_score;
                updates[`/events_new3/${id}/penalty`] = match.penalty;
                updates[`/events_new3/${id}/elapsed`] = match.elapsed;
            }

            // Match has ended, update league standing
            if (match.statusShort === 'FT') {
                const response = await getLeagueStanding(match.league_id);
                console.log('response: ', response);
                // Object.values(response.body.api.standings).forEach(teams => {
                //     teams.forEach(team => {
                //         updates[`/standings_new3/${match.league_id}/standing/${team.rank}`] = team;
                //     });
                // });
            }
        // });
        // }});
        };

        const snapshot = await admin.database().ref().update(updates);

        console.log('def');

        res.status(200).send('GET request to APIFootball to fetch live scores succeeded!');


    } catch (error) {
        console.log('error: ', error);
        res.end(`GET request to APIFootball to fetch live scores failed: ${error}`);
        // res.status(500).send("GET request to APIFootball to fetch live scores failed: ", error.toString());
    }
});
