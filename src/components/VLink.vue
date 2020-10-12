<template>
  <a :href="href" :class="{ active: isActive }" @click.prevent="goto">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute
    },
  },
  methods: {
    goto() {
      this.$root.currentRoute = this.href
      history.pushState(null, null, this.href)
    },
  },
}
</script>

<style scoped>
.active {
  color: cornflowerblue;
}
</style>
