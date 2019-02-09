<template>
    <v-content id="app container">
            <v-container fluid id="header" class="header">
                <v-layout row>
                    <v-flex class="barreHeader">
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <span style="margin-left: 100px; float: left; margin-top: 4px;"><img src="switzerland.png" class="imgTeamSmall" /></span> <span style="color: white; font-weight: 700; padding: 4px; float: left; margin-top: 4px">G. Manigley (41 ans)</span>
                            </v-flex>
                            <v-flex xs6 sm6 md6>
                                <span style="margin-right: 100px; color: white; font-weight: 700; padding: 4px; float: right; margin-top: 4px">Fan de l'équipe de suisse de football (1.34 PF)</span>
                            </v-flex>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <a href="monavatar.html">
                     <v-flex shrink>
                        <div id="avatar">
                            <img src="avatar.png" class="imgAvatar" />
                        </div>
                    </a>
                    </v-flex>
                    <v-flex grow>
                        <v-layout row>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; border-left: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                                <div style="text-align: center" class="levelHeader">Niv.1</div>
                                <v-progress-linear color="orange" height="20" value="30" style="width: 100%; font-weight: 700; color: white; border-radius: 5px">3 / 10</v-progress-linear>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                <v-progress-linear color="yellow" height="20" value="75" style="width: 100%; font-weight: 700; color: black; border-radius: 5px">75 / 100</v-progress-linear>
                                <a href="plus.html" class="aPlusYellow">
                                <span class="plusYellow">+</span>
                                </a>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                <div class="dollarFan">1234 $fans</div>
                                <a href="plus.html" class="aPlusGreen">
                                <span class="plusGreen">+</span>
                                </a>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black;height: 120px; border-bottom: 1px solid orangered; border-right: 1px solid orangered; box-shadow: 0 4px 5px -1px black; position: relative">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                                <div class="token">12 tokens</div>
                                <a href="plus.html" class="aPlusOrangered">
                                <span class="plusOrangered">+</span>
                                </a>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex shrink>
                    <a href="myteams.html">
                    <div id="team">
                        <img src="switzerland.png" class="imgTeam" />
                    </div>
                    </a>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container fluid id="content">
                <div class="centreImage">
                    <div class="content">
                        <img src="carte.png" class="imgCarte" />
                    </div>
                    <div>
                        <img src="menuShop.png" class="image1">
                    </div>
                </div>
            </v-container>

            <v-footer style="position: absolute; bottom: 0; width: 100%; height: auto" class="text-xs-center">
                <v-container style="padding: 0; margin: 0">
                    <div class="barreOrangered"></div>
                    <div class="barreBlack"></div>
                    <div id="dock-container">
                        <div id="dock">
                            <ul>
                                <li>
                                    <a href="equipes.html"><img src="menuShop.png">
                                    <span class="textMenu">Inventaire</span></a>
                                </li>
                                <li>
                                    <a href="shop.html"><img src="menuShop.png">
                                    <span class="textMenu">Le Shop</span></a>
                                </li>
                                <li id="active">
                                    <nuxt-link to="/"><img src="menuHome.png">
                                    <span class="textMenu">Aujourd'hui</span></nuxt-link>
                                </li>
                                <li>
                                    <a href="joueurs.html"><img src="menuSocial.png">
                                    <span class="textMenu">Mes amis</span></a>
                                </li>
                                <li>
                                    <a href="scoremode.html"><img src="menuResultat.png">
                                    <span class="textMenu">ScoreMode</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </v-container>
            </v-footer>
    </v-content>
</template>

