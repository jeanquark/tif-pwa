<template>

<div id="app">
<v-app id="inspire">
<v-container fluid>
<v-layout column>
<v-flex xs12>
<div class="resultContainer">
<v-layout v-bind="layoutAttributes">
<div class="item elevation-5"></div>
</v-layout>
</div>
</v-flex>
</v-layout>
</v-container>
</v-app>
</div>

</template>

<script>
import moment from 'moment'
export default {
head: {
title: 'Events',
link: [
{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' },
{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
]
},
layout: 'layoutScoreMode',
async created() {
const today = moment().format('YYYY-MM-DD')
//          console.log('today: ', today)
//          // if (this.$store.getters("events/loadedEvents").length < 1) {
//              await this.$store.dispatch("events/loadedEvents")
//          // }
//          if (this.$store.getters['users/loadedUserTeams'].length < 1) {
// 	await this.$store.dispatch('users/loadedUserTeams')
// }
await this.$store.commit('events/setEmptyEvents')
await this.$store.commit('competitions/setEmptyCompetitions')
// if (this.$store.getters('events/loadedEvents').length < 1) {
await this.$store.dispatch("events/loadedEventsAndCompetitionsByDay", today)
// }
// if (this.$store.getters['competitions/loadedCompetitions'].length < 1) {
//     this.$store.dispatch('competitions/loadedCompetitions')
// }
},
data() {
return {
active: "",
dayNumber: 0,
date: moment(),
// competitions: {
//     'spanish_la_liga_2018_2019': {
//         "name": "La Liga",
//         "slug": "spanish_la_liga_2018_2019"
//     },
//     'english_premier_league_2018_2019': {
//         "name": "Premier League",
//         "slug": "english_premier_league_2018_2019"
//     },
//     'italian_serie_a_2018_2019': {
//         "name": "Serie A",
//         "slug": "italian_serie_a_2018_2019"
//     },
//     'german_bundesliga_2018_2019': {
//         "name": "Bundesliga",
//         "slug": "german_bundesliga_2018_2019"
//     },
//     'french_ligue1_2018_2019': {
//         "name": "Ligue 1",
//         "slug": "french_ligue1_2018_2019"
//     },
//     'swiss_super_league_2018_2019': {
//         "name": "Super League",
//         "slug": "swiss_super_league_2018_2019"
//     }
// }
}
},
computed: {
classObject() {
if (this.active === "left") {
return "activeLeft";
} else if (this.active === "right") {
return "activeRight";
}
return "headerInfo";
},
loadedUser () {
return this.$store.getters['users/loadedUser']
},
userTeams () {
return this.$store.getters['users/loadedUserTeams']
},
userTeamsIds () {
const userTeamsIds = []
const userTeams = this.$store.getters['users/loadedUserTeams']
userTeams.forEach((team) => {
userTeamsIds.push(parseInt(team.livescore_api_id))
})
return userTeamsIds
},
allEvents () {
// return this.$store.getters['events/loadedEvents']
const today = moment().format('YYYY-MM-DD')
const userTeamsIds = this.userTeamsIds
return this.$store.getters['events/loadedEvents']
.filter(event => (event.date === today))
.filter(event => (!userTeamsIds.includes(event.home_team.id) && !userTeamsIds.includes(event.visitor_team.id)))
// .filter(event => (!userTeamsIds.includes(event.visitor_team.id)))
.sort((a, b) => a.timestamp - b.timestamp)
},
events () {
// const today = moment().format('YYYY-MM-DD')
return this.$store.getters['events/loadedEvents']
.filter(event => (event.date === this.date.format('YYYY-MM-DD')))
.sort((a, b) => a.timestamp - b.timestamp)
},
userEvents () {
const today = moment().format('YYYY-MM-DD')
const userTeamsIds = this.userTeamsIds
console.log('userTeamsIds: ', userTeamsIds)
return this.$store.getters['events/loadedEvents']
.filter(event => (event.date === today))
.filter(event => (userTeamsIds.includes(event.home_team.livescore_api_id) || userTeamsIds.includes(event.visitor_team.livescore_api_id)))
.sort((a, b) => a.timestamp - b.timestamp)
},
competitions () {
return this.$store.getters['competitions/loadedCompetitions']
}
},
methods: {
convertToLocaltime (timestamp) {
const utcDiff = new Date().getTimezoneOffset()
// const utcDiff = '60'
console.log('utcDiff: ', utcDiff)
if (utcDiff > 0) {
return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
} else {
return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
}
},
eventsByCompetition (competition) {
return this.$store.getters['events/loadedEvents']
.filter(event => (event.date === this.date.format('YYYY-MM-DD') && event.competition.slug === competition))
.sort((a, b) => a.timestamp - b.timestamp)
// return this.allEvents.filter(event => event.competition.slug === competition)
},
convertToLocalTime (timestamp) {
const utcDiff = new Date().getTimezoneOffset()
console.log('utcDiff: ', utcDiff)
// console.log('moment.unix(timestamp): ', moment.unix(timestamp))
// return moment.unix(timestamp).format("HH:mm")
if (utcDiff > 0) {
return moment.unix(timestamp).add(utcDiff, 'minutes').format("HH:mm")
} else {
return moment.unix(timestamp).subtract(utcDiff, 'minutes').format("HH:mm")
}
},
async eventsByDate (setDayNumber) {
console.log('setDate: ', setDayNumber)
switch(setDayNumber) {
case 'substractOne':
this.dayNumber -= 1
break
case 'yesterday':
this.dayNumber = -1
break
case 'tomorrow': 
this.dayNumber = 1
break
case 'addOne': 
this.dayNumber += 1
break
}

this.date = moment().add(this.dayNumber, 'days')
console.log('this.date: ', this.date)

const events = this.$store.getters['events/loadedEvents'].filter(event => (
event.date === this.date.format('YYYY-MM-DD')
))
if (events.length < 1) {
console.log('events.length < 1')
await this.$store.dispatch('events/loadedEventsAndCompetitionsByDay', this.date.format('YYYY-MM-DD'))
}
console.log('events: ', events)
return events

// return this.$store.getters['events/loadedEvents']
},
mouseOver(direction) {
console.log(direction);
if (direction === "left") {
this.active = "left";
} else if (direction === "right") {
this.active = "right";
}
},
mouseLeave() {
this.active = null;
}
}
}
</script>


<style scoped>
.resultContainer {
min-height: 100%;
}

.item {
min-height: 500px;
min-width: 500px;
margin: 10px;
}
</style>