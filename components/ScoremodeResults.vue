<template>

	<v-tabs color="rgb(0,0,0)" height="35" justify-center fixed-tabs show-arrows v-model="activeDay" @change="fetchEventsByDay(activeDay)">
	<v-tabs-slider color="white" style="min-width: 0"></v-tabs-slider>
		<v-tab v-for="day in days" :key="day" :href="'#' + day" style="min-width: 0">
			<span style="font-size: 1.0em; color: white">{{ day | moment('ddd DD MMM') }}</span>
		</v-tab>
        <v-tabs-items>
            <v-tab-item v-for="day in days" :key="day" :value="day" lazy style="">
                <div class="tab-item-wrapper">
                    <v-layout class="column fill-height" v-cloak>
                        <v-flex xs12>
                            <v-card flat>
                                <v-card-text style="padding: 0">	
                                    <v-expansion-panel class="elevation-0" :value="0" style="margin-top: 10px; margin-bottom: 10px">
                                        <v-expansion-panel-content style="background-color: orangered">
											<div slot="header" class="white--text">
												MOST POPULAR
											</div>
                                            <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                            <v-expansion-panel class="elevation-0" :value="1" v-for="competition in loadedPopularCompetitions" :key="competition.slug">
                                                <v-expansion-panel-content class="black">
													<div slot="header" class="white--text">
														<div v-for="country in competition.countries" :key="country.slug" style="display: flex; align-items:center;">
															<img :src="'/images/countries/' + country.slug + '.png'" style="width: 18px; height: 18px" />&nbsp;&nbsp;{{ competition.name }}
														</div>
													</div>
                                                    <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                                    <v-card>
									                    <v-card-text style="padding: 0">
                                                            <v-data-table :items="loadedEventsByDay(day)['events'].filter(event => event.league_slug === competition.slug)" no-data-text="No game found on this day." class="elevation-0" hide-actions hide-headers v-if="loadedEventsByDay(day)">
                                                                <template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid black">
                                                                    <v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black">
                                                                        <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
                                                                            <v-layout align-start>
                                                                                <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                                                    <div style="background-color: green; height: 100%; width: 2px" v-if="props.item.statusShort === 'FT' || props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'"></div>
                                                                                    <div style="background-color: orangered; height: 100%; width: 2px" v-if="props.item.statusShort === 'NS' || props.item.statusShort === 'PST' || props.item.statusShort === 'ABD' || props.item.statusShort === 'AET'"></div>
                                                                                </v-flex>
                                                                                <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                                                    <div style="color: orange;font-size: 80%">
                                                                                        <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;" v-if="props.item.statusShort === 'FT' || props.item.statusShort === 'AET'">Finished</span>
                                                                                        <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H'">{{ props.item.elapsed }} min</span>
                                                                                        <span v-if="props.item.statusShort === 'HT'" style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;">Half time</span>
                                                                                        <span v-if="props.item.statusShort === 'NS'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px">{{ convertToLocalTime(props.item.timestamp) }}</span>
                                                                                        <span v-if="props.item.statusShort === 'TBD'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px">Time to be defined</span>
																						<span v-if="props.item.statusShort === 'PST'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px">Match postponed</span>
                                                                                        <span v-if="props.item.statusShort === 'ABD'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px">Match abandonned</span>
                                                                                        ID: {{ props.item.id }}
                                                                                    </div>
                                                                                </v-flex>

                                                                            </v-layout>

                                                                            <v-layout align-center style="max-width: 100%">
                                                                                <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                                                                    <div style="background-color: green; height: 40px; width: 2px" v-if="props.item.statusShort === 'FT' || props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'"></div>
                                                                                    <div v-if="props.item.statusShort === 'NS' || props.item.statusShort === 'PST' || props.item.statusShort === 'ABD' || props.item.statusShort === 'TBD' || props.item.statusShort === 'AET'" style="background-color: orangered; height: 40px; width: 2px"></div>
                                                                                </v-flex>
                                                                                <v-flex sm1 hidden-xs-only align-center class="text-xs-center imgTeamLogoWrapper" style="">
																					<nuxt-link to="/team">
																						<img :src="'/images/teams/' + props.item.homeTeam_slug + '.png'" :lazy-src="'/images/icon.png'" class="imgTeamLogo"/>
																					</nuxt-link>
                                                                                </v-flex>
                                                                                <v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
																					<nuxt-link to="/team" style="text-decoration: none; color: black">
																						<span class="teamTextSize"><v-icon class="notYourTeam">star</v-icon> {{ props.item.homeTeam_name }}</span>
																					</nuxt-link>
                                                                                </v-flex>
                                                                                <v-flex sm2 xs2 class="text-xs-center">
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'FT' || props.item.statusShort === 'AET'">
                                                                                        {{ props.item.final_score }}
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'">
                                                                                        <transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
                                                                                            <span :key="props.item.goalsHomeTeam">
                                                                                                {{ props.item.goalsHomeTeam }}
                                                                                            </span>
                                                                                        </transition> -
                                                                                        <transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
                                                                                            <span :key="props.item.goalsVisitorTeam">
                                                                                                {{ props.item.goalsVisitorTeam }}
                                                                                            </span>
                                                                                        </transition>
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'NS'">
                                                                                        {{ convertToLocalTime(props.item.timestamp) }}
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'PST'">
                                                                                        Postponed
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'TBD'">
                                                                                        Time To Be Definied
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'ABD'">
                                                                                        Abandonned
                                                                                    </span>
                                                                                </v-flex>
                                                                                <v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
																					<nuxt-link to="/team" style="text-decoration: none; color: black">
																						<span class="teamTextSize">{{ props.item.visitorTeam_name }} <v-icon class="notYourTeam">star</v-icon></span>
																					</nuxt-link>
                                                                                </v-flex>
                                                                                <v-flex sm1 hidden-xs-only align-center class="text-xs-center imgTeamLogoWrapper" style="">
																					<nuxt-link to="/team">
																						<img :src="'/images/teams/' + props.item.visitorTeam_slug + '.png'" :lazy-src="'/images/icon.png'" class="imgTeamLogo"/>
																					</nuxt-link>
                                                                                </v-flex>
                                                                            </v-layout>
                                                                        </v-flex>
                                                                    </v-layout>
                                                                </template>
                                                            </v-data-table>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>

                                    <v-expansion-panel class="elevation-0" :value="1" style="margin-bottom: 10px">
                                        <v-expansion-panel-content style="background-color: green">
											<div slot="header" class="white--text">
												ALL EVENTS
											</div>
                                            <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                            <v-expansion-panel class="elevation-0" :value="1" v-for="competition in loadedActiveCompetitions" :key="competition.slug">
                                                <v-expansion-panel-content class="black">
													<div slot="header" class="white--text">
														<div v-for="country in competition.countries" :key="country.slug" style="display: flex; align-items:center;">
															<img :src="'/images/countries/' + country.slug + '.png'" style="width: 18px; height: 18px" />&nbsp;&nbsp;{{ competition.name }}
														</div>
													</div>
                                                    <v-icon slot="actions" color="white">$vuetify.icons.expand</v-icon>
                                                    <v-card>
									                    <v-card-text style="padding: 0">
                                                            <v-data-table :items="loadedEventsByDay(day)['events'].filter(event => event.league_slug === competition.slug)" no-data-text="No game found on this day." class="elevation-0" hide-actions hide-headers v-if="loadedEventsByDay(day)">
                                                                <template slot="items" slot-scope="props" style="height: 15px; border-spacing: 0; padding: 2px; border: 1px solid black">
                                                                    <v-layout align-center style="padding: 0; border-right: 1px solid black; border-left: 1px solid black; border-bottom: 1px solid black">
                                                                        <v-flex xs12 style="margin: 0; padding-top: 2px; padding-bottom: 2px; height: 100%">
                                                                            <v-layout align-start>
                                                                                <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 15px; margin: 0">
                                                                                    <div style="background-color: green; height: 100%; width: 2px" v-if="props.item.statusShort === 'FT' || props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'"></div>
                                                                                    <div style="background-color: orangered; height: 100%; width: 2px" v-if="props.item.statusShort === 'NS' || props.item.statusShort === 'PST' || props.item.statusShort === 'ABD' || props.item.statusShort === 'AET'"></div>
                                                                                </v-flex>
                                                                                <v-flex class="text-xs-left" style="width: 100%; padding: 0; height: 15px; margin: 0">
                                                                                    <div style="color: orange;font-size: 80%">
                                                                                        <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;" v-if="props.item.statusShort === 'FT' || props.item.statusShort === 'AET'">Finished</span>
                                                                                        <span style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H'">{{ props.item.elapsed }} min</span>
                                                                                        <span v-if="props.item.statusShort === 'HT'" style="float: left; background-color: green; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px;">Half time</span>
                                                                                        <span v-if="props.item.statusShort === 'NS'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >{{ convertToLocalTime(props.item.timestamp) }}</span>
                                                                                        <span v-if="props.item.statusShort === 'TBD'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >Time to be Definied</span>
																						<span v-if="props.item.statusShort === 'PST'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >Match postponed</span>
                                                                                        <span v-if="props.item.statusShort === 'ABD'" style="float: left; background-color: orangered; color: white; text-align: center; padding-left: 5px; padding-right: 5px; margin-right: 5px" >Match abandonned</span>
                                                                                        ID: {{ props.item.id }}
                                                                                    </div>
                                                                                </v-flex>

                                                                            </v-layout>

                                                                            <v-layout align-center style="max-width: 100%">
                                                                                <v-flex class="text-xs-left" style="width: 4px; padding-left: 2px; padding-right: 2px; height: 40px; margin: 0">
                                                                                    <div style="background-color: green; height: 40px; width: 2px" v-if="props.item.statusShort === 'FT' || props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'"></div>
                                                                                    <div v-if="props.item.statusShort === 'NS' || props.item.statusShort === 'PST' || props.item.statusShort === 'ABD' || props.item.statusShort === 'TBD' || props.item.statusShort === 'AET'" style="background-color: orangered; height: 40px; width: 2px"></div>
                                                                                </v-flex>
                                                                                <v-flex sm1 hidden-xs-only align-center class="text-xs-center imgTeamLogoWrapper" style="">
																					<nuxt-link to="/team">
																						<img :src="'/images/teams/' + props.item.homeTeam_slug + '.png'" :lazy-src="'/images/icon.png'" class="imgTeamLogo"/>
																					</nuxt-link>
                                                                                </v-flex>
                                                                                <v-flex sm4 xs5 align-center class="text-xs-left pd-left10">
																					<nuxt-link to="/team" style="text-decoration: none; color: black">
																						<span class="teamTextSize"><v-icon class="notYourTeam">star</v-icon> {{ props.item.homeTeam_name }}</span>
																					</nuxt-link>
                                                                                </v-flex>
                                                                                <v-flex sm2 xs2 class="text-xs-center">
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'FT' || props.item.statusShort === 'AET'">
                                                                                        {{ props.item.final_score }}
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === '1H' || props.item.statusShort === '2H' || props.item.statusShort === 'HT'">
                                                                                        <transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
                                                                                            <span :key="props.item.goalsHomeTeam">
                                                                                                {{ props.item.goalsHomeTeam }}
                                                                                            </span>
                                                                                        </transition> -
                                                                                        <transition name="fade" mode="out-in" :duration="{ enter: 3000, leave: 2000 }">
                                                                                            <span :key="props.item.goalsVisitorTeam">
                                                                                                {{ props.item.goalsVisitorTeam }}
                                                                                            </span>
                                                                                        </transition>
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'NS'">
                                                                                        {{ convertToLocalTime(props.item.timestamp) }}
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'PST'">
                                                                                        Postponed
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'TBD'">
                                                                                        Time To Be Definied
                                                                                    </span>
                                                                                    <span class="scoreBox" style="" v-if="props.item.statusShort === 'ABD'">
                                                                                        Abandonned
                                                                                    </span>
                                                                                </v-flex>
                                                                                <v-flex sm4 xs5 align-center class="text-xs-right pd-right10">
																					<nuxt-link to="/team" style="text-decoration: none; color: black">
																						<span class="teamTextSize">{{ props.item.visitorTeam_name }} <v-icon class="notYourTeam">star</v-icon></span>
																					</nuxt-link>
                                                                                </v-flex>
                                                                                <v-flex sm1 hidden-xs-only align-center class="text-xs-center imgTeamLogoWrapper" style="">
																					<nuxt-link to="/team">
																						<img :src="'/images/teams/' + props.item.visitorTeam_slug + '.png'" :lazy-src="'/images/icon.png'" class="imgTeamLogo"/>
																					</nuxt-link>
                                                                                </v-flex>
                                                                            </v-layout>
                                                                        </v-flex>
                                                                    </v-layout>
                                                                </template>
                                                            </v-data-table>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </div>
            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
	
