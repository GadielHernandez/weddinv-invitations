<template>
    <div class="location py-12 py-md-16">
        <v-row class="small-font">
            <v-col class="text-center py-6 py-md-3" cols="12" sm="4">
                <p class="mb-1">
                    Ceremonia Religiosa
                </p>
                <p class="mb-1 font-weight-medium text-uppercase">{{ ceremony.place }}</p>
                <p class="mb-1 ">{{ wedding_date.time_string }}</p>
                <v-btn
                    color="primary"
                    outlined
                    class="mt-6"
                    :href="ceremony.link"
                >
                    Ubicación
                </v-btn>
            </v-col>
            <v-col class="text-center py-6 py-md-3" cols="12" sm="4">
                <p class="mb-1 ">Recepción</p>
                <p class="mb-1 font-weight-medium text-uppercase">Jardin El Angel</p>
                <p class="mb-1 ">{{ wedding_date.time_string }}</p>
                <v-btn
                    color="primary"
                    outlined
                    class="mt-6"
                    :href="ceremony.link"
                >
                    Ubicación
                </v-btn>
            </v-col>
            <v-col class="text-center py-6 py-md-3" cols="12" sm="4">
                <p class="mb-1 ">
                    Código de Vestimenta
                </p>
                <p class="mb-1 font-weight-medium text-uppercase">Etiqueta / Formal</p>
                <v-btn
                    color="primary"
                    outlined
                    class="mt-8 mt-sm-13"
                    href="https://www.pinterest.com.mx/search/pins/?q=outfit%20formal%20boda"
                >
                    Ideas
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'location',
    computed: {
        ...mapState({
            ceremony: (state) => state.guest.configurations.ceremony,
            party: (state) => state.guest.configurations.party,
            wedding_date: (state) => state.guest.configurations.wedding_date,
        }),
    },
}
</script>

<style scoped>
.location {
    max-width: 100vw;
    overflow: hidden;
    padding-bottom: 30px;
    background-color: var(--v-black1-base);
}
.small-font{
    font-size: 14px !important;
}
</style>
