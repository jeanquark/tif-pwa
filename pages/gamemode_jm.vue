<template>
    <v-content id="app">
        <v-container class="container">
            
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
            <div class="content">
                <v-layout>
                    <img src="/images/barcelona.png" />
                </v-layout>
            </div>
            
            <!-- Fixed Footer -->
            <div id="footer">
                <br /><br /><br />
                <h2>Footer</h2>
                <br /><br /><br />
            </div>
            
        </v-container>
  </v-content>
</template>

<script>
    export default {
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

<style>
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .content {
        background-color: light-gray;;
        /*flex-grow: 1;*/
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
            width: 100%;
        }
    }

</style>