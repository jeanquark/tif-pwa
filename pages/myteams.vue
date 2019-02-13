<template>
	<v-layout align-center justify-center row fill-height style="background-color: black">
		<v-flex xs12 sm10 md8 lg6>
			<v-card class="card">
				<v-card-title primary-title>
					<v-flex xs6>
						<h2 class="white--text text-xs-left">Fan de...</h2>
					</v-flex>
					<v-flex xs6 class="text-xs-right">
						<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
					</v-flex>
				</v-card-title>

				<v-card-text class="card-text mx-3">
					<div class="text-xs-center">
						<h3>Tu gères des fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }} :</h3>
						<!-- <b>loadedUserTeams:</b> {{ loadedUserTeams }}<br /><br /> -->
						<!-- <b>loadedCompetitions:</b> {{ loadedCompetitions }}<br /><br /> -->
						<!-- <b>loadedTeamsByCompetition:</b> {{ loadedTeamsByCompetition }}<br /><br /> -->
						<!-- <b>selectedCompetition:</b> {{ selectedCompetition }}<br /><br /> -->
						<!-- <b>selectedTeams:</b> {{ selectedTeams }}<br /><br /> -->
					</div>

					<v-container fluid>
						<v-layout row wrap align-center justify-center>
							<v-flex v-for="team in loadedUserTeams" :key="team.slug" xs4 sm3 md2 lg2 style="padding: 5px; border: 1px solid orangered; border-radius: 5px">
									<v-card flat tile class="d-flex">
										<v-card-text class="px-0">
											<v-img :src="'/images/teams/' + team.image" :lazy-src="'/images/icon.png'" aspect-ratio="1" style="background-size: contain">
											</v-img>
										</v-card-text>
									</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>

				<v-card-actions class="card-footer">
					<v-flex class="text-xs-center">
						<v-btn nuxt color="error" to="/gamemode" class="elevation-0">Retour</v-btn>
					</v-flex>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		head: {
			title: 'Teams',
		},
		layout: "layoutFront",
		// middleware: ['auth-check'],
		created () {
			this.$store.dispatch('competitions/loadedCompetitions')
			this.$store.dispatch('users/loadedUserTeams')
			this.$store.dispatch('teams/loadedTeams')

			for (let team of this.loadedUserTeams) {
                this.selectedTeams.push(team)
            }
		},
		data() {
			return {
				selectedCompetition: '',
				selectedTeams: []
			}
		},
		computed: {
			loadedUser() {
				return this.$store.getters["users/loadedUser"]
			},
			loadedCompetitions () {
    			return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.active === true && competition.type === 'main' && competition.geo === 'national')
    		},
			loadedUserTeams () {
            	return this.$store.getters['users/loadedUserTeams']
			},
			loadedTeamsByCompetition () {
				console.log('Call to loadedTeamsByCompetition')
				// console.log('competitionId: ', competitionId)
				// return

                const teams = []
                const competition_id = this.selectedCompetition.id
				this.$store.getters['teams/loadedTeams']
					// .filter(team => team.competitions.incudes(competition_id))
					.forEach(function (team) {
						// console.log('team: ', team)
						if (team.competitions) {
							if (team['competitions'][competition_id]) {
								teams.push(team)
							}
						}
					})
				console.log('teams: ', teams)
                return teams
            },
		},
		methods: {
			selectCompetition(competition) {
				console.log('competition: ', competition)
				this.selectedCompetition = competition
				this.loadedTeamsByCompetition
			},
			selectTeam (team) {
                // this.isActive = !this.isActive
                console.log('selectTeam')
                console.log('team.id: ', team.id)
                // const selectedTeam = {id: team.id, name: team.name}
                const selectedTeam = team
                console.log('selectedTeam: ', selectedTeam)
                // return
                // console.log(selectedTeam)
                const index = this.selectedTeams.findIndex(el => el.id === team.id)
                console.log('index: ' + index)
                // if (!this.selectedTeams.includes(selectedTeam)) {
                if (!this.selectedTeams.find(el => el.id === selectedTeam.id)) {
					this.selectedTeams.push(selectedTeam)
                } else {
                    this.selectedTeams.splice(index, 1)
                }
			},
			async saveTeams () {
                console.log('saveTeams')
                console.log(this.selectedTeams)
				await this.$store.dispatch('users/updateUserTeams', this.selectedTeams)
                // this.$router.replace('/gamemode')
			},
			clear () {
                this.selectedTeams = []
            },
			goBack() {
				this.$router.replace("/gamemode")
			},
			logout() {
				console.log("Clicked logout button")
				this.$store.dispatch("firebase-auth/signOut").then(() => {
					this.$router.replace("/")
				})
			}
		}
	}
</script>

<style scoped>
.card {
background: linear-gradient((-45deg, #ffb76b 0%, #ffa73d 50%, #FF7C01 51%, #ff7f04 100%));
border-radius: 5px;
}
.card-title {
/*background-color: lightslategray;*/
}
.card-text {
background-color: whitesmoke;
width: auto;
border-radius: 8px;
}
.card-footer {
margin-top: 20px;
}
.icon:hover {
cursor: pointer;
color: #fff;
}
.info {
opacity: 0;
transition: .5s ease;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;
background-color: orangered;
}
.card-img {
cursor: pointer;
opacity: 1;
transition: .5s ease;
backface-visibility: hidden;
}
.card-img:hover {
/* background-color: orangered; */
opacity: 0.3;
}
.card-img:hover .info{
/* background-color: orangered; */
opacity: 1;
}
.v-alert {
width: 100%;
}
.active {
background: orangered;
border: 6px solid orangered;
}
</style>