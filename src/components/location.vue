<template>
    <div class="description">
        <v-row :class="{ 'mx-6': $vuetify.breakpoint.smAndDown }">
            <v-col cols="12" md="6" offset-md="3" class="px-0" :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }">
                <div class="px-md-5 px-0 py-6 mx-0 text-center">
                    <p class=" mb-6" >{{ ceremony.description }}</p>
                    <v-divider class="line mt-6"></v-divider>
                    <v-row>
                        <v-col cols="4" class="text-rigth d-flex">
                            <p class="ma-auto">{{ wedding_date.string }}</p>
                            <span class="ml-2"><v-divider class="line" vertical></v-divider></span>
                        </v-col>
                        <v-col cols="8">
                            <p class="text-left my-1 font-weight-bold" >{{ ceremony.place }}</p>
                            <p class="text-left my-1 font-weight-bold">{{ wedding_date.time_string }}</p>
                            
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
            party: state => state.guest.configurations.party,
            wedding_date: state => state.guest.configurations.wedding_date
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