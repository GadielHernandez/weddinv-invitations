<template>
    <div class="gifts pb-9 pt-3" :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }">
        <v-row class="">
            <v-col cols="12">
                <div class="px-md-5 px-1 pt-6 mx-0 mx-md-12 text-center">
                    <p class="title text-h5 text-md-h4 my-3 primary--text font-weight-bold">Regalos</p>
                    <p class="text ma-0">{{ gifts.description }}</p>
                </div>
            </v-col>
        </v-row>
        <v-row class="text-center pb-6">
            <v-col cols="6" md="6" v-if="gifts.liverpool.active" class="my-3 py-6">
                <v-card flat>
                    <div class="mx-3">
                        <p class="title-gift text-h6 my-0">Liverpool</p>
                        <p class="mt-3 mb-1">
                            Para ver las opciones en la pagina
                        </p>
                        <a
                            :href="gifts.liverpool.link"
                            style="text-decoration: none"
                            >Haz click aqui</a
                        >
                    </div>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" v-if="gifts.sears.active" class="my-3 py-6">
                <v-card flat>
                    <div class="mx-3">
                        <p class="title-gift text-h6 my-0">Sears</p>
                        <p class="mt-3 mb-1">
                            Para ver las opciones en la pagina
                        </p>
                        <a
                            :href="gifts.sears.link"
                            style="text-decoration: none"
                            >Haz click aqui</a
                        >
                    </div>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" v-if="gifts.amazon.active" class="my-3 py-6">
                <v-card flat>
                    <div class="mx-3">
                        <p class="title-gift text-h6 my-0">Amazon</p>
                        <p class="mt-3 mb-1">
                            Para ver las opciones en la pagina
                        </p>
                        <a
                            :href="gifts.amazon.link"
                            style="text-decoration: none"
                            >Haz click aqui</a
                        >
                    </div>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" v-if="gifts.card.active" class="my-3 py-6">
                <v-card flat>
                    <div class="mx-3">
                        <p class="title-gift text-h6 my-0">Tarjeta</p>
                        <p class="mt-3 mb-1">
                            Para ver los datos para un deposito
                        </p>
                        <a @click="dataDialog = true">Haz click aqui</a>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" v-if="gifts.gift.active" class="my-3 py-6">
                <v-card flat>
                    <div class="mx-3">
                        <p class="title-gift text-h6 my-0">Regalo</p>
                        <p class="mt-3 mb-1">
                            Regalo fisico el dia de la boda
                        </p>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="6" md="6" v-if="gifts.gift.active" class="my-3 py-6">
                <v-card flat>
                    <div class="mx-3">
                        <p class="title-gift text-h6 my-0">Sobre</p>
                        <p class="mt-3 mb-1">
                            Sobre el dia de la boda
                        </p>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dataDialog" max-width="600">
            <v-card>
                <v-card-title class="headline"
                    >Datos para transferencia</v-card-title
                >

                <v-card-text class="pb-6">
                    <v-list-item dense>
                        <v-list-item-content>
                            <span class="font-weight-bold">Banco: {{ gifts.card.bank }}</span> 
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item dense>
                        <v-list-item-content>
                            <span class="font-weight-bold">Tarjeta: {{ gifts.card.number }}</span> 
                        </v-list-item-content>
                    </v-list-item>
                </v-card-text>

                <v-card-actions class="pt-6">
                    <v-spacer></v-spacer>

                    <v-btn text @click="dataDialog = false" color="primary">
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'gifts',
    computed:{
        ...mapState({
            gifts: state => state.guest.configurations.gifts
        })
    },
    data() {
        return {
            dataDialog: false
        }
    },
}
</script>

<style scoped>
.gifts{
    max-width: 100vw;
    overflow: hidden;
}
.icon{
    font-size: 50px !important;
}
.text{
    line-height: 33px;
}
.title-gift{
    font-size: 15px !important;
    font-weight: 600;
}
</style>