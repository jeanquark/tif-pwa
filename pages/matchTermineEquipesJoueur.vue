<template>
    <v-content id="app">      
		<v-container text-xs-center style="padding: 0; max-width: 1017px; border-left: 1px solid orangered; border-right: 1px solid orangered">
			<div class="backgroundImage" style="position: relative; padding-bottom: 1px">
				<v-layout grid-list-xs row wrap style="background-color: rgb(0,0,0,0.25)">
					<v-flex d-flex xs2 sm2 md2>
					</v-flex>
					<v-flex d-flex xs8 sm8 md8 justify-center align-center>
						<div class="infoMatch">
						Espagne, Championnat, La Liga<br/>
						Journée 1 sur 38
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
						<div class="drapeau">
							<img src="/images/switzerland.png" class="imgTeamSmall" />
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-center align-center>
						<div class="scorePF">
							10.456 PF
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="timeTermine">
							Match terminé !<br />
							12.04.2019
						</div>
					</v-flex>
					<v-flex d-flex xs3 sm3 md3 justify-center align-center>
						<div class="scorePF win">
							12.456 PF
						</div>
					</v-flex>
					<v-flex d-flex xs2 sm2 md2 justify-center align-center>
						<div class="drapeau">
							<img src="/images/switzerland.png" class="imgTeamSmall" />
						</div>
					</v-flex>
				</v-layout>	
				<v-layout row wrap style="margin-top: 10px">
					<v-flex d-flex xs4 sm4 md4 justify-end align-center>
						<div class="nameTeam win">
							Deportivo Alavés
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-center align-center>
						<div class="scoreReel">
							Score réel<br />
							0 à 0
						</div>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-start align-center>
						<div class="nameTeam">
							Espanyol Barcelone
						</div>
					</v-flex>
				</v-layout>	
				<v-layout row wrap style="margin-top: 10px">
					<v-flex d-flex xs12 justify-center align-center>
						<div class="scorePlayer">
							Ton score :<br /><br />
							Tu n'as pas participé à ce match !
						</div>
					</v-flex>
				</v-layout>
				<v-layout grid-list-xs row wrap style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px">
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey">
							Le match
						</div>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-center align-center>
						<nuxt-link to="/joueTif" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Va voir le résumé de TIF !
							</div>			
						</nuxt-link>
					</v-flex>
				</v-layout>	
				<v-layout grid-list-xs row wrap style="background-color: rgb(0, 0, 0, 0.9); border-top: 1px solid darkgrey; border-bottom: 1px solid darkgrey; margin-top: 5px; margin-bottom: 5px">
					<v-flex d-flex xs4 sm4 md4 justify-center align-center>
						<nuxt-link to="/matchTermineJoueur" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif" style="border-right: 1px solid darkgrey">
								Résumé du match 
							</div>
						</nuxt-link>
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-center align-center>
						<div class="menuMatch" style="border-right: 1px solid darkgrey">
							Equipes
						</div>	
					</v-flex>
					<v-flex d-flex xs4 sm4 md4 justify-center align-center>
						<nuxt-link to="/matchTermineStatsJoueur" class="hoverMatchStats" style="text-decoration: none; color: white; width: 100%">
							<div class="menuTif">
								Statistiques
							</div>
						</nuxt-link>
					</v-flex>
				</v-layout>
			</div>
			<div class="resumeMatch">
				<v-layout grid-list-xs row wrap class="tempsFortMargin">
					<v-flex d-flex xs12 sm12 md12 justify-center align-center class="titleResume">
						<div>
							Les effectifs des équipes
						</div>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-start align-start class="cadreGeneralGauche">
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs12 sm12 md12 justify-start align-center class="titleResumeGauche">
								<div>
									Le coach
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du coach<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du coach</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-start align-center class="titleResumeGauche">
								<div>
									Les gardiens de but
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-start align-center class="titleResumeGauche">
								<div>
									Les défenseurs
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-start align-center class="titleResumeGauche">
								<div>
									Les milieux de terrain
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-start align-center class="titleResumeGauche">
								<div>
									Les attaquants
								</div>
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortGaucheImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortGaucheTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex d-flex xs6 sm6 md6 justify-end align-start class="cadreGeneralDroite">
						<v-layout grid-list-xs row wrap class="eventMatch">
							<v-flex d-flex xs12 sm12 md12 justify-end align-center class="titleResumeDroite">
								<div>
									Le coach
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-end align-center class="titleResumeDroite">
								<div>
									Les gardiens de but
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-end align-center class="titleResumeDroite">
								<div>
									Les défenseurs
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-end align-center class="titleResumeDroite">
								<div>
									Les milieux de terrain
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs12 sm12 md12 justify-end align-center class="titleResumeDroite">
								<div>
									Les attaquants
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
								</div>
							</v-flex>
							<v-flex d-flex xs10 sm10 md10 justify-end align-center>
								<div class="tempsFortDroiteTexte">
									Nom Prénom du joueur<br />
									<span style="font-size: 0.9em; font-weight: 500">Nationalité du joueur</span>
								</div>			
							</v-flex>
							<v-flex d-flex xs2 sm2 md2 justify-end align-center>
								<div class="tempsFortDroiteImage">
									<img src="/images/icon.png" class="imgIconSmall" />								
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
	min-height: 100vh;
    flex-direction: column;
	font: normal 100%/1 "Acme", Helvetica, sans-serif;
    background-color: light-gray;
    }
    .content {
    background-color: light-gray;
    overflow-x: auto;
    height: 100%;
	position: relative;
    }
	.backgroundImage {
	background-image: url(/images/stade.svg);
	background-size: cover;
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
	.timeAvenir {
	background-color: rgb(255,69,0,0.9);
    max-width: 70%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;	
	color: white;
	}
	.timeTermine {
	background-color: rgb(255,0,0,0.9);
    max-width: 70%;
    padding: 10px;
    border-radius: 5px;
    font-size: 1em;	
	color: white;
	}
	.win {
	color: orangered;
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
    max-width: 75%;
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
	.resumeMatch {
	background-color: white;
	}
	.titleResume {
	font-size: 1.1em;
	font-weight: 700;
	margin-bottom: 5px;
	text-align: center;
	}
	.titleResumeGauche {
	font-size: 1.1em;
	font-weight: 700;
	margin-bottom: 5px;
	text-align: left;
	padding: 5px;	
	background-color: white;
	}
	.titleResumeDroite {
	font-size: 1.1em;
	font-weight: 700;
	margin-bottom: 5px;
	text-align: right;
	padding: 5px;
	background-color: white;
	}
	.eventMatch {
	background-color: lightgrey;
	}
	.imgIconSmall {
	width: 40px;
	}
	.tempsFortGaucheTexte {
	padding: 15px; 
	color: black; 
	font-size: 1.1em; 
	text-transform: uppercase; 
	text-align: left;
	font-weight: 700;
	}
	.tempsFortGaucheImage {
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
	padding: 15px; 
	color: black; 
	font-size: 1.1em; 
	text-transform: uppercase; 
	text-align: right;
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
	.cadreGeneralGauche {
	padding: 5px 5px 5px 10px; 
	margin-bottom: 10px;
	}
	.cadreGeneralDroite {
	padding: 5px 10px 5px 5px;
	margin-bottom: 10px;
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
		min-height: 100vh;
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
		.timeEncours {
		max-width: 95%;
		padding: 5px;
		font-size: 0.8em;	
		}
		.retour {
		top: 3px;
		right: 11px;
		}
		.timeAvenir {
		max-width: 95%;
		padding: 5px;
		font-size: 0.8em;	
		}
		.timeTermine {
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
		max-width: 40%;
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
		.titleResumeGauche {
		font-size: 1em;
		}
		.titleResumeDroite {
		font-size: 1em;
		}
		.tempsFortGaucheTexte {
		padding: 5px; 
		font-size: 0.7em; 
		}
		.tempsFortGaucheImage {
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
		font-size: 0.7em; 
		}
		.imgIconSmall {
		width: 15px;
		}
		.infosMatch {
		color: black;
		font-size: 0.9em;
		}
		.imgIconSmall {
		width: 20px;
		}
		.cadreGeneralGauche {
		padding: 2px 2px 2px 4px; 
		margin-bottom: 10px;
		}
		.cadreGeneralDroite {
		padding: 2px 4px 2px 2px; 
		margin-bottom: 10px;
		}

    }
</style>
