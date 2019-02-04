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
					<!-- <nuxt-link to="/login">Login</nuxt-link> -->
					<v-btn color="primary" @click="loginModal = true">Login</v-btn>
					<!-- <nuxt-link to="/register">Register</nuxt-link> -->
					<v-btn color="info" @click="registerModal = true">Register</v-btn>
					<!-- <v-btn color="success">Success</v-btn> -->
					<v-btn round large color="deep-orange" dark @click="signInWithGoogle">Game Mode</v-btn>

					<v-dialog
					  	v-model="loginModal"
					  	width="500"
					>
						<Login v-on:loginChildToParent="switchToRegister" />
					</v-dialog>

					<v-dialog
					  	v-model="registerModal"
					  	width="600"
					>
						<Register v-on:registerChildToParent="switchToLogin" />
					</v-dialog>


				</v-layout>



  


			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	import Login from '~/components/Login.vue'
	import Register from '~/components/Register'
	export default {
		// layout: 'layoutLandingPage',
		// middleware: ['unauth-check'],
		components: { Login, Register },
		layout: 'layoutFront',
		data () {
			return {
				loginModal: true,
				registerModal: false
			}
		},
		computed: {
		},
		methods: {
			switchToRegister () {
				this.loginModal = false
				this.registerModal = true
			},
			switchToLogin () {
				this.registerModal = false
				this.loginModal = true
			},
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

