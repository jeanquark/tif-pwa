<template>
    <v-content id="app">
        <v-container fluid style="padding: 0; max-width: 800px; color: white; border-bottom: 4px solid rgb(248,147,37)">
            <v-layout row wrap>
                <v-flex d-flex xs2 justify-start class="text-xs-left backBlack">
                    <v-card nuxt to="/scoremode" flat tile class="black boxTif backBlack" style="max-height: 120px; max-width: 120px">
                        <img src="/images/header-TIF_01.jpg" class="imageLogoTif" />
                    </v-card>
                </v-flex>
                <v-flex d-flex xs8 class="backBlack">
                    <v-layout row wrap>
                        <v-flex d-flex>
                            <v-layout row wrap class="headerMenus">
                                <v-flex d-flex xs12>
                                    <v-layout row wrap class="headerMenu">
                                        <v-flex d-flex xs3 justify-center align-center class="text-xs-center elevation-0 headerMenu" style="border-right: 1px solid rgb(248,147,37); border-left: 2px solid rgb(248,147,37)">
                                            <div class="headerLogo">
                                                <span class="chiffres">1</span><br />
												<span class="activity">sport</span>
                                            </div>
                                        </v-flex>
                                        <v-flex d-flex xs3 justify-center align-center class="text-xs-center elevation-0 headerMenu" style="border-right: 1px solid rgb(248,147,37); border-left: 1px solid rgb(248,147,37)">
                                            <div class="headerLogo">
                                                <span class="chiffres">6</span><br />
												<span class="activity">pays</span>
                                            </div>
                                        </v-flex>
                                        <v-flex d-flex xs3 justify-center align-center class="text-xs-center elevation-0 headerMenu" style="border-right: 1px solid rgb(248,147,37); border-left: 1px solid rgb(248,147,37)">
                                            <div class="headerLogo">
                                                <span class="chiffres">130</span><br />
												<span class="activity">équipes</span>
                                            </div>
                                        </v-flex>
                                        <v-flex d-flex xs3 justify-center align-center class="text-xs-center elevation-0 headerMenu" style="border-left: 1px solid rgb(248,147,37); border-right: 2px solid rgb(248,147,37)">
                                            <div class="headerLogo">
                                                <span class="chiffres">769</span><br />
												<span class="activity">fans</span>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex d-flex xs12>
                                    <v-layout row wrap>
                                        <v-flex d-flex xs6 justify-center align-center class="text-xs-left">
                                            <div class="userText" v-if="!loadedUser">
                                                Utilisateur Invité
                                            </div>
                                            <div class="userText" v-else>
                                                Bienvenue
                                            </div>
                                        </v-flex>
                                        <v-flex d-flex xs6 justify-center align-center class="text-xs-right">
                                            <div class="connectText" v-if="loadedUser">
                                                {{ loadedUser.email }}
                                            </div>
                                            <div class="connectText" v-else>
                                                Se connecter / S'inscrire
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex d-flex xs2 justify-end class="text-xs-right backBlack">
                    <v-card nuxt to="/gamemode" flat tile class="black boxTif backBlack" style="max-height: 120px; max-width: 120px">
                        <img src="/images/header-TIF_05.jpg" class="imageLogoTif"/>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid style="padding: 0; max-width: 800px; background-color: green; color: white">
            <v-layout>
                <v-flex d-flex x12 justify-center align-center class="text-xs-center menuSport">
                    Soccer - Compétitions
                </v-flex>
            </v-layout>             
        </v-container>

        <v-container fluid style="max-width: 800px">
            <v-layout justify-center row fill-height>
				<v-flex  xs12 align-center class="scrolling-wrapper-flexbox">
				  <div class="cardMenuCompetition" :class="[continent === '' && type === '' ? 'active' : '']" @click="resetCompetitions"><h2>Tous</h2></div>
				  <div class="cardMenuCompetition" :class="[continent === 'europe' ? 'active' : '']" @click="competitionsByContinent('europe')"><h2>Europe</h2></div>
				  <div class="cardMenuCompetition" :class="[continent === 'africa' ? 'active' : '']" @click="competitionsByContinent('africa')"><h2>Afrique</h2></div>
				  <div class="cardMenuCompetition" :class="[continent === 'america' ? 'active' : '']" @click="competitionsByContinent('america')"><h2>Amérique</h2></div>
				  <div class="cardMenuCompetition" :class="[continent === 'asia' ? 'active' : '']" @click="competitionsByContinent('asia')"><h2>Asie/Océanie</h2></div>
				  <div class="cardMenuCompetition" :class="[type === 'selections' ? 'active' : '']" @click="competitionsByType('selections')"><h2>Sélections</h2></div>
				  <div class="cardMenuCompetition" :class="[type === 'clubs' ? 'active' : '']" @click="competitionsByType('clubs')"><h2>Clubs</h2></div>
				</v-flex>
            </v-layout>             
        </v-container>

        <v-container fluid style="padding: 0; max-width: 800px; background-color: whitesmoke; margin-bottom: 80px">
            <v-card-text class="card-text">
                <v-data-table :items="competitionsFiltered(this.type, this.continent)" class="elevation-0" hide-actions hide-headers>
					<template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid orange">
						<v-layout align-center style="padding: 0; border-right: 1px solid orange; border-left: 1px solid orange; border-bottom: 1px solid orange">
							<v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
								<v-layout align-start v-if="props.item.active">
									<v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
										<div style="background-color: green; height: 100%; width: 2px"></div>
									</v-flex>
									<v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
										<div style="color: orange;font-size: 80%">
											<span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >OUVERT</span>
										</div>
									</v-flex>
								</v-layout>
                                <v-layout align-start v-if="!props.item.active">
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
										<div :class="[props.item.active ? 'greenBar' : 'redBar']"></div>
									</v-flex>
									<v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
										<nuxt-link :to="'/competitions/' + props.item.id" class="teamTextSize">{{ props.item.name }}</nuxt-link>
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

        </v-container>

        <v-footer style="background-color: black; position: fixed; bottom: 0; width: 100%" height="auto" class="text-xs-center">
            <v-container fluid style="padding: 0; max-width: 800px">
                <div id="dock-container">
                    <div id="dock">
                        <ul>
                            <li>
                                <nuxt-link to="/equipes"><img src="/images/menuShop.png">
                                <span class="textMenu">Equipes</span></nuxt-link>
                            </li>
                            <li id="active">
                                <nuxt-link to="/competitions"><img src="/images/menuResultat.png">
                                <span class="textMenu">Compétitions</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/scoremode"><img src="/images/menuHome.png">
                                <span class="textMenu">Matches du jour</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/joueurs"><img src="/images/menuSocial.png">
                                <span class="textMenu">Joueurs</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/tifnews"><img src="/images/menuResultat.png">
                                <span class="textMenu">TIF News</span></nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </v-container>
        </v-footer>     
    </v-content>
