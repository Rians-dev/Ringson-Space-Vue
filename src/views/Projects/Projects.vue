<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex v-for="project in projects" :key="project.src" xs12 sm12 md4 lg4 xl4>
        <v-card
          :to="'/projects/'+(project.title).toLowerCase()"
          hover
          flat
          color="transparent"
          height="230"
        >
          <v-card-title></v-card-title>
          <v-img :src="project.src" aspect-ratio="2.75" height="130" contain></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{project.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
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
      projects: [
        {
          src: require('@/assets/web-application.png'),
          title: "Web Applications"
        },

        {
          src: require('@/assets/mobile-application.webp'),
          title: "Mobile Applications"
        },
        {
          src: require('@/assets/data_viz.jpg'),
          title: "Data Analytics"
        },
        {
          src: require('@/assets/it-consultancy-500x500.webp'),
          title: "IT Consultant"
        },
      ]
    };
  }
};
</script>