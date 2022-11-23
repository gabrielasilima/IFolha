<template>
    <v-container fill-width>
        <v-row justify="space-around">
            <v-col cols="12" sm="3">
                <h3>PLANTAS MAIS VISTAS</h3>
            </v-col>
        </v-row>
        <v-row>
        <v-col v-for="(planta, i) in plantasFiltradas" :key="i" cols="12" sm="6" md="4" lg="3">
          <v-card class="pa-2 light-green lighten-5" outlined tile>
            <v-img class="white--text align-end" height="200px" :src="require(`@/${planta.midia.link}`)">
            </v-img>

            <v-card-actions>
              <v-btn color="light-green darken-4" text>
                {{planta.nomePopular}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
</template>

<script>
import DadosPlantas from '../dados/DadosPlantas';
export default {
  data() {
    return {
      loading: false,
      plantasFiltradas: [],
      search: null,
      select: null,
      plantas: []
    }
  },
  computed:{
    items(){
      return this.plantas.map(planta => {
          const nomeCompleto = planta.nomePopular + " - " + planta.nomeCientifico

          return Object.assign({}, planta, { nomeCompleto })
        })
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
        this.plantasFiltradas = this.plantas.filter(e => {
          return (e.nomePopular || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
  async  mounted(){
    this.plantas = await DadosPlantas.getPlantas();
    this.plantasFiltradas = this.plantas
  }
}
</script>
  
<style scoped>
h3 {
    color: #33691E;
    text-align: center;
    padding: 5px;
}

.caixa {
    background-color: #728E48;
    color: #ffffff;
}
</style>