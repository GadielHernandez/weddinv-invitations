<template>
    <div class="pa-4 parents">
        <div 
            class="background-image rounded-lg"
            :class="{ 'background-image-smUp': $vuetify.breakpoint.smAndUp }"
        >
            <div class="info-container align-item-center text-center" >
                <div>
                    <p class="font-weight-medium text-h3 title">¡nos casamos!</p>
                    <div class="my-4">
                        <p class="ma-0" >
                            CON LA BENDICIÓN DE DIOS
                        </p>
                        <p class="ma-0" >
                            Y NUESTROS PADRES
                        </p>
                    </div>
                    <div
                        v-if=" $vuetify.breakpoint.smAndUp"
                        class="d-flex justify-center my-6 font-weight-medium parents-names"
                    >
                        <div class="text-right">
                            <p class="my-1">
                                {{ parents.groom_father }}
                            </p>
                            <p class="my-1">
                                {{ parents.groom_mother }}
                            </p>
                        </div>
                        <div class="mx-3">
                            <v-divider
                                vertical
                                class="line-parents-sm-up"
                            />
                        </div>
                        <div class="text-left">
                            <p class="my-1">
                                {{ parents.bride_father }}
                            </p>
                            <p class="my-1">
                                {{ parents.bride_mother }}
                            </p>
                        </div>
                    </div>
                    <div class="my-6 font-weight-medium" v-else>
                        <p class="my-1">
                            {{ parents.groom_father }}
                        </p>
                        <p class="my-1">
                            {{ parents.groom_mother }}
                        </p>
                        <v-divider class="ma-auto line-parents" />
                        <p class="my-1">
                            {{ parents.bride_father }}
                        </p>
                        <p class="my-1">
                            {{ parents.bride_mother }}
                        </p>
                    </div>
                    <div class="my-4">
                        <p class="ma-0">
                            NOS EMOCIONA INVITARLOS A COMPARTIR
                        </p>
                        <p class="ma-0">
                             NUESTRA BODA CON USTEDES
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'parents',
    computed: {
        ...mapState({
            parents: (state) => state.invitation.configurations.parents,
            bride: (state) => state.invitation.configurations.bride,
            groom: (state) => state.invitation.configurations.groom,
        }),
    },
}
</script>

<style scoped>
.parents {
    max-width: 100%;
    overflow: hidden;
    height: 85vh;
    font-size: 13px;
}
.background-image {
    background-image: url('~@/assets/background-leafs-v.png');
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: 125%;
}
.background-image-smUp {
    background-image: url('~@/assets/background-leafs.png') !important;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: 100%;
}
.info-container{
    height: 100%;
    width: 100%;
}
.parents-names{
    font-size: 16px;
}
.line-parents-sm-up {
    border-color: var(--v-primary-base) !important;
    border-width: 0 3px 0 0;
}
.line-parents {
    width: 80px;
    border-color: var(--v-primary-base) !important;
    border-width: 3px 0 0 0;
}
.image-avatar {
    border-style: solid;
    border-width: 3px;
    border-color: var(--v-primary-base);
}
</style>
