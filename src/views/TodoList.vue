<template>
    <div class="todoList">
        <NewMission></NewMission>
        <CheckboxList title="TO-DO"></CheckboxList>
        <CheckboxList title="DONE"></CheckboxList>
    </div>
</template>

<script>
import NewMission from '@/components/NewMission.vue';
import CheckboxList from '@/components/CheckboxList.vue';

export default {
    components: {
        NewMission,
        CheckboxList
    },
}
</script>

<style lang="scss">
.newMission {
    margin-bottom: 48px;
}
.checkboxList .listTitle {
    margin-bottom: 8px;
}
</style>
