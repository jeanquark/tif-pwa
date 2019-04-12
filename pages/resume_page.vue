<template>
    <v-content id="app">
        <v-container style="padding: 0; max-width: 1017px;">         
            <div>
			<h2>Résumé des pages</h2>
			<br /><br /><br />

				<div id="dock-container">
					<ul>
						<li>
							<nuxt-link to="/gamemode_jm">Page d'accueil d'un joueur en mode "Gamemode" avec un match de son équipe favorite.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustration d'une ville (même style que le modèle). Cette ville doit être paramétrable facilement. Il faut pouvoir ajouter et supprimer les divers thèmes facilement.</li>
								<li>Définir les thèmes (shop, stade, bar, église, local des fans, appartement, université, plage, montagne, ...)</li>
								<li>Exemple : Le thème "plage" sera accessible par les fans de Barcelone mais pas par les fans de Madrid</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/gamemode_pasmatch_jm">Page d'accueil d'un joueur en mode "Gamemode" avec un match de son équipe favorite.</nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li>Illustration d'une ville (même style que le modèle). Cette ville doit être paramétrable facilement. Il faut pouvoir ajouter et supprimer les divers thèmes facilement.</li>
								<li>Définir les thèmes (shop, stade, bar, église, local des fans, appartement, université, plage, montagne, ...)</li>
								<li>Exemple : Le thème "plage" sera accessible par les fans de Barcelone mais pas par les fans de Madrid</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/pageEquipePrincipale"></nuxt-link>
							<ul>
								Ce qu'il reste à faire :
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</li>
					</ul>
				</div>
            </div>
        </v-container>
  </v-content>
</template>

<script>
    export default {
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
                ]
            } 
        }
    }
</script>

<style scoped>
</style>
