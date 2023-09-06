<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Consaultant</span>
      <span class="green--text">Projects</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="500"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{
                project.title
              }}</v-card-title>
               <v-card-title primary-title class='justify-center'>{{project.des}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
              <h3 class='headline mb-0'>
                <span>Technology</span>
              </h3>
              <v-chip v-for="(tech, key) in project.tech" :key="key" color='green' text-color='white'>{{tech}}</v-chip>
            </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              large
              dark
              color="green"
              :href="project.git"
              target="_blank"
            >
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn
              large
              flat
              dark
              color="green"
              :href="project.demo"
              target="_blank"
            >
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
      title: 'Home',
      titleTemplate: "%s ← Ringson's Space",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "Ringson Mukosha's Portfolio" },
        { charset: 'utf-8' },
        { property: 'og:title', content: "Ringson's Space" },
        { property: 'og:site_name', content: "Ringson's Space" },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: require('@/assets/MobilePhoto.png')
        },
        { property: 'og:description', content: "Ringson Mukosha's Portfolio" }
      ]
    },
  data() {
    return {
      dialog: false,
      projects: [
          {
            dialog: false,
            title: 'Digitres App',
            des: "A Mobile App designed and developed to Secure, Manage and Trace items as well buying and selling authentic gudgets.",
            tech: {
              tech1: 'Flutter',
              tech2: 'Dart',
              tech3: 'Firebase'
            },
            poster: require('@/assets/Digitres.png')
          },
      ]
    };
  }
};
</script>
