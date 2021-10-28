<template>
    <div>
        <v-main v-if="ready && !loading">
            <layout />
            <counter ref="counter" />
            <location ref="location" />
            <attend ref="attend" />
            <description ref="description" />
            <gallery ref="gallery" />
            <gifts ref="gifts" />
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
import description from '../components/description.vue'
import counter from '../components/counter.vue'
import gifts from '../components/gifts.vue'
import attend from '../components/attend.vue'
import gallery from '../components/gallery.vue'
import location from '../components/location.vue'

export default {
    components: {
        layout,
        description,
        counter,
        gifts,
        attend,
        gallery,
        location,
    },
    name: 'App',
    computed: {
        ...mapState({
            ready: (state) =>
                state.guest.wedding && state.guest.configurations && state.guest.id,
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
            const { wedding } = this.$route.params
            const { inv } = this.$route.query
            if (!wedding) return

            await this.setWedding(wedding)
            await this.checkGuest(inv)
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
    font-family: 'EB Garamond', serif !important;
}
.main-helper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}
</style>
