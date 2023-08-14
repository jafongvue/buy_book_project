<template>
  <v-row dense>
    <v-col v-for="i in data.books" :key="i.isbn13" cols="6" md="3">
      <v-hover>
        <template #default="{ hover }">
          <v-card max-width="400">
            <v-chip v-if="!hover" small color="warning" class="rounded ma-2">{{
              i.price
            }}</v-chip>
            <v-img :src="i.image" width="300" height="300"></v-img>
            <v-card-text>
              <h2 class="text-h6 black--text">
                {{ i.title }}
              </h2>
              <div class="text-subtitle">
                {{ i.subtitle }}
              </div>
            </v-card-text>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute>
                <v-btn small color="primary" @click="displayDialog(i)"
                  >Read More</v-btn
                >
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>Book Details</v-card-title>
        <v-card-text>
          <!-- book title -->
          <v-row>
            <v-col cols="6" md="6">
              <div class="text-h5">{{ info.title }}</div>
              <div class="text-subtitle">{{ info.subtitle }}</div>
              <div>
                <div class="mt-3 text-h6 font-weight-bold">
                  {{ info.price }}
                </div>
                <div>
                  <v-row class="mt-10">
                    <v-col cols="6" md="6">
                      <div>
                        <div>Language</div>
                        <div class="font-weight-bold">
                          {{ info.language }}
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="6" md="6">
                      <div>
                        <div>Rating</div>
                        <v-rating
                          :value="info.rating"
                          dense
                          small
                          color="orange"
                          background-color="primary"
                          hover
                          class="mr-2"
                        ></v-rating>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
            <v-col cols="6" md="6">
              <div>
                <v-img :src="info.image" width="200" height="250"></v-img>
              </div>
            </v-col>
          </v-row>
          <v-btn small color="success" @click="(dialog=false)" 
            ><v-icon>mdi-cart</v-icon>buy now</v-btn
          >
          <div class="mt-10">
            <div class="font-weight-bold">Author</div>
            <div>{{ info.authors }}</div>
            <div class="mt-3 font-weight-bold">Description</div>
            <div>{{ info.desc }}</div>
          </div>
          <div class="mt-5">Download PDF Files.</div>
          <div>
            <ul>
              <li v-for="pdf in info.pdf" :key="pdf">
                <a target="_blank" :href="pdf">
                  {{ pdf }}
                </a>
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      overlay: false,
      data: [],
      title: null,
      info: {},
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
    },
    async displayDialog(item) {
      this.info = {}
      this.dialog = true
      const data = await this.$axios.$get(
        `https://api.itbook.store/1.0/books/${item.isbn13}`
      )
      this.info = { ...data }
    },
  },
}
</script>
