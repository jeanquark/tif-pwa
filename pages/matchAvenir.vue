<template>
    <v-content id="app">
        <v-container style="padding: 0; max-width: 1017px">
          
			<v-layout>
				<v-flex>
					<v-layout>
						<v-flex xs2 sm2 md2 left>
						
						</v-flex>
						<v-flex xs8 sm8 md8 center>
							Europe, Champion's League 2018-2019<br />
							Journée 1
						</v-flex>
						<v-flex xs2 sm2 md8 right>
							<div class="text-xs-right retour">
								<fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="goBack" />
							</div>
						</v-flex>
					</v-layout>
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
