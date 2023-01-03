<template>
    <div class="d-flex layout" :class="{ 'layout-md': $vuetify.breakpoint.mdAndUp }">
        <v-img
            v-if="layout"
            gradient="267deg, #1414148c 100%, #1414148c 100%"
            dark
            height="100%"
            :position="$vuetify.breakpoint.mdAndUp ? '50% 25%' : null"
            :src="layout.images.background"
        >
            <div class="h-100 container text-center pa-0">
                <div class="center container">
                    <p class="text-md-h1 text-h3 title text-shadow my-3">{{ bride.firstname }} & {{ groom.firstname }}</p> 
                    <v-divider class="line" /> 
                    <p class="text-md-h6 text-subtitle my-3">{{ layout.text }}</p>
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
            layout: state => state.guest.configurations.layout
        })
    }
}
</script>

<style scoped>
.layout{
    height: 80vh;
    width: 100vw;
}
.layout-md{
    height: 80vh;
    width: 100vw;
}
.container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.center{
    height: 30%;
}
.text-shadow{
    text-shadow: 0 0 8px #3e3e3e;
}
.line{
    border-color: var(--v-primary-base) !important;
    width: 60%;
}
</style>