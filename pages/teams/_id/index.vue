<template>
    <v-content id="app" background-color: whitesmoke">      
		<v-container text-xs-center style="padding: 0; max-width: 1017px; border-left: 1px solid orangered; border-right: 1px solid orangered" v-if="!loading">
			<div class="backgroundImage" style="position: relative; padding-bottom: 1px">
				<v-layout grid-list-xs row wrap style="background-color: rgb(0,0,0,0.25)">
					<v-flex d-flex xs2 sm2 md2>
					</v-flex>
					<v-flex d-flex xs8 sm8 md8 justify-center align-center>
						<div class="infoMatch">
						{{ loadedTeam.country.name }}, 1 compétition en cours<br/>
						{{ loadedTeam.competition }}
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2>
						<div class="text-xs-right retour">
							<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
						</div>			
					</v-flex>
				</v-layout>	
				<v-layout row wrap style="margin-top: 10px">
					<v-flex d-flex xs1 sm1 md1 justify-center align-center>
						<div>
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-end align-center>
						<div class="scorePF">
							123'465 fans
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="drapeau">
							<img :src="`/images/teams/${loadedTeam.image}`" :lazy-src="`/images/teams/${loadedTeam.image}`" width="100%" />
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-start align-center>
						<v-btn @click="loginModal = true" v-if="!loadedUser" style="text-decoration: none; color: orangered; border-radius: 5px; max-width: max-content">Suivre ? Inscris-toi !</v-btn>
					</v-flex>
					<v-flex d-flex xs1 sm1 md1 justify-center align-center>
						<div>
						</div>
					</v-flex>
				</v-layout>	
				<v-layout row wrap style="margin-top: 10px; margin-bottom: 20px">
					<v-flex d-flex xs3 sm3 md3 justify-end align-center>
						<div>
						</div>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<div class="nameTeam">
							<v-icon class="notYourTeam">star</v-icon> {{ loadedTeam.name }}
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-start align-center>
						<div>
						</div>
					</v-flex>
				</v-layout>	
				<v-layout grid-list-xs row wrap style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px">
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey">
							La vie du club !
						</div>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<nuxt-link to="/joueTif" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Inscris-toi vite sur TIF !
							</div>			
						</nuxt-link>
					</v-flex>
				</v-layout>
				<v-layout grid-list-xs row wrap hidden-sm-and-up style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px; margin-bottom: 5px">
					<v-flex d-flex xs6 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey; border-bottom: 1px solid darkgrey">
							Infos/Résultats
						</div>
					</v-flex>
					<v-flex d-flex xs6 justify-center align-center>
						<nuxt-link to="/teamClassement" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey; border-bottom: 1px solid darkgrey">
								Classements
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex xs6 justify-center align-center>
						<nuxt-link to="/teamJoueur" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey">
								Joueurs
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex xs6 justify-center align-center>
						<nuxt-link to="/teamStatistique" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Statistiques
							</div>
						</nuxt-link>
					</v-flex>
				</v-layout>
				<v-layout grid-list-xs row wrap hidden-xs-only style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px; margin-bottom: 5px">
					<v-flex d-flex sm3 md3 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey">
							Infos/Résultats
						</div>
					</v-flex>
					<v-flex d-flex sm3 md3 justify-center align-center>
						<nuxt-link to="/teamClassement" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey">
								Classements
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex sm3 md3 justify-center align-center>
						<nuxt-link to="/teamJoueur" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">	
							<div class="menuTif" style="border-right: 1px solid darkgrey">
								Joueurs
							</div>	
						</nuxt-link>
					</v-flex>
					<v-flex d-flex sm3 md3 justify-center align-center>
						<nuxt-link to="/teamStatistique" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Statistiques
							</div>
						</nuxt-link>
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap style="margin-top: 10px">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div>
							Les compétitions
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-card height="80px" flat>
							<v-bottom-nav :value="true" absolute color="transparent" style="height: 75px">
								<v-btn class="orangered" flat value="la_liga_18_19">
									<span>La Liga</span>
									<img src="/images/teams/fc_barcelona.png" class="imgCompetition" />
								</v-btn>
								<v-btn class="orangered" flat value="la_copa_del_rey_18_19">	
									<span>La Copa del Rey</span>
									<img src="/images/teams/fc_barcelona.png" class="imgCompetition" />
								</v-btn>
								<v-btn class="orangered" flat value="uefa_champions_league_18_19">
									<span>UEFA Champions League</span>
									<img src="/images/teams/fc_barcelona.png" class="imgCompetition" />
								</v-btn>
								</v-bottom-nav>
						</v-card>					
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap style="margin-top: 10px">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div>
							Tous les matchs de la saison
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<!-- Scrollable content -->
						<div class="content" style="max-height: 100vh; border-right: 1px solid orangered; border-left: 1px solid orangered">
							<v-layout>	
								<!-- Scrollable content -->
								<div style="padding: 0; max-width: 100%; height: 100%; background-color: whitesmoke">
									<!-- Results -->
									<!-- <scoremode-results />		 -->
								</div>
							</v-layout>
						</div>
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap style="margin-top: 10px">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div>
							Informations sur {{ loadedTeam.name }}
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12 style="background-color: lightgrey">
						<div class="infosMatch">
							<p style="margin: 16px"><b>Pays :</b> {{ loadedTeam.country.name }} - <b>Date de fondation :</b> {{ loadedTeam.founded }} - <b>Couleur :</b> {{ loadedTeam.color_team_1 }} et {{ loadedTeam.color_team_2 }}</p>
							<p style="margin: 16px"><b>Surnom :</b> {{ loadedTeam.surname }} - <b>Site officiel :</b> {{ loadedTeam.official_website }}</p>
							<p style="margin: 16px"><b>Stade :</b> {{ loadedTeam.venue_name }} - <b>Adresse :</b> ({{ loadedTeam.venue_adress }}, {{ loadedTeam.venue_city }})</p>
							<p style="margin: 16px"><b>Capacité :</b> {{ loadedTeam.venue_capacity }} spectateurs - <b>Surface :</b> {{ loadedTeam.venue_surface }}</p>
						</div>
					</v-flex>
				</v-layout>
			</div>
		</v-container>					 
  </v-content>
</template>

<script>
	export default {
		head: {
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
			]			
		},
		layout: 'layoutScoreMode',
		async created () {
			await this.$store.commit('setLoading', true)
			const team = this.$route.params.id
			console.log('team: ', team)
			const fetchedTeam = await this.$store.dispatch('teams_gm/fetchTeam', team)
			await this.$store.commit('setLoading', false)

			console.log('fetchedTeam: ', fetchedTeam)
			if (!fetchedTeam) {
				alert('Team does not exist!')
			}
		},
		async mounted () {
			
		},
		data () {
			return {
			}
		},
		computed: {
			loading () {
				return this.$store.getters['loading']
			},
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			},
			loadedTeam () {
				return this.$store.getters['teams_gm/loadedTeam']
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.v-tabs__container {
    flex: 1 0 auto;
    display: flex;
    height: 30px;
    list-style-type: none;
    transition: -webkit-transform .6s cubic-bezier(.86,0,.07,1);
    transition: transform .6s cubic-bezier(.86,0,.07,1);
    transition: transform .6s cubic-bezier(.86,0,.07,1),-webkit-transform .6s cubic-bezier(.86,0,.07,1);
    white-space: nowrap;
    position: relative;
	}
    body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    }
    .container {
    width: 100vw;
	min-height: 100vh;
    flex-direction: column;
	font: normal 100%/1 "Acme", Helvetica, sans-serif;
    background-color: light-gray;
    }
    .content {
    background-color: light-gray;;
    overflow-x: auto;
    height: 100%;
	position: relative;
    }
	.backgroundImage {
	background-color: #004C99;
	}
	.imgTeamSmall {
	width: 70%;
	border-radius: 10px;
	}
	.imgCompetition {
	width: 50px;
	border-radius: 10px;
	}
	.drapeau {
	padding: 10px;
	}
	.scorePF {
    background-color: rgb(255,255,255,0.9);
    max-width: max-content;
    padding: 10px;
    font-size: 1.2em;
    font-weight: 700;
	border-radius: 5px;
	}
	.timeEncours {
	background-color: rgb(0,128,0,0.9);
    max-width: 70%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;	
	color: white;
	}
	.nameTeam {
    background-color: rgb(255,255,255,0.9);
    max-width: max-content;
    padding: 10px;
    font-size: 1.5em;
    font-weight: 700;
	border-radius: 5px;
	}
	.scorePlayer {
	background-color: rgb(255,255,255,0.9);
    max-width: 25%;
    padding: 5px;
    border-radius: 5px;
    font-size: 1.3em;
	font-weight: 700;
	margin: 20px 10px;
	border: 2px solid orangered;
	color: orangered;
	}
	.scoreReel {
	background-color: rgb(0,0,0,0.9);
	color: white;
    max-width: 40%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1em;
	}
	.retour {
	position: absolute;
	top: 7px;
	right: 11px;
	color: white;
	}
	.icon:hover {
	cursor: pointer;
	color: orangered;
	}
	.infoMatch {
	color: white;
	font-size: 0.9em;
	margin: 10px 0;
	}
	.infosMatch {
	color: black;
	font-size: 1.1em;
	}
	.hoverMatchStats :hover {
	background-color: orangered;
	color: white;
	}
	.imgActionCollHover :hover {
	opacity: 0.5;
	}
	.resumeMatch {
	background-color: white;
	}
	.titleResume {
	background-color: black;
	color: white;
	font-size: 1.2em;
	font-weight: 700;
	padding: 8px 0 8px 0;
	}
	.eventMatch {
	background-color: lightgrey;
	}
	.imgIconSmall {
	width: 45px;
	}
	.imgActionColl {
	width: 60px;
	margin: 10px;
	}
	.tempsFortGaucheTexte {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase; 
	text-align: right;
	font-weight: 700;
	}
	.tempsfortGaucheImage {
	padding: 10px; 
	text-align: right;
	}
	.tempsFortGaucheTime {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase;
	}
	.tempsFortDroiteTime {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase;
	}
	.tempsFortDroiteImage {
	padding: 10px; 
	text-align: left;
	}
	.tempsFortDroiteTexte {
	padding: 10px; 
	color: black; 
	font-size: 1.0em; 
	text-transform: uppercase; 
	text-align: left;
	font-weight: 700;
	}
	.menuMatch {
	border-right: 1px solid darkgrey; 
	padding: 15px; 
	color: orangered; 
	font-size: 1.2em; 
	text-transform: uppercase;
	}
	.menuTif {
	padding: 15px; 
	color: white; 
	font-size: 1.2em; 
	text-transform: uppercase;
	}
	.tempsFortMargin {
	margin-top: 20px
	}
	.yourTeam {
	color: orangered;
	font-size: 30px;
	}
	.notYourTeam {
	color: grey;
	font-size: 30px;
	}

	/* Small screens */
    @media only screen and (max-width: 768px) {	
		body {
		margin: 0;
		padding: 0;
		overflow: hidden;
		}
		.container {
		width: 100vw;
		height: 100vh;
		flex-direction: column;
		font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		.content {
		background-color: light-gray;;
		height: 100%;
		overflow-x: auto;
		}
		.scorePF {
		max-width: max-content;
		padding: 5px;
		font-size: 0.8em;
		font-weight: 600;
		}
		.infoMatch {
		margin: 5px 0;
		font-size: 0.8em;
		}
		.retour {
		top: 3px;
		right: 11px;
		}
		.timeEncours {
		max-width: 95%;
		padding: 5px;
		font-size: 0.8em;	
		}
		.drapeau {
		padding: 0;
		}
		.imgTeamSmall {
		width: 75%;
		border-radius: 5px;
		}
		.nameTeam {
		max-width: 90%;
		padding: 5px;
		font-size: 1.1em;
		font-weight: 700;
		}
		.scorePlayer {
		max-width: 25%;
		padding: 5px;
		border-radius: 5px;
		font-size: 1.0em;
		font-weight: 700;
		margin: 5px 5px;
		border: 1px solid orangered;
		}
		.scoreReel {
		max-width: 60%;
		padding: 5px;
		border-radius: 5px;
		font-size: 0.9em;
		}
		.menuMatch {
		padding: 5px; 
		font-size: 1.0em; 
		}
		.menuTif {
		padding: 5px; 
		font-size: 1.0em; 
		}
		.tempsFortMargin {
		margin-top: 10px
		}
		.titleResume {
		font-size: 1em;
		}
		.tempsFortGaucheTexte {
		padding: 5px; 
		font-size: 0.8em; 
		}
		.tempsfortGaucheImage {
		padding: 5px; 
		text-align: right;
		}
		.tempsFortGaucheTime {
		padding: 5px; 
		font-size: 0.9em; 
		}
		.tempsFortDroiteTime {
		padding: 5px; 
		font-size: 0.9em; 
		}
		.tempsFortDroiteImage {
		padding: 5px; 
		text-align: left;
		}
		.tempsFortDroiteTexte {
		padding: 5px; 
		font-size: 0.8em; 
		}
		.imgIconSmall {
		width: 20px;
		}
		.infosMatch {
		color: black;
		font-size: 0.9em;
		}
		.yourTeam {
		color: orangered;
		font-size: 18px;
		}
		.notYourTeam {
		color: grey;
		font-size: 18px;
		}

    }
</style>
		