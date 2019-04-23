<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-card-title class="white--text" style="background: orangered;">
                        <v-layout justify-center>
                            <h2>Login</h2>
                        </v-layout>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            flat
                            nuxt
                            to="/register"
                        >
                            Switch to register
                        </v-btn>
                        <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        layout: 'layoutLandingPage',
        middleware: ['unauth-check'],
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        }
    }
</script>