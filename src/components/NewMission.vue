<template>
    <div class="newMission">
        <input type="text" v-model.trim="todo" @keyup.enter="submitHandler" />
        <i v-show="!todo">ADD A NEW MISSION…</i>
        <a href @click.prevent="submitHandler">+</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: ''
        }
    },
    methods: {
        submitHandler() {
            if (!this.todo) return;
            this.$store.commit('todo/addTodo', {
                content: this.todo,
                completed: false,
                active: false
            });
            this.todo = '';
        }
    },
}
</script>