<template>
    <div class="py-6 mt-0 mb-6 attend">
        <v-row class="pa-0">
            <v-col class="pa-0" cols="12">
                <v-card class="mx-0" color="primary">
                    <v-card-text >
                        <p class="title text-h5 text-md-h4 my-6 text-center" v-if="!confirm && !out_time">Asistencia</p>
                        <p class="my-6 text-center px-6" v-if="!confirm && !out_time">Nos encantaria que nos acompañes a nuestra boda, si te es posible asistir porfavor confirma tu asistencia</p>
                        <div class="pa-0 pa-md-6 pb-0">
                            <div v-if="out_time" class="text-center">
                                <v-icon x-large class="icon"
                                    >mdi-clock-outline</v-icon
                                >
                                <p class="mt-3">
                                    La fecha limite para confirmar pasó
                                </p>
                            </div>
                            <div v-if="!confirm && !out_time" class="mx-0 mx-md-16">
                                <v-row class="mx-0 mx-md-10">
                                    <v-col cols="12" md="6">
                                        <v-select
                                            v-model="guests_selected"
                                            outlined
                                            flat
                                            solo
                                            :items="numberGuests"
                                            label="Numero de asistentes"
                                            hide-details
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field
                                            v-model="phone"
                                            label="Telefono"
                                            outlined
                                            flat
                                            solo
                                            hide-details
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
                            <div
                                v-if="confirm && !out_time"
                                class="text-center py-3"
                            >
                                <v-icon x-large class="icon"
                                    >mdi-check-circle-outline</v-icon
                                >
                                <p >
                                    Gracias por tu respuesta
                                </p>
                                <p v-if="confirm.answer">
                                    ¡{{ name }}, los esperamos en la boda!
                                </p>
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="!confirm && !out_time" class="pa-0 pa-md-6 py-0 pb-3 text-center">
                        <div class="pa-0 pa-md-6 pt-0" style="width: 100%">
                            <p
                                v-if="!kids_allowed"
                                class="font-weight-black text-center"
                                style="font-size: 10px"
                            >
                                No se permiten niños
                            </p>
                            <div>
                                <v-btn
                                    outlined
                                    color="primary darken-4"
                                    @click="goToWedding"
                                >
                                    Confirmar
                                </v-btn>
                            </div>
                            <div>
                                <v-btn
                                    text
                                    color="primary darken-4"
                                    class="mt-3"
                                    @click="cancelInvitation"
                                >
                                    No asistiré
                                </v-btn>
                            </div>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'attend',
    computed: {
        ...mapState({
            id: (state) => state.guest.id,
            name: (state) => state.guest.name,
            n_guests: (state) => state.guest.n_guests,
            confirm: (state) => state.guest.confirm,
            out_time: (state) => state.guest.out_time,
            kids_allowed: state => state.guest.configurations.kids
        }),
    },
    data() {
        return {
            numberGuests: [],
            phone: '',
            guests_selected: null,
        }
    },
    methods: {
        ...mapActions({ doConfirmation: 'guest/confirmAttendace' }),
        getNumberGuest() {
            this.numberGuests = []
            if (this.n_guests)
                for (let index = 0; index < this.n_guests; index++) {
                    this.numberGuests.push(index + 1)
                }
        },
        async goToWedding() {
            if(!this.guests_selected || this.phone === '') return
            await this.doConfirmation({
                id: this.id,
                payload: {
                    answer: true,
                    n_guests: this.guests_selected,
                    phone: this.phone,
                },
            })
        },
        async cancelInvitation() {
            await this.doConfirmation({
                id: this.id,
                payload: {
                    answer: false,
                },
            })
        },
    },
    watch: {
        n_guests() {
            this.getNumberGuest()
        },
    },
    mounted() {
        this.getNumberGuest()
    },
}
</script>

<style scoped>
.attend {
    max-width: 100vw;
    overflow: hidden;
}
.attend-margin {
    margin-top: 100px !important;
}
.formAttend {
    border: 1px solid var(--v-primary-base);
}
.text {
    max-width: 500px;
}
.icon {
    font-size: 60px !important;
}
</style>
