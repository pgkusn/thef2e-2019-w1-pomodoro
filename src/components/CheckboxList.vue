<template>
    <div class="checkboxList">
        <div class="listTitle foldable active">{{title}}</div>
        <div>
            <ul>
                <li v-for="list in lists" :key="list.content">
                    <label :class="{ 'is-done': list.completed }">
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
                    <a v-show="!list.completed" href="javascript:;" class="play">
                        <i class="material-icons">play_circle_outline</i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title'],
    computed: {
        lists() {
            let lists = this.$store.state.todo.lists;
            return lists.filter(val => val.completed === (this.title === 'DONE'));
        }
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