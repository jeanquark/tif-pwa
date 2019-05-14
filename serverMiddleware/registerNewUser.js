const connect = require('connect'),
      express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      moment = require('moment'),
    //   admin = require('../services/firebase-admin-init.js');
      admin = require('firebase-admin');

// const app = connect();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function buildUserObject (payload) {
    let user = {}
    user.id = payload.id,
    user.email = payload.email,
    user.pseudo = payload.pseudo ? payload.pseudo : '',
	// user.birthyear = payload.userbirthyear ? payload.userbirthyear : '',
    user.country = {
        name: payload.country.name ? payload.country.name : '',
        slug: payload.country.slug ? payload.country.slug : ''
    },
    // user.language = {
    //     name: payload.language.name ? payload.language.name : '',
    //     slug: payload.language.slug ? payload.language.slug : ''
    // },
    user.level = {
        value: 1,
        _updated_at: moment().unix()
    },
    user.energy = {
        value: 100,
        _updated_at: moment().unix()
    },
    user.tokens = {
        value: 10,
        _udpated_at: moment().unix()
    },
	user.dollarFan = {
		value: 500,
		_udpated_at: moment().unix()
	},
	user.action = {
		value: 0,
		_udpated_at: moment().unix()
	},
	user.skillStrength = { // Physique
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillEndurance = { // Endurance
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillMental = { // Mental
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillMedical = { // Médical
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillCreativity = { // Artistique
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillAuthority = { // Leadership
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillSpiel = { // Baratin
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillSocial = { // Travail d'équipe
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillPuissance = { // Puissance
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillZen = { // Zenitude
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillSpeed = { // Vitesse
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillGoodManners = { // Savoir-Vivre
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillHumor = { // Humour
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillCharisma = { // Charisme
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillMusical = { // Musical
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillEngineering = { // Ingénierie
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillTechnology = { // Technologie
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillResourcefulness = { // Débrouillardise
		value: 1,
		_udpated_at: moment().unix()
	},
	user.stuffAvatarTete = { // Stuff avatar Tête
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarVisage = { // Stuff avatar Visage
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarTorse = { // Stuff avatar Torse
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarBras = { // Stuff avatar Bras
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarJambes = { // Stuff avatar Jambes
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarPieds = { // Stuff avatar Pieds
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarAccessory1 = { // Stuff avatar Accessory1
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarAccessory2 = { // Stuff avatar Accessory2
		value: '',
		_updated_at: moment().unix()
	},
    user.status = {
        value: 'user',
        _updated_at: moment().unix()
    },
    user._created_at = moment().unix(),
    user._updated_at = moment().unix()
    return user
}

function buildUserObjectOAuth (payload) {
    let user = {}
    user.id = payload.uid,
    user.email = payload.email,
    user.pseudo = '',
	// user.userbirthyear = '',
    user.country = {
        name: '',
        slug: ''
    },
    user.language = {
        name: '',
        slug: ''
    },
    user.level = {
        value: 1,
        updated_at: moment().unix()
    },
    user.tokens = {
        value: 200,
        udpated_at: moment().unix()
    },
	user.dollarFan = {
		value: 500,
		udpated_at: moment().unix()
	},
	user.action = {
		value: 0,
		udpated_at: moment().unix()
	},
	user.skillStrength = { // Physique
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillEndurance = { // Endurance
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillMental = { // Mental
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillMedical = { // Médical
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillCreativity = { // Artistique
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillAuthority = { // Leadership
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillSpiel = { // Baratin
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillSocial = { // Travail d'équipe
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillPuissance = { // Puissance
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillZen = { // Zenitude
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillSpeed = { // Vitesse
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillGoodManners = { // Savoir-Vivre
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillHumor = { // Humour
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillCharisma = { // Charisme
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillMusical = { // Musical
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillEngineering = { // Ingénierie
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillTechnology = { // Technologie
		value: 1,
		_udpated_at: moment().unix()
	},
	user.skillResourcefulness = { // Débrouillardise
		value: 1,
		_udpated_at: moment().unix()
	},
	user.stuffAvatarTete = { // Stuff avatar Tête
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarVisage = { // Stuff avatar Visage
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarTorse = { // Stuff avatar Torse
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarBras = { // Stuff avatar Bras
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarJambes = { // Stuff avatar Jambes
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarPieds = { // Stuff avatar Pieds
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarAccessory1 = { // Stuff avatar Accessory1
		value: '',
		_updated_at: moment().unix()
	},
	user.stuffAvatarAccessory2 = { // Stuff avatar Accessory2
		value: '',
		_updated_at: moment().unix()
	},
    user.status = {
        value: 'user',
        updated_at: moment().unix()
    },
    user._created_at = moment().unix(),
    user._updated_at = moment().unix()
    return user
}

module.exports = app.use(async function (req, res, next) {
    try {
        console.log('REGISTER NEW USER');
        console.log('req.body.type: ', req.body.type);
        console.log('req.body.data: ', req.body.data);

        let newUser = {};
        if (req.body && req.body.data && req.body.type === 'oauth') {
            newUser = buildUserObjectOAuth(req.body.data);
        } else if (req.body && req.body.data && req.body.type === 'form') {
            newUser = buildUserObject(req.body.data);
        }
        console.log('newUser: ', newUser);
        const userId = newUser.id;
        console.log('newUserId: ', userId);

        var db = admin.database();
        var ref = db.ref('users');
        var usersRef = ref.child(userId);

        usersRef.set(newUser, function(error) {
            if (error) {
                console.log('User could not be registered.' + error);
            } else {
                console.log('User was registered successfully.');
            }
        });
        
        // await admin.database().ref('users').child(userId).set(newUser);
        // res.end('Hello from RegisterNewUser!\n');
        // res.end('Successfully registered new user');
        res.send(newUser);
        // next();
    } 
    catch (error) {
        // res.end('Server error');
        res.status(500).send(`Server error, user could not be registered, ${error}`);
    }
});