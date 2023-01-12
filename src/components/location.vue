<template>
    <div class="location pa-6 py-10 py-sm-14">
        <div class="rounded-lg">
            <v-row>
                <v-col class="text-center">
                    <p class="text-h6 text-md-h5 primary--text text-uppercase mb-0 font-weight-medium">Ubicación </p>
                </v-col>
            </v-row>
            <div class="d-flex py-0 mt-n5">
                <div class="mx-auto rotate-img">
                    <v-img src="@/assets/leaf2.png" contain  height="40"/>
                </div>
            </div>
            <v-row class="ma-0" v-if="locations" justify="center">
                <v-col class="text-center" cols="12" v-if="locations.ceremony">
                    <div class="ma-3">
                        <p class="mb-1 text-uppercase">Recepción y Ceremonia</p>
                        <p class="mb-1 font-weight-medium text-uppercase ">{{ locations.ceremony.place }}</p>
                        <p class="mb-1 ">{{ locations.ceremony.time }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div class="text-center">
                        <v-btn
                            width="250"
                            class="ma-1"
                            color="primary"
                            :href="locations.ceremony.link"
                        >
                            Ver Ubicación
                        </v-btn>
                        <v-btn
                            width="250"
                            class="ma-1"
                            color="primary"
                            outlined
                            :href="dresscode.ideas"
                        >
                            Tips para foráneos
                        </v-btn>
                    </div>
                </v-col>
                <!-- <v-col class="text-center py-6 py-md-3" cols="12" sm="4" v-if="locations.party">
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
                </v-col> -->
                <!-- <v-col class="text-center py-6 py-md-3" cols="12" sm="4" v-if="dresscode">
                    <p class="mb-1 ">
                        Tips para foraneos
                    </p>
                    <v-btn
                        color="primary"
                        outlined
                        class="mt-8 mt-sm-13"
                        :href="dresscode.ideas"
                    >
                        Ver
                    </v-btn>
                </v-col> -->
            </v-row>
        </div>
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
    font-size: 14px;
}
.rotate-img {
        transform: rotate(13deg);
}
</style>
