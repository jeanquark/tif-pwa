<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <!-- <v-card
                      class="mx-auto"
                      style="min-width: 500px"
                    > -->
                    <v-toolbar dark color="deep-orange">
                        <v-toolbar-title>Register</v-toolbar-title>
                        <v-flex class="text-xs-right">
                            <v-avatar
                                color="primary white"
                                class="subheading deep-orange--text"
                                size="24"
                                v-text="step"
                            ></v-avatar>
                        </v-flex>
                    </v-toolbar>
                    <!-- <v-card-title class="title font-weight-regular justify-space-between">
                        <span>{{ currentTitle }}</span>-->
                        <!-- <v-avatar
                            color="primary lighten-2"
                            class="subheading white--text"
                            size="24"
                            v-text="step"
                        ></v-avatar> -->
                    <!--</v-card-title> -->

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
                                <!-- <span class="caption grey--text text--darken-1">
                                    Please enter a password for your account
                                </span> -->
                                <!-- <v-select
                                  :items="loadedCountries"
                                  item-text="name"
                                  item-value="slug"
                                  v-model="select"
                                  label="Select"
                                  data-vv-name="select"
                                  required
                                  search-input="name"
                                ></v-select> -->
<!-- <div class="group">      
    <label for="country"><b>Country</b></label>
    <select class="custom-select" v-model="form.country" name="country">
        <option :value="country" v-for="country in loadedCountries">{{ country.name }}</option>
    </select>
    <span class="highlight"></span>
    <span class="bar"></span>
</div> -->

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
                                        <img :src="`/images/countries/${data.item.flags}`">
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
                                        <img :src="`/images/countries/${data.item.flags}`">
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
                            nuxt
                            to="/login"
                            v-if="step === 1"
                        >
                            Switch to login
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
                            :disabled="errors.items.length > 0 || !form.email.length > 0"
                            color="success"
                            @click="step++"
                            v-if="step === 1"
                        >
                            Next
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// const srcs = {
//     1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
//     2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
//     3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
//     4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
//     5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
// }
    export default {
        layout: 'layoutFront',
        created () {
            this.$store.dispatch('countries/loadedCountries')
        },
        data: () => ({
            step: 1,
            form: {
                email: '',
                password: '',
                password_confirm: '',
                country: null
            }
// items: [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4'
// ],
// people: [
//   { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
//   { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
//   { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
//   { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
//   { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
//   { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
//   { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
//   { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
// ]
        }),
        computed: {
            loading () {
                return this.$store.getters['loading']
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

                // return
     //            await this.$store.dispatch('firebase-auth/signUserUp', {
     //                email: this.form.email,
     //                password: this.form.password,
                    // username: this.form.username,
                    // country: this.form.country,
                    // birthyear: this.form.birthyear,
                    // language: this.form.language
     //            })
     //            if (this.$i18n.locale != 'en') {
     //                console.log('done')
     //                // this.$router.replace('/' + this.$i18n.locale + '/home')
     //            } else {
     //                console.log('done')
     //                // this.$router.replace('/home')
     //            }
            //  this.$store.dispatch('firebase-auth/signUserUp', this.form)
            //      .then((response) => {
            //          console.log('response: ', response)
            //          if (this.$i18n.locale != 'en') {
            //              this.$router.replace('/' + this.$i18n.locale + '/home')
            //          } else {
                            // this.$router.replace('/home')
            //          }
            //      }).catch(error => {
            //          console.log('error: ', error)
            //      })
                await this.$store.dispatch('firebase-auth/signUserUp', this.form)
                if (this.$i18n.locale != 'en') {
                    this.$router.replace('/' + this.$i18n.locale + '/home')
                } else {
                    this.$router.replace('/home')
                }
                // console.log('abc: ', abc)
                // if (abc != 'undefined') {
                //  if (this.$i18n.locale != 'en') {
           //              this.$router.replace('/' + this.$i18n.locale + '/home')
           //          } else {
           //              this.$router.replace('/home')
           //          }
           //      }
            }
        }
    }
</script>

<style scoped>
    .v-select__slot {
        padding-top: 10px;
    }
</style>