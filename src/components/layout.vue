<template>
    <div class="d-flex layout pa-4" >
        <div 
            class="background-image rounded-lg" 
            :class="{ 'background-size-sm': $vuetify.breakpoint.smAndUp }"
        >

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'layout',
    computed:{
        ...mapState({
            layout: state => state.invitation.configurations.layout
        })
    }
}
</script>

<style scoped>
.layout{
    height: 80vh;
    width: 100%;
}
.background-image{
    background-image: url('~@/assets/principal.png');
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: repeat-y;
    background-size: 245vw;
}
.background-size-sm{
    background-size: cover !important;
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