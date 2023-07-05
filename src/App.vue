<template>
  <v-app :dark='goDark'>
    <v-content>
      <v-container align-center>
        <Header :goDark='goDark' @changeTheme='updateTheme($event)'/>

        <transition
          name='router-animation'
          mode='out-in'
          enter-active-class='animated fadeIn fast'
          leave-active-class='animated fadeOut faster'
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
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
  components: {
    Header,
    Footer
  },
  data() {
    return { goDark: false };
  },
  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
    }
  }
};
</script>
<!-- <style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css';
</style> -->
