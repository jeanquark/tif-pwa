<template>
    <v-content id="app">
        <v-container style="padding: 0; max-width: 1017px">
          
            <!-- Scrollable content -->
            <div class="content" style="position: relative">
				<div class="text-xs-right retour">
					<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
				</div>

				<div class="container-fluid">
				
					<!-- The Modal YourTeam -->
					<div id="modalBox">
						<div class="modal-dialog modal-lg">
						  <div class="match">
							<!-- Modal body -->
							<div id="matchTitle" class="matchBox">
								<div class="resumeMatch">
									<div class="flex-container-match">
										<div class="left">International</br>Coupe du monde</div>
										<div class="center text-center">05.04.2018</br>17:00</div>
										<div class="right text-right">Match de poule</br>Groupe A</div>
									</div>
									<div class="flex-container-match-flagMatch">
										<div class="flagMatch"><img src="images/flags/163.png" class="imgModalMatchFlags"/></div>
										<div class="scorePF">0 PF</div>
										<div class="statutMatchBientot">Ouverture</br>04.04.18</br>dès 17:00</div>
										<div class="scorePF">0 PF</div>
										<div class="flagMatch"><img src="images/flags/25.png" class="imgModalMatchFlags"/></div>
									</div>
									<div class="flex-container-teamMatch">
										<div class="teamMatch center">Suisse</div>
										<div class="scoreReal center">Score réel</br>A venir</div>
										<div class="teamMatch center">Brésil</div>
									</div>
									<div class="flex-container-match-tonScore">
										<div class="tonScore center">Ton score</br><span class="orangered">0.00 PF</span></div>
									</div>
									<div class="flex-container-match-barreProgression">
										<div class="barreProgression center">Barre de progression du score</br>
											<div class="progress">
												<div class="progress-bar blue" role="progressbar" style="width:50%">
												Suisse
												</div>
												<div class="progress-bar red" role="progressbar" style="width:50%">
												Brésil
												</div>
											</div> 								
										</div>
									</div>
								</div>
							</div>
							<div id="modalTitle" class="modal-body-match">
								<div class="modal-footer">
								  <a href="mesEvent.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Retour aux "Events"</button></a>
								</div>
							</div>
						  </div>
						</div>
					</div>
					<!-- End Modal YourTeam -->
								
				</div>
				
			</div>
                      
        </v-container>
  </v-content>
</template>

<script>
    import ActionsCard from '~/components/ActionsCard'
    export default {
        components: { ActionsCard },
        layout: 'layoutFront',
        data () {
            return {
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ],
                action: '',
                actionsModal: false
            } 
        },
        computed: {
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            }
        },
        methods: {
            async openActionsDialog (item) {
                console.log('openActionsDialog: ', item)
                this.action = item
                this.actionsModal = true
                const response = await this.$store.dispatch('actionsCards/loadedActions', item)
                console.log('response: ', response)
                // return window.location.href = 'https://fr.wikipedia.org/wiki/Camp_Nou'
            },
			goBack() {
				this.$router.replace("/gamemode_jm")
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
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    /* Content */
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
		font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    .content {
        background-color: light-gray;;
        overflow-x: auto;
        height: 100%;
		position: relative;
		background-image: url(/images/plage.svg);
		background-size: cover;
    }
.match {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-clip: padding-box;
    outline: 0;
    padding: 0;
    margin: 0;
}
.matchBox {
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin: 0;
    padding: 0;
    background-image: url(../images/stade_gd.jpg);
    background-repeat: no-repeat;
    background-position: center;
}
.resumeMatch {
    width: 100%;
    margin: 0;
    padding: 0;
    color: #ffffff;
    font: normal 100%/1 "bangers", Helvetica, sans-serif;
    text-shadow: 2px 2px 1px rgba(255,255,255,0.25);
}
.flex-container-match {
    display: flex;
    width: 100%;
    flex: row;
    align-content: center;
    margin: 0;
    padding: 5px;
    background: rgba(1,1,1,0.5) !important;
    color: #fff;
}
.flex-container-match > div {
    display: flex;
    flex: row;
    align-content: center;
    width: 100%;
}
.flex-container-match-flagMatch {
    display: flex;
    flex: row;
    height: 75px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
}
.flagMatch {
    flex-grow: 1;
    text-align: center;
    width: 50%;
}
.imgModalMatchFlags {
    position: relative;
    height: 75px;
    width: 75px;
}
.scorePF {
    background-color: white;
    width: 100%;
    height: 30px;
    flex-grow: 1;
    text-align: center;
    color: #000000;
    font: normal 110%/1 "bangers", Helvetica, sans-serif;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
    padding: 5px;
        padding-top: 5px;
    padding-top: 8px;
    margin: 5px;
}
.statutMatchBientot {
    background-color: orange;
    border-radius: 3px;
    width: 70%;
    margin: 3px;
    padding: 3px;
    flex-grow: 2;
    text-align: center;
    font: normal 80%/1 "bangers", Helvetica, sans-serif;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
}
.flex-container-teamMatch {
    display: flex;
    flex: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
}
.teamMatch {
    flex-grow: 2;
    width: 75%;
    flex-grow: 1;
    text-align: center;
    color: #000000;
    font: normal 150%/1 "bangers", Helvetica, sans-serif;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
    padding: 10px;
    margin: 5px;
        margin-bottom: 5px;
    margin-bottom: 0;
    background: rgba(1,1,1,0.5) !important;
    color: #fff;
    border-radius: 3px;
}
.scoreReal {
    border-radius: 3px;
    width: 30%;
    margin: 5px;
    padding: 10px;
    flex-grow: 1;
    text-align: center;
    font: normal 100%/1 "bangers", Helvetica, sans-serif;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
    background: rgba(1,1,1,0.5) !important;
    color: #fff;
}
.flex-container-match-tonScore {
    display: flex;
    flex: row;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.tonScore {
    background-color: white;
    width: 30%;
    border-radius: 5px;
    text-align: center;
    color: #000000;
    font: normal 130%/1 "bangers", Helvetica, sans-serif;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
    padding: 10px;
    margin: 5px;
}
.flex-container-match-barreProgression {
    display: flex;
    flex: row;
    height: 30px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
}
.barreProgression {
    width: 100%;
    text-align: center;
    margin: 5px;
    font: normal 90%/1 "bangers", Helvetica, sans-serif;
    text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
}
.progress {
    text-align: center;
    margin-bottom: 5px;
    height: 20px;
    font: normal 100%/1 "bangers", Helvetica, sans-serif;
}

    /* End Content */

	/* Small screens */
    @media only screen and (max-width: 768px) {
		.retour {
		position: absolute; 
		top: 7px; 
		right: 7px;
		}
		
		body {
			margin: 0;
			padding: 0;
			overflow: hidden;
		}

		/* Content */
		.container {
			width: 100vw;
			height: 100vh;
			display: flex;
			flex-direction: column;
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		.content {
			background-color: light-gray;;
			height: 100%;
			overflow-x: auto;
		}
    }
</style>
