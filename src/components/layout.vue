<template>
    <div class="d-flex layout" :class="{ 'layout-md': $vuetify.breakpoint.mdAndUp }">
        <v-img
            gradient="267deg, #1414148c 100%, #1414148c 100%"
            dark
            height="100%"
            :src="image"
        >
            <div class="h-100 container text-center pa-0">
                <div>
                    <p class="text-md-h6 text-subtitle-1">¡NOS CASAMOS!</p>
                </div>
                <div class="center container">
                    <p class="text-md-h1 text-h3 title primary--text text-shadow">{{ groom.firstname }} y {{ bride.firstname }}</p>              
                </div>
                <div>
                    <p class="text-md-h6 text-overline">{{ wedding_date.string }}</p>
                </div>
            </div>
        </v-img>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'layout',
    computed:{
        ...mapState({
            bride: state => state.guest.configurations.bride,
            groom: state => state.guest.configurations.groom,
            wedding_date: state => state.guest.configurations.wedding_date,
            image: state => state.guest.images_urls.layout ? state.guest.images_urls.layout : ''
        })
    }
}
</script>

<style scoped>
.layout{
    height: 75vh;
    width: 100vw;
}
.layout-md{
    height: 85vh;
    width: 100vw;
}
.container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.center{
    height: 70%;
    font-style: italic;
}
.text-shadow{
    text-shadow: 0 0 8px #3e3e3e;
}
.line{
    border-color: var(--v-primary-base) !important;
}
</style>