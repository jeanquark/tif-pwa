<template>
	<v-layout align-center justify-center row fill-height style="background-color: black">
		<v-flex xs12 sm10 md8 lg6>
			<v-card class="card">
				<v-card-title primary-title>
					<v-flex xs9>
						<span class="titleModalCards text-xs-left">Maillot officiel "home"</span>
					</v-flex>
					<v-flex xs3 hidden-xs-only class="text-xs-right">
						<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
					</v-flex>
					<v-flex xs3 hidden-sm-and-up class="text-xs-right">
						<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
					</v-flex>
				</v-card-title>

				<v-card-text class="card-text mx-2" style="padding: 0">
					<v-container fluid style="padding: 1px">
						<v-layout row wrap style="margin: 1px; background-color: white; border: 2px solid #2956B2; border-radius: 5px">
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="position: relative; min-height: 73%">
									<v-card-actions style="padding: 5px; text-align: center">
										<img src="/images/switzerland.png" class="imgTeamInventory" style="position: absolute; top: 5px; left: 5px; z-index: 2; border-radius: 5px"/>
										<v-spacer></v-spacer>
										<span class="fs16" style="padding: 3px; background-color: #2956B2; color: white; position: absolute; top: 5px; right: 5px; z-index: 3; border-radius: 5px">Collector</span>
									</v-card-actions>
									<v-layout>
										<v-flex xs12 style="text-align: center; padding: 0">
											<img src="/images/stress.jpg" class="imgInventory"/>
										</v-flex>
									</v-layout>
									<v-card-actions style="padding: 5px; text-align: center">
										<span class="inventoryBadgeAvatar fs16" style="position: absolute; bottom: 5px; left: 5px; z-index: 4">Tête</span>
										<v-spacer></v-spacer>
										<span class="inventoryCheck fs16" style="position: absolute; bottom: 5px; right: 5px; z-index: 5">Porté <v-icon dark right>check_circle</v-icon></span>
									</v-card-actions>
								</v-card>
							</v-flex>
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="min-height: 100%">
									<div class="divtexte">
										<span class="fs18" style="font-weight: 700; margin-top: 10px"><b>Point de ferveur que tu apportes à ton équipes favorites en fonction d'où tu regardes le match :</b></span>
										<div class="pftexte">
										Au stade : 0.1 PF</br>
										Au pub : 0.1 PF</br>
										Sur le canapé : 0.1 PF
										</div>
										<span class="fs16" style="margin-top: 20px; color: orangered">
											<b>Conseil de Mr Fan</b></br>
											Si tu mets ton maillot au match d'une autre équipe, tu risques d'avoir des problèmes !
										</span>
									</div>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>

				<v-card-actions class="card-footer">
					<v-flex class="text-xs-center">
						<v-btn nuxt color="error" to="/inventoryMain" class="elevation-1" style="margin-bottom: 20px">Retour</v-btn>
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
            link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
			]
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
				this.$router.replace("/gamemode_theme")
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
.divtexte {
padding: 75px 20px; 
text-align: center;
}
.pftexte {
font-size: 20px; 
padding: 10px;
}
.imgTeamInventory {
	width: 15%;
	border-radius: 0 0 0 0;
}
.imgInventory {
width: 100%;
}
.inventoryBadgeAvatar {
padding: 3px;
background-color: #ff950d;
color: white;
border-radius: 5px;
}
.inventoryCheck {
padding: 2px;
background-color: green;
color: white;
border-radius: 5px;
}
.inventoryNoCheck {
padding: 2px;
background-color: red;
color: white;
border-radius: 5px;
}
.fs16 {
font-size: 16px;
}
.fs18 {
font-size: 18px;
}
body {
font: normal 100%/1 "Acme", Helvetica, sans-serif;
}
.card {
background: linear-gradient(-45deg, #ffb76b 0%, #ffa73d 50%, #FF7C01 51%, #ff7f04 100%);
border-radius: 5px;
margin: 5px;
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
.progress-bar-txt-white {
	position: relative;
	font-size: 15px;
	top: -31px;
	z-index: 1;
	color: white;
	font-weight: 700;
}
.titleModalCards {
font-size: 2.0em; 
color: white; 
font-family: Acme;
}
.fs24 {
font-size: 24px;
}
.fs24title {
font-size: 24px;
}

    @media only screen and (max-width: 768px) {
	.divtexte {
	padding: 15px; 
	text-align: center;
	}
	.pftexte {
	font-size: 14px; 
	padding: 10px;
	}
	.imgInventory {
	width: 80%;
	}
	.titleModalCards {
	font-size: 1.5em; 
	}
	.fs24 {
	font-size: 14px;
	}
	.fs24title {
	font-size: 18px;
	}
	.fs18 {
	font-size: 14px;
	}
	.fs16 {
	font-size: 12px;
	}
	
}

</style>