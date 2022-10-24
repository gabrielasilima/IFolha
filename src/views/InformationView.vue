<template>
  <v-container fill-height>
    <v-row v-if="planta != null">
      <v-col cols="12" sm="6">
        <v-card class="mx-auto card bord" max-width="400">
          <v-img :src="planta.imagem" class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
            <v-card-title v-text="planta.nome"></v-card-title>
          </v-img>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <h4 class="pl-3">Nome Científico</h4>
        <p class="pl-5">{{planta.nomeCientifico}}</p>

        <h4 class="pl-3">Espécie</h4>
        <p class="pl-5">{{planta.especie}}</p>

        <h4 class="pl-3">Ordem</h4>
        <p class="pl-5">{{planta.ordem}}</p>

        <h4 class="pl-3">Classe</h4>
        <p class="pl-5">{{planta.classe}}</p>

        <h4 class="pl-3">Classe</h4>
        <p class="pl-5">{{planta.classe}}</p>

        <h4 class="pl-3">Divisão</h4>
        <p class="pl-5">{{planta.divisao}}</p>

        <h4 class="pl-3">Data do plantio</h4>
        <p class="pl-5">{{planta.dataPlantio}}</p>

        <h4 class="pl-3">Família</h4>
        <p class="pl-5">{{planta.familia}}</p>

        <h4 class="pl-3">Reino</h4>
        <p class="pl-5">{{planta.reino}}</p>

        <h4 class="pl-3">Cuidados</h4>
        <p class="pl-5">{{planta.cuidados}}</p>

      </v-col>
    </v-row>
    <v-row v-else>
      não achei essa planta :(
    </v-row>
  </v-container>
</template>


<script>
import DadosPlantas from '../dados/DadosPlantas';
export default {
  data() {
    return {
      planta: null,
    }
  },
  async mounted(){
    
    let plantas = await DadosPlantas.getPlantas();
    plantas.forEach(planta => {    
      if(planta.codigo === this.$route.params.codigo){
          this.planta = planta;
      }
    });
  }
}
</script>

<style>
.bord {
  border-radius: 0px 35px 0px 35px !important;
}

h4 {
  border-radius: 8px 8px 8px 8px !important;
  background-color: #A5BE7F;
  padding: 2px;
}

p{
  margin-top: 6px;
}

</style>