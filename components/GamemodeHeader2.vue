<template>
    <v-toolbar dark color="blue">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">Gamemode</v-toolbar-title>

        <v-flex xs12 sm6 md3 order-md3 order-sm1 text-xs-center class="cadreHeader1">
            <div style="text-align: center" class="levelHeader">Energy Bar</div>
            <v-progress-linear class="progressOrange" color="yellow" height="20"><span style="color: white">40 / 100</span></v-progress-linear>
        </v-flex>

        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['users/loadedUser']
            }
        }
    }
</script>

<style scoped>
    
</style>