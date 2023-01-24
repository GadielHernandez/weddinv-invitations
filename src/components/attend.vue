<template>
    <div flat class="attend pa-4">
        <div class="d-flex background-image px-3 py-8 rounded-lg">
            <v-card color="white" max-width="800" class="mx-auto rounded-lg">
                <v-card-text class="px-8 px-md-12">
                    <div v-if="!confirm && !out_time" class="text-center">
                        <div class="pt-6">
                            <p class="text-h5 text-sm-h4 my-3 font-weight-medium">
                                {{ name }}
                            </p>
                        </div>

                        <div class="d-flex py-3">
                            <div class="mx-auto rotate-img">
                                <v-img src="@/assets/leaf1.png" contain  height="50"/>
                            </div>
                        </div>

                        <div class="py-6">
                            <v-select
                                v-model="guests_selected"
                                outlined
                                flat
                                solo
                                :items="numberGuests"
                                label="Numero de asistentes"
                                hide-details
                                color="primary"
                            ></v-select>
                            <v-row class="mt-3">
                                <v-col order-sm="last" cols="12" md="6" class="pb-1 pb-sm-4">
                                    <v-btn 
                                        block 
                                        depressed 
                                        color="primary"
                                        @click="goToWedding"
                                    >
                                        Asistire
                                    </v-btn>
                                </v-col>
                                <v-col  cols="12" md="6"  class="pt-1 pt-sm-4">
                                    <v-btn 
                                        block 
                                        depressed 
                                        outlined
                                        color="primary"
                                        @click="cancelInvitation"
                                    >
                                        No Asistire
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                        <p class="mb-2 text-caption">
                            AGRADECEMOS SU CONFIRMACIÓN ANTES DEL 28 AGOSTO
                        </p>
                    </div>
                    <div v-if="confirm && !out_time" class="text-center px-sm-8">
                        <div class="text-h5 text-sm-h4 py-8 rsvp-title">
                            {{ name }}
                        </div>
                        <div class="d-flex py-3">
                            <div class="mx-auto">
                                <v-divider color class="line " />
                            </div>
                        </div>
                        <div>
                            <p class="my-3 rsvp-title">AGRADECEMOS SU RESPUESTA</p>
                        </div>
                    </div>
                    <div v-if="out_time" class="text-center px-sm-8" >
                        <div class="text-h5 text-sm-h4 py-8 rsvp-title">
                            {{ name }}
                        </div>
                        <div class="d-flex py-3">
                            <div class="mx-auto">
                                <v-divider color class="line " />
                            </div>
                        </div>
                        <div>
                            <p class="my-3 rsvp-title">LA INVITACION EXPIRÓ</p>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'attend',
    computed: {
        ...mapState({
            id: (state) => state.invitation.id,
            name: (state) => state.invitation.name,
            n_guests: (state) => state.invitation.n_guests,
            confirm: (state) => state.invitation.confirm,
            out_time: (state) => state.invitation.out_time,
            kids_allowed: (state) => state.invitation.configurations.kids,
            image: (state) =>
                state.invitation.images_urls && state.invitation.images_urls.layout,
        }),
    },
    data() {
        return {
            numberGuests: [],
            guests_selected: null,
        }
    },
    methods: {
        ...mapActions({ doConfirmation: 'invitation/confirmAttendace' }),
        getNumberGuest() {
            this.numberGuests = []
            if (this.n_guests)
                for (let index = 0; index < this.n_guests; index++) {
                    this.numberGuests.push({
                        text: `${index + 1} personas`,
                        value: index + 1
                    })
                }
        },
        async goToWedding() {
            if (!this.guests_selected) return
            console.log(this.guests_selected)
            await this.doConfirmation({
                id: this.id,
                payload: {
                    answer: true,
                    n_guests: this.guests_selected
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
.background-image {
    background-image: url('~@/assets/background.png');
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: 100%;
}
.rotate-img {
        transform: rotate(13deg);
}
.line {
    width: 100px;
    border-color: var(--v-primary-base);
    border-width: 2px 0 0 0;
}
</style>
