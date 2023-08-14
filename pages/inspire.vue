<template>
  <div>
    <v-row>
      <v-col cols="8">
        <v-text-field
          v-model="title"
          clearable
          placeholder="search"
          prepend-inner-icon="mdi-magnify"
          dense
          hide-details="auto"
          outlined
          @keydown.enter="fetchdata"
        />
      </v-col>
      <v-col cols="4">
        <v-btn color="primary" @click="fetchdata">search</v-btn>
      </v-col>
      <v-col v-if="loading" cols="12">
        <v-card :loading="loading" flat>
          <v-text>Loading...</v-text>
        </v-card>
      </v-col>
      <!-- product -->
      <v-col cols="12">
        <page-book />
      </v-col>
    </v-row>

    <div class="text-center">
      <v-btn color="primary">See More</v-btn>
    </div>
  </div>
</template>
<script>
import PageBook from '../components/PageBook.vue'
export default {
  components: { PageBook },
  data() {
    return {
      loading: false,
      titlt: null,
      data: [],
    }
  },
  mounted() {
    this.fetchdata()
  },
  methods: {
    async fetchdata() {
      const data = await this.$axios.$get(
        `https://api.itbook.store/1.0/search/${this.title}`
      )
      this.data = data
      this.loading = true
    },
  },
}
</script>
