<template>
    <v-card class="mx-6 game pb-0 mt-16" flat>
        <div class="text-center pb-0 px-md-16 px-0">
            <v-img
                contain
                height="70px"
                src="@/assets/flower.png"
                class="icon-header"
            ></v-img>
            <p class="title text-h5 text-md-h3 ">Juega con nosotros</p>
            <p>
                ¿Que tanto nos conoces? Juega y gana el primer lugar, recuerda
                que solo tienes una oportunidad
            </p>
            <p class="my-1 title accent--text" v-if="points">
                {{ points }} puntos obtenidos
            </p>
            <v-btn
                width="200px"
                class="font-weight-bold mt-8"
                color="accent"
                v-else
                @click="open_dialog = true"
                :disabled="!this.$route.query.id"
                >Jugar</v-btn
            >
            <v-row class="mt-10 pb-0" v-if="ranking">
                <v-col class="pb-0 d-flex" cols="12" md="4">
                    <v-card
                        :height="
                            $vuetify.breakpoint.mdAndUp ? '170px' : '130px'
                        "
                        class="mt-auto mb-0 white--text pt-6"
                        width="100%"
                        color="primary"
                    >
                        <v-icon x-large color="accent" class="mr-3"
                            >mdi-numeric-1-circle</v-icon
                        >
                        <p class="font-weight-bold mb-1">
                            <span v-if="ranking[0] !== null">{{
                                ranking[0].name
                            }}</span>
                            <span v-else>Disponible</span>
                        </p>
                        <p class="mt-0" v-if="ranking[0]">
                            {{ ranking[0].points }} puntos
                        </p>
                    </v-card>
                </v-col>
                <v-col class="pb-0 d-flex order-md-first" cols="12" md="4">
                    <v-card
                        :height="
                            $vuetify.breakpoint.mdAndUp ? '150px' : '130px'
                        "
                        class="mt-auto mb-0 white--text pt-6"
                        width="100%"
                        color="primary"
                    >
                        <v-icon x-large color="accent" class="mr-3"
                            >mdi-numeric-2-circle</v-icon
                        >
                        <p class="mb-1">
                            <span v-if="ranking[0] !== null">{{
                                ranking[1].name
                            }}</span>
                            <span v-else>Disponible</span>
                        </p>
                        <p class="mt-0" v-if="ranking[1]">
                            {{ ranking[1].points }} puntos
                        </p>
                    </v-card>
                </v-col>
                <v-col class="pb-0 d-flex" cols="12" md="4">
                    <v-card
                        :height="
                            $vuetify.breakpoint.mdAndUp ? '140px' : '130px'
                        "
                        class="mt-auto mb-0 white--text pt-6"
                        width="100%"
                        color="primary"
                    >
                        <v-icon x-large color="accent" class="mr-3"
                            >mdi-numeric-3-circle</v-icon
                        >
                        <p class="mb-1">
                            <span v-if="ranking[2] !== null">{{
                                ranking[2].name
                            }}</span>
                            <span v-else>Disponible</span>
                        </p>
                        <p class="mt-0" v-if="ranking[2]">
                            {{ ranking[2].points }} puntos
                        </p>
                    </v-card>
                </v-col>
            </v-row>
            <v-list dense class="mt-6">
                <template v-for="(position, index) in ranking">
                    <v-list-item v-if="index > 2" :key="index" style="width: 100%">
                        <v-list-item-avatar color="accent">
                            <span class="ma-auto white--text">{{ parseInt(index) + 1 }}</span>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-left">
                            {{ position.name }}
                        </v-list-item-content>
                        <v-list-item-action class="font-weight-bold primary--text">
                            {{ position.points }}
                        </v-list-item-action>
                    </v-list-item>
                </template>
            </v-list>
        </div>

        <v-dialog v-model="open_dialog" max-width="600px" persistent>
            <v-card>
                <v-card-text
                    class="text-center primary--text py-10"
                    v-if="!answering"
                >
                    <p class="title">¿Cuantos nos conoces?</p>
                    <p>
                        A continuacion hay 10 preguntas por contestar, acumula
                        el maximo numero de puntos posibles, ¡Solo tienes una
                        oportunidad!
                    </p>
                    <v-btn
                        color="primary"
                        class="mt-8"
                        width="250px"
                        @click="starQuiz"
                        >Comenzar</v-btn
                    >
                    <br />
                    <v-btn
                        text
                        color="primary"
                        class="mt-3"
                        @click="open_dialog = false"
                        width="250px"
                        >Cancelar</v-btn
                    >
                </v-card-text>
                <v-card-text v-else class="pt-5">
                    <v-chip class="text-center">{{actual_points}} puntos</v-chip>
                    <p class="pt-5">Pregunta {{ index + 1 }}</p>
                    <p class="font-weight-bold">
                        {{ questions[index].question }}
                    </p>
                    <v-list nav>
                        <v-list-item-group v-model="ans_selected" color="accent">
                            <v-list-item dense v-for="(answer, i) in questions[index].answers" :key="i" style="border: 1px solid" :disabled="next_ready">
                                <v-list-item-content>
                                    {{ answer.answer }}
                                </v-list-item-content>
                                <v-list-item-action v-if="next_ready">
                                    {{ answer.value }} pts
                                </v-list-item-action>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    <v-btn block class="mt-3" color="primary" :disabled="next_ready" @click="selectAnswer">Seleccionar</v-btn>
                    <v-btn block class="mt-3" color="primary" :disabled="!next_ready" v-if="questions.length === index + 1" @click="endQuiz">Finalizar</v-btn>
                    <v-btn block class="mt-3" color="primary" :disabled="!next_ready" @click="nextQuestion" v-else>Siguiente</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'game',
    computed: {
        ...mapState({
            points: (state) => state.invitation.points,
            questions: (state) => state.invitation.quiz,
            ranking: (state) => {
                const rank = {
                    0: { name: 'Disponible', points: 0 },
                    1: { name: 'Disponible', points: 0 },
                    2: { name: 'Disponible', points: 0 },
                    3: { name: 'Disponible', points: 0 },
                    4: { name: 'Disponible', points: 0 },
                    5: { name: 'Disponible', points: 0 },
                    6: { name: 'Disponible', points: 0 },
                    7: { name: 'Disponible', points: 0 },
                    8: { name: 'Disponible', points: 0 },
                    9: { name: 'Disponible', points: 0 }
                }
                if (!state.invitation.ranking) return rank
                state.invitation.ranking.forEach((people, index) => {
                    rank[index].name = people.name
                    rank[index].points = people.points
                })

                return rank
            },
        }),
    },
    data() {
        return {
            open_dialog: false,
            answering: false,
            index: null,
            ans_selected: null,
            next_ready: false,
            actual_points: 0
        }
    },
    methods: {
        ...mapActions({
            getRank: 'invitation/getGameRanking',
            getGameQuiz: 'invitation/getGameQuiz',
            sendPoints: 'invitation/sendPoints'
        }),
        starQuiz() {
            this.index = 0
            this.answering = true
        },
        nextQuestion(){
            this.ans_selected = null,
            this.next_ready = false,
            this.index += 1
        },
        selectAnswer(){
            this.actual_points += parseInt(this.questions[this.index].answers[this.ans_selected].value)
            this.next_ready = true
        },
        async endQuiz(){
            await this.sendPoints({
                id: this.$route.query.id,
                points: this.actual_points
            })
            await this.getRank()
            this.open_dialog = false
        }
    },
    async mounted() {
        await this.getRank()
        await this.getGameQuiz()
    }
}
</script>

<style scoped>
.game {
    max-width: 100vw;
    overflow: hidden;
}
</style>
