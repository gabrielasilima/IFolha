<template>
  <div>
    <v-container fill-height class="">
      <v-row>
        <v-col>
          <v-autocomplete v-model="select" :loading="loading" :items="items" :search-input.sync="search" cache-items
        class="mx-4" flat hide-no-data hide-details label="Pesquisar" solo-inverted ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(planta, i) in plantas" :key="i" cols="12" sm="6" md="4"  lg="3">
          <v-card class="pa-2" outlined tile>
            <v-img class="white--text align-end" height="200px" :src="planta.imagem">
              <v-card-title>{{planta.nome}}</v-card-title>
            </v-img>
            
            <v-card-subtitle class="pb-0">
              {{planta.nomeCientifico}}
            </v-card-subtitle>
            
            <v-card-text class="text--primary">
              <div>Plantada em: </div>
            
              <div>{{planta.dataPlantio}}</div>
            </v-card-text>
            
            <v-card-actions>
              <v-btn color="light-green darken-4" text>
                Ver Detalhes
              </v-btn>
            </v-card-actions>
            </v-card>
        </v-col>
        
      </v-row>
    </v-container>
  </div>
</template>


<!--<template>
  <v-container fluid fill-height class="bg-image flex-column flex-sm-row">
    <v-row>
      oiasdfadsfasdfasdfasdfadsfadsfasd
    </v-row>
  </v-container>
</template>

-->

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      plantas: [
        {
          nome: "Ipê",
          nomeCientifico: "Handroanthus albus",
          dataPlantio: "23/09/1991",
          imagem: "https://http2.mlstatic.com/D_NQ_NP_919225-MLB25414550800_032017-W.jpg"
        },
        {
          nome: "Cerejeira",
          nomeCientifico: "Prunus subg. Cerasus",
          dataPlantio: "23/09/1991",
          imagem: "https://http2.mlstatic.com/D_NQ_NP_912828-MLB28347358604_102018-O.jpg"
        },
        {
          nome: "Aracauria",
          nomeCientifico: "Araucaria angustifolia",
          dataPlantio: "23/09/1991",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7qSqSGuf5gZzh67ZR5Q9b_qOiJwmRUXUCQ&usqp=CAU"
        },
        {
          nome: "Jabuticaba",
          nomeCientifico: "Plinia cauliflora",
          dataPlantio: "23/09/1991",
          imagem: "https://http2.mlstatic.com/D_NQ_NP_743851-MLB49425248905_032022-O.webp"
        },
        {
          nome: "Pitanga",
          nomeCientifico: "Eugenia uniflora",
          dataPlantio: "23/09/1991",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWP1gIS0S5sDjTwHU2Vf1u9YnRMRltTdcz0A&usqp=CAU"
        }
      ],
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
          return (e.nome || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/bg-main.jpg");
  background-position: center;
  background-size: cover;
}
</style>