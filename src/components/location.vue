<template>
    <div class="description">
        <v-row class="py-8 py-md-16 mx-6">
            <v-col cols="12" md="6">
                <div class="px-md-5 px-1 py-6 mx-0 mx-md-12 text-center">
                    <v-icon color="primary" class="icon">mdi-church</v-icon>
                    <p class="title text-h5 text-md-h4 my-6">Ceremonia</p>
                    <p class="text">{{ ceremony.description }}.</p>
                    <v-btn large outlined text class="button mt-6">Ver mapa</v-btn>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="px-md-5 px-1 py-6 mx-0 mx-md-12 text-center">
                    <v-icon color="primary" class="icon">mdi-party-popper</v-icon>
                    <p class="title text-h5 text-md-h4 my-6">Fiesta</p>
                    <p class="text">{{ party.description }}</p>
                    <v-btn large outlined text class="button mt-6">Ver mapa</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'location',
    computed:{
        ...mapState({
            ceremony: state => state.guest.configurations.ceremony,
            party: state => state.guest.configurations.party
        })
    }
}
</script>

<style scoped>
.description{
    max-width: 100vw;
    overflow: hidden;
    padding-top: 30px;
    padding-bottom: 30px;
}
.icon{
    font-size: 50px;
}
.text{
    line-height: 33px;
}
.button{
    border: 2px solid var(--v-primary-base) !important;
}
</style>