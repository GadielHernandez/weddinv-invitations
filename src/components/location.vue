<template>
    <div class="description">
        <v-row :class="{ 'mx-6': $vuetify.breakpoint.smAndDown }">
            <v-col cols="12" md="6" offset-md="3" class="px-0" :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }">
                <div class="px-md-5 px-0 py-6 mx-0 text-center">
                    <p class=" mb-6" >{{ ceremony.description }}</p>
                    <v-divider class="line mt-6"></v-divider>
                    <v-row>
                        <v-col cols="4" class="text-rigth d-flex">
                            <p class="ma-auto">08 ENERO</p>
                            <span class="ml-2"><v-divider class="line" vertical></v-divider></span>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-left my-1 font-weight-bold" >Los Generales Sendero la Fe</p>
                            <p class="text-left my-1 font-weight-bold">7:00PM</p>
                            
                        </v-col>
                    </v-row>
                    <v-divider class="line mb-6"></v-divider>
                    <v-btn large depressed class="button mt-6" color="primary" :href="ceremony.link">Ver mapa</v-btn>
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
    padding-bottom: 30px;
}
.icon{
    font-size: 50px;
}
.text{
    line-height: 33px;
}
.line{
    border-color: var(--v-primary-base) !important;
    margin: auto;
}
</style>