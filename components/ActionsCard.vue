<template>
    <v-card class="card">
        <v-card-title primary-title>
            <v-flex xs6>
                <h1 class="text-xs-left" style="color: white; font-family: Acme">Action cards {{ this.theme }}</h1>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
                <fa :icon="['fas', 'arrow-circle-left']" size="2x" class="icon" @click="closeModal" />
            </v-flex>
        </v-card-title>

        <v-card-text class="card-text mx-3">
            <p>
                <!-- this.theme: {{ this.theme }}<br /> -->
                <!-- this.actionsLength: {{ this.actionsLength }}<br /> -->
                <!-- loadedActions: {{ loadedActions }}<br /> -->
                <!-- isFlipped: {{ this.isFlipped }}<br /> -->
                <!-- isAnimated: {{ this.isAnimated }}<br /> -->
                loadedUserActions: {{ this.loadedUserActions.find(action => action.id === 'hotdog_seller')['occurences'] }}<br />
            </p>
            <v-container fluid>
                <v-layout row wrap align-center justify-center>
                    <span v-if="!loadedActions">Loading...</span>
                    <v-flex xs12 sm8 md4 v-for="(action, index) in loadedActions" :key="action.slug" class="pa-2">
                        <!-- <div class="flip-card animated shake delay-2s"> -->
                        <div class="flip-card" :class="[isAnimated[index] ? 'animated shake' : '']">
                            <v-card hover class="flip-card-inner" :class="[ isFlipped[index] ? 'flipped' : '' ]" @click="toggleFlip(index)" style="border: 1px solid red;">
                                <div class="flip-card-front">
                                    <h1>{{ action.name }}</h1>
                                </div>
                                <div class="flip-card-back">
                                    <h2>{{ action.name }}</h2><br />
                                    <p v-if="loadedUserActions.find(userAction => userAction.id === action.slug)">
                                        <!-- Theme: {{ action.theme }}<br /> -->
                                        <b>Ils sont beaux, ils sont chaud mes beignets ! Qui veut des beignets !?</b><br />
                                        Energy: <span class="red--text">-15</span><br />
                                        $fans: <span class="green--text">+20</span><br />
                                        Endurance: <span class="green--text">+10</span><br />
                                        Baratin: <span class="green--text">+5</span><br />
                                        Played today: <span class="orange--text" v-if="loadedUserActions">{{ loadedUserActions.find(userAction => userAction.id === action.slug)['occurences'] }}</span><br /><br />
                                        <span style="color: orangered;">Conseil de Mr Fan<br />
                                        Pour vendre des beignets sous un soleil de plomb, il faut être endurant et avoir un sacré baratin !</span>
                                    </p>
                                    <v-btn @click.stop="selectCard(action.slug, index)">Select card</v-btn><br />
                                </div>
                            </v-card>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>

        <v-card-actions class="card-footer">
            <v-flex class="text-xs-center">
                <v-btn color="success" style="margin-bottom: 20px" @click="closeModal">Retour</v-btn>
            </v-flex>
            
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        head () {
            return {
                link: [
                    { 
                        rel: 'stylesheet', 
                        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
                    }
                ]     
            }
        },
        props: ['theme', 'isFlipped'],
        async created () {
            console.log('component created!')
            
            // console.log('response: ', response)
        },
        async mounted () {
            console.log('component mounted!')
            console.log('this.theme: ', this.theme)
            // const response = await this.$store.dispatch('actionsCards/fetchActions', this.theme)
            // const length = this.$store.getters['actionsCards/loadedActions'].filter(action => action.theme === 'beach').length
            // console.log('length: ', length)
            // this.length = length
        },
        data () {
            return {
                // isFlipped: new Array(this.length),
                // isFlipped: [false, false, false, false],
                // length: this.actionsLength
                // length: this.loadedActions.length
                length: 1,
                isAnimated: new Array(this.length)
            }
        },
        computed: {
            loadedActions () {
                return this.$store.getters['actionsCards/loadedActions'][this.theme]
                // return this.$store.getters['actionsCards/loadedActions'].filter(action => action.theme === 'beach')
            },
            loadedUserActions () {
                return this.$store.getters['users/loadedUserActions']
            }
        },
        methods: {
            closeModal() {
                console.log('Close modal')
                this.$emit('closeModal', true)
            },
            toggleFlip (index) {
                console.log('toggleFlip: ', index)
                // this.isFlipped = !this.isFlipped
                // this.isFlipped[0] = true
                // if (this.isFlipped === index) {
                //  this.isFlipped = ''
                // } else {
                //  this.isFlipped = index
                // }
                // this.isFlipped.push('abc')
                if (this.isFlipped[index]) {
                    this.isFlipped.splice(index, 1, false)
                    // this.isFlipped[index] = false
                } else {
                    this.isFlipped.splice(index, 1, true)
                    // this.isFlipped[index] = true
                }
            },
            async selectCard (action, index) {
                console.log(`selectCard: ${action}, ${index}`)
                this.isAnimated.splice(index, 1, true)
                // this.isAnimated.splice(0, 1, false)
                setTimeout(() => {
                    this.isAnimated.splice(index, 1, false)
                }, 1500)
                await this.$store.dispatch('users/updateUserActions', action)
            }
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
    .icon:hover {
        cursor: pointer;
        color: #fff;
    }

    /* Flip card */
    .flip-card {
        background-color: transparent;
        /* width: 150px; */
        /* width: 25%; */
        height: 280px;
        /* border: 1px solid #f1f1f1; */
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }
    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 1s;
        transform-style: preserve-3d;
    }
    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
        /* transform: rotateY(180deg); */
    }
    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        /* background-color: #bbb;
        color: black; */
    }
    /* Style the back side */
    .flip-card-back {
        /* background-color: dodgerblue;
        color: white; */
        transform: rotateY(180deg);
    }
    .flipped {
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
    }
</style>