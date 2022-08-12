<template>
    <div class="gifts px-3 py-3 py-md-12" v-if="gifts">
        <v-row class="">
            <v-col cols="12">
                <div class="px-md-5 px-1 pt-6 mx-0 mx-md-12 text-center">
                    <p
                        class="title text-h5 text-md-h4 my-3 primary--text font-weight-bold"
                    >
                        Mesa de Regalos
                    </p>
                    <p class="text ma-0">{{ gifts.description }}</p>
                </div>
            </v-col>
        </v-row>
        <v-row class="text-center pb-6" justify="center">
            <v-col v-if="gifts.liverpool && gifts.liverpool.active" class="my-3 py-6" :cols="rows.cols" :sm="rows.sm">
                <div class="mx-3">
                    <p class="title-gift text-h6 my-0">LIVERPOOL</p>
                    <a
                        :href="gifts.liverpool.link"
                        style="text-decoration: none"
                    >
                        Ver opciones
                    </a>
                </div>
            </v-col>
            <v-col v-if="gifts.sears && gifts.sears.active" class="my-3 py-6" :cols="rows.cols" :sm="rows.sm">
                <div>
                    <p class="title-gift text-h6 my-0">SEARS</p>
                    <a :href="gifts.sears.link" style="text-decoration: none">
                        Ver opciones
                    </a>
                </div>
            </v-col>
            <v-col v-if="gifts.amazon && gifts.amazon.active" class="my-3 py-6" :cols="rows.cols" :sm="rows.sm">
                <div class="mx-3">
                    <p class="title-gift text-h6 my-0">AMAZON</p>
                    <a :href="gifts.amazon.link" style="text-decoration: none">
                        Ver opciones
                    </a>
                </div>
            </v-col>
            <v-col v-if="gifts.card && gifts.card.active" class="my-3 py-6" :cols="rows.cols" :sm="rows.sm">
                <div class="mx-3">
                    <p class="title-gift text-h6 my-0">TRANSFERENCIA</p>
                    <a @click="dataDialog = true">Ver datos</a>
                </div>
            </v-col>
            <v-col v-if="gifts.gift && gifts.gift.active" class="my-3 py-6" :cols="rows.cols" :sm="rows.sm">
                <div class="mx-3">
                    <p class="title-gift text-h6 my-0">REGALO</p>
                    <p>
                        Regalo el dia de la boda
                    </p>
                </div>
            </v-col>
            <v-col v-if="gifts.cash && gifts.cash.active" class="my-3 py-6" :cols="rows.cols" :sm="rows.sm">
                <div class="mx-3">
                    <p class="title-gift text-h6 my-0">SOBRE</p>
                    <p>
                        Sobre el dia de la boda
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-dialog v-model="dataDialog" max-width="600" v-if="gifts.card">
            <v-card>
                <v-card-title class="headline"
                    >Datos para transferencia</v-card-title
                >

                <v-card-text class="pb-6">
                    <v-list-item dense>
                        <v-list-item-content>
                            <span 
                                >Banco: {{ gifts.card.bank }}</span
                            >
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item dense>
                        <v-list-item-content>
                            <span 
                                >Tarjeta: {{ gifts.card.number }}</span
                            >
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
    computed: {
        ...mapState({
            gifts: (state) => state.guest.configurations.gifts,
        }),
    },
    data() {
        return {
            dataDialog: false,
            rows: { cols: 12, sm: 4 },
        }
    },
    mounted() {
        let items = 0
        for (const option in this.gifts) {
            if (Object.hasOwnProperty.call(this.gifts, option)) {
                if (this.gifts[option].active) items++
            }
        }
        this.rows.sm = items % 4 === 0 ? 3 : 4
    },
}
</script>

<style scoped>
.gifts {
    max-width: 100vw;
    overflow: hidden;
    font-size: 14px;
}
.title-gift {
    font-size: 15px !important;
    font-weight: 500;
}
.line{
    width: 40px;
    border-color: var(--v-primary-base);
    border-width: 2px 0 0 0;
}
</style>
