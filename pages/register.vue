<template>
	<v-layout align-center justify-center row fill-height style="background-color: black">
		<v-flex>
            <v-container fluid style="max-width: 1017px; padding: 0px; border: 2px solid green;">
                <scoremode-header />

                <v-layout row wrap style="background-color: white; border: 2px solid darkred;">
                    <v-flex xs12 sm8 offset-sm2 my-4 style="border: 1px solid red;">
                        <v-card class="elevation-12">
                            <v-card-title align-center justify-center style="background-color: orangered; min-height: 60px;">
                                <h2 class="white--text">Register</h2>
                                <v-flex class="text-xs-right">
                                    <v-avatar
                                        color="primary white"
                                        class="subheading deep-orange--text"
                                        size="24"
                                        v-text="step"
                                    ></v-avatar>
                                </v-flex>
                            </v-card-title>
                            <v-card-text>
                                <v-window v-model="step">
                                    <v-window-item :value="1">
                                        <v-card-text>
                                            <v-text-field
                                                label="Email"
                                                v-model="form.email"
                                                name="email"
                                                v-validate="'required|email'"
                                                :error="errors.has('email')"
                                                :error-messages="errors.collect('email')"
                                                data-vv-as="Email"
                                            ></v-text-field>
                                            <span class="caption grey--text text--darken-1">
                                                This is the email you will use to login to your ThisIsFan account
                                            </span><br />
                                            <!-- <span>{{ errors.first('email') }}</span> -->
                                        </v-card-text>
                                    </v-window-item>

                                    <v-window-item :value="2">
                                        <v-card-text>
                                            <!-- error: {{ error }}<br /> -->
                                            <v-alert
                                                type="error"
                                                :value="error"
                                                v-if="error"
                                                >
                                                {{ $t(`auth-validation-rules.${error.code}`) }}
                                            </v-alert>
                                            <br />
                                            <v-text-field
                                                label="Password"
                                                type="password"
                                                v-model="form.password"
                                                name="password"
                                                ref="password"
                                                v-validate="'required|min:6'"
                                                :error="errors.has('password')"
                                                :error-messages="errors.collect('password')"
                                                data-vv-as="Password"
                                            ></v-text-field>
                                            <v-text-field
                                                label="Repeat Password"
                                                type="password"
                                                v-model="form.password_confirm"
                                                name="password_confirm"
                                                v-validate="'required|confirmed:password'"
                                                :error="errors.has('password_confirm')"
                                                :error-messages="errors.collect('password_confirm')"
                                                data-vv-as="Repeat Password"
                                            ></v-text-field>

                                            <v-autocomplete
                                                v-model="form.country"
                                                name="country"
                                                :items="loadedCountries"
                                                chips
                                                color="blue-grey lighten-2"
                                                label="Select your country"
                                                item-text="name"
                                                :return-object="true"
                                                v-validate="'required'"
                                                :error="errors.has('country')"
                                                :error-messages="errors.collect('country')"
                                                data-vv-as="Country"
                                            >
                                                <template
                                                    slot="selection"
                                                    slot-scope="data"
                                                >
                                                    <v-chip
                                                        :selected="data.selected"
                                                        class="chip"
                                                    >
                                                        <v-avatar>
                                                            <!-- <img :src="data.item.avatar"> -->
                                                            <img :src="`/images/countries/${data.item.flag}`">
                                                        </v-avatar>
                                                        {{ data.item.name }}
                                                    </v-chip>
                                                </template>
                                                <template
                                                    slot="item"
                                                    slot-scope="data"
                                                >
                                                    <template v-if="typeof data.item !== 'object'">
                                                        <v-list-tile-content v-text="data.item"></v-list-tile-content>
                                                    </template>
                                                    <template v-else>
                                                        <v-list-tile-avatar>
                                                            <!-- <img :src="data.item.avatar"> -->
                                                            <img :src="`/images/countries/${data.item.flag}`">
                                                        </v-list-tile-avatar>
                                                        <v-list-tile-content>
                                                            <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                                                            <!-- <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title> -->
                                                        </v-list-tile-content>
                                                    </template>
                                                </template>
                                            </v-autocomplete>
                                        
                                        </v-card-text>
                                    </v-window-item>

                                    <v-window-item :value="3">
                                        <div class="pa-3 text-xs-center">
                                            <v-img
                                                class="mb-3"
                                                contain
                                                height="128"
                                                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                                            ></v-img>
                                            <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
                                            <span class="caption grey--text">Thanks for signing up!</span>
                                        </div>
                                    </v-window-item>
                                </v-window>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-btn
                                    flat
                                    @click="step--"
                                    v-if="step !== 1"
                                >
                                    Back
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                    flat
                                    color="info"
                                    @click="switchToLogin"
                                    v-if="step === 1"
                                >
                                    Go to login
                                </v-btn>
                                <v-btn
                                    :disabled="errors.items.length > 0 || !form.password_confirm > 0 || !form.country > 0"
                                    color="success"
                                    v-if="step === 2"
                                    @click.prevent="signUserUp"
                                    :loading=loading
                                >
                                    Register
                                </v-btn>
                                <v-btn
                                    color="success"
                                    @click="step++"
                                    v-if="step === 1"
                                >
                                    Next
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm12 style="border: 1px solid green;">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </v-flex>
				</v-layout>
			</v-container>
		</v-flex>
	</v-layout>
</template>

<script>
    import ScoremodeHeader from '~/components/ScoremodeHeader'
	export default {
        components: { ScoremodeHeader },
		layout: "layoutLandingPage",
		created () {
            this.$store.dispatch('countries/loadedCountries')
            },
        mounted () {
            this.$store.commit('clearError')
        },
		data() {
            return {
                step: 1,
                form: {
                    email: '',
                    password: '',
                    password_confirm: '',
                    country: null
                }
            }
		},
		computed: {
            loading () {
                return this.$store.getters['loading']
            },
            error () {
                return this.$store.getters['error']
            },
            currentTitle () {
                switch (this.step) {
                    case 1: return 'Register'
                    case 2: return 'Create a password'
                    default: return 'Account created'
                }
            },
            loadedCountries () {
                return this.$store.getters['countries/loadedCountries']
            }
		},
		methods: {
            async signUserUp () {
                console.log('signUserUp')
                console.log(this.form)

                await this.$store.dispatch('firebase-auth/signUserUp', this.form)
                if (this.$i18n.locale != 'en') {
                    this.$router.replace('/' + this.$i18n.locale + '/gamemode_jm')
                } else {
                    this.$router.replace('/gamemode_jm')
                }
            },
            switchToLogin () {
                this.$router.push('/login')
            }
		}
	}
</script>

<style scoped>

</style>