<template>
    <div class="description">
        <v-row >
            <v-col cols="12">
                <div class="px-md-5 px-3 py-6 mx-0 mx-md-12 text-center">
                    <p class="text" :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }">{{ description }}</p>
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
}
.icon{
    font-size: 50px !important;
}
.text{
    line-height: 33px;
}
</style>