<template>
  <div>
    {{ $route.params.id }}
    <div v-for="(a, i) in data" :key="i">
      {{ a.name }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.customer.comment
    },
  },
  mounted() {
    this.getComment()
  },
  methods: {
    getComment() {
      this.$store.dispatch('customer/comments')
    },
  },
}
</script>
