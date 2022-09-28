<template>
  <v-app>
    
    <v-main>
        <div>
          <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
      
            <v-toolbar-title>Vuetify</v-toolbar-title>
      
            <v-spacer></v-spacer>
      
            <v-btn icon>
              <v-icon>mdi-export</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        <router-view></router-view>
    </v-main>
    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
    
        <v-divider></v-divider>
    
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>