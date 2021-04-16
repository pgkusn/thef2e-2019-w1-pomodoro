<template>
    <div class="clock" :class="{ pause: startTimer }">
        <template v-if="home">
            <a href class="clock-btn" @click.prevent="timerHandler()"></a>
            <a href class="clock-reset" @click.prevent="resetTime()"></a>
            <div class="clock-time">{{displayTime}}</div>
        </template>
        <template v-else>
            <a href @click.prevent="timerHandler()">
                <span class="clock-btn"></span>
            </a>
            <p class="clock-time">{{displayTime}}</p>
            <p class="clock-text">THE FIRST THING TO DO TODAY</p>
        </template>
    </div>
</template>

<script>
export default {
    props: ['home'],
    computed: {
        time() {
            return this.$store.state.clock.time;
        },
        startTimer() {
            return this.$store.state.clock.startTimer;
        },
        status() {
            return this.$store.state.clock.status;
        },
        displayTime() {
            return this.$store.getters['clock/displayTime'];
        }
    },
    watch: {
        startTimer(val) {
            if (val) {
                this.$store.commit('clock/setTimer');
            }
            else {
                this.$store.commit('clock/stopTimer');
            }
        },
        'time.work'(val) {
            if (!val) {
                this.$store.commit('clock/updateStatus', 'rest');
                this.$store.commit('clock/resetTime');
            }
        },
        'time.rest'(val) {
            if (!val) {
                this.$store.commit('clock/updateStatus', 'work');
                this.$store.commit('clock/resetTime');
            }
        }
    },
    methods: {
        timerHandler() {
            this.$store.commit('clock/timerHandler');
        },
        resetTime() {
            this.$store.commit('clock/resetTime');
        },
    }
}
</script>