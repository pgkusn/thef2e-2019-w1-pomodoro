<template>
    <div class="tools">
        <span class="close">
            <router-link to="/">
                <i class="material-icons">close</i>
            </router-link>
        </span>

        <div class="nav">
            <router-link to="/tools">
                <i class="material-icons">list</i>TO-DO LIST
            </router-link>
            <router-link to="/tools/analytics">
                <i class="material-icons">insert_chart</i>ANALYTICS
            </router-link>
            <router-link to="/tools/ringtones">
                <i class="material-icons">library_music</i>RINGTONES
            </router-link>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>

        <Clock></Clock>

        <p class="slideText">POMODORO</p>
    </div>
</template>

<script>
import Clock from '@/components/Clock.vue';

export default {
    components: {
        Clock
    }
}
</script>