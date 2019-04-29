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
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div>
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-center align-center>
						<div class="scorePF">
							123'465 fans
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="drapeau">
							<img src="/images/teams/fc_barcelona.png" class="imgTeamSmall" />
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-center align-center>
						<div class="scorePF">
							Suivre ? 5 <i class="material-icons" style="color: yellow; font-size: 25px">flash_on</i>
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div>
						</div>
					</v-flex>
				</v-layout>	
				<v-layout row wrap style="margin-top: 10px">
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
							Infos/Résultats
						</div>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<nuxt-link to="/teamJoueur" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Inscris-toi vite sur TIF !
							</div>
						</nuxt-link>
					</v-flex>
				</v-layout>
				<v-layout grid-list-xs row wrap hidden-sm-and-up style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px; margin-bottom: 5px">
					<v-flex d-flex xs6 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey; border-bottom: 1px solid darkgrey">
							Matchs
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
							Les actions collectives en cours...<br />
							<span style="font-size: 0.9em">Clique vite pour participer à une action collective !</span>
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs6 sm6 md6 justify-center align-center style="border-right: 1px dashed black; padding: 20px">
								<div>
									<nuxt-link to="/actionCollectiveAutreJoueur" class="imgActionCollHover" style="text-decoration: none; color: white; width: 100%; background-color: orangered; padding: 10px; font-size: 1.1em; border-radius: 10px">
										4 actions collectives en cours
									</nuxt-link>
								</div>			
							</v-flex>
							<v-flex d-flex xs6 sm6 md6 justify-center align-center style="padding: 20px">
								<div>
									<nuxt-link to="/actionCollectiveAutreEquipe" class="imgActionCollHover" style="text-decoration: none; border: 1px solid grey; color: grey; width: 100%; background-color: white; padding: 10px; font-size: 1.1em; border-radius: 10px">
										11 actions collectives en cours
									</nuxt-link>
								</div>			
							</v-flex>					
						</v-layout>
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap class="tempsFortMargin">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div >
							Les événements durant le match !
						</div>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage">
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-end align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime">
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center>
								<div class="tempsFortDroiteTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage" style="background-color: white; color: grey; border: 1px solid grey; border-radius: 10px; text-align: center; max-width: 75%">
									+ 10.000 PF
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
									Nom fan adverse<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action collectives<br />
									Chant "Popolopololo"
									</span>
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action individuelle<br />
									Aller boire une bière</span>
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage" style="background-color: orangered; color: white; border-radius: 10px; text-align: center; max-width: 75%">
									+ 0.145 PF
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-start align-center>
								<div class="tempsFortDroiteTime">
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage">
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom du fan<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action collectives<br />
									Chant "Popolopololo"
									</span>
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage" style="background-color: orangered; color: white; border-radius: 10px; text-align: center; max-width: 75%">
									+ 10.000 PF
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center>
								<div class="tempsFortDroiteTime">
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage">
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action collective<br />
									Vous avez participé à :<br />
									Chant "Popolopololo"</span>
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage" style="background-color: orangered; color: white; border-radius: 10px; text-align: center; max-width: 75%">
									+ 0.145 PF
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-start align-center>
								<div class="tempsFortDroiteTime">
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage">
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage">
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-end align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime">
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center>
								<div class="tempsFortDroiteTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage" style="background-color: white; color: grey; border: 1px solid grey; border-radius: 10px; text-align: center; max-width: 75%">
									+ 10.000 PF
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
									Nom fan adverse<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action collectives<br />
									Chant "Popolopololo"
									</span>
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action collective<br />
									Vous avez lancé :<br />
									Chant "Popolopololo"</span>
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage" style="background-color: orangered; color: white; border-radius: 10px; text-align: center; max-width: 75%">
									+ 1.000 PF
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-start align-center>
								<div class="tempsFortDroiteTime">
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage">
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage">
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-end align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime">
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center>
								<div class="tempsFortDroiteTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage" style="background-color: white; color: grey; border: 1px solid grey; border-radius: 10px; text-align: center; max-width: 75%">
									+ 10.000 PF
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
									Nom fan adverse<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action collectives<br />
									Chant "Popolopololo"
									</span>
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs12 sm12 md12>
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs3 sm3 md3 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">
									Action collective<br />
									Vous avez lancé et réussi :<br />
									Chant "Popolopololo"</span>
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsfortGaucheImage" style="background-color: orangered; color: white; border-radius: 10px; text-align: center; max-width: 75%">
									+ 1.000 PF
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-center align-center style="border-right: 1px dashed black">
								<div class="tempsFortGaucheTime" style="background-color: green; max-width: 30px; text-align: center; border-radius: 50%; padding: 5px; color: white; font-size: 0.8em;">
									26'
								</div>			
							</v-flex>
							<v-flex d-flex xs1 sm1 md1 justify-start align-center>
								<div class="tempsFortDroiteTime">
								</div>			
							</v-flex>					
							<v-flex d-flex xs2 sm2 md2 justify-start align-center>
								<div class="tempsFortDroiteImage">
								</div>			
							</v-flex>					
							<v-flex d-flex xs3 sm3 md3 justify-start align-center>
								<div class="tempsFortDroiteTexte">
								</div>			
							</v-flex>
						</v-layout>
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
				this.$router.replace("/gamemode_gm")
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
	background-color: black;
	}
	.imgTeamSmall {
	width: 70%;
	border-radius: 10px;
	}
	.drapeau {
	padding: 10px;
	}
	.scorePF {
    background-color: rgb(255,255,255,0.9);
    max-width: 80%;
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
	font-size: 1.0em;
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
	background-color: #fafafa;
	font-size: 1.1em;
	font-weight: 700;
	margin-bottom: 5px;
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
		max-width: 90%;
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
    }
</style>
