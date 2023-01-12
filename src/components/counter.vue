<template>
    <v-row class="counter text-center primary--text pa-2 pa-md-4">
        <v-col class="number-container">
            <div>
                <p class="minutes mt-0 mb-0 text-md-h3 text-h4 font-weight-medium">{{ days }}</p>
                <p
                    class="description mt-0 mb-0"
                    :class="{ 'description-md': $vuetify.breakpoint.mdAndUp }"
                >
                    dias
                </p>
            </div>
        </v-col>
        <v-col class="number-container">
            <div>
                <p class="minutes mt-0 mb-0 text-md-h3 text-h4 font-weight-medium">{{ hours }}</p>
                <p
                    class="description mt-0 mb-0"
                    :class="{ 'description-md': $vuetify.breakpoint.mdAndUp }"
                >
                    horas
                </p>
            </div>
        </v-col>
        <v-col class="number-container">
            <div>
                <p class="minutes mt-0 mb-0 text-md-h3 text-h4 font-weight-medium">
                    {{ minutes }}
                </p>
                <p
                    class="description mt-0 mb-0"
                    :class="{ 'description-md': $vuetify.breakpoint.mdAndUp }"
                >
                    minutos
                </p>
            </div>
        </v-col>
        <v-col class="number-container">
            <div>
                <p class="minutes mt-0 mb-0 text-md-h3 text-h4 font-weight-medium">
                    {{ seconds }}
                </p>
                <p
                    class="description mt-0 mb-0"
                    :class="{ 'description-md': $vuetify.breakpoint.mdAndUp }"
                >
                    segundos
                </p>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Counter',
    computed: {
        ...mapState({
            date: (state) => state.guest.configurations.date,
        }),
    },
    data() {
        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            interval: null,
        }
    },
    methods: {
        init() {
            this.interval = setInterval(this.calculate, 1000)
        },
        calculate() {
            const now = new Date()
            const now_milis = now.getTime()
            const seconds = 1000
            const minutes = seconds * 60
            const hours = minutes * 60
            const days = hours * 24
            
            this.days = parseInt((this.date.milis - now_milis) / days)
            
            this.hours = (
                '0' +
                parseInt(
                    (this.date.milis - now_milis - this.days * days) / hours
                )
            ).slice(-2)
            this.minutes = (
                '0' +
                parseInt(
                    (this.date.milis -
                        now_milis -
                        this.days * days -
                        this.hours * hours) /
                        minutes
                )
            ).slice(-2)
            this.seconds = (
                '0' +
                parseInt(
                    (this.date.milis -
                        now_milis -
                        this.days * days -
                        this.hours * hours -
                        this.minutes * minutes) /
                        seconds
                )
            ).slice(-2)
        },
    },
    mounted() {
        this.init()
    },
}
</script>

<style scoped>
.counter {
    background-color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 100vw;
    overflow: hidden;
    margin: 0;
}
.number-container{
    background-color: white;
}
.minutes {
    font-weight: 100;
}
.description {
    font-size: 12px;
}
.description-md {
    font-size: 18px;
}
.rectangule {
    border: 1px solid var(--v-primary-base);
}
</style>
