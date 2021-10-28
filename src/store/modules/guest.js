import { db } from '../../plugins/firebase'
const state = {
    wedding: null,
    id: null,
    configurations: null,
    n_guests: null,
    name: null,
    confirm: null,
    quiz:[],
    points: null,
    ranking: [],
    out_time: false
}

const getters = {}

const actions = {
    setWedding({ commit }, id){
        return new Promise((resolve, reject) => {
            db.doc(`configurations/${id}`).get()
            .then( doc => {
                if(!doc.exists) return resolve(null)
                const wedding = { id: doc.id, ...doc.data() }
                commit('SET_WEDDING', wedding)
                resolve(wedding)
            })
            .catch( () => reject() )
        })
    },
    checkGuest({ commit, state }, id){
        return new Promise((resolve, reject) => {
            db.doc(`${state.wedding}/${id}`).get()
            .then( doc => {
                if(!doc.exists) return resolve()
                commit('UPDATE_GUEST', { id, ...doc.data() })
                return resolve({ id, ...doc.data() })
            })
            .catch( (err) => {
                console.log(err)
                return reject({ message: 'error' })
            })
        })
    },
    confirmAttendace({ commit, state }, data){
        return new Promise((resolve, reject) => {
            db.doc(`${state.wedding}/${data.id}`).update({ confirm: data.payload })
            .then( () => {
                commit('UPDATE_CONFIRM', data.payload)
                return resolve({ message: 'done' })
            })
            .catch( (err) => {
                console.log(err)
                return reject({ message: 'error' })
            })
        })
    },
    sendPoints({ commit }, data){
        return new Promise((resolve, reject) => {
            db.doc(`${state.wedding}/${data.id}`).update({ points: data.points })
            .then( () => {
                commit('UPDATE_POINTS', data.points)
                return resolve({ message: 'done' })
            })
            .catch( (err) => {
                console.log(err)
                return reject({ message: 'error' })
            })
        })
    },
    getGameQuiz({ state, commit }){
        return new Promise((resolve) => {
            if(!state.configurations && !state.configurations.questions) 
                return resolve()
            
            commit('SET_QUIZ', state.configurations.questions)
            resolve()
        })
    },
    getGameRanking({ commit }){
        return new Promise((resolve, reject) => {
            db.collection(`${state.wedding}`).orderBy('points','desc').limit(10).get()
            .then( response => {
                commit('SET_RANKING', response.docs.map( doc => doc.data()))
                resolve()
            })
            .catch( err => reject(err))
        })
    }
}

const mutations = {
    SET_WEDDING(state, payload){
        state.wedding = payload.id
        delete payload.id
        state.configurations = payload
    },
    UPDATE_GUEST(state, payload){
        state.id = payload.id
        state.name = payload.name
        state.n_guests = payload.guests
        state.confirm = payload.confirm
        state.points = payload.points,
        state.out_time = payload.out_time
    },
    UPDATE_CONFIRM(state, payload){
        state.confirm = payload
    },
    UPDATE_POINTS(state, payload){
        state.points = payload
    },
    SET_QUIZ(state, payload){
        state.quiz = payload
    },
    SET_RANKING(state, payload){
        state.ranking = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