<script>
    import moment from 'moment'
    export default {
        head: {
            title: 'Events',
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
			]
        },
        layout: 'layoutScoreMode',
        async created() {
            const today = moment().format('YYYY-MM-DD')
   //          console.log('today: ', today)
   //          // if (this.$store.getters("events/loadedEvents").length < 1) {
   //              await this.$store.dispatch("events/loadedEvents")
   //          // }
   //          if (this.$store.getters['users/loadedUserTeams'].length < 1) {
			// 	await this.$store.dispatch('users/loadedUserTeams')
			// }
            await this.$store.commit('events/setEmptyEvents')
            await this.$store.commit('competitions/setEmptyCompetitions')
            // if (this.$store.getters('events/loadedEvents').length < 1) {
                await this.$store.dispatch("events/loadedEventsAndCompetitionsByDay", today)
            // }
            // if (this.$store.getters['competitions/loadedCompetitions'].length < 1) {
            //     this.$store.dispatch('competitions/loadedCompetitions')
            // }
        },
        data() {
            return {
                active: "",
                dayNumber: 0,
                date: moment(),
                // competitions: {
                //     'spanish_la_liga_2018_2019': {
                //         "name": "La Liga",
                //         "slug": "spanish_la_liga_2018_2019"
                //     },
                //     'english_premier_league_2018_2019': {
                //         "name": "Premier League",
                //         "slug": "english_premier_league_2018_2019"
                //     },
                //     'italian_serie_a_2018_2019': {
                //         "name": "Serie A",
                //         "slug": "italian_serie_a_2018_2019"
                //     },
                //     'german_bundesliga_2018_2019': {
                //         "name": "Bundesliga",
                //         "slug": "german_bundesliga_2018_2019"
                //     },
                //     'french_ligue1_2018_2019': {
                //         "name": "Ligue 1",
                //         "slug": "french_ligue1_2018_2019"
                //     },
                //     'swiss_super_league_2018_2019': {
                //         "name": "Super League",
                //         "slug": "swiss_super_league_2018_2019"
                //     }
                // }
            }
        },
        computed: {
            classObject() {
                if (this.active === "left") {
                return "activeLeft";
                } else if (this.active === "right") {
                return "activeRight";
                }
                return "headerInfo";
            },
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            },
            userTeams () {
				return this.$store.getters['users/loadedUserTeams']
			},
			userTeamsIds () {
				const userTeamsIds = []
				const userTeams = this.$store.getters['users/loadedUserTeams']
				userTeams.forEach((team) => {
					userTeamsIds.push(parseInt(team.livescore_api_id))
				})
				return userTeamsIds
			},
            allEvents () {
                // return this.$store.getters['events/loadedEvents']
                const today = moment().format('YYYY-MM-DD')
                const userTeamsIds = this.userTeamsIds
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === today))
                    .filter(event => (!userTeamsIds.includes(event.home_team.id) && !userTeamsIds.includes(event.visitor_team.id)))
                    // .filter(event => (!userTeamsIds.includes(event.visitor_team.id)))
                    .sort((a, b) => a.timestamp - b.timestamp)
            },
            events () {
                // const today = moment().format('YYYY-MM-DD')
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === this.date.format('YYYY-MM-DD')))
                    .sort((a, b) => a.timestamp - b.timestamp)
            },
            userEvents () {
                const today = moment().format('YYYY-MM-DD')
                const userTeamsIds = this.userTeamsIds
                console.log('userTeamsIds: ', userTeamsIds)
				return this.$store.getters['events/loadedEvents']
					.filter(event => (event.date === today))
					.filter(event => (userTeamsIds.includes(event.home_team.livescore_api_id) || userTeamsIds.includes(event.visitor_team.livescore_api_id)))
					.sort((a, b) => a.timestamp - b.timestamp)
            },
            competitions () {
                return this.$store.getters['competitions/loadedCompetitions']
            }
        },
        methods: {
            convertToLocaltime (timestamp) {
                const utcDiff = new Date().getTimezoneOffset()
                // const utcDiff = '60'
                console.log('utcDiff: ', utcDiff)
                if (utcDiff > 0) {
                    return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
                } else {
                    return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
                }
            },
            eventsByCompetition (competition) {
                return this.$store.getters['events/loadedEvents']
                    .filter(event => (event.date === this.date.format('YYYY-MM-DD') && event.competition.slug === competition))
                    .sort((a, b) => a.timestamp - b.timestamp)
                // return this.allEvents.filter(event => event.competition.slug === competition)
            },
            convertToLocalTime (timestamp) {
				const utcDiff = new Date().getTimezoneOffset()
                console.log('utcDiff: ', utcDiff)
                // console.log('moment.unix(timestamp): ', moment.unix(timestamp))
                // return moment.unix(timestamp).format("HH:mm")
				if (utcDiff > 0) {
					return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
				} else {
					return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
				}
			},
            async eventsByDate (setDayNumber) {
                console.log('setDate: ', setDayNumber)
                switch(setDayNumber) {
                    case 'substractOne':
                        this.dayNumber -= 1
                        break
                    case 'yesterday':
                        this.dayNumber = -1
                        break
                    case 'tomorrow': 
                        this.dayNumber = 1
                        break
                    case 'addOne': 
                        this.dayNumber += 1
                        break
                }

                this.date = moment().add(this.dayNumber, 'days')
                console.log('this.date: ', this.date)

                const events = this.$store.getters['events/loadedEvents'].filter(event => (
                    event.date === this.date.format('YYYY-MM-DD')
                ))
                if (events.length < 1) {
                    console.log('events.length < 1')
                    await this.$store.dispatch('events/loadedEventsAndCompetitionsByDay', this.date.format('YYYY-MM-DD'))
                }
                console.log('events: ', events)
                return events

                // return this.$store.getters['events/loadedEvents']
            },
            mouseOver(direction) {
                console.log(direction);
                if (direction === "left") {
                    this.active = "left";
                } else if (direction === "right") {
                    this.active = "right";
                }
            },
            mouseLeave() {
                this.active = null;
            }
        }
    }
</script>

	<style scoped>
	
    body {
    color: #FFFFFF;
    background-color: black;
    width: 1000px;
    margin: auto;
    border-left: 1px solid orangered;
    border-right: 1px solid orangered;
    }
    
    #container {
    height: 100%;
    width: 1000px;
    position: absolute;
    }
    
    /* header */
    
    #header {
    height: 162px;
    padding: 0;
    margin: 0;
    top:0px;
    left:0px;
    background-color: black;
    z-index: 0;
    border-bottom: 3px solid orangered;
    }
    .header {
    position: relative;
    }
    .barreHeader {
    position:absolute;
    top: 120px;
    width: 100%;
    background-color: orangered;
    z-index: -1;
    margin: 0;
    padding: 0;
    }
    #avatar {
    background-color: black;
    border-right: 3px solid orangered;
    border-bottom: 3px solid orangered;
    box-shadow: 0 7px 5px black;
    height: 150px;
    width: 150px;
    border-radius: 0 0 100% 0;
    }
    .imgAvatar {
    height: 100%;
    width: 100%;
    border-radius: 0 0 100% 0;
    }
    #team {
    background-color: black;
    border-left: 3px solid orangered;
    border-bottom: 3px solid orangered;
    box-shadow: 0 7px 5px black;
    height: 150px;
    width: 150px;
    border-radius: 0 0 0 100%;
    }
    .imgTeam {
    height: 100%;
    width: 100%;
    border-radius: 0 0 0 100%;
    }
    .imgTeamSmall {
    height: 20px;
    margin-top: 5px;
    }
    .imgHeader {
    height: 50px;
    width: 50px;
    color: green;
    }
    .dollarFan {
    margin-top: 14px;
    width: 100%;
    text-align: center;
    color: green;
    font-weight: 700;
    box-shadow: 0 0 10px 2px inset;
    border-radius: 5px;
    }
    .token {
    margin-top: 14px;
    width: 100%;
    text-align: center;
    color: orangered;
    font-weight: 700;
    box-shadow: 0 0 10px 2px inset;
    border-radius: 5px;
    }
    .plusOrangered {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    background-color: orangered;
    }
    .aPlusOrangered :hover {
    color: orangered;
    background-color: white;
    border-bottom: 1px solid orangered;
    border-left: 1px solid orangered;
    }
    .plusYellow {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: black;
    font-weight: 700;
    font-size: 1.2em;
    background-color: yellow;
    }
    .aPlusYellow :hover {
    color: black;
    background-color: white;
    border-bottom: 1px solid yellow;
    border-left: 1px solid yellow;
    }
    .plusGreen {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    background-color: green;
    }
    .aPlusGreen :hover {
    color: green;
    background-color: white;
    border-bottom: 1px solid green;
    border-left: 1px solid green;
    }
    
    /* Material Icons */
    
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    
    .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
    }   
    
    /* End Material Icons */
    
    .levelHeader {
    font-weight: 700;
    font-size: 36px;  /* Preferred icon size */
    background-color: orange;
    color: white;
    border-radius: 10px;
    }
    
    /* End Header */
    
    /* Content */
    
    #content {
    height: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    position: relative;
    }
    .content {
    height: 100%;
    overflow: scroll;
    padding: 0;
    margin: 0;
    }
    .centerImage {
    height: 100%;
    }
    .imgCarte {
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
    .image1 {
    position: absolute;
    top: 100px;
    left: 300px;
    height: 50px;
    width: 50px;
    }
        
    /* End Content */

    /* Footer */

    #footer {
    height: 91px;
    padding: 0;
    margin: 0;
    }
    
    .barreBlack {
    width: 100%;
    padding: 0;
    margin: 0;
    height: 8px;
    background-color: black;
    }
    .barreOrangered {
    width: 100%;
    padding: 0;
    margin: 0; 
    height: 3px;
    background-color: orangered;
    }
    
    /* Menu */

    #dock-container {
    height: 80px;
    padding: 0;
    margin: 0;
    bottom: 0;
    background-color: orangered;
    border: none;
    border-top: 4px solid orangered;
    }

    #dock-container li#active img {
    -webkit-transform: scale(1.65);
    margin: 0 0.5em;
    }

    #dock-container li {
    width: 17%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: inline-block;
    position: relative;
    padding-top: 10px;
    }

    #dock-container ul {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 0;
    }

    #dock-container li img {
    width: 58px;
    height: 58px;
    -webkit-gradient: (linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
    -webkit-transition: all 0.3s;
    -webkit-transform-origin: 50% 100%;
    }

    #dock-container li:hover img { 
    -webkit-transform: scale(1.65);
    margin: 0 0.5em;
    }

    #dock-container li:hover + li img, #dock-container li.prev img {
    -webkit-transform: scale(1);
    margin: 0 0;
    }

    #dock-container li span {
    display: none;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    }

    #dock-container li#active span {
    display: none;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    }

    #dock-container li#active span {
    display: block;
    color: #fff;
    }

    #dock-container li#active .textMenu {
    font: normal 120%/1 "Acme", Helvetica, sans-serif;
    padding: 2px;
    }

    #dock-container li:hover span {
    display: block;
    color: #fff;
    }

    #dock-container .textMenu {
    font: normal 120%/1 "Acme", Helvetica, sans-serif;
    padding: 2px;
    }
    
    /* End Menu */
    
    /* End Footer */
	</style>
