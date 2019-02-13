<div id="app">
  <v-app id="inspire">
    <v-container fluid>
      <v-layout column>
        <v-flex xs12>
          <div class="resultContainer">
            <v-layout v-bind="layoutAttributes">
              <div class="item elevation-5"></div>

            </v-layout>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-layout row xs12 wrap>
            <v-flex xs12 md4>
              <v-radio-group v-model="alignment">
                <v-radio
                  v-for="n in alignmentsAvailable"
                  :key="n"
                  :label="n === '' ? 'Nothing' : n"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 md4>
              <v-radio-group v-model="justify">
                <v-radio
                  v-for="n in justifyAvailable"
                  :key="n"
                  :label="n === '' ? 'Nothing' : n"
                  :value="n"
                ></v-radio>
              </v-radio-group>
            </v-flex>
            <v-flex xs12 md4>
              <v-layout column>
                <v-radio-group v-model="flexDirection">
                  <v-checkbox
                    v-model="reverse"
                    label="reverse"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="fillHeight"
                    label="fill-height"
                    hide-details
                  ></v-checkbox>
                  <v-radio
                    v-for="n in flexDirectionAvailable"
                    :key="n"
                    :label="n === '' ? 'Nothing' : n"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <h5>Output:</h5>
          <code>{{ formatAttributes(layoutAttributes) }}</code>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>

<style scoped>
.resultContainer {
min-height: 100%;
}

.item {
min-height: 500px;
min-width: 500px;
margin: 10px;
}
</style>