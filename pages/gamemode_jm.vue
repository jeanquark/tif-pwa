<template>
    <v-content id="app">
        <v-container class="container">
            
            <!-- Fixed Header -->
            <!-- <v-toolbar dark> -->


                <v-container fluid id="header" class="header" style="height: 162px">
                    <v-layout row>
                        <v-flex class="barreHeader">
                            <v-layout row>
                                <v-flex xs6 sm6 md6>
                                    <span style="margin-left: 100px; float: left; margin-top: 4px"><img src="/images/switzerland.png" class="imgTeamSmall" /></span> <span style="color: white; padding: 4px; float: left; margin-top: 9px">G. Manigley (41 ans) - <nuxt-link to="/myteams" style="color: white; text-decoration: none">Tu gères des fans de {{ loadedUserTeams.length > 1 ? loadedUserTeams.length + ' équipes' : loadedUserTeams.length + ' équipe' }}</nuxt-link></span>
                                </v-flex>
                                <v-flex xs6 sm6 md6>
                                    <span style="margin-right: 100px; color: white; padding: 4px; float: right; margin-top: 9px">Fan de l'équipe de suisse de football (1.34 PF)</span>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                         <v-flex shrink>
                         <nuxt-link to="/myprofil">
                            <div id="avatar">
                                <img src="/images/avatar.png" class="imgAvatar" />
                            </div>
                        </nuxt-link>
                        </v-flex>
                        <v-flex grow>
                            <v-layout row>
                                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 20px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; border-left: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                                    <div style="text-align: center" class="levelHeader">Niv.1</div>
                                    <v-progress-linear color="orange" height="20" value="30" style="width: 100%; font-weight: 700; border-radius: 5px; margin-top: 25px"><span style="color: white">3 / 10</span></v-progress-linear>
                                </v-flex>
                                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                                    <div style="text-align: center"><i class="material-icons md-48" style="color: yellow">flash_on</i></div>
                                    <v-progress-linear color="yellow" height="20" value="75" style="width: 100%; font-weight: 700; color: black; border-radius: 5px">75 / 100</v-progress-linear>
                                    <nuxt-link to="/plus" class="aPlusYellow">
                                    <span class="plusYellow">+</span>
                                    </nuxt-link>
                                </v-flex>
                                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
                                    <div style="text-align: center"><i class="material-icons md-48" style="color: green">attach_money</i></div>
                                    <div class="dollarFan">1234 $fans</div>
                                    <nuxt-link to="/plus" class="aPlusGreen">
                                    <span class="plusGreen">+</span>
                                    </nuxt-link>
                                </v-flex>
                                <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 15px; background-color: black;height: 120px; border-bottom: 1px solid orangered; border-right: 1px solid orangered; box-shadow: 0 4px 5px -1px black; position: relative">
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
                </v-container>


            <!-- </v-toolbar> -->
            
            <!-- Scrollable content -->
            <div class="content">
                <v-layout>
                    <img src="/images/barcelona.png" />
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
                            <li>
                                <nuxt-link to="/myinventory"><img src="/images/menuShop.png">
                                <span class="textMenu">Inventaire</span></nuxt-link>
                            </li>
                            <li id="active">
                                <nuxt-link to="/gamemode"><img src="/images/menuHome.png">
                                <span class="textMenu">Aujourd'hui</span></nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/myfriends"><img src="/images/menuSocial.png">
                                <span class="textMenu">Mes amis</span></nuxt-link>
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
    export default {
        data () {
            return {
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ]
            } 
        },
        computed: {
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
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
    
    @media only screen and (min-width: 1000px) {
        .content img {
            width: 100%;
        }
    }
    /* End Content */

    /* Header */
    #header {
        height: 162px;
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
    #avatar {
        background-color: black;
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
        background-color: black;
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
        background-color: orange;
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
    
    /* Small screens */
    @media only screen and (max-width: 768px) {
        .pd-right10 {
            padding-right: 10px;
        }
        
        .pd-left10 {
            padding-left: 10px;
        }
        
        .imgLogoEquipe {
            max-width: 35px;
        }
        
        .teamTextSize {
            font-size: 1.0em;
        }
        
        .headerMenus {
            padding: 0; 
            margin: 0; 
            height: 46px;
        }
        
        .energyBox {
            background-color: #757575;
            color: black;
            vertical-align: middle;
            padding: 1px;
            border-radius: 2px;
            width: 95%;
            margin: auto;
            font-size: 0.8em;
        }
        
        .userText {
            font-size: 0.8em;
        }
        
        .connectText {
            font-size: 0.8em;
        }

        /* Header */

        .imageLogoTif {
            width: 60px;
            height: 60px;
        }
        
        .backBlack {
            background-image: url("/images/header-TIF_03.png");
            background-position: center;
            background-repeat: repeat-x;
            background-size: contain;
            height: 60px;
        }

        .boxTif {
            width: 60px;
            height: 60px;
        }

        .imageLogo {
            width: 25px;
            height: 25px;
        }
        
        .menuSport {
            height: 30px;
        }
        
        .menuDay {
            height: 30px;
        }
        
        .headerLogo {
            height: auto;
        }
        
        .headerMenu {
            height: 46px;
        }
        
        .v-expansion-panel__header {
            padding: 2px 2px;
            min-height: 24px;
        }
        
        .chiffres {
            font-size: 1.2em;
        }
        
        .activity {
            font-size: 0.8em;
        }
        
        /* Menu */

        #dock-container {
            height: 55px;
            padding: 0;
            margin: 0;
            bottom: 0;
            background-color: rgb(248,147,37);
            border: none;
            border-top: 4px solid darkred;
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