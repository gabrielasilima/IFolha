<template>
    <v-container>
        <v-row justify="center">
                <v-img max-width="300px" :src="require('@/assets/arvore-sem-fundo.png')">
                </v-img>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-btn color="#486A0F" rounded dark block>PROFESSOR</v-btn>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-btn color="#486A0F" rounded dark block :to="'\plantas'">VISITANTE</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>