</template>

<script>
    export default {
        head: {
            title: 'Competitions',
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' }
			]
        },
        layout: 'layoutScoreMode',
        async created() {
            this.$store.dispatch('competitions/loadedCompetitions')
        },
        data() {
            return {
                type: '',
                continent: 'europe'
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            }
        },
        methods: {
            competitionsByType (type) {
                this.type = type
                this.continent = ''
            },
            competitionsByContinent (continent) {
                this.continent = continent
                this.type = ''
            },
            competitionsFiltered (type, continent) {
                if (type) {
                    return this.$store.getters['competitions/loadedCompetitions']
                        .filter(competition => (competition.type ? competition.type === type : ''))
                }
                else if (continent) {
                    return this.$store.getters['competitions/loadedCompetitions']
                        .filter(competition => (competition.continent ? competition.continent.slug === continent : ''))
                } else {
                    return this.$store.getters['competitions/loadedCompetitions']
                }
            },
            resetCompetitions () {
                this.type = ''
                this.continent = ''
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
        .cardMenuCompetition:hover {
            cursor: pointer;
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

        /* Début de l'ajout J-M */
        .active {
            background: orangered;
            color: #fff;
        }
        .greenBar {
            background-color: green; 
            height: 40px; 
            width: 2px;
        }
        .redBar {
            background-color: red; 
            height: 40px; 
            width: 2px;
        }
        /* Fin de l'ajout J-M */
	</style>
