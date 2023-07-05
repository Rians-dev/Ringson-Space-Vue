<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>My</span>
          <span class="green--text">Services</span>
        </h2>
      </v-flex>
      <v-flex v-for="service in services" :key="service.src" xs6 sm3 md3 lg3 xl3>
        <v-card hover flat color="transparent" :style="{'cursor':'context-menu'}">
          <v-card-title></v-card-title>
          <v-img
            :src="service.src"
            height="100"
            aspect-ratio="2.75"
            :alt="'Ringson do '+service.title"
            lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            contain
          ></v-img>
          <v-card-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{service.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h2 class="pl-4">
          <span>Companies</span>
          <span class="green--text">WorkedFor</span>
        </h2>
      </v-flex>

      <v-flex v-for="client in clients" :key="client.src" xs6 sm4 md3 lg2 xl2>
        <v-card flat :href="client.href" target="_blank" color="transparent">
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              :src="client.src"
              :alt="client.name+' logo'"
              lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              height="110"
              width="160"
              aspect-ratio="2.75"
              contain
            >
              <v-expand-transition>
                <div
                  v-if="!hover"
                  class="transition-fast-in-fast-out green v-img--reveal"
                  style="height: 100%;"
                ></div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Ringson's Space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Ringson Mukosha's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Ringson's Space" },
      { property: "og:site_name", content: "Ringson's Space" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: require('@/assets/MobilePhoto.png')
      },
      { property: "og:description", content: "Ringson Mukosha's Portfolio" }
    ]
  },
  data () {
    return {
      clients: [
        {
          name: "BroadReach",
          src: require('@/assets/broadreach-corporation-logo-vector.png'),
          href: "https://broadreachcorporation.com/"
        },
        {
          name: "Digital Treasure",
          src: require('@/assets/DTZ.jpg'),
          href: "http://www.digitaltreasure.co.zm/"
        },
        {
          name: "Northrise University",
          src: require('@/assets/northrise.png'),
          href: "https://northrise.edu.zm/"
        },
        {
          name: "Copperbelt University",
          src: require('@/assets/CBU.png'),
          href: "https://www.cbu.ac.zm/"
        }, 
      ],
      services: [
        {
          src: require('@/assets/web-application.png'),
          title: "Web Development"
        },
        {
          src: require('@/assets/mobile-application.webp'),
          title: "Mobile App Development"
        },
        {
          src: require('@/assets/data_viz.jpg'),
          title: "Data Analysis"
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
<style >
.v-img--reveal {
  opacity: 0.3;
}
</style>