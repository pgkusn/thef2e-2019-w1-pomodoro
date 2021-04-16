import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let clock = {
    namespaced: true,
    state: {
        status: 'work',
        time: {
            work: 1500,
            rest: 300
        },
        timer: null,
        startTimer: false,
    },
    getters: {
        displayTime(state) {
            let min = Math.floor(state.time[state.status] / 60);
            let sec = state.time[state.status] % 60;
            return `${min < 10 ? 0 : ''}${min}:${sec < 10 ? 0 : ''}${sec}`;
        }
    },
    mutations: {
        updateStatus(state, payload) {
            state.status = payload;
        },
        timerHandler(state) {
            state.startTimer = !state.startTimer;
        },
        setTimer(state) {
            state.timer = setInterval(() => state.time[state.status]--, 1000);
        },
        stopTimer(state) {
            clearInterval(state.timer);
        },
        resetTime(state) {
            state.startTimer = false;
            state.time.work = 1500;
            state.time.rest = 300;
        },
    },
};

let todo = {
    namespaced: true,
    state: {
        lists: [
            {
                content: 'first',
                completed: false,
            },
            {
                content: 'second',
                completed: false,
            },
            {
                content: 'third',
                completed: false,
            },
            {
                content: 'fourth',
                completed: false,
            },
            {
                content: 'fifth',
                completed: false,
            },
            {
                content: 'sixth',
                completed: true,
            },
            {
                content: 'seventh',
                completed: true,
            },
        ]
    },
    mutations: {
        updateList(state, { pos, checked }) {
            state.lists[pos].completed = checked;
        },
        addTodo(state, payload) {
            state.lists.push(payload);
        }
    }
};

export default new Vuex.Store({
    // strict: true,
    modules: {
        clock,
        todo
    }
})
