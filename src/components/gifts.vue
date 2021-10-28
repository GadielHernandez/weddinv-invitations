<template>
    <div class="gifts pb-6 mb-6">
        <v-row class="pt-6 pb-0">
            <v-col cols="12">
                <div class="px-md-5 px-1 py-6 mx-0 mx-md-12 text-center">
                    <v-icon color="primary" class="icon">mdi-gift-outline</v-icon>
                    <p class="title text-h5 text-md-h4 my-6">Regalos</p>
                    <p class="text">{{ gifts.description }}</p>
                </div>
            </v-col>
        </v-row>
        <v-row class="text-center pb-6">
            <v-col cols="12" md="6" v-if="gifts.liverpool.active">
                <v-card flat>
                    <v-avatar
                        color="primary rounded-circle white--text"
                        class="my-3"
                    >
                        <v-icon large dark>mdi-alpha-l</v-icon>
                    </v-avatar>
                    <div class="mx-3">
                        <p class="title text-h6 my-0">Liverpool</p>
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
            <v-col cols="12" md="6" v-if="gifts.card.active">
                <v-card flat>
                    <v-avatar color="primary rounded-circle" class="my-3">
                        <v-icon dark>mdi-credit-card-outline</v-icon>
                    </v-avatar>
                    <div class="mx-3">
                        <p class="title text-h6 my-0">Tarjeta</p>
                        <p class="mt-3 mb-1">
                            Para ver los datos para un deposito
                        </p>
                        <a @click="dataDialog = true">Haz click aqui</a>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="6" v-if="gifts.cash.active">
                <v-card flat>
                    <v-avatar color="primary rounded-circle" class="my-3">
                        <v-icon dark>mdi-email</v-icon>
                    </v-avatar>
                    <div class="mx-3">
                        <p class="title text-h6 my-0">Sobre</p>
                        <p class="mt-3 mb-1">
                            Sobre el dia de la boda
                        </p>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="6" v-if="gifts.gift.active">
                <v-card flat>
                    <v-avatar color="primary rounded-circle" class="my-3">
                        <v-icon dark>mdi-gift</v-icon>
                    </v-avatar>
                    <div class="mx-3">
                        <p class="title text-h6 my-0">Regalo</p>
                        <p class="mt-3 mb-1">
                            Regalo fisico el dia de la boda
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
</style>