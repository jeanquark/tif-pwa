<template>
    <!-- Competition tabs -->
	<v-tabs
        dark
        color="indigo"
        show-arrows
        fixed-tabs
        v-model="activeCompetition"
        style="border: 1px dashed orange;"
        @change="fetchEventsByCompetitionByRound(activeCompetition, activeRound)"
    >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
            v-for="competition in loadedActiveCompetitions"
            :key="competition.slug"
            :href="'#' + competition.slug"
        >
            {{ competition.name }}
        </v-tab>

        <v-tabs-items>
            <v-tab-item
                v-for="competition in loadedActiveCompetitions"
                :key="competition.slug"
                :value="competition.slug"
                lazy
            >
                <!-- Rounds tabs -->
                <v-tabs
                    color="grey"
                    dark
                    slider-color="yellow"
                    v-model="activeRound"
                    @change="fetchEventsByCompetitionByRound(activeCompetition, activeRound)"
                >
                    <v-tab
                        v-for="round in competition.rounds"
                        :key="round"
                        ripple
                        style="cursor: pointer;"
                    >
                        {{ round }}
                    </v-tab>

                    <v-tabs-items>
                        <v-tab-item
                            v-for="round in competition.rounds"
                            :key="round"
                            :value="round"
                            lazy
                        >
                            <v-layout class="column fill-height" style="border: 4px solid grey;" v-cloak>
                                <v-flex xs12>
                                    <v-card flat>
                                        <v-card-text>
                                            <!-- loading: {{ loading }}<br /> -->
                                            activeCompetition: {{ activeCompetition }}<br />
                                            activeRound: {{ activeRound }}<br />
                                            <!-- <v-data-table :items="loadedEventsByCompetitionByRound(competition, round)" no-data-text="No game found on this day." class="elevation-0" hide-actions hide-headers v-if="loadedEventsByDay(day) && !loading">
                                            </v-data-table> -->
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-tab-item>
                    </v-tabs-items>

                    <!-- <v-layout>
                        <v-flex xs12 sm10 offset-sm1>
                            <v-card flat>
                                <v-card-text class="card-text">
                                    competition.rounds: {{ competition.rounds }}
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout> -->
                </v-tabs>


            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
	import moment from 'moment'
	export default {
		async created () {
            await this.$store.dispatch('standings/fetchCompetitionStanding', 'english_premier_league_2018_2019');
        },
		data () {
			return {
				standingHeaders: [
                    {
                        text: 'Rank',
                        align: 'left',
                        sortable: false,
                        value: 'rank'
                    },
                    {
                        text: 'Team',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: '', sortable: false },
                    { text: 'Points', value: 'points', align: 'center' },
                    { text: 'Played', value: 'matchsPlayed', align: 'center' },
                    { text: 'Won', value: 'win', align: 'center' },
                    { text: 'Drawn', value: 'draw', align: 'center' },
                    { text: 'Lost', value: 'lose', align: 'center' },
                    { text: 'Goals for', value: 'goalsFor', align: 'center' },
                    { text: 'Goals against', value: 'goalsAgainst', align: 'center' },
                    { text: 'Goals diff', value: 'goalsDiff', align: 'center' }
                ],
				activeCompetition: 'english_premier_league_2018_2019',
                activeRound: 30
			}
		},
		computed: {
			loadedActiveCompetitions () {
                return this.$store.getters['competitions/loadedCompetitions'].filter(competition => competition.status === 'active')
            },
            loadedEventsByCompetitionByRound (competition, round) {
                return this.$store.getters['events/loadedEventsByCompetitionByRound'][competition][round]
            }
		},
		methods: {
			fetchCompetitionStanding (competition) {
                console.log('fetchCompetitionStanding: ', competition)
                // if (!this.loadedStandings[competition.slug]) {
                if (!this.loadedStandings[competition]) {
                    this.$store.dispatch('standings/fetchCompetitionStanding', competition)
                }
            },
            fetchEventsByCompetitionByRound (competition, round) {
                console.log('fetchEventsByCompetitionByRound: ', competition, round)
                this.$store.dispatch('events/fetchEventsByCompetitionByRound', competition, round)
            },
            rowStyle (rowIndex, info) {
                // console.log('rowIndex: ', rowIndex)
                // console.log('standing: ', standing)
                if (rowIndex < info.champions_league) {
                    return 'championsleague'
                } else if (rowIndex < info.europa_league) {
                    return 'europaleague'
                } else if (rowIndex === info.relegation) {
                    return 'relegation'
                }
            },
		}
	}
</script>

<style scoped>
	.championsleague {
        background: rgba(231, 76, 60, .3);
    }
    .europaleague {
        background: rgba(52, 152, 219, .3);
    }
    .relegation {
        border-top: 2px solid red;
    }
    .lineHeight {
        line-height: 1.5;
    }
</style>