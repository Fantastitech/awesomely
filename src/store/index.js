import Vue from 'vue';
import Vuex from 'vuex';
import AwesomeData from '../../static/awesome.json';

Vue.use(Vuex);

let AwesomeDataSubjects = Object.keys(AwesomeData);

export const store = new Vuex.Store({
    state: {
        AwesomeData,
        AwesomeDataSubjects,
        GithubRepoLink: '',
        GithubRepoName: '',
        GithubRepoURL: '',
    },
    getters: {
        REPOLINK: state => {
            return state.GithubRepoLink
        }
    },
    mutations: {
        SET_REPOLINK: (state, payload) => {
            state.GithubRepoLink = payload
        },
        SET_REPONAME: (state, payload) => {
            state.GithubRepoName = payload
        },
        SET_REPOURL: (state, payload) => {
            state.GithubRepoURL = payload
        }
    },
    actions: {},
});
