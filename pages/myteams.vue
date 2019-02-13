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