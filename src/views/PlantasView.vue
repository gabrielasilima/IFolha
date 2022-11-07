<template>
  <div>
    <v-container fill-height>
      <v-row>
        <v-col>
          <v-autocomplete v-model="select" :loading="loading" :items="items" :search-input.sync="search" cache-items
            class="mx-4" flat hide-no-data hide-details label="Pesquisar" solo></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(planta, i) in plantas" :key="i" cols="12" sm="6" md="4" lg="3">
          <v-card class="pa-2" outlined tile>
            <v-img class="white--text align-end" height="200px" :src="require(`@/${planta.midia.link}`)">
              <v-card-title>{{planta.nomePopular}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{planta.nomeCientifico}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Plantada em: </div>

              <div>{{planta.dataPlantio}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="light-green darken-4" text :to="'/information/' + planta.codigo">
                Ver Detalhes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import DadosPlantas from '../dados/DadosPlantas';
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      plantas: []
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.plantas.filter(e => {
          return (e.nomePopular || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
  async  mounted(){
    this.plantas = await DadosPlantas.getPlantas();
  }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/bg-main.jpg");
  background-position: center;
  background-size: cover;
}
</style>