</template>

<script>
	import moment from 'moment'
    import axios from 'axios'
	export default {
		async created () {
            this.$store.commit('setLoading', true)
			for (let i = 3; i >= 1; i--) {
                this.days.push(moment().subtract(i, 'days').format('YYYY-MM-DD'))
            }
            this.days.push(moment().format('YYYY-MM-DD'))
            for (let i = 1; i <= 3; i++) {
                this.days.push(moment().add(i, 'days').format('YYYY-MM-DD'))
            }

            const today = moment().format('YYYY-MM-DD')
            await this.$store.dispatch('events/fetchEventsByDay', today)
            this.$store.commit('setLoading', false)
        },
		data () {
			return {
				activeDay: `${moment().format('YYYY-MM-DD')}`,
				days: [],
                // loading: false
			}
		},
		computed: {
            loading () {
                return this.$store.getters['loading']
            },
			loadedEvents () {
                return this.$store.getters['events/loadedEvents']
            },
            loadedActiveCompetitions () {
                return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.status === 'active')
            },
            loadedPopularCompetitions () {
                return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.importance === '1')
            },
		},
		methods: {
			async fetchEventsByDay(date) {
                this.$store.commit('setLoading', true)
                console.log('fetchEventsByDay: ', date)
                if (!this.loadedEvents[date]) {
                    await this.$store.dispatch('events/fetchEventsByDay', date)
                }
                // const that = this
                // setTimeout(() => {
                //     that.$store.commit('setLoading', false)
                // }, 1000)
                this.$store.commit('setLoading', false)
            },
            // otherEventsByDayByCompetition (date, competition) {
            //     console.log('date: ', date)
            //     console.log('competition: ', competition)
            //     // return
            //     // const userTeamsIds = this.userTeamsIds
            //     return this.$store.getters['events/loadedEvents'][date]['events'].filter(event => event.league_slug === competition)
            //         // .filter(event => (event.date === this.date.format('YYYY-MM-DD') && event.competition.slug === competition))
            //         // .filter(event => (!userTeamsIds.includes(event.home_team.livescore_api_id) || !userTeamsIds.includes(event.visitor_team.livescore_api_id)))
            //         // .sort((a, b) => a.timestamp - b.timestamp)
            // },
            loadedEventsByDay (date) {
                return this.$store.getters['events/loadedEvents'][date]
            },
            convertToLocalTime (timestamp) {
                return moment.unix(timestamp).format('HH:mm')
            }
		}
	}
