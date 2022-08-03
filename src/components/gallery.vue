<template>
    <div class="gallery">
        <v-row>
            <v-col v-for="(img, index) in images" :key="index" :cols="12" :sm="width" class="px-0 px-md-3">
                <v-img :src="img"  width="100%"  max-width="50vh" :aspect-ratio="1" class="ma-auto"/>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-height="80vh" max-width="70vw">
            <v-card v-if="actual_img" >
                <v-img :src="actual_img"></v-img>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Gallery',
    computed:{
        ...mapState({
            images: state => state.guest.images_urls.galery ? state.guest.images_urls.galery : [],
            width: state => {
                const n_images = state.guest.images_urls.galery && state.guest.images_urls.galery.length
                if(!n_images) return 12
                return n_images % 4 === 0 ? 3 : 4
            }
        })
    },
    data() {
        return {
            dialog: false,
            actual_img: null,
        }
    },
    methods: {
        openDialog(img){
            this.actual_img = img
            this.dialog = true
        }
    },
}
</script>

<style scoped>
.gallery{
    max-width: 100vw;
    overflow: hidden;
}
</style>