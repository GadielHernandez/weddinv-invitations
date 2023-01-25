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

                        <div class="d-flex">
                            <div class="mx-auto rotate-img">
                                <v-img src="@/assets/leaf1.png" contain  height="50"/>
                            </div>
                        </div>

                        <v-btn 
                            block 
                            depressed 
                            color="primary"
                            class="my-3"
                            @click="answers.open = true"
                        >
                            Responder
                        </v-btn>
                        <p class="mb-2 text-caption text-uppercase">
                            AGRADECEMOS SU CONFIRMACIÓN ANTES DEL {{ attendance_limit }}
                        </p>
                    </div>
                    <div v-if="confirm && !out_time" class="text-center px-sm-8">
                        <div class="text-h5 text-sm-h4 py-8 rsvp-title">
                            {{ name }}
                        </div>
                        <div class="d-flex">
                            <div class="mx-auto rotate-img my-n2">
                                <v-img src="@/assets/leaf1.png" contain  height="50"/>
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
                        <div class="d-flex">
                            <div class="mx-auto rotate-img my-n2">
                                <v-img src="@/assets/leaf1.png" contain  height="50"/>
                            </div>
                        </div>
                        <div>
                            <p class="my-3 rsvp-title">LA INVITACION EXPIRÓ</p>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </div>
        <v-dialog v-model="answers.open" max-width="550">
            <v-card>
                <v-toolbar dense flat>
                    Respuesta
                    <v-spacer></v-spacer>
                    <v-btn small icon @click="answers.open = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text class="py-3">
                    <p class="text-caption mb-1">Selecciona las personas que asistirán</p>
                    <v-list dense>
                        <v-list-item-group
                            v-model="answers.confirmed"
                            multiple
                        >
                            <v-list-item 
                                v-for="(guest, index) in guests" 
                                :key="index" 
                                class="guest-name rounded-lg mb-1"
                                :class="{ 'guest-name-selected': answers.confirmed.includes(index) }"
                            >
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active"></v-checkbox>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        {{ guest.name }}
                                    </v-list-item-content>
                                </template >
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                        color="primary" 
                        small 
                        class="ml-1" 
                        @click="setAnswers" 
                    >
                        Responder
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="confirmation.open" max-width="400">
            <v-card>
                <v-card-text class="py-2">
                    Estas seguro de confirmar <v-span class="font-weight-bold">{{ answers.confirmed.length }}</v-span> 
                    personas de <v-span class="font-weight-bold">{{ guests.length }}</v-span> 
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                        color="primary" 
                        text 
                        @click="cancelConfirmation" 
                        small
                    >
                        Cancelar
                    </v-btn>
                    <v-btn 
                        color="primary" 
                        small 
                        class="ml-1" 
                        @click="doConfirmation" 
                        :loading="confirmation.saving"
                    >
                        Confirmar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
            guests: (state) => state.invitation.guests,
            confirm: (state) => state.invitation.confirm,
            attendance_limit: (state) => state.invitation.configurations.attendance.limit,
            out_time: (state) => state.invitation.out_time,
            kids_allowed: (state) => state.invitation.configurations.kids,
            image: (state) =>
                state.invitation.images_urls && state.invitation.images_urls.layout,
        }),
    },
    data() {
        return {
            answers: {
                open: false,
                confirmed: []
            },
            confirmation: {
                open: false,
                saving: false
            }
        }
    },
    methods: {
        ...mapActions({ confirmAttendace: 'invitation/confirmAttendace' }),
        async doConfirmation() {
            this.confirmation.saving = true

            const confirmation = []
            this.guests.forEach( (guest, index) => {
                const isConfirmed = this.answers.confirmed.includes(index)
                confirmation.push({
                    name: guest.name,
                    confirmed: isConfirmed
                })
            })

            await this.confirmAttendace({
                id: this.id,
                payload: {
                    guests: confirmation
                }
            })
            this.confirmation.saving = false
            this.confirmation.open = false
            this.answers.open = false
        },
        cancelConfirmation(){
            this.confirmation.saving = false
            this.confirmation.open = false
        },
        async setAnswers() {
            this.confirmation.open = true
        }
    }
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
.guest-name{
    border:  rgba(0, 0, 0, 0.19) 1px solid;
}
.guest-name-selected{
    border:  #7e895a 1px solid !important;
}
</style>
