<template>
    <v-content id="app">
        <v-container>
            <!-- Fixed Header -->
            <v-toolbar dark color="blue">
                <v-toolbar-side-icon></v-toolbar-side-icon>

                <v-toolbar-title class="white--text">Title</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>apps</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>refresh</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar>
            
            <!-- Scrollable content -->
            <div class="content" style="border: 2px solid green;">
                <!-- <v-layout> -->
                <a href="/api/fetch-next-top5-leagues-matches">Fetch next Top 5 leagues matches</a><br />
                <a href="/api/fetch-live-score">Fetch Live Score</a><br />
                <!-- days: {{ days }}<br /> -->
                    <!-- <div> -->
                    <!-- <img src="/images/barcelona.png" /> -->
                        <v-tabs
                            dark
                            color="cyan"
                            show-arrows
                            fixed-tabs
                            v-model="currentKey"
                            style="border: 1px dashed orange;"
                        >
                            <v-tabs-slider color="yellow"></v-tabs-slider>

                            <v-tab
                                v-for="day in days"
                                :key="day"
                                :href="'#tab-' + day"
                            >
                                {{ day }}
                            </v-tab>

                            <v-tabs-items>
                                <v-tab-item
                                    v-for="day in days"
                                    :key="day"
                                    :value="'tab-' + day"
                                    lazy
                                >
                                    <v-card flat>
                                        <v-card-text>{{ `tab-${day}` }}</v-card-text>
                                    </v-card>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-tabs>

                        
                    <!-- </div> -->
                <!-- </v-layout> -->
            </div>
            
            <!-- Fixed Footer -->
            <div id="footer" style="border: 2px solid yellow;">
                <br /><br /><br />
                <h2>Footer</h2>
                <br /><br /><br />
            </div>
            
        </v-container>
    </v-content>
</template>

<script>
    import moment from 'moment'
    export default {
        created () {
            console.log(moment().format('YYYY-MM-DD'))
            console.log(moment().add(1, 'days').format('YYYY-MM-DD'))
            console.log(moment().subtract(1, 'days').format('YYYY-MM-DD'))
            for (let i = 15; i >= 1; i--) {
                // console.log(moment().subtract(i, 'days').format('YYYY-MM-DD'))
                this.days.push(moment().subtract(i, 'days').format('DD MMM'))
            }
            this.days.push(moment().format('DD MMM'))
            for (let i = 1; i <= 15; i++) {
                // console.log(moment().add(i, 'days').format('YYYY-MM-DD'))
                this.days.push(moment().add(i, 'days').format('DD MMM'))
            }
        },
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
                days: [
                    // '2019-02-21',
                    // '2019-02-22',
                    // '2019-02-23'
                ],
                active: null,
                // currentKey: 'tab-25',
                currentKey: `tab-${moment().format('DD MMM')}`,
            } 
        },
        computed: {
            loadedUserTeams () {
                return this.$store.getters['users/loadedUserTeams']
            }
        },
        methods: {
            next () {
                const active = parseInt(this.active)
                this.active = (active < 2 ? active + 1 : 0)
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
    }
    .content {
        background-color: light-gray;;
        flex-grow: 1;
        overflow-x: auto;
    }
    #footer {
        background-color: red;
        color: #fff;
        /*height: 100px;*/
        height: auto;
        text-align: center;
    }
    
    @media only screen and (min-width: 1000px) {
        .content img {
            /*width: 100%;*/
        }
    }
    /* End Content */
</style>
