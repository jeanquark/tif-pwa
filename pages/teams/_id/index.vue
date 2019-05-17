<template>
    <v-content id="app">      
		<v-container text-xs-center style="padding: 0; max-width: 1017px; border-left: 1px solid orangered; border-right: 1px solid orangered">
			<div class="backgroundImage" style="position: relative; padding-bottom: 1px">
				<v-layout grid-list-xs row wrap style="background-color: rgb(0,0,0,0.25)">
					<v-flex d-flex xs2 sm2 md2>
					</v-flex>
					<v-flex d-flex xs8 sm8 md8 justify-center align-center>
						<div class="infoMatch">
						Espagne, 3 compétitions en cours<br/>
						La Liga, La Copa del Rey, UEFA Champions League
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
							<img src="/images/teams/fc_barcelona.png" class="imgTeamSmall" />
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
							<v-icon class="notYourTeam">star</v-icon> FC Barcelona
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
							<v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent" style="height: 75px">
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
									<scoremode-results v-if="selectType === 0" />					
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
							Informations sur le FC Barcelona
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12 style="margin-bottom: 20px; padding: 10px; background-color: lightgrey">
						<div class="infosMatch">
							Pays : Espagne - Date de fondation : 1907 - Couleur : rouge et bleu<br />
							Stade : Le nom du stade (ville) - Capacité : Nb de spectateurs
						</div>
					</v-flex>
				</v-layout>
			</div>
		</v-container>					 
  </v-content>
</template>

<script>
	import ScoremodeHeader from '~/components/jm/ScoremodeHeader'
	export default {
		components: { ScoremodeHeader },
		layout: 'layoutScoreMode',
		async created () {
		},
		async mounted () {
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
		data () {
			return {
				name: 'Gaël'
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

		}
	}
</script>

<style scoped>

</style>
		