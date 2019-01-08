<template>
	<v-app style="background-color: #000;">
		<v-content>
			<v-container
			  grid-list
			  text-xs-center
			  style="background-color: orangered; padding: 0; height: 100%; max-width: 800px;"
			>
				<v-layout
				  align-center
				  column
				  justify-center
				  fill-height
				  style="height: 50%; margin: auto"
				  class="text-xs-center"
				>
					<v-btn nuxt to="/scoremode" round color="black" dark large>Score Mode</v-btn>
					<p>Petit texte explicatif</p>
				</v-layout>
				<v-layout
				  align-center
				  column
				  justify-center
				  fill-height
				  style="height: 50%; margin: auto; background-color: #fff; color: orange"
				  class="text-xs-center"
				>
					<p style="margin-bottom: 0">Petit texte explicatif</p>
					<v-btn round large color="deep-orange" dark @click="signInWithGoogle">Game Mode</v-btn>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	import moment from 'moment'
	export default {
		// layout: 'layoutLandingPage',
		middleware: ['unauth-check'],
		created () {
			// const last_changed = moment("2019-01-07 13:37:01").format('YYYY-MM-DD HH:mm:ss')
			// console.log('last_changed: ', last_changed)
			// const now = moment().format('YYYY-MM-DD HH:mm:ss')
			// const a = moment(new Date())
			// console.log('a: ', a)
			// const b = moment("2019-01-07 15:10:01")
			// console.log('b: ', b)
			// console.log(moment(new Date()))
			// console.log(moment("2019-01-07 13:37:01"))
			// console.log(a.diff(b, "minutes"))
		},
		methods: {
			async signInWithGoogle() {
				console.log("signInWithGoogle")
				await this.$store.dispatch("firebase-auth/signInWithGooglePopup")
				console.log("done")
				this.$router.replace("/home")
			}
		}
	}
</script>

<style scoped>
	
</style>

