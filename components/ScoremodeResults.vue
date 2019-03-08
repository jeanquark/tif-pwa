<template>
	<v-tabs
        dark
        color="cyan"
        show-arrows
        fixed-tabs
        v-model="activeDay"
        style="border: 1px dashed orange;"
        @change="fetchEventsByDay(activeDay)"
    >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
            v-for="day in days"
            :key="day"
            :href="'#' + day"
        >
            {{ day | moment('ddd DD MMM') }}
        </v-tab>

        <v-tabs-items>
            <v-tab-item
                v-for="day in days"
                :key="day"
                :value="day"
                lazy
            >
                <v-card flat>
                    <v-card-text>
                        <v-data-table :items="loadedEventsByDay(day) ? loadedEventsByDay(day)['events'] : []" no-data-text="No game found on this day." class="elevation-0" hide-actions hide-headers>
                            <template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid black">
                                <v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black">
                                    <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
                                        <v-layout align-start>
                                            <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                <div style="background-color: green; height: 100%; width: 2px" v-if="props.item.status === 'IN PLAY' || props.item.status === 'HALF TIME BREAK' || props.item.status === 'ADDED TIME' || props.item.status === 'FINISHED'"></div>
                                                <div v-else style="background-color: orangered; height: 100%; width: 2px"></div>
                                            </v-flex>
                                            <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                <div style="color: orange;font-size: 80%">
                                                    <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" v-if="props.item.status === 'IN PLAY' || props.item.status === 'HALF TIME BREAK' || props.item.status === 'ADDED TIME' || props.item.status === 'FINISHED'"> - {{ props.item.time}} (heure local)</span>
                                                    <span v-else style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >BIENTÔT - {{ props.item.time}} (heure local)</span>
                                                </div>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout align-center style="max-width: 100%">
                                            <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                                <div style="background-color: green; height: 40px; width: 2px" v-if="props.item.status === 'IN PLAY' || props.item.status === 'HALF TIME BREAK' || props.item.status === 'ADDED TIME' || props.item.status === 'FINISHED'"></div>
												<div v-else style="background-color: orangered; height: 40px; width: 2px">
											</v-flex>
                                            <v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-left: 15px">
                                                <img :src="'/images/teams/' + props.item.home_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
                                            </v-flex>
                                            <v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
                                                <span class="teamTextSize">{{ props.item.home_team.name }}</span>
                                            </v-flex>
                                            <v-flex sm2 xs2 class="text-xs-center">
                                                <span style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%" v-if="props.item.status === 'IN PLAY' || props.item.status === 'HALF TIME BREAK' || props.item.status === 'ADDED TIME' || props.item.status === 'FINISHED'">
                                                    <transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
                                                        <span :key="props.item.score">
                                                            {{ props.item.score }}
                                                        </span>
                                                    </transition>
                                                </span>
                                                <!-- <span v-else style="background-color: black; color: orange; padding: 2px 10px; border-radius: 5px; font-size: 130%">{{ convertToLocaltime(props.item.timestamp) }}</span> -->
                                            </v-flex>
                                            <v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
                                                <span class="teamTextSize">{{ props.item.visitor_team.name }}</span>
                                            </v-flex>
                                            <v-flex sm1 hidden-xs-only align-center class="text-xs-center" style="width: 50px; padding-right: 15px">
                                                <img :src="'/images/teams/' + props.item.visitor_team.slug + '.png'" :lazy-src="'/images/icon.png'" class="imgLogoEquipe"/>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </template>
                        </v-data-table>

                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
	import moment from 'moment'
	export default {
		async created () {
			for (let i = 15; i >= 1; i--) {
                this.days.push(moment().subtract(i, 'days').format('YYYY-MM-DD'))
            }
            this.days.push(moment().format('YYYY-MM-DD'))
            for (let i = 1; i <= 15; i++) {
                this.days.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            }
            this.$store.commit('setLoading', false)

            const today = moment().format('YYYY-MM-DD')
            await this.$store.dispatch('events/fetchEventsByDay', today)
        },
		data () {
			return {
				activeDay: `${moment().format('YYYY-MM-DD')}`,
				days: [],
			}
		},
		computed: {
			loadedEvents () {
                return this.$store.getters['events/loadedEvents']
            }
		},
		methods: {
			fetchEventsByDay(date) {
                console.log('fetchEventsByDay: ', date)
                if (!this.loadedEvents[date]) {
                    this.$store.dispatch('events/fetchEventsByDay', date)
                }
            },
            loadedEventsByDay (date) {
                return this.$store.getters['events/loadedEvents'][date]
            },
            convertToLocalTime (timestamp) {
                const utcDiff = new Date().getTimezoneOffset()
                console.log('utcDiff: ', utcDiff)
                if (utcDiff > 0) {
                    return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
                } else {
                    return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
                }
            }
		}
	}
</script>

<style scoped>
	#content {

    }
    .content {

    }
    .centerImage {
    	height: 100%;
    }
    .imgCarte {
	    height: 100%;
	    display: block;
	    margin-left: auto;
	    margin-right: auto;
    }
    .image1 {
	    position: absolute;
	    top: 100px;
	    left: 300px;
	    height: 50px;
	    width: 50px;
    }
        
    /* End Content */

    .menuSport {
        height: 40px;
    }
    
    .menuDay {
        height: 40px;
    }
    
    .v-expansion-panel__header {
    padding: 2px 2px;
    min-height: 24px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 5s;
        background-color: #000;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    
    .imgLogoEquipe {
	    max-width: 30px;
	    max-height: 30px;
    }
    
    .teamTextSize {
    	font-size: 1.3em;
    }

    .black {
    	background-color: black;
    }
    
    .imageLogo {
	    width: 30px;
	    height: 30px;
    }
    
    /* ScoreCard */

    .card {
    	border-radius: 5px;
    }
    .card-title {
    	background-color: lightslategray;
    }
    .card-text {
	    background-color: whitesmoke;
	    width: auto;
	    border-radius: 8px;
	    padding: 8px;
    }
    .card-footer {
    	background-color: lightslategrey;
    }
    .fas:hover {
	    cursor: pointer;
	    color: #fff;
    }
    
    .userText {
    	font-size: 1.3em;
    }
    
    .connectText {
    	font-size: 1.3em;
    }
    
    .chiffres {
	    font-size: 2.5em;
	    color: orangered;
	    font-width: 700;
    }
    
    .activity {
	    font-size: 1.5em;
	    text-transform: uppercase;
    }
    
    .levelBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }
    
    .energyBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }
    
    .dollarBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }

    .tokenBox {
    background-color: #757575;
    color: black;
    vertical-align: middle;
    padding: 2px;
    border-radius: 3px;
    width: 95%;
    margin: auto;
    }

    /* Menu */
    
    .barreBlack {
    width: 100%;
    padding: 0;
    margin: 0;
    height: 8px;
    background-color: black;
    }
    .barreOrangered {
    width: 100%;
    padding: 0;
    margin: 0; 
    height: 3px;
    background-color: orangered;
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
    
    /* End Menu */

        @media only screen and (max-width: 768px) {

        #app {
        font: normal 90%/1 "Acme", Helvetica, sans-serif;
        }
        
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