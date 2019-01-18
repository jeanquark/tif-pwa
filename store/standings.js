import * as firebase from "firebase/app";
import "firebase/database";
import Noty from 'noty'
import axios from 'axios'

export const state = () => ({
    loadedStandings: []
})

export const mutations = {
    setStandings (state, payload) {
        state.loadedStandings = payload
    }
}

export const actions = {
    // Load all standings
    loadedStandings ({commit}, payload) {
        console.log('loadedStandings')
        console.log('payload: ', payload)
        // firebase.database().ref('/standings/').once('value').then(function (snapshot) {
        firebase.database().ref('/standings/' + payload).on('value', function (snapshot) {
            console.log('snapshot: ', snapshot.val())
            const standingsArray = []
            for (const key in snapshot.val()) {
                standingsArray.push({ ...snapshot.val()[key], id: key})
            }
            commit('setStandings', standingsArray)
        })
    }
}

export const getters = {
    loadedStandings (state) {
        return state.loadedStandings
    }
}