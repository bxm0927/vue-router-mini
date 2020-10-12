<template>
  <div id="app">
    <div class="nav">
      <v-link href="/">Home</v-link> |
      <v-link href="/about">About</v-link> |
      <v-link href="/foo">Foo</v-link>
    </div>

    <component :is="viewCompontent" />
  </div>
</template>

<script>
import VLink from '@/components/VLink.vue'
import routers from '@/router'

export default {
  name: 'App',
  components: {
    VLink,
  },
  computed: {
    viewCompontent() {
      const matchingView = routers[this.$root.currentRoute]
      return matchingView
        ? require(`./pages/${matchingView}.vue`).default
        : require('./pages/NotFound.vue').default
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
