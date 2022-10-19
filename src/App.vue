<template>
  <v-app>
    <div class="superior">
      <v-img class="imagem-ifpr" max-width="300px" :src="require('@/assets/paranavai-vertical.png')" />
    </div>
    <v-main class="fundo">
      <div class="conteudo">
        <router-view></router-view>
      </div>
    </v-main>
    <div class="inferior" max-width="300px">
      <div>
      </div>
    </div>

    <v-footer class="rodape musgo">
      <v-card flat width="100%" class="text-center flex musgo">
        <v-card-text>
          <v-btn class="ma-3" icon>
            <v-icon dark>
              mdi-flower vase
            </v-icon>
          </v-btn>
          <v-btn class="ma-3" icon>
            <v-icon dark>
              mdi-calendar
            </v-icon>
          </v-btn>
          <v-btn class="ma-3" icon>
            <v-icon dark>
              mdi-heart
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style scoped>
#app {
  background-color: #f3e7d5;
}

.imagem-ifpr {
  margin: 0 auto;
}

.superior {
  background-color: #b2c195;
  padding: 10px 0px;
  -webkit-border-bottom-right-radius: 50px;
  -moz-border-radius-bottom-right: 50px;
  border-bottom-right-radius: 50px;
}

.inferior {
  background-color: #b2c195;
  border-radius: 20px 20px 0px 0px !important;
  -webkit-border-bottom-right-radius: 50px;
  -moz-border-radius-bottom-right: 50px;
  border-bottom-right-radius: 50px;
}

.rodape {
  border-radius: 20px 20px 0px 0px !important;
}

.musgo{
  background-color: #b2c195 !important;
}

.fundo {
  background-color: #b2c195;
}

.conteudo {
  padding: 20px 0px !important;
  background-color: #f3e7d5;
  -webkit-border-top-left-radius: 50px;
  -moz-border-radius-top-left: 50px;
  border-top-left-radius: 50px;
}
</style>