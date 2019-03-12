<template>
        <v-container fluid id="header" class="header" style="height: 162px">
            <v-layout row>
                <v-flex class="barreHeader">
                    <v-layout row>
                        <v-flex xs6 sm6 md6>
                            <span style="margin-left: 100px; color: white; font-weight: 700; padding: 4px; float: left; margin-top: 4px">Utilisateur invité</span>
                        </v-flex>
                        <v-flex xs6 sm6 md6>
                            <span style="margin-right: 100px; color: white; font-weight: 700; padding: 4px; float: right; margin-top: 4px">Bienvenue sur TIF - Pour des fans, par des fans !</span>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex shrink>
                    <nuxt-link to="/">
                        <div id="avatar" style="background-color: orangered">
                            <span class="textTif">ThisIsFan.com</span>
                        </div>
                    </nuxt-link>
                </v-flex>
                <v-flex grow>
                    <v-layout row>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; border-left: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">1</span><br />
								<span class="activity">sport</span>
							</div>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">6</span><br />
								<span class="activity">pays</span>
							</div>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black; border-bottom: 1px solid orangered; border-right: 1px solid orangered; height: 120px; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">130</span><br />
								<span class="activity">équipes</span>
							</div>
                        </v-flex>
                        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center style="padding: 25px; background-color: black;height: 120px; border-bottom: 1px solid orangered; border-right: 1px solid orangered; box-shadow: 0 4px 5px -1px black; position: relative">
							<div class="headerLogo">
								<span class="chiffres">769</span><br />
								<span class="activity">fans</span>
							</div>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex shrink>
                    <nuxt-link to="/gamemode">
                        <div id="team" style="background-color: orangered">
							<span class="textScoreMode">ScoreMode<br />
							C'est parti !</span>
                        </div>
                    </nuxt-link>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
    
</style>