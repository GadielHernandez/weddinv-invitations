<template>
    <div class="description pb-6">
        <v-row class="pt-6">
            <v-col cols="12">
                <div class="px-md-5 px-1 py-6 mx-0 mx-md-12 text-center">
                    <v-icon color="primary" class="icon">mdi-ring</v-icon>
                    <p class="title text-h5 text-md-h4 my-6">Nuestra historia</p>
                    <p class="text">{{ description }}</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'description',
    computed: {
        ...mapState({
            description: state => state.guest.configurations.history.description
        })
    }
}
</script>

<style scoped>
.description{
    max-width: 100vw;
    overflow: hidden;
    margin-top: 60px;
}
.icon{
    font-size: 50px !important;
}
.text{
    line-height: 33px;
}
</style>