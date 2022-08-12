<template>
    <div>
        <v-main v-if="ready && !loading">
            <layout />
            <counter ref="counter" />
            <parents ref="parents"  class="my-md-8"/>
            <attend ref="attend" />
            <location ref="location" />
            <gifts ref="gifts" />
            <gallery />
        </v-main>
        <v-main v-else-if="loading">
            <div class="main-helper">
                <div>
                    <v-progress-circular
                        :size="50"
                        :width="7"
                        color="primary"
                        indeterminate
                    ></v-progress-circular>
                </div>
            </div>
        </v-main>
        <v-main v-else>
            <div class="main-helper">
                <div>
                    <p class="title">Invitación inválida</p>
                </div>
            </div>
        </v-main>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import layout from '../components/layout.vue'
import counter from '../components/counter.vue'
import gifts from '../components/gifts.vue'
import attend from '../components/attend.vue'
import location from '../components/location.vue'
import parents from '../components/parents.vue'
import gallery from '../components/gallery.vue'

export default {
    components: {
        layout,
        counter,
        gifts,
        attend,
        location,
        parents,
        gallery
    },
    name: 'App',
    computed: {
        ...mapState({
            ready: (state) =>
                state.guest.wedding && state.guest.configurations,
        }),
    },
    data() {
        return {
            loading: true,
        }
    },
    methods: {
        ...mapActions({
            checkGuest: 'guest/checkGuest',
            setWedding: 'guest/setWedding',
        }),
        goto(refName) {
            const element = this.$refs[refName]
            const top = element.$el.offsetTop

            window.scrollTo(0, top)
        },
    },
    async mounted() {
        try {
            await this.setWedding()
            const { guest } = this.$route.params
            if (!guest) return

            await this.checkGuest(guest)
            this.loading = false
        } catch (error) {
            console.log(error)
            this.loading = false
        }
    },
}
</script>
.

<style>
body,
p,
.v-application [class*='text-'],
.v-application {
    font-family: 'Montserrat', sans-serif !important;
}
.h-100 {
    height: 100%;
}
.title,
.v-application .title,
.title [class*='text-'] {
    font-family: 'Dancing Script', cursive !important;
}
.main-helper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}
</style>
