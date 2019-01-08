const express = require('express'),
	  moment = require('moment'),
	  axios = require('axios'),
	  admin = require('firebase-admin'),
	  env = require("dotenv").config();

console.log('abc');
const app = express();
const api_key = process.env.LIVESCORE_API_KEY;
const api_secret = process.env.LIVESCORE_API_SECRET;

module.exports = app.use(async function(req, res, next) {
	try {
		let updates = {};
		const url = `http://livescore-api.com/api-client/leagues/table.json?key=${api_key}&secret=${api_secret}&league=25&season=2&v`
		
		// console.log('url: ', url);

		// const now = moment().format('YYYY-MM-DD HH:mm:ss');
		// const now = new Date();
		const now = moment();
		console.log('now: ', now);
		const last_changed = moment("2019-01-07 15:10:01");
		console.log('last_changed: ', last_changed);
		const diff = now.diff(last_changed, 'minutes');	
		console.log('diff: ', diff);

		const standing = await axios.get(url);
        // console.log('standing: ', standing.data.data);
        // console.log('standing: ', standing.data.data.table);
        const teams = standing.data.data.table;
        teams.forEach((team) => {
        	updates["/standings/" + "swiss_super_league/" + team.name] = team;
        });
        // console.log('updates: ', updates);
        // for (const [index, team] of standing.data.data.table) {
        // 	console.log('team: ', team)
        // 	updates["/standings/" + "swiss_super_league/"] = {...team, rank: index + 1};
        // }
        // updates["/standings/" + "swiss_super_league/"] = standing;

        await admin.database().ref().update(updates);
        console.log('done!');
        res.send('GET request succeeded');
	} catch (error) {
		console.log('error: ', error)
		res.send('GET request to fetch standings failed...');
	}
});
