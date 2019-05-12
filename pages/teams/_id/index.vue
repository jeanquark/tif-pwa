<template>
	<v-layout align-center justify-center row fill-height style="background-color: black" v-if="!loading && loadedUser">
		<v-flex>
            <v-container fluid style="max-width: 1017px; padding: 0px; border: 2px solid green;">
				<scoremode-header />
				<v-layout row wrap style="background-color: white; border: 2px solid darkred;">
                    <v-flex xs12 sm8 offset-sm2 my-4 style="border: 1px solid red;">
                        <v-card class="elevation-0" v-if="loadedTeam">
							<v-card-title align-center justify-center style="background-color: orangered; min-height: 60px;">
                                <h2 class="white--text">{{ loadedTeam.name }}</h2>
                            </v-card-title>
							<v-card-text>
								name: {{ name }}<br /><br />
								loadedTeam: {{ loadedTeam }}<br />
								<img :src="`/images/teams/${loadedTeam.image}`" width="200" />
							</v-card-text>
                        </v-card>
                    </v-flex>
				</v-layout>
            </v-container>
		</v-flex>
	</v-layout>
</template>

<script>
	import ScoremodeHeader from '~/components/jm/ScoremodeHeader'
	export default {
		components: { ScoremodeHeader },
		layout: 'layoutScoreMode',
		async created () {
		},
		async mounted () {
			await this.$store.commit('setLoading', true)
			const team = this.$route.params.id
			console.log('team: ', team)
			const fetchedTeam = await this.$store.dispatch('teams_gm/fetchTeam', team)
			await this.$store.commit('setLoading', false)

			console.log('fetchedTeam: ', fetchedTeam)
			if (!fetchedTeam) {
				alert('Team does not exist!')
			}
		},
		data () {
			return {
				name: 'Gaël'
			}
		},
		computed: {
			loading () {
				return this.$store.getters['loading']
			},
			loadedUser () {
				return this.$store.getters['users/loadedUser']
			},
			loadedTeam () {
				return this.$store.getters['teams_gm/loadedTeam']
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>
		