<template>
    <v-container fill-width>
        <v-row justify="space-around">
            <v-col cols="12" sm="3">
                <h3>Plantas mais vistas</h3>
            </v-col>
        </v-row>
        <v-row>
        <v-col v-for="(planta, i) in plantas" :key="i" cols="12" sm="6" md="4" lg="3">
          <v-card class="pa-2 light-green lighten-2" outlined tile>
            <v-img class="white--text align-end" height="200px" :src="planta.imagem">
            </v-img>

            <v-card-actions>
              <v-btn color="light-green darken-4" text>
                {{planta.nome}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
</template>

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
        },
        {
          nome: "Girassol",
          nomeCientifico: "Girassol uniflora",
          dataPlantio: "23/09/1991",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAv3KzNJE8rX8eAL6f4QM53TNupuHdni8OQ&usqp=CAU"
        } ,
        {
          nome: "Campanula",
          nomeCientifico: "Eugenia uniflora",
          dataPlantio: "23/09/1991",
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbLBU4kkEGvgzBboFuzHhCnv_4sqr7XCTHQ&usqp=CAU"
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
h3 {
    border-radius: 14px 14px 14px 14px !important;
    background-color: #AED581;
    color: #33691E;
    text-align: center;
    padding: 5px;
}

.caixa {
    background-color: #728E48;
    color: #ffffff;
}
</style>