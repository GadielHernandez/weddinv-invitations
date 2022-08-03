<template>
    <div class="fathers py-16">
        <div class="back-helper"></div>
        <v-row>
            <v-col cols="12" md="5" class="d-flex">
                <v-avatar 
                    class="ma-auto image-avatar mr-md-6" 
                    :size="$vuetify.breakpoint.smAndUp ? '400' : '200'" 
                >
                    <v-img :src="image">
                    </v-img>
                </v-avatar>
            </v-col>
            <v-col cols="12" md="7" class="d-flex">
                <div class="text-center ma-auto ml-md-6">
                    <div v-if="$vuetify.breakpoint.smAndUp" class="small-font">
                        <div class="mb-8">
                            <!-- <p class="title text-h3 my-0 font-weight-medium">{{ groom.fullname }} & {{ bride.fullname }}</p> -->
                            <p class="title text-h2 my-0 primary--text">¡Nos casamos!</p>
                        </div>
                        <div class="mb-8">
                            <p class="ma-0 font-weight-medium">CON LA BENDICIÓN DE DIOS</p>
                            <p class="ma-0 font-weight-medium">Y NUESTROS PADRES</p>
                        </div>
                        <div class="d-flex justify-center my-6 fathers-names">
                            <div class="text-right">
                               <p class="text-uppercase my-1">{{ parents.groom_father }}</p>
                                <p class="text-uppercase my-1">{{ parents.groom_mother }}</p>
                            </div>
                            <div class="mx-3">
                                <v-divider vertical class="line-fathers"/>
                            </div>
                            <div class="text-left">
                                <p class="text-uppercase my-1">{{ parents.bride_father }}</p>
                                <p class="text-uppercase my-1">{{ parents.bride_mother }}</p>
                            </div>
                        </div>
                        <div>
                            <p class="mb-2 font-weight-medium">NOS EMOCIONA INVITARLOS A COMPARTIR</p>
                            <p class=" font-weight-medium">EL DIA NUESTRA BODA CON USTEDES</p>
                        </div>
                    </div>
                    <div v-else class="fathers-names">
                        <div class="mb-8">
                            <p class="title text-h3 my-0 primary--text">¡Nos casamos!</p>
                            <!-- <p class="title text-h3 my-0 ml-n2 text-left">{{ groom.fullname }}</p>
                            <div class="text-right d-flex justify-end">
                                <p class="title text-h4 text-left primary--text">&</p>
                                <p class="title text-h3 my-0 mr-n2 ">{{ bride.fullname }}</p>
                            </div> -->
                        </div>
                        <div class="mb-8">
                            <p class="ma-0 font-weight-medium">CON LA BENDICIÓN DE DIOS</p>
                            <p class="ma-0 font-weight-medium">Y NUESTROS PADRES</p>
                        </div>
                        <div class="mb-8 text-caption">
                            <p class="text-uppercase my-1">{{ parents.groom_father }}</p>
                            <p class="text-uppercase my-1">{{ parents.groom_mother }}</p>
                            <v-divider class="ma-auto line-fathers"/>
                            <p class="text-uppercase my-1">{{ parents.bride_father }}</p>
                            <p class="text-uppercase my-1">{{ parents.bride_mother }}</p>
                        </div>
                        <div>
                            <p class="mb-2 font-weight-medium">NOS EMOCIONA INVITARLOS A COMPARTIR</p>
                            <p class=" font-weight-medium">EL DIA NUESTRA BODA CON USTEDES</p>
                        </div>
                    </div>
                    
                </div>
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
            parents: (state) =>
                state.guest.configurations.parents,
            image: state => state.guest.images_urls.layout ? state.guest.images_urls.layout : '',
            bride: state => state.guest.configurations.bride,
            groom: state => state.guest.configurations.groom,
        }),
    },
}
</script>

<style scoped>
.fathers {
    max-width: 100vw;
    overflow: hidden;
}
.fathers-names{
    font-size: 13px;
}
.line{
    width: 50px;
    border-color: var(--v-primary-base);
}
.line-fathers{
    width: 80px;
    border-color: var(--v-primary-base);
    border-width: 2px 0 0 0;
}
.small-font{
    font-size: 14px !important;
}
.image-avatar{
    border-style: solid;
    border-width: 3px;
    border-color: var(--v-primary-base)
}
</style>
