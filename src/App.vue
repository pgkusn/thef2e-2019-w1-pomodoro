<template>
    <div id="app" class="wrapper" :class="{ break:status === 'rest' }">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    computed: {
        status() {
            return this.$store.state.clock.status;
        },
    },
}
</script>

<style lang="scss" src="@/assets/sass/style.scss"></style>
