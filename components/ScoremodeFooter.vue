<template>
	<v-footer style="background-color: black; position: sticky; bottom: 0; width: 100%" height="auto" class="text-xs-center">
		<v-container fluid style="padding: 0; max-width: 1000px">
			<div class="barreOrangered"></div>
			<div class="barreBlack"></div>
			<div id="dock-container">
				<div id="dock">
					<ul>
						<li>
							<nuxt-link to="/teams"><img src="/images/menuTeam.png">
							<span class="textMenu">Equipes</span></nuxt-link>
						</li>
						<li>
							<nuxt-link to="/competitions"><img src="/images/menuCompetition.png">
							<span class="textMenu">Compétitions</span></nuxt-link>
						</li>
						<li id="active">
							<nuxt-link to="/scoremode"><img src="/images/menuHome.png">
							<span class="textMenu">Matches du jour</span></nuxt-link>
						</li>
						<li>
							<nuxt-link to="/players"><img src="/images/menuPlayer.png">
							<span class="textMenu">Joueurs</span></nuxt-link>
						</li>
						<li>
							<nuxt-link to="/tifnews"><img src="/images/menuTifnews.png">
							<span class="textMenu">TIF News</span></nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</v-container>
	</v-footer>     
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
    
</style>