import { db, storage } from '../../plugins/firebase'
const state = {
    wedding: null,
    id: null,
    name: null,
    confirm: null,
    quiz: [],
    points: null,
    ranking: [],
    out_time: false,
    configurations: null,
}

const getters = {}

const actions = {
    setWedding({ commit }) {
        return new Promise((resolve, reject) => {
            const id = process.env.VUE_APP_WEDDING_ID
            db.doc(`configurations/${id}`)
                .get()
                .then(async (doc) => {
                    if (!doc.exists) return resolve(null)
                    
                    const data = doc.data()
                    for (const component in data) {
                        if (Object.hasOwnProperty.call(data, component)) {
                            if(typeof data[component] !== 'object') continue
                            if(!data[component].images) continue 
                            
                            const images = data[component].images
                            for (const image in images) {
                                if (Object.hasOwnProperty.call(images, image)) {
                                    images[image] = await storage.ref(`${doc.id}/${component}/${images[image]}`).getDownloadURL()
                                }
                            }

                            data[component].images = images
                        }
                    }

                    const wedding = { id: doc.id, ...data }
                    commit('SET_WEDDING', wedding)

                    resolve(wedding)
                })
                .catch((e) => reject(e))
        })
    },
    checkInvitation({ commit, state }, id) {
        return new Promise((resolve, reject) => {
            db.doc(`${state.wedding}/${id}`)
                .get()
                .then((doc) => {
                    if (!doc.exists) return resolve()
                    commit('UPDATE_INVITATION', { id, ...doc.data() })
                    return resolve({ id, ...doc.data() })
                })
                .catch((err) => {
                    console.log(err)
                    return reject({ message: 'error' })
                })
        })
    },
    confirmAttendace({ commit, state }, data) {
        return new Promise((resolve, reject) => {
            db.doc(`${state.wedding}/${data.id}`)
                .update({ confirm: data.payload })
                .then(() => {
                    commit('UPDATE_CONFIRM', data.payload)
                    return resolve({ message: 'done' })
                })
                .catch((err) => {
                    console.log(err)
                    return reject({ message: 'error' })
                })
        })
    },
    sendPoints({ commit }, data) {
        return new Promise((resolve, reject) => {
            db.doc(`${state.wedding}/${data.id}`)
                .update({ points: data.points })
                .then(() => {
                    commit('UPDATE_POINTS', data.points)
                    return resolve({ message: 'done' })
                })
                .catch((err) => {
                    console.log(err)
                    return reject({ message: 'error' })
                })
        })
    },
    getGameQuiz({ state, commit }) {
        return new Promise((resolve) => {
            if (!state.configurations && !state.configurations.questions)
                return resolve()

            commit('SET_QUIZ', state.configurations.questions)
            resolve()
        })
    },
    getGameRanking({ commit }) {
        return new Promise((resolve, reject) => {
            db.collection(`${state.wedding}`)
                .orderBy('points', 'desc')
                .limit(10)
                .get()
                .then((response) => {
                    commit(
                        'SET_RANKING',
                        response.docs.map((doc) => doc.data())
                    )
                    resolve()
                })
                .catch((err) => reject(err))
        })
    },
}

const mutations = {
    SET_WEDDING(state, payload) {
        state.wedding = payload.id
        delete payload.id
        state.configurations = payload
    },
    UPDATE_INVITATION(state, payload) {
        state.id = payload.id
        state.name = payload.name
        state.guests = payload.guests
        state.confirm = payload.confirm
        ;(state.points = payload.points), (state.out_time = payload.out_time)
    },
    UPDATE_CONFIRM(state, payload) {
        state.confirm = payload
    },
    UPDATE_POINTS(state, payload) {
        state.points = payload
    },
    SET_QUIZ(state, payload) {
        state.quiz = payload
    },
    SET_RANKING(state, payload) {
        state.ranking = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
