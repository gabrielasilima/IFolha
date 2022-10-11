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
    <div class="inferior">
        <v-img class="imagem-ifpr" max-width="550px" :src="require('@/assets/calendar-month.png')" />
      </div>
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
  border-radius: 50px 50px 0px 0px !important;
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
