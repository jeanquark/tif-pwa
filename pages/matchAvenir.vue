<template>
    <v-content id="app">      
		<v-container text-xs-center style="padding: 0; max-width: 1017px">
			<div style="background-color: yellow">
				<v-layout grid-list-xs row wrap style="background-color: black; opacity: 0.5">
					<v-flex d-flex xs2 sm2 md2>
					</v-flex>
					<v-flex d-flex xs8 sm8 md8 style="color: white">
						<div class="text-xs-center" style="height: 40px">
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
					<v-flex d-flex xs2 sm2 md2>
						<div class="drapeau">
							<img src="/images/switzerland.png" class="imgTeamSmall" />
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3>
						<div class="scorePF">
							Score PF
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2>
						<div class="time">
							date<br />
							Heure
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3>
						<div class="scorePF">
							Score PF
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2>
						<div class="drapeau">
							<img src="/images/switzerland.png" class="imgTeamSmall" />
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4>
						<div class="nameTeam">
							Equipe 1
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4>
						<div class="scoreReel">
							Score réel<br />
							2 à 1
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4>
						<div class="nameTeam">
							Equipe 2
						</div>
					</v-flex>
					<v-flex d-flex xs12>
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

    /* Content */
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

    /* End Content */

	/* Small screens */
    @media only screen and (max-width: 768px) {	
		body {
			margin: 0;
			padding: 0;
			overflow: hidden;
		}

		/* Content */
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
