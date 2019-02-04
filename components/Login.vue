<template>
	<v-card class="elevation-12">
        <v-toolbar dark color="deep-orange">
            <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field 
                    prepend-icon="person" 
                    name="login" 
                    label="Login" 
                    type="text"
                ></v-text-field>
                <v-text-field 
                    id="password1" 
                    prepend-icon="lock" 
                    name="password" 
                    label="Password" 
                    type="password"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                flat
                @click="switchToRegister"
            >
                Switch to register
            </v-btn>
            <v-btn color="primary">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
        computed: {
        },
        methods: {
            switchToRegister () {
                this.$emit('loginChildToParent')
            }
        }
	}
</script>

<style scoped>

</style>