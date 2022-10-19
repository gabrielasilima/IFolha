<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="mx-auto card bord" max-width="400">
          <v-img :src="planta.imagem" class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
            <v-card-title v-text="planta.nome"></v-card-title>
          </v-img>

        </v-card>

        <h4>Nome Científico</h4>
        <p>{{planta.nomeCientifico}}</p>

        <h4>Espécie</h4>
        <p>{{planta.especie}}</p>

        <h4>Ordem</h4>
        <p>{{planta.ordem}}</p>

        <h4>Classe</h4>
        <p>{{planta.classe}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      planta:
      {
        nome: "Ipê",
        nomeCientifico: "Handroanthus albus",
        especie: "Magnoliopsida",
        ordem: "H. albus",
        classe: "Lamiales",
        dataPlantio: "23/09/1991",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_919225-MLB25414550800_032017-W.jpg"

      }
    }
  }
}
</script>

<style>
.bord {
  border-radius: 0px 35px 0px 35px !important;
}

h4 {
  border-radius: 7px 7px 7px 7px !important;
  background-color: #728E48;
}
</style>