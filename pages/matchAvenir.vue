<template>
    <v-content id="app">      
		<v-container grid-list-md text-xs-center style="padding: 0; max-width: 1017px">
		  <v-layout row wrap>
			<v-flex xs12>
			  <v-card dark color="primary">
				<v-card-text class="px-0">12</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex v-for="i in 2" :key="`6${i}`" xs6>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">6</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex v-for="i in 3" :key="`4${i}`" xs4>
			  <v-card dark color="primary">
				<v-card-text class="px-0">4</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex v-for="i in 4" :key="`3${i}`" xs3>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">3</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex v-for="i in 6" :key="`2${i}`" xs2>
			  <v-card dark color="primary">
				<v-card-text class="px-0">2</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex v-for="i in 12" :key="`1${i}`" xs1>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">1</v-card-text>
			  </v-card>
			</v-flex>
		  </v-layout>
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
        methods: {
			goBack() {
				this.$router.replace("/gamemode_jm")
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
		font: normal 100%/1 "Acme", Helvetica, sans-serif;
    }
    .content {
        background-color: light-gray;;
        overflow-x: auto;
        height: 100%;
		position: relative;
    }

    /* End Content */

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
			height: 100%;
			overflow-x: auto;
		}
    }
</style>
