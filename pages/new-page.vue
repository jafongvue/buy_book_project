<template>
  <div>
    <!-- <v-card class="pa-10">
      <div>
        <v-btn color="primary" @click="getPost"> look posts</v-btn>
        <div v-for="(b, i) in data" :key="i">
          <span class=""
            >UserId:
            {{ b.userId }}
          </span>
          <div class="font-weight-black">{{ b.body }}</div>
          <span>
            <v-btn color="success" :to="`/comments/${b.id}`">look comment</v-btn>
          </span>
        </div>
      </div>
    </v-card> -->
    <v-row dense>
      <v-col v-for="(a, i) in data" :key="i" cols="12" md="6">
        <v-card class="ma-3 pa-3">
          {{ a.name }}
          <!-- <v-btn text color="primary" :to="`/comments/${b,id}`">link</v-btn> -->
          <div>
            <a @click="$router.push(`/comments/${a.id}`)">comments</a>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$store.state.customer.customer
    },
    data1() {
      return this.$store.state.customer.userpost
    },
  },
  mounted() {
    this.onGetData()
    this.getPost()
  },
  methods: {
    onGetData() {
      this.$store.dispatch('customer/customers')
    },

    getPost() {
      this.$store.dispatch('customer/userposts')
    },
  },
}
</script>
