<template>
  <v-layout column justify-center align-center class='mt-4 pt-2'>
    <VueCompareImage
      class='hidden-md-and-down'
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth='sliderLine'
      :handleSize='hSize'
      :leftImage='leftImage'
      :rightImage='rightImage'
      :sliderPositionPercentage='sliderPosition'
    />
    <VueCompareImage
      class='hidden-lg-and-up'
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth='sliderLine'
      :handleSize='hSize'
      :leftImage='leftImage2'
      :rightImage='rightImage2'
      :sliderPositionPercentage='sliderPosition'
    />

    <br />

    <vue-typer class='headline' :repeat='0' text='Ringson Mukosha'></vue-typer>
    <vue-typer
      :text='careerFocus'
      :repeat='Infinity'
      :shuffle='false'
      initial-action='erasing'
      :pre-type-delay='70'
      :type-delay='70'
      :pre-erase-delay='1980'
      :erase-delay='150'
      erase-style='select-back'
      :erase-on-complete='false'
      caret-animation='smooth'
    ></vue-typer>
    <br />
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color='transparent' max-width='500'>
        <v-card-title primary-title>
          <div>
            <h3 class='headline mb-0'>
              <span>About</span>
              <span class='green--text'>Me</span>
            </h3>
            <div>
              <p>
                Hello! I'm Ringson Mukosha, a passionate Full-Stack Engineer dedicated to solving problems through
                <span class='green--text font-weight-bold'>Code</span> 
                and
                <span class='green--text font-weight-bold'>Number Crunching.</span> 
                I thrive on building exceptional user experiences and believe in the power of simplicity over complexity. 
                I am constantly seeking opportunities to learn and grow in my field. 
                When I'm not coding, you can find me enjoying comedy shows or delving into thought-provoking documentaries. 
                I am excited to continue my journey of innovation and problem-solving while making a positive impact in the tech industry.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class='hidden-sm-and-down justify-center'>
          <v-btn
            v-for='social in socials'
            :key='social.icon'
            fab
            dark
            outline
            color='green'
            :href='social.href'
            target='_blank'
          >
            <v-icon dark>{{ social.icon }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class='hidden-md-and-up justify-center'>
          <v-btn
            v-for='social in socials'
            :key='social.icon'
            small
            fab
            dark
            outline
            color='green'
            :href='social.href'
            target='_blank'
          >
            <v-icon dark>{{ social.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import VueCompareImage from 'vue-compare-image'

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
  components: {
    'vue-typer': VueTyper,
    VueCompareImage
  },
  data() {
    return {
      socials: [
        { href: 'https://github.com/Rians-dev', 
          icon: 'fab fa-github' 
        },
        {
          href: 'https://www.linkedin.com/in/ringson-rians-mukosha-a9393a168',
          icon: 'fab fa-linkedin-in'
        },
        {
          href: 'https://www.facebook.com/Rians.mukosha.3?mibextid=LQQJ4d',
          icon: 'fab fa-facebook-f'
        },
      ],
      careerFocus: ['Full-Stack Engineer', 'Data Analyst'],
      leftImage: require('@/assets/MainPhoto.png'),
      rightImage: require('@/assets/MainPhoto2.png'),
      leftImage2: require('@/assets/MobilePhoto.png'),
      rightImage2: require('@/assets/MobilePhoto.png'),
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>
