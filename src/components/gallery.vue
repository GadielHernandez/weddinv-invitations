<template>
    <div class="gallery">
        <v-row>
            <v-col v-for="(img, index) in images" :key="index" cols="12" md="4" class="px-0 px-md-3">
                <v-img :src="getImage(img)"  width="100%" />
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-height="80vh" max-width="70vw">
            <v-card v-if="actual_img" >
                <v-img :src="getImage(actual_img)"></v-img>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data() {
        return {
            dialog: false,
            actual_img: null,
            images: [
                'img1.jpg',
                'img2.jpg',
                'img3.jpg'
            ]
        }
    },
    methods: {
        getImage(img){
            return require('@/assets/' + img)
        },
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
    margin-bottom: 70px;
}
</style>