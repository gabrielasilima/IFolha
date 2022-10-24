<template>
    <v-container fill-width>
        <v-row justify="space-around">
            <v-col cols="12" sm="12">

                <h2 class="pl-5">OLÁ, aluno!
                    <v-btn class="ma-2" icon>
                        <v-icon dark>
                            mdi-bell
                        </v-icon>
                    </v-btn>
                </h2>
                <p class="pl-5">Abaixo teremos informações e notícias sobre o meio ambiente:</p>
            </v-col>

            <v-col cols="12" sm="12">
                <v-btn class="ma-2 light-green lighten-2">
                    Explore
                </v-btn>
                <v-btn class="ma-2 light-green lighten-2">
                    Popular
                </v-btn>
            </v-col>

            <v-col v-for="(informacao, i) in informacao" :key="i" cols="12" sm="6">
                <v-card class="pa-2" outlined tile>
                    <v-img class="white--text align" height="250px" :src="informacao.imagem">
                        <v-btn class="ma-3" icon>
                            <v-card-text>
                                <v-icon dark>
                                    mdi-heart
                                </v-icon>
                            </v-card-text>
                        </v-btn>
                    </v-img>

                    <v-card-subtitle class="pb-0">
                        <h3 class="negrito">{{informacao.titulo}}</h3>
                    </v-card-subtitle>

                    <v-card-subtitle class="pb-0">
                        {{informacao.subTitulo}}
                    </v-card-subtitle>
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
            informacao: [
                {
                    titulo: "Reconhecimento do meio ambiente como direito humano é histórico, diz especialista",
                    subTitulo: "A Organização das Nações Unidas (ONU) aprovou uma resolução que considera o meio ambiente limpo, saudável e sustentável como um direito humano.",
                    imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/51140_3D2AAB961EBCCA9A-1.jpg?w=876&h=484&crop=1"
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
                this.items = this.informacao.filter(e => {
                    return (e.nome || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.loading = false
            }, 500)
        },
    },
}
</script>

<style>
h2 {
    color: #3C4A26;
}

.negrito {
    color: #728E48;
    font-weight: bold;
    background-color: #ffffff;
}

.fund{
    background-color: #486A0F;
}
</style>
