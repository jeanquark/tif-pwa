<template>
    <v-content id="app">
        <v-container fluid style="padding: 0; max-width: 800px; background-color: green; color: white;">
            <v-layout justify-center row fill-height align-center>
                <v-flex d-flex xs12 class="competitionBouton">
					<div>
						<v-btn href="/competitions" color="black btnSmall" fab dark>
							<v-icon>keyboard_arrow_left</v-icon>
						</v-btn>
						<img src="../static/images/teams/albania.png" class="imgCompetitionLogo">
						<span class="competitionName">Nom de la compétition</span>
					</div>                    
                </v-flex>
            </v-layout>
            <v-layout justify-center row fill-height style="border-top: solid 1px white">
				<v-flex xs12 align-center class="scrolling-wrapper-flexbox">
					<nuxt-link to="/competition2" class="cardMenuCompetition1">MATCHS</nuxt-link>
					<nuxt-link to="/competition2"  class="cardMenuCompetition1">CLASSEMENT</nuxt-link>
					<nuxt-link to="/competition2"  class="cardMenuCompetition1">INFOS</nuxt-link>
					<nuxt-link to="/competition2"  class="cardMenuCompetition1">CLASSEMENTS</nuxt-link>
					<nuxt-link to="/competition2"  class="cardMenuCompetition1">EQUIPES</nuxt-link>
					<nuxt-link to="/competition2"  class="cardMenuCompetition1">STADES</nuxt-link>
					<nuxt-link to="/competition2"  class="cardMenuCompetition1">PALMARES</nuxt-link>
				</v-flex>
            </v-layout>             
        </v-container>

        <v-container fluid style="padding: 0; max-width: 800px; background-color: whitesmoke; margin-bottom: 80px">
		
            <v-card-text class="card-text">
                <v-expansion-panel class="elevation-0" :value="0">
                    <v-expansion-panel-content class="orange">
                        <div slot="header" class="white--text">
                            FAVORITE COMPETITIONS
                        </div>
                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                        <v-expansion-panel class="elevation-0" :value="0" v-for="competition in competitions" :key="competition.slug">
                            <v-expansion-panel-content class="black">
                                <v-card>
									<v-card-text style="padding: 0">
                                        <v-data-table :items="eventsByCompetition(competition.slug)" class="elevation-0" hide-actions hide-headers>
											<template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid orange">
												<v-layout align-center style="padding: 0; border-right: 1px solid orange; border-left: 1px solid orange; border-bottom: 1px solid orange">
													<v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
														<v-layout align-start>
															<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
																<div style="background-color: green; height: 100%; width: 2px"></div>
															</v-flex>
															<v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
																<div style="color: orange;font-size: 80%">
																	<span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >OUVERT</span>
																</div>
															</v-flex>
														</v-layout>
														<v-layout align-center style="max-width: 100%">
															<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
																<div style="background-color: green; height: 40px; width: 2px"></div>
															</v-flex>
															<v-flex sm1 xs2 align-center class="text-xs-center" style="width: 50px; padding-left: 15px">
																<img :src="'/images/teams/' + props.item.home_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
															</v-flex>
															<v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
																<span class="teamTextSize">Nom de la compétition</span>
															</v-flex>
															<v-flex sm3 hidden-xs-only class="text-xs-right">
																<span style="background-color: orange; black: orange; padding: 2px 10px; border-radius: 5px; font-size: 100%">FC Barcelone</span>
															</v-flex>
															<v-flex sm4 xs5 align-center class="text-xs-right" style="width: 50px; padding-right: 15px">
																<span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 100%">12345 fans</span>
															</v-flex>
														</v-layout>
													</v-flex>
												</v-layout>
                                            </template>
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card-text>

            <v-card-text class="card-text">
                <v-expansion-panel class="elevation-0" :value="0">
                    <v-expansion-panel-content class="green">
                        <div slot="header" class="white--text">
                            ALL COMPETITIONS
                        </div>
                        <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                        <v-expansion-panel class="elevation-0" :value="0" v-for="competition in competitions" :key="competition.slug">
                            <v-expansion-panel-content class="black">
                                <v-card>
									<v-card-text style="padding: 0">
                                        <v-data-table :items="eventsByCompetition(competition.slug)" class="elevation-0" hide-actions hide-headers>
											<template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid green">
												<v-layout align-center style="padding: 0; border-right: 1px solid green; border-left: 1px solid green; border-bottom: 1px solid green">
													<v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
														<v-layout align-start>
															<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
																<div style="background-color: red; height: 100%; width: 2px"></div>
															</v-flex>
															<v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
																<div style="color: orange;font-size: 80%">
																	<span style="float: left; background-color: red; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >BIENTÔT</span>
																</div>
															</v-flex>
														</v-layout>
														<v-layout align-center style="max-width: 100%">
															<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
																<div style="background-color: red; height: 40px; width: 2px"></div>
															</v-flex>
															<v-flex sm1 xs2 align-center class="text-xs-center" style="width: 50px; padding-left: 15px">
																<img :src="'/images/teams/' + props.item.home_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
															</v-flex>
															<v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
																<span class="teamTextSize">Nom de la compétition</span>
															</v-flex>
															<v-flex sm7 xs5 align-center class="text-xs-right" style="width: 50px; padding-right: 15px">
																<span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 100%">12345 fans</span>
															</v-flex>
														</v-layout>
													</v-flex>
												</v-layout>
                                            </template>
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-card-text>
        </v-container>

    </v-content>
</template>

<script>
    import moment from 'moment'
    export default {
        head: {
            title: 'Events',
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' }
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
	
		/* Menu compétitions */
	
		.scrolling-wrapper-flexbox {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		justify-content: center;
		}
	
		.cardMenuCompetition {
		border-radius: 5px;
		color: black;
		padding: 10px 10px;
		background: white;
		margin: 0 5px;
		}

		/* Header Compététion */
		
		.competitionBouton {
		padding: 5px;
		}
		
		.competitionName {
		font-size: 1.5em;
		}
		
		.cardMenuCompetition1 {
		color: #fff;
		padding: 3px 10px;
		margin: 0 5px;
		}	

		.imgCompetitionLogo {
		width: 35px;
		height: 35px;
		}
				
		.btnSmall {
		width: 25px;
		height: 25px;
		}
	
		.menuSport {
			height: 40px;
		}
		
		.menuDay {
			height: 40px;
		}
		
		.v-expansion-panel__header {
		padding: 2px 2px;
		min-height: 24px;
		}
	
		.fade-enter-active, .fade-leave-active {
			transition: opacity 5s;
			background-color: #000;
		}
		
		.fade-enter, .fade-leave-to {
			opacity: 0;
		}
		
		.imgLogoEquipe {
		max-width: 30px;
		max-height: 30px;
		}
		
		.teamTextSize {
		font-size: 1.3em;
		}
	
		.black {
		background-color: black;
		}
		
		.imageLogo {
		width: 30px;
		height: 30px;
		}
		
		/* ScoreCard */

		.card {
		border-radius: 5px;
		}
		.card-title {
		background-color: lightslategray;
		}
		.card-text {
		background-color: whitesmoke;
		width: auto;
		border-radius: 8px;
		padding: 8px;
		}
		.card-footer {
		background-color: lightslategrey;
		}
		.fas:hover {
		cursor: pointer;
		color: #fff;
		}
			
		#app {
		font: normal 100%/1 "Acme", Helvetica, sans-serif;
		}
		
		.userText {
		font-size: 1.3em;
		}
		
		.connectText {
		font-size: 1.3em;
		}

		/* Header */
		
		.headerMenu {
		height: 91px;
		}
		
		.headerInfo {
		padding: 0px; margin-top: 0px;
		}
		
		.activeLeft {
		padding: 0px; height: 20px; margin-top: 0px;
		}
		
		.activeRight {
		padding: 0px; height: 20px; margin-top: 0px;
		}
		
		.backBlack {
		background-image: url("/images/header-TIF_03.png");
		background-position: center;
		background-repeat: repeat-x;
		}
		
		.headerLogo {
		height: auto;
		}
		
		.headerMenus {
		padding: 0; 
		margin: 0; 
		height: 111px;
		}
		
		.chiffres {
		font-size: 2.5em;
		color: orange;
		font-width: 700;
		}
		
		.activity {
		font-size: 1.5em;
		text-transform: uppercase;
		}
		
		.levelBox {
		background-color: #757575;
		color: black;
		vertical-align: middle;
		padding: 2px;
		border-radius: 3px;
		width: 95%;
		margin: auto;
		}
		
		.energyBox {
		background-color: #757575;
		color: black;
		vertical-align: middle;
		padding: 2px;
		border-radius: 3px;
		width: 95%;
		margin: auto;
		}
		
		.dollarBox {
		background-color: #757575;
		color: black;
		vertical-align: middle;
		padding: 2px;
		border-radius: 3px;
		width: 95%;
		margin: auto;
		}

		.tokenBox {
		background-color: #757575;
		color: black;
		vertical-align: middle;
		padding: 2px;
		border-radius: 3px;
		width: 95%;
		margin: auto;
		}

		/* Menu */

		#dock-container {
		height: 80px;
		padding: 0;
		margin: 0;
		bottom: 0;
		background-color: rgb(248,147,37);
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

			@media only screen and (max-width: 768px) {
			
			/* Menu compétitions */
		
			.scrolling-wrapper-flexbox {
			justify-content: flex-start;
			}
		
			#app {
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
			}
			
			.pd-right10 {
			padding-right: 10px;
			}
			
			.pd-left10 {
			padding-left: 10px;
			}
			
			.imgLogoEquipe {
			max-width: 35px;
			}
			
			.teamTextSize {
			font-size: 1.0em;
			}
			
			.headerMenus {
			padding: 0; 
			margin: 0; 
			height: 46px;
			}
			
			.energyBox {
			background-color: #757575;
			color: black;
			vertical-align: middle;
			padding: 1px;
			border-radius: 2px;
			width: 95%;
			margin: auto;
			font-size: 0.8em;
			}
			
			.userText {
			font-size: 0.8em;
			}
			
			.connectText {
			font-size: 0.8em;
			}

			/* Header */

			.imageLogoTif {
			width: 60px;
			height: 60px;
			}
			
			.backBlack {
			background-image: url("/images/header-TIF_03.png");
			background-position: center;
			background-repeat: repeat-x;
			background-size: contain;
			height: 60px;
			}

			.boxTif {
			width: 60px;
			height: 60px;
			}

			.imageLogo {
			width: 25px;
			height: 25px;
			}
			
			.menuSport {
				height: 30px;
			}
			
			.menuDay {
				height: 30px;
			}
			
			.headerLogo {
			height: auto;
			}
			
			.headerMenu {
			height: 46px;
			}
			
			.v-expansion-panel__header {
			padding: 2px 2px;
			min-height: 24px;
			}
			
			.chiffres {
			font-size: 1.2em;
			}
			
			.activity {
			font-size: 0.8em;
			}
			
			/* Menu */

			#dock-container {
			height: 55px;
			padding: 0;
			margin: 0;
			bottom: 0;
			background-color: rgb(248,147,37);
			border: none;
			border-top: 4px solid darkred;
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
			padding-top: 3px;
			}

			#dock-container ul {
			width: 100%;
			padding-left: 0px;
			padding-right: 0px;
			margin-bottom: 0;
			}

			#dock-container li img {
			width: 38px;
			height: 38px;
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
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
			padding: 2px;
			}

			#dock-container li:hover span {
			display: block;
			color: #fff;
			}

			#dock-container .textMenu {
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
			padding: 2px;
			}

		}
	</style>
