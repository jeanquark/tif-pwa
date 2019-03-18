<template>
    <v-content id="app">
        <v-container style="padding: 0; max-width: 1017px;">
            <!-- Fixed Header -->
            <!-- <v-toolbar dark> -->
            <div id="header" class="header">
                <v-layout row>
                    <v-flex hidden-sm-and-down class="barreHeader">
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley (41 ans) - <nuxt-link to="/myteams" style="color: white; text-decoration: none">Tu gères des fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }}</nuxt-link></span>
                            </v-flex>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderRight">Fan de l'équipe de suisse de football (1.34 PF)</span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex hidden-md-and-up class="barreHeader">
                        <v-layout row>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderLeft1"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span class="barreHeaderLeft2">G. Manigley <nuxt-link to="/myteams" style="color: white; text-decoration: none">(Fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }})</nuxt-link></span>
                            </v-flex>
                            <v-flex xs6 sm6 md6>
                                <span class="barreHeaderRight">1.34 point de ferveur</span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                     <v-flex shrink>
                     <nuxt-link to="/myprofil">
                        <div id="avatar">
                            <img src="/images/avatar.png" class="imgAvatar" />
                        </div>
                    </nuxt-link>
                    </v-flex>
                    <v-flex hidden-sm-and-down grow>
                        <v-layout row>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                                <div style="text-align: center" class="levelHeader">Niv.1</div>
                                <v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="30"></v-progress-linear><span class="progress-bar-txt-white">3 / 10</span>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                <v-progress-linear class="progressYellow" color="yellow" height="20" value="75"></v-progress-linear><span class="progress-bar-txt-black">75 / 100</span>
                                <nuxt-link to="/plus" class="aPlusYellow">
                                <span class="plusYellow">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                <div class="dollarFan">1234 $fans</div>
                                <nuxt-link to="/plus" class="aPlusGreen">
                                <span class="plusGreen">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                                <div class="token">12 tokens</div>
                                <nuxt-link to="/plus" class="aPlusOrangered">
                                <span class="plusOrangered">+</span>
                                </nuxt-link>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex hidden-md-and-up grow>
                        <v-layout row>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
                                <div style="text-align: center" class="levelHeader">Niv.1</div>
                                <v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="12" value="30"></v-progress-linear><span class="progress-bar-txt-white">3 / 10</span>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                <v-progress-linear class="progressYellow" color="yellow" height="12" value="75"></v-progress-linear><span class="progress-bar-txt-black">75 / 100</span>
                                <nuxt-link to="/plus" class="aPlusYellow">
                                <span class="plusYellow">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                <div class="dollarFan">1234 $fans</div>
                                <nuxt-link to="/plus" class="aPlusGreen">
                                <span class="plusGreen">+</span>
                                </nuxt-link>
                            </v-flex>
                            <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader">
                                <div style="text-align: center"><i class="material-icons md-48" style="color: orangered">title</i></div>
                                <div class="token">12 tokens</div>
                                <nuxt-link to="/plus" class="aPlusOrangered">
                                <span class="plusOrangered">+</span>
                                </nuxt-link>
                            </v-flex>
                        </v-layout>
                    </v-flex>  
                    <v-flex shrink>
                        <nuxt-link to="/myteams">
                        <div id="team">
                            <img src="/images/switzerland.png" class="imgTeam" />
                        </div>
                        </nuxt-link>
                    </v-flex>
                </v-layout>
            </div>


            <!-- </v-toolbar> -->
            
            <!-- Scrollable content -->
            <div class="content" style="height: 100vh; background-color: black">
				<v-layout>
					<div>
						<v-layout row style="max-height: 40px; width: 100%; text-align: center; background-color: orangered; margin-top: 25px">
							<v-flex xs4 sm4 md4 class="noactiveskill">
								<nuxt-link to="/skillAttribut" style="text-decoration: none; color: white">Attribut</nuxt-link>
							</v-flex>
							<v-flex xs4 sm4 md4 class="activeskill">
								<nuxt-link to="/skillInfluence" style="text-decoration: none; color: white">Influence</nuxt-link>
							</v-flex>
							<v-flex xs4 sm4 md4 class="noactiveskill">
								<nuxt-link to="/skillSavoirfaire" style="text-decoration: none; color: white">Savoir-faire</nuxt-link>
							</v-flex>
						</v-layout>
						<v-layout row wrap style="margin-top: 15px; margin: 10px">
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="background-color: none; border: 2px solid orangered; border-radius: 5px">
									<v-card-actions style="padding: 5px; text-align: center">
										<span style="font-size: 18px">Résistance au stress</span>
										<v-spacer></v-spacer>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="color: orangered; font-size: 18px">star</v-icon>
									</v-card-actions>
									<v-divider light></v-divider>
									<v-layout>
										<v-flex xs4 style="text-align: center; padding: 5px">
											<img src="/images/stress.jpg" class="imgSkill" />
										</v-flex>
									<v-flex xs8>
										<v-card-title primary-title style="text-align: center; padding: 15px">
											<div>											
												<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 0; margin-bottom: 0"></v-progress-linear><span class="progress-bar-txt-white" style="top: -17px">1%</span>
												<div style="font-size: 14px; text-align: center">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
												<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px"><b>À débloquer :</b></br>Démineur - Niv. 1</div>
											</div>
										</v-card-title>
									</v-flex>
									</v-layout>
								</v-card>
							</v-flex>
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="background-color: none; border: 2px solid orangered; border-radius: 5px">
									<v-card-actions style="padding: 5px; text-align: center">
										<span style="font-size: 18px">Résistance au stress</span>
										<v-spacer></v-spacer>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="color: orangered; font-size: 18px">star</v-icon>
									</v-card-actions>
									<v-divider light></v-divider>
									<v-layout>
										<v-flex xs4 style="text-align: center; padding: 5px">
											<img src="/images/stress.jpg" class="imgSkill" />
										</v-flex>
									<v-flex xs8>
										<v-card-title primary-title style="text-align: center; padding: 15px">
											<div>											
												<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 0; margin-bottom: 0"></v-progress-linear><span class="progress-bar-txt-white" style="top: -17px">1%</span>
												<div style="font-size: 14px; text-align: center">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
												<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px"><b>À débloquer :</b></br>Démineur - Niv. 1</div>
											</div>
										</v-card-title>
									</v-flex>
									</v-layout>
								</v-card>
							</v-flex>
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="background-color: none; border: 2px solid orangered; border-radius: 5px">
									<v-card-actions style="padding: 5px; text-align: center">
										<span style="font-size: 18px">Résistance au stress</span>
										<v-spacer></v-spacer>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="color: orangered; font-size: 18px">star</v-icon>
									</v-card-actions>
									<v-divider light></v-divider>
									<v-layout>
										<v-flex xs4 style="text-align: center; padding: 5px">
											<img src="/images/stress.jpg" class="imgSkill" />
										</v-flex>
									<v-flex xs8>
										<v-card-title primary-title style="text-align: center; padding: 15px">
											<div>											
												<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 0; margin-bottom: 0"></v-progress-linear><span class="progress-bar-txt-white" style="top: -17px">1%</span>
												<div style="font-size: 14px; text-align: center">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
												<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px"><b>À débloquer :</b></br>Démineur - Niv. 1</div>
											</div>
										</v-card-title>
									</v-flex>
									</v-layout>
								</v-card>
							</v-flex>
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="background-color: none; border: 2px solid orangered; border-radius: 5px">
									<v-card-actions style="padding: 5px; text-align: center">
										<span style="font-size: 18px">Résistance au stress</span>
										<v-spacer></v-spacer>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="color: orangered; font-size: 18px">star</v-icon>
									</v-card-actions>
									<v-divider light></v-divider>
									<v-layout>
										<v-flex xs4 style="text-align: center; padding: 5px">
											<img src="/images/stress.jpg" class="imgSkill" />
										</v-flex>
									<v-flex xs8>
										<v-card-title primary-title style="text-align: center; padding: 15px">
											<div>											
												<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 0; margin-bottom: 0"></v-progress-linear><span class="progress-bar-txt-white" style="top: -17px">1%</span>
												<div style="font-size: 14px; text-align: center">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
												<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px"><b>À débloquer :</b></br>Démineur - Niv. 1</div>
											</div>
										</v-card-title>
									</v-flex>
									</v-layout>
								</v-card>
							</v-flex>
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="background-color: none; border: 2px solid orangered; border-radius: 5px">
									<v-card-actions style="padding: 5px; text-align: center">
										<span style="font-size: 18px">Résistance au stress</span>
										<v-spacer></v-spacer>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="color: orangered; font-size: 18px">star</v-icon>
									</v-card-actions>
									<v-divider light></v-divider>
									<v-layout>
										<v-flex xs4 style="text-align: center; padding: 5px">
											<img src="/images/stress.jpg" class="imgSkill" />
										</v-flex>
									<v-flex xs8>
										<v-card-title primary-title style="text-align: center; padding: 15px">
											<div>											
												<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 0; margin-bottom: 0"></v-progress-linear><span class="progress-bar-txt-white" style="top: -17px">1%</span>
												<div style="font-size: 14px; text-align: center">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
												<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px"><b>À débloquer :</b></br>Démineur - Niv. 1</div>
											</div>
										</v-card-title>
									</v-flex>
									</v-layout>
								</v-card>
							</v-flex>
							<v-flex xs12 sm6 md6 style="padding: 5px">
								<v-card style="background-color: none; border: 2px solid orangered; border-radius: 5px">
									<v-card-actions style="padding: 5px; text-align: center">
										<span style="font-size: 18px">Résistance au stress</span>
										<v-spacer></v-spacer>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="font-size: 18px">star</v-icon>
										<v-icon style="color: orangered; font-size: 18px">star</v-icon>
									</v-card-actions>
									<v-divider light></v-divider>
									<v-layout>
										<v-flex xs4 style="text-align: center; padding: 5px">
											<img src="/images/stress.jpg" class="imgSkill" />
										</v-flex>
									<v-flex xs8>
										<v-card-title primary-title style="text-align: center; padding: 15px">
											<div>											
												<v-progress-linear class="progressOrange" color="rgb(255,69,0)" height="20" value="1" style="margin-top: 0; margin-bottom: 0"></v-progress-linear><span class="progress-bar-txt-white" style="top: -17px">1%</span>
												<div style="font-size: 14px; text-align: center">Pénalty à la 93e de la finale de la coupe du monde… est-ce que tu oses regarder ?</div>
												<div style="background-color: orangered; padding: 8px 5px 5px 5px; text-align: center; margin-top: 10px; border-radius: 5px"><b>À débloquer :</b></br>Démineur - Niv. 1</div>
											</div>
										</v-card-title>
									</v-flex>
									</v-layout>
								</v-card>
							</v-flex>
						</v-layout>
					</div>
				</v-layout>
			</div>
            
            <!-- Fixed Footer -->
            <div id="footer">
                <!-- <br /><br /><br />
                <h2>Footer</h2>
                <br /><br /><br /> -->

                    <div class="barreOrangered"></div>
                    <div class="barreBlack"></div>
                    <div id="dock-container">
                        <ul>
                            <li>
                                <nuxt-link to="/myresult"><img src="/images/menuResultat.png">
                                <span class="textMenu">Mes classements</span></nuxt-link>
                            </li>
                            <li id="active">
                                <nuxt-link to="/myskill"><img src="/images/menuShop.png">
                                <span class="textMenu">Mes compétences</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/gamemode_jm"><img src="/images/menuHome.png">
                                <span class="textMenu">Aujourd'hui</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/myinventory"><img src="/images/menuSocial.png">
                                <span class="textMenu">Mon inventaire</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/scoremode"><img src="/images/menuResultat.png">
                                <span class="textMenu">ScoreMode</span></nuxt-link>
                            </li>
                        </ul>
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
            }
        }
    }
</script>

<style scoped>
	.orangered {
	background-color: orangered;
	border-color: orangered;
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
		font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    .content {
        background-color: light-gray;;
        overflow-x: auto;
    }
    #footer {
        background-color: red;
        color: #fff;
        height: auto;
        text-align: center;
    }
    
    @media only screen and (min-width: 1000px) {
        .content img {
            width: 100%;
        }
    }
    /* End Content */

    /* Header */
    #header {
        max-height: 162px;
        padding: 0;
        top:0px;
        left:0px;
        background-color: black;
        z-index: 1;
        border-bottom: 3px solid orangered;
        position: sticky;
    }
    .header {
        position: relative;
    }
    .barreHeader {
        position:absolute;
        top: 120px;
        width: 100%;
        background-color: orangered;
        z-index: -1;
        margin: 0;
        padding: 0;
    }
	.barreHeaderLeft1 {
	margin-left: 100px; 
	float: left; 
	margin-top: 4px;
	}
	.barreHeaderLeft2 {
	color: white; 
	padding: 4px; 
	float: left; 
	margin-top: 9px;
	}
	.barreHeaderRight {
	margin-right: 100px; 
	color: white; 
	padding: 4px; 
	float: right; 
	margin-top: 9px;
	}
	.cadreHeader1 {
	padding: 20px; 
	background-color: black; 
	border-bottom: 1px solid orangered; 
	border-right: 1px solid orangered;
	border-left: 1px solid orangered;	
	height: 120px; 
	box-shadow: 0 4px 5px -1px black; 
	position: relative;
	}
	.cadreHeader {
	padding: 15px; 
	background-color: black; 
	border-bottom: 1px solid orangered; 
	border-right: 1px solid orangered; 
	height: 120px; 
	box-shadow: 0 4px 5px -1px black; 
	position: relative;
	}
    #avatar {
        background-color: orangered;
        border-right: 3px solid orangered;
        border-bottom: 3px solid orangered;
        box-shadow: 0 7px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0 0 100% 0;
    }
    .imgAvatar {
        height: 100%;
        width: 100%;
        border-radius: 0 0 100% 0;
    }
    #team {
        background-color: orangered;
        border-left: 3px solid orangered;
        border-bottom: 3px solid orangered;
        box-shadow: 0 7px 5px black;
        height: 150px;
        width: 150px;
        border-radius: 0 0 0 100%;
    }
    .imgTeam {
        height: 100%;
        width: 100%;
        border-radius: 0 0 0 100%;
    }
    .imgTeamSmall {
        height: 20px;
        margin-top: 5px;
    }
    .levelHeader {
        font-weight: 700;
        font-size: 36px;  /* Preferred icon size */
        background-color: orangered;
        color: white;
        border-radius: 10px;
    }
    .plusOrangered {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0 10px;
        color: white;
        font-weight: 700;
        font-size: 1.2em;
        background-color: orangered;
    }
    .aPlusOrangered :hover {
        color: orangered;
        background-color: white;
        border-bottom: 1px solid orangered;
        border-left: 1px solid orangered;
    }
	.progressYellow {
	width: 100%; 
	font-weight: 700; 
	color: black; 
	border-radius: 5px;
	}
	.progressOrange {
	width: 100%; 
	font-weight: 700; 
	color: black; 
	border-radius: 5px;
	margin-top: 25px;
	}
	.plusYellow {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0 10px;
        color: black;
        font-weight: 700;
        font-size: 1.2em;
        background-color: yellow;
    }
    .aPlusYellow :hover {
        color: black;
        background-color: white;
        border-bottom: 1px solid yellow;
        border-left: 1px solid yellow;
    }
    .plusGreen {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0 10px;
        color: white;
        font-weight: 700;
        font-size: 1.2em;
        background-color: green;
    }
    .aPlusGreen :hover {
        color: green;
        background-color: white;
        border-bottom: 1px solid green;
        border-left: 1px solid green;
    }
    .dollarFan {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: green;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 4px;
    }
    .token {
        margin-top: 14px;
        width: 100%;
        text-align: center;
        color: orangered;
        font-weight: 700;
        box-shadow: 0 0 10px 2px inset;
        border-radius: 5px;
        padding: 5px;
    }
	.cadreScore {
    width: 1000px;
    background-color: white;
    margin-top: 50px;
	}
	.pd-left5 {
	padding-left: 5px;
	}
	.imgLogoEquipe {
	max-width: 30px;
	max-height: 30px;
	}
	.teamTextSize {
	font-size: 1.2em;
	}
	.progress-bar-txt-black {
		position: relative;
		font-size: 15px;
		top: -31px;
		z-index: 1;
		color: black;
		font-weight: 700;
	}
	.progress-bar-txt-white {
		position: relative;
		font-size: 15px;
		top: -31px;
		z-index: 1;
		color: white;
		font-weight: 700;
	}
	.material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    
    .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
    }   
    /* End Header */
    
    

    /* Footer */
    .barreOrangered {
        width: 100%;
        padding: 0;
        margin: 0; 
        height: 3px;
        background-color: orangered;
    }
    .barreBlack {
        width: 100%;
        padding: 0;
        margin: 0;
        height: 8px;
        background-color: black;
    }
    
    #dock-container {
        height: 80px;
        padding: 0;
        margin: 0;
        bottom: 0;
        background-color: orangered;
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
    /* End Footer */
	
	.activeskill {
	padding: 16px; 
	border: 2px solid orangered; 
	background-color: black; 
	color: orangered; 
	font-size: 20px; 
	height: 50px; 
	margin-top: -10px; 
	font-weight: 700;
	}
	
	.noactiveskill {
	padding: 12px; 
	border: 1px solid black; 
	font-size: 20px; 
	font-weight: 700;
	}
	
	.imgSkill {
	height: 85%;
	width: 85%;
	}
	
	.content .imgSkill {
	width: 85%;
	}
    
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
			display: flex;
			flex-direction: column;
			font: normal 90%/1 "Acme", Helvetica, sans-serif;
		}
		.content {
			background-color: light-gray;;
			/*flex-grow: 1;*/
			overflow-x: auto;
		}
		#footer {
			background-color: red;
			color: #fff;
			/*height: 100px;*/
			height: auto;
			text-align: center;
		}	
		/* End Content */

		/* Header */
		#header {
			max-height: 92px;
			padding: 0;
			top:0px;
			left:0px;
			background-color: black;
			z-index: 1;
			border-bottom: 2px solid orangered;
			position: sticky;
		}
		.header {
			position: relative;
		}
		.barreHeader {
			position:absolute;
			top: 70px;
			height: 18px;
			width: 100%;
			background-color: orangered;
			z-index: -1;
			margin: 0;
			padding: 0;
		}
		.barreHeaderLeft1 {
		margin-left: 25px;
		margin-top: 3px;
		}
		.barreHeaderLeft2 {
		color: white; 
		padding: 4px;
		margin-top: 2px;
		font-size: 0.8em;
		}
		.barreHeaderRight {
		margin-right: 25px; 
		color: white; 
		padding: 4px; 
		float: right; 
		margin-top: 2px;
		font-size: 0.8em;
		}
		.cadreHeader1 {
		padding: 3px; 
		background-color: black; 
		border-bottom: 1px solid orangered; 
		border-right: 1px solid orangered;
		border-left: 1px solid orangered;	
		height: 70px; 
		box-shadow: 0 2px 3px -1px black; 
		position: relative;
		}
		.cadreHeader {
		padding: 3px; 
		background-color: black; 
		border-bottom: 1px solid orangered; 
		border-right: 1px solid orangered; 
		height: 70px; 
		box-shadow: 0 2px 3px -1px black; 
		position: relative;
		}
		#avatar {
			background-color: orangered;
			border-right: 2px solid orangered;
			border-bottom: 2px solid orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 100% 0;
		}
		.imgAvatar {
			height: 100%;
			width: 100%;
			border-radius: 0 0 100% 0;
		}
		#team {
			background-color: orangered;
			border-left: 2px solid orangered;
			border-bottom: 2px solid orangered;
			box-shadow: 0 2px 2px black;
			height: 70px;
			width: 70px;
			border-radius: 0 0 0 100%;
		}
		.imgTeam {
			height: 100%;
			width: 100%;
			border-radius: 0 0 0 100%;
		}
		.imgTeamSmall {
			height: 12px;
			margin-top: 0;
		}
		.levelHeader {
			font-weight: 700;
			font-size: 12px;  /* Preferred icon size */
			background-color: orangered;
			color: white;
			border-radius: 5px;
			margin-top: 15px;
		}
		.plusOrangered {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: white;
			font-weight: 700;
			font-size: 0.9em;
			background-color: orangered;
		}
		.aPlusOrangered :hover {
			color: orangered;
			background-color: white;
			border-bottom: 1px solid orangered;
			border-left: 1px solid orangered;
		}
		.progressYellow {
		width: 100%; 
		font-weight: 700; 
		color: black; 
		border-radius: 5px;
		height: 11px;
		margin-top: 8px;
		}
		.progressOrange {
		width: 100%; 
		font-weight: 700; 
		color: black; 
		border-radius: 5px;
		height: 11px;
		margin-top: 18px;
		}
		.progress-bar-txt-black {
			position: relative;
			font-size: 9px;
			top: -26px;
			z-index: 1;
			color: black;
			font-weight: 600;
		}
		.progress-bar-txt-white {
			position: relative;
			font-size: 9px;
			top: -26px;
			z-index: 1;
			color: white;
			font-weight: 600;
		}
		.plusYellow {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: black;
			font-weight: 700;
			font-size: 0.9em;
			background-color: yellow;
		}
		.aPlusYellow :hover {
			color: black;
			background-color: white;
			border-bottom: 1px solid yellow;
			border-left: 1px solid yellow;
		}
		.plusGreen {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0;
			padding: 0 5px;
			color: white;
			font-weight: 700;
			font-size: 0.9em;
			background-color: green;
		}
		.aPlusGreen :hover {
			color: green;
			background-color: white;
			border-bottom: 1px solid green;
			border-left: 1px solid green;
		}
		.dollarFan {
			margin-top: 7px;
			width: 100%;
			text-align: center;
			color: green;
			font-weight: 700;
			box-shadow: 0 0 5px 1px inset;
			border-radius: 5px;
			padding: 2px;
			font-size: 0.8em;
		}
		.token {
			margin-top: 7px;
			width: 100%;
			text-align: center;
			color: orangered;
			font-weight: 700;
			box-shadow: 0 0 5px 1px inset;
			border-radius: 5px;
			padding: 2px;
			font-size: 0.8em;
		}
		.cadreScore {
		border: 2px solid orangered;
		padding: 5px;
		width: 95%;
		background-color: whitesmoke;
		opacity: 0.9;
		color: black;
		margin: 0;
		top: 105px;
		left: 10px;
		right: 10px;
		}
		.material-icons.md-48 { 
		font-size: 30px;
		margin-top: 5px;
		}
				.material-icons {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 12px;  /* Preferred icon size */
		display: inline-block;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		/* Support for all WebKit browsers. */
		-webkit-font-smoothing: antialiased;
		/* Support for Safari and Chrome. */
		text-rendering: optimizeLegibility;

		/* Support for Firefox. */
		-moz-osx-font-smoothing: grayscale;

		/* Support for IE. */
		font-feature-settings: 'liga';
		}   
		/* End Header */
		
		/* Footer */
		.barreOrangered {
			width: 100%;
			padding: 0;
			margin: 0; 
			height: 2px;
			background-color: orangered;
		}
		.barreBlack {
			width: 100%;
			padding: 0;
			margin: 0;
			height: 4px;
			background-color: black;
		}
			
        /* Menu */

        #dock-container {
            height: 55px;
            padding: 0;
            margin: 0;
            bottom: 0;
            background-color: orangered;
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
</style>
