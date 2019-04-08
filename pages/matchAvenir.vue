<template>
    <v-content id="app">      
		<v-container grid-list-md text-xs-center style="padding: 0; max-width: 1017px">
		  <v-layout row wrap>
			<v-flex xs2 sm2 md2>
			  <v-card dark color="primary">
				<v-card-text class="px-0">2</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs8 sm8 md8>
			  <v-card dark color="primary">
				<v-card-text class="px-0">
					Monde, Coupe du monde de football<br/>
					Journée 1
				</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs2 sm2 md2>
			  <v-card dark color="primary">
				<v-card-text class="px-0">2</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs2 sm2 md2>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">6</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs3 sm3 md3>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">6</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs2 sm2 md2>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">6</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs3 sm3 md3>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">6</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs2 sm2 md2>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">6</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs4 sm4 md4>
			  <v-card dark color="primary">
				<v-card-text class="px-0">4</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs4 sm4 md4>
			  <v-card dark color="primary">
				<v-card-text class="px-0">4</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs4 sm4 md4>
			  <v-card dark color="primary">
				<v-card-text class="px-0">4</v-card-text>
			  </v-card>
			</v-flex>
			<v-flex xs12>
			  <v-card dark color="secondary">
				<v-card-text class="px-0">3</v-card-text>
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
