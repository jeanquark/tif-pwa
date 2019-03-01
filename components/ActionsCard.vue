<template>
    <v-card class="card">
        <v-card-title primary-title>
            <v-flex xs6>
                <h1 class="text-xs-left" style="color: white; font-family: Acme">Action cards</h1>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
                <fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" />
            </v-flex>
        </v-card-title>

        <v-card-text class="card-text mx-3">
            <p>
                this.action: {{ this.action }}<br />
                loadedActions: {{ loadedActions }}<br />
            </p>
            <v-container fluid>
                <v-layout row wrap align-center justify-center>
                    <v-flex v-for="action in loadedActions" :key="action.slug" xs4 sm3 md2 lg2 style="margin: 5px; border: 1px solid orangered; border-radius: 5px">
                        <v-card flat tile class="d-flex" style="border-radius: 5px">
                            <v-card-text style="padding-left: 3px; padding-right: 3px">
                                <div class="text-xs-center">
                                    <b>{{ action.name }}</b>
                                </div>
                                <br />
                                <v-img contain :src="'/images/actions/' + action.image" :lazy-src="'/images/actions/' + action.image" aspect-ratio="1">
                                </v-img>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>

        <v-card-actions class="card-footer">
            <v-flex class="text-xs-center">
                <v-btn nuxt color="success" style="margin-bottom: 20px">Retour</v-btn>
            </v-flex>
            
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: ['action'],
        async created () {
            console.log('component created!')
            // const response = await this.$store.dispatch('actionsCards/loadedActions', this.action)
            // console.log('response: ', response)
        },
        mounted () {
            console.log('component mounted!')
        },
        data () {
            return {

            }
        },
        computed: {
            loadedActions () {
                return this.$store.getters['actionsCards/loadedActions'][this.action]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .card {
        background: linear-gradient(-45deg, #ffdbb5 0%, #ffa73d 50%, #FF7C01 50%, #ea7200 100%);
        border-radius: 5px;
    }
    .card-text {
        background-color: whitesmoke;
        width: auto;
        border-radius: 8px;
    }
    .card-footer {
        margin-top: 20px;
    }
</style>