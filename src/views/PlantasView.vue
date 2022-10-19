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
        ,
        {
          nome: "Girassol",
          nomeCientifico: "Girassol uniflora",
          dataPlantio: "23/09/1991",
          imagem: "data:image/jpeg;base64,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"
        }
        ,
        {
          nome: "Caribe Flor",
          nomeCientifico: "Caribe uniflora",
          dataPlantio: "23/09/1991",
          imagem: "data:image/jpeg;base64,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"
        }
        ,
        {
          nome: "Campanula",
          nomeCientifico: "Eugenia uniflora",
          dataPlantio: "23/09/1991",
          imagem: "https://i2.wp.com/files.agro20.com.br/uploads/2019/10/campanula-02.jpg?resize=600%2C338&ssl=1"
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