<template>
    <v-img v-if="images.length > 0" position="center 40%" :src="images[0]" dark height="210" class="my-3 text-shadow d-flex" gradient="267deg, #1414148c 100%, #1414148c 100%">
        <div class="text-center mt-8" :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }">
            <p class="text-h5 font-weight-black title ">Testigos</p>
            <v-row class="mt-1">
                <v-col cols="6" class="px-2 py-1 text-right">
                    <p>Victoria Martinez</p>
                    <p class="ma-0">Aurora Ruiz</p>
                </v-col>
                <v-divider vertical class="line"></v-divider>
                <v-col cols="6" class="px-2 py-1 text-left">
                    <p>Alejandro Valeriano</p>
                    <p class="ma-0">Karla Hernandez</p>
                </v-col>
            </v-row>
        </div>
    </v-img>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'testigos',
    computed:{
        ...mapState({
            images: state => state.guest.images_urls.galery ? state.guest.images_urls.galery : []
        })
    },
}
</script>


<style scoped>
.testigos {
    background-color: var(--v-black1-base);
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 100vw;
    overflow: hidden;
}
.image{
    background: rgb(205,205,205);
background: linear-gradient(257deg, rgba(205,205,205,0.5497835497835497) 0%, rgba(47,45,40,0.696969696969697) 100%)
}
.text-shadow{
    text-shadow: 0 0 8px #3e3e3e;
}
.line{
    border-color: var(--v-primary-base) !important;
}
</style>