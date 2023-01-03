<template>
    <div class="location py-12 py-md-16">
        <v-row>
            <v-col class="text-center">
                <p class="text-h6 text-md-h5 title primary--text text-uppercase mb-6">{{ date.day }} {{ date.month }} {{ date.year }} </p>
            </v-col>
        </v-row>
        <v-row class="small-font" v-if="locations && dresscode" justify="center">
            <v-col class="text-center py-6 py-md-3" cols="12" sm="4" v-if="locations.ceremony">
                <p class="mb-1">
                    Ceremonia Religiosa
                </p>
                <p class="mb-1 font-weight-medium text-uppercase">{{ locations.ceremony.place }}</p>
                <p class="mb-1 ">{{ locations.ceremony.time }}</p>
                <v-btn
                    color="primary"
                    outlined
                    class="mt-6"
                    :href="locations.ceremony.link"
                >
                    Ubicación
                </v-btn>
            </v-col>
            <v-col class="text-center py-6 py-md-3" cols="12" sm="4" v-if="locations.party">
                <p class="mb-1 ">Recepción</p>
                <p class="mb-1 font-weight-medium text-uppercase">{{ locations.party.place }}</p>
                <p class="mb-1 ">{{ locations.party.time }}</p>
                <v-btn
                    color="primary"
                    outlined
                    class="mt-6"
                    :href="locations.party.link"
                >
                    Ubicación
                </v-btn>
            </v-col>
            <v-col class="text-center py-6 py-md-3" cols="12" sm="4" v-if="dresscode">
                <p class="mb-1 ">
                    Código de Vestimenta
                </p>
                <p class="mb-1 font-weight-medium text-uppercase">{{ dresscode.type }}</p>
                <v-btn
                    color="primary"
                    outlined
                    class="mt-8 mt-sm-13"
                    :href="dresscode.ideas"
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
            locations: (state) => state.guest.configurations.locations,
            dresscode: (state) => state.guest.configurations.dresscode,
            date: (state) => state.guest.configurations.date
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
