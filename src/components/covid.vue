<template>
    <div class="covid pb-12 pt-6 px-3">
        <v-row class="">
            <v-col cols="12">
                <div class="px-md-5 px-1 pt-6 mx-0 mx-md-12 text-center">
                    <p class="title text-h5 text-md-h4 my-3 primary--text font-weight-bold">
                        Medidas de prevención
                    </p>
                    <p
                        class="text-justify my-0 mx-3"
                        :class="{
                            'text-caption': $vuetify.breakpoint.smAndDown,
                        }"
                    >
                        MEDIDAS DE PREVENCION MEDIDAS DE SEGURIDAD COVID-19 Tu
                        seguridad es muy importante para nosotros, es por eso
                        que tomaremos todas las medidas de seguridad derivadas
                        de la contingencia de COVID-19, a continuación,
                        enlistamos algunas de ellas:
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-row
            class="text-center"
            :class="{
                'text-caption': $vuetify.breakpoint.smAndDown,
            }"
        >
            <v-col cols="12" md="4">
                <v-card class="pa-2" outlined>
                    <v-icon x-large color="primary" class="py-3"
                        >mdi-motion-sensor</v-icon
                    >
                    <p>Se tomará la temperatura al ingresar a cada invitado</p>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="pa-2" outlined>
                    <v-icon x-large color="primary" class="py-3"
                        >mdi-social-distance-2-meters</v-icon
                    >
                    <p>
                        Las mesas serán distribuidas respetando la sana
                        distancia
                    </p>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="pa-2" outlined>
                    <v-icon x-large color="primary" class="py-3"
                        >mdi-face-mask</v-icon
                    >
                    <p>El uso de cubre boca es indispensable durante la boda</p>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.covid {
    max-width: 100vw;
    overflow: hidden;
}
</style>
