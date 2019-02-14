<template>
	<v-app style="background-color: #000;">
		<v-content>
			<v-container grid-list text-xs-center style="background-color: orangered; padding: 0; height: 100%; max-width: 1000px;">
				<v-layout align-center column justify-center fill-height style="height: 50%; margin: auto; position: relative" class="text-xs-center">
					<v-btn nuxt to="/scoremode" round color="black" dark large>Score Mode</v-btn>
					<p>{{ $t('pages.index.explanation') }}</p>
					<nuxt-link v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
					<div class="text-effect" style="position: absotule; bottom: 0">TIF</div>
				</v-layout>
				<v-layout align-center column justify-center fill-height style="height: 50%; margin: auto; background-color: #fff; color: orange" class="text-xs-center">
					<div class="text-effect2" style="position: absotule; bottom: 0">TIF</div>
					<p style="margin-bottom: 0">Petit texte explicatif</p>
					<!-- <nuxt-link to="/login">Login</nuxt-link> -->
					<v-btn color="primary" @click="loginModal = true">Login</v-btn>
					<!-- <nuxt-link to="/register">Register</nuxt-link> -->
					<v-btn color="info" @click="registerModal = true">Register</v-btn>
					<!-- <v-btn color="success">Success</v-btn> -->
					<v-btn round large color="deep-orange" dark @click="signInWithGoogle">Game Mode</v-btn>
					<v-dialog v-model="loginModal" width="500">
						<Login v-on:loginChildToParent="switchToRegister" />
					</v-dialog>
					<v-dialog v-model="registerModal" width="600">
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
loginModal: false,
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

/* TEXT-REFLECT CSS */
h1, h2 {
display: inline-block;
width: 100%;
font-family: "Acme";
font-size: 7.5em;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 3px;  
text-align: center;
}
h1 {
color: white;
text-transform: none;
position: absolute;
bottom: -58px;
}
.text-reflect, .text-reflect:before, .text-reflect span {
display: block;
margin: 0;
padding: 0;
}
.text-reflect, .text-reflect:before, .text-reflect:after {
position: relative;
}
.text-reflect2 {
content: 'TIF';
top: 228px;
transform: scale(1, -1);
z-index: 1;
color: orangered;
}
.text-reflect:after {
content: '';
display: block;
top: 0;
left: 0;
width: 100%;
height: 0; 
z-index: 2;
}</style>