</script>

<style scoped>
    .v-tabs__container--fixed-tabs .v-tabs__div, .v-tabs__container--icons-and-text .v-tabs__div {
    }
    [v-cloak] {
        display: none;
    }
    .tab-item-wrapper {
        /* vuetify sets the v-tabs__container height to 48px */
        /*height: calc(100vh - 330px);*/
        /*height: 100vh;*/
    }
    
    .teamTextSize {
        font-size: 1.3em;
    }
    .imgTeamLogoWrapper {
        width: 50px; 
        padding-right: 15px;
    }
    .imgTeamLogo {
        max-width: 30px;
        max-height: 30px;
    }
    .scoreBox {
        background-color: black; 
        color: orange; 
        padding: 2px 10px; 
        border-radius: 5px; 
        font-size: 1.3em;
    }
	>>>.v-expansion-panel__header {
		min-height: 0;
		height: 35px;
	}
	
    /* Transition effects on score by J-M */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 5s;
        background-color: #000;
    }
    
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
	
	.yourTeam {
	color: orangered;
	font-size: 25px;
	}
	.notYourTeam {
	color: grey;
	font-size: 25px;
	}
		
    @media only screen and (max-width: 768px) {
        .imgLogoEquipe {
            max-width: 35px;
        }
        .teamTextSize {
            font-size: 0.9em;
        }
        .pd-right10 {
            padding-right: 10px;
        }
        .pd-left10 {
            padding-left: 10px;
        }
		.tabGreyMenu {
		font-size: 1em;
		height: 30px;
		}
		.scoreBox {
			background-color: black; 
			color: orange; 
			padding: 2px 5px; 
			border-radius: 5px; 
			font-size: 1.0em;
		}
		.yourTeam {
		color: orangered;
		font-size: 15px;
		}
		.notYourTeam {
		color: grey;
		font-size: 15px;
		}
		>>>.v-expansion-panel__header {
			min-height: 0;
			height: 35px;
			padding: 6px 12px;
		}
    }
</style>
