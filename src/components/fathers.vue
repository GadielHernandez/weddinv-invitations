<template>
    <div class="fathers pt-6">
        <div class="back-helper"></div>
        <v-row>
            <v-col cols="12">
                <div class="px-md-5 px-2 pt-6 mx-0 mx-md-12 text-center">
                    <p class="ma-0" :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }">
                        Con la bendición de Dios y nuestros padres
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-row class="pt-5" >
            <v-col class="text-right" >
                <p class="title font-weight-bold" :class="{ 'text-h4': $vuetify.breakpoint.mdAndUp }">Rosalinda Ramirez</p>
                <p class="title font-weight-bold" :class="{ 'text-h4': $vuetify.breakpoint.mdAndUp }">Jose Hernández</p>
            </v-col>
            <v-col>
                <p class="title font-weight-bold" :class="{ 'text-h4': $vuetify.breakpoint.mdAndUp }">Patricia Guevara</p>
                <p class="title font-weight-bold" :class="{ 'text-h4': $vuetify.breakpoint.mdAndUp }">Melchor López</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'fathers',
    computed: {
        ...mapState({
            description: (state) =>
                state.guest.configurations.history.description,
            wedding_date: (state) => state.guest.configurations.wedding_date,
            ceremony: (state) => state.guest.configurations.ceremony,
        }),
    },
}
</script>

<style scoped>
.fathers {
    max-width: 100vw;
    overflow: hidden;
}
.icon {
    font-size: 50px !important;
}
.text {
    line-height: 33px;
}
</style>
