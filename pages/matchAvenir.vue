<template>
    <v-content id="app">      
		<v-container text-xs-center style="padding: 0; max-width: 1017px">
			<div class="backgroundImage" style="position: relative">
				<v-layout grid-list-xs row wrap>
					<v-flex d-flex xs2 sm2 md2>
					</v-flex>
					<v-flex d-flex xs8 sm8 md8 justify-center align-center>
						<div class="infoMatch">
						Monde, Coupe du monde de football<br/>
						Journée 1
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2>
						<div class="text-xs-right retour">
							<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
						</div>			
					</v-flex>
				</v-layout>	
				<v-layout row wrap>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="drapeau">
							<img src="/images/switzerland.png" class="imgTeamSmall" />
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-center align-center>
						<div class="scorePF">
							Score PF
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="time">
							04.04.2019<br />
							20:45
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-center align-center>
						<div class="scorePF">
							Score PF
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="drapeau">
							<img src="/images/switzerland.png" class="imgTeamSmall" />
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-center align-center>
						<div class="nameTeam">
							Equipe 1
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-center align-center>
						<div class="scoreReel">
							Score réel<br />
							2 à 1
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-center align-center>
						<div class="nameTeam">
							Equipe 2
						</div>
					</v-flex>
					<v-flex d-flex xs12 justify-center align-center>
						<div class="scorePlayer">
							Ton score<br />
							1.45 PF
						</div>
					</v-flex>
				</v-layout>
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
        methods: {
			goBack() {
				this.$router.replace("/gamemode_jm")
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
    .container {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
	font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    .content {
    background-color: light-gray;;
    overflow-x: auto;
    height: 100%;
	position: relative;
    }
	.backgroundImage {
	background-image: url(/images/stade.svg);
	background-size: cover;
	}
	.imgTeamSmall {
	width: 80%;
	border-radius: 10px;
	}
	.drapeau {
	padding: 10px;
	}
	.scorePF {
	background-color: whitesmoke;
    max-width: 80%;
    padding: 15px;
    border-radius: 5px;
    font-size: 1.2em;	
	}
	.time {
	background-color: orangered;
    max-width: 70%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;	
	}
	.nameTeam {
	background-color: whitesmoke;
    max-width: 75%;
    padding: 15px;
    border-radius: 5px;
    font-size: 1.5em;	
	}
	.scorePlayer {
	background-color: whitesmoke;
    max-width: 15%;
    padding: 5px;
    border-radius: 5px;
    font-size: 1.3em;
	margin: 30px 10px 20px 10px;
	}
	.scoreReel {
	background-color: black;
	color: white;
    max-width: 40%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.1em;
	margin-top: 20px;
	}
	.retour {
	position: absolute;
	top: 11px;
	right: 11px;
	}
	.infoMatch {
	color: white;
	font-size: 0.9em;
	padding: 5px;
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
    }
</style>
