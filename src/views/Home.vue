<template>
    <div class="home">
        <div class="left">
            <NewMission></NewMission>
            <ul class="todoList">
                <li
                    v-for="(list, idx) in lists"
                    :key="list.content"
                    :class="[idx === 0 ? 'active' : 'inactive']"
                >
                    <label>
                        <div>
                            <input
                                type="checkbox"
                                :checked="list.completed"
                                @change="changeHandler(list, $event)"
                            />
                            <i class="material-icons check">check</i>
                        </div>
                        {{list.content}}
                    </label>
                    <a href="javascript:;" class="play">
                        <i class="material-icons">play_circle_outline</i>
                    </a>
                </li>
            </ul>
            <div class="more">
                <router-link to="/tools">MORE</router-link>
            </div>
        </div>

        <Clock :home="true"></Clock>

        <div class="nav">
            <router-link to="/tools">
                <i class="material-icons">list</i>
            </router-link>
            <router-link to="/tools/analytics">
                <i class="material-icons">insert_chart</i>
            </router-link>
            <router-link to="/tools/ringtones">
                <i class="material-icons">library_music</i>
            </router-link>
        </div>

        <p class="slideText">POMODORO</p>
    </div>
</template>

<script>
import NewMission from '@/components/NewMission.vue';
import Clock from '@/components/Clock.vue';

export default {
    components: {
        NewMission,
        Clock,
    },
    computed: {
        lists() {
            let lists = this.$store.state.todo.lists;
            return lists.filter(val => val.completed === false).slice(0, 4);
        },
    },
    methods: {
        changeHandler(list, event) {
            let pos = this.$store.state.todo.lists.indexOf(list);
            let checked = event.target.checked;
            this.$store.commit('todo/updateList', { pos, checked });
        }
    },
}
</script>