const express = require("express"),
      moment = require("moment"),
      // axios = require("axios"),
      admin = require("firebase-admin"),
      slugifyFunction = require("../../helpers/slugify"),
      // getRoundData = require("../../helpers/api/rounds"),
      // getLeagueData = require("../../helpers/api/leagues"),
      // getTeamData = require("../../helpers/api/teams"),
      unirest = require("unirest");

const app = express();
// const api_key = process.env.APIFOOTBALL_KEY;
// axios.defaults.headers.common['X-RapidAPI-Key'] = "V5NyybcqoimshrFl7oR8yKKDMyxhp10zkcfjsnGw3uB6ZeMcDI";
// axios.defaults.headers.common['X-RapidAPI-Key'] = api_key;
// const api_key = process.env.LIVESCORE_API_KEY;
// const api_secret = process.env.LIVESCORE_API_SECRET;

const today = moment().format('YYYY-MM-DD');
const in1day = moment().add(1, 'days').format('YYYY-MM-DD');
// const in2days = moment().add(2, 'days').format('YYYY-MM-DD');
// const in3days = moment().add(3, 'days').format('YYYY-MM-DD');
// const in4days = moment().add(4, 'days').format('YYYY-MM-DD');
// const in5days = moment().add(5, 'days').format('YYYY-MM-DD');
// const in6days = moment().add(6, 'days').format('YYYY-MM-DD');
// const in7days = moment().add(7, 'days').format('YYYY-MM-DD');
// const in8days = moment().add(8, 'days').format('YYYY-MM-DD');
// const in9days = moment().add(9, 'days').format('YYYY-MM-DD');
// const in10days = moment().add(10, 'days').format('YYYY-MM-DD');
// const in11days = moment().add(11, 'days').format('YYYY-MM-DD');
const in12days = moment().add(12, 'days').format('YYYY-MM-DD');
const in13days = moment().add(13, 'days').format('YYYY-MM-DD');
const in14days = moment().add(14, 'days').format('YYYY-MM-DD');

// const days = [];
// for (let i = 0; i < 15; i++) {
//     days.push(moment().add(i, 'days').format('YYYY-MM-DD'));
// };
// console.log('days: ', days);



// const leagues = [2, 87, 8, 94, 4, 119];
// const days = [today, in1day, in2days, in3days, in4days, in5days, in6days, in7days, in8days, in9days, in10days, in11days, in12days, in13days, in14days];
const days = [today, in1day, in12days, in13days, in14days];
// console.log('days: ', days);

function getDailyMatches2 (day) {
    const url = `https://api-football-v1.p.rapidapi.com/fixtures/date/${day}`;
    // const url = "https://api-football-v1.p.rapidapi.com/fixtures/date/2019-03-06";
    return axios.get(url);
}

function getDailyMatches (day) {
    const url = `https://api-football-v1.p.rapidapi.com/fixtures/date/${day}`;
    // const url = "https://api-football-v1.p.rapidapi.com/fixtures/date/2019-03-06";
    return unirest.get(url).headers({
        'Accept': 'application/json',
        'X-RapidAPI-Key': 'V5NyybcqoimshrFl7oR8yKKDMyxhp10zkcfjsnGw3uB6ZeMcDI'
    });
}

// function getPremierLeagueMatches() {
//   const url =
//     "http://livescore-api.com/api-client/fixtures/matches.json?key=" +
//     api_key +
//     "&secret=" +
//     api_secret +
//     "&league=25";
//   return axios.get(url);
// }

// function getLaLigaMatches() {
//   const url =
//     "http://livescore-api.com/api-client/fixtures/matches.json?key=" +
//     api_key +
//     "&secret=" +
//     api_secret +
//     "&league=74";
//   return axios.get(url);
// }

// function getBundesligaMatches() {
//   const url =
//     "http://livescore-api.com/api-client/fixtures/matches.json?key=" +
//     api_key +
//     "&secret=" +
//     api_secret +
//     "&league=114";
//   return axios.get(url);
// }

// function getSerieAMatches() {
//   const url =
//     "http://livescore-api.com/api-client/fixtures/matches.json?key=" +
//     api_key +
//     "&secret=" +
//     api_secret +
//     "&league=73";
//   return axios.get(url);
// }

// function getLigue1Matches() {
//   const url =
//     "http://livescore-api.com/api-client/fixtures/matches.json?key=" +
//     api_key +
//     "&secret=" +
//     api_secret +
//     "&league=46";
//   return axios.get(url);
// }

// function getSuperLeagueMatches() {
//   const url =
//     "http://livescore-api.com/api-client/fixtures/matches.json?key=" +
//     api_key +
//     "&secret=" +
//     api_secret +
//     "&league=12";
//   return axios.get(url);
// }

// To be called once a day
module.exports = app.use(async function(req, res, next) {
    try {
        // 1) First, retrieve all teams
        const teamsArray = []
        const teams = await admin.database().ref('/teams').once('value')
        teams.forEach(team => {
            teamsArray.push({
                apifootball_id: team.val().apifootball_id, 
                name: team.val().name, 
                slug: team.val().slug
            })
        })

        // 2) Second, fetch all active competitions
        const competitionsArray = []
        const competitions = await admin.database().ref('/competitions').once('value')
        competitions.forEach(competition => {
            if (competition.val().status === 'active') {
                competitionsArray.push({
                    name: competition.val().name,
                    slug: competition.val().slug,
                    apifootball_id: competition.val().apifootball_id,
                    status: competition.val().status,
                    countries: competition.val().countries
                });
            }
        });

        console.log('competitionsArray: ', competitionsArray)

        // 3) Third, make request
        let updates = {};
        for (let day of days) {
            console.log('day: ', day);
            const response = await getDailyMatches(day);
            // // console.log('response: ', response.data.api.fixtures);
            // Object.values(response.data.api.fixtures).forEach(match => {
            Object.values(response.body.api.fixtures).forEach(match => {
            // console.log('match: ', match);
            //     // if (competitionsArray.includes)
                if (competitionsArray.find(competition => competition.apifootball_id == match.league_id)) {
                    console.log('match: ', match)

                    // Define teams data
                    const homeTeamData = teamsArray.find(team => parseInt(team.apifootball_id) === parseInt(match.homeTeam_id));
                    let homeTeam_slug = '';
                    if (!homeTeamData) {
                        console.log('No homeTeamData!');
                        homeTeam_slug = slugifyFunction.slugify(match.homeTeam);
                    } else {
                        homeTeam_slug = homeTeamData.slug;
                    }

                    const visitorTeamData = teamsArray.find(team => parseInt(team.apifootball_id) === parseInt(match.awayTeam_id));
                    let awayTeam_slug = '';
                    if (!visitorTeamData) {
                        console.log('No visitorTeamData!')
                        awayTeam_slug = slugifyFunction.slugify(match.awayTeam);
                    } else {
                        awayTeam_slug = visitorTeamData.slug;
                    }

                    const id = match.fixture_id;
                    updates[`/events_new3/${id}/id`] = id;
                    updates[`/events_new3/${id}/date`] = match.event_date;
                    updates[`/events_new3/${id}/timestamp`] = match.event_timestamp;
                    updates[`/events_new3/${id}/league_id`] = match.league_id;
                    updates[`/events_new3/${id}/round`] = match.round;
                    updates[`/events_new3/${id}/homeTeam_id`] = match.homeTeam_id;
                    updates[`/events_new3/${id}/homeTeam_name`] = match.homeTeam;
                    updates[`/events_new3/${id}/homeTeam_slug`] = homeTeam_slug;
                    updates[`/events_new3/${id}/homeTeam_score`] = match.goalsHomeTeam;
                    updates[`/events_new3/${id}/visitorTeam_id`] = match.awayTeam_id;
                    updates[`/events_new3/${id}/visitorTeam_name`] = match.awayTeam;
                    updates[`/events_new3/${id}/visitorTeam_slug`] = awayTeam_slug;
                    updates[`/events_new3/${id}/visitorTeam_score`] = match.goalsAwayTeam;
                    updates[`/events_new3/${id}/halftime_score`] = match.halftime_score;
                    updates[`/events_new3/${id}/final_score`] = match.final_score;
                    updates[`/events_new3/${id}/penalty`] = match.penalty;
                    updates[`/events_new3/${id}/elapsed`] = match.elapsed;
                    updates[`/events_new3/${id}/status`] = match.status;
                    updates[`/events_new3/${id}/statusShort`] = match.statusShort;
                }
            });
        };
        

        const snapshot = await admin.database().ref().update(updates);
        // console.log('snapshot.val(): ', snapshot.val());
        // admin
        //     .database()
        //     .ref()
        //     .update(updates)
        //     .then(snapshot => {
        //         // console.log("Successfully updated firebase database with new events");
        //         console.log('snapshot: ', snapshot);
        //         // res.send("GET request succeeded to fetch daily matches!");
        //         throw Error();
        //     })
        //     .catch(error => {
        //         console.log("Firebase error: ", error);
        //         throw Error(error);
        //     });
        res.send("GET request to APIFootball to fetch daily matches succeeded!");
        
    } catch (error) {
        console.log("APIFootball error: ", error);
        res.end('GET request to APIFootball to fetch matches failed: ', error.toString());
    }
});
