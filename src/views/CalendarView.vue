<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="12" md="6" class="text-center">
                <v-date-picker v-model="dataSelecionada" color="light-green lighten-2" @change="buscarEvento()"></v-date-picker>
            </v-col>
            <v-col cols="12" sm="12" md="6" v-if="evento != null">
                <h3>Eventos - Campus Paranavaí</h3>

                <h4 class="pl-5">Dia {{evento.dia}} -</h4>
                <p class="pl-5">{{evento.acontecimento}}</p>

                <p class="pl-5">Local: {{evento.local}}
                    <br />
                    Horário: {{evento.horas}}
                </p>
            </v-col>
            <v-col cols="12" sm="12" md="6" v-else>
                <h3>Eventos - Campus Paranavaí</h3>

                <h4 class="pl-5">Nenhum evento encontrado no dia selecionado!!</h4>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dataSelecionada: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            evento: null,
            eventos:[
                {
                    data: "2022-08-29",
                    dia: "29",
                    acontecimento: "Em alusão ao Dia da Árvore, será comemorado no dia 29/08, o Campus Paranavaí irá plantar 07 mudas de árvores no campus.E contamos com ajuda dos alunos, servidores e terceirizados.",
                    local: "Campus Paranvaí",
                    horas: "14h"
                }
            ]
        }
    },
    methods:{
        buscarEvento(){
            console.log("oi")
            this.eventos.forEach(evento => {
                
                if(evento.data === this.dataSelecionada)
                    this.evento = evento;
            });
        }
    }
}
</script>

<style scoped>

h4 {
    color: #728E48;
    background-color: #f3e7d5;
}

h3 {
    border-radius: 14px 14px 14px 14px !important;
    background-color: #ffffff;
    color: #728E48;
    text-align: center;
    padding: 5px;
}


.center {
    text-align: center;
}
</style>

<!-- 
<v-col cols="12" sm="6">
    <v-card>
        <v-calendar ref="calendar" color="primary" class="mx-auto card">
        </v-calendar>
    </v-card>
</v-col> -->