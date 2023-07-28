<template>
  <v-layout align-center wrap class="mt-4 ml-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  JAN 2023 -
                </div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Master of Science in Data Science and Big Data</strong>
                <div class="caption mb-2">Mulungushi University</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  FEB 2015 -
                </div>
                <div class="caption font-weight-bold green--text">NOV 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Bachelor of Science in Computer Science</strong>
                <div class="caption mb-2">Copperbelt University</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  JAN 2011 -
                </div>
                <div class="caption font-weight-bold green--text">NOV 2013</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Grade 12 ECZ School Certificate</strong>
                <div class="caption mb-2">Mpatamatu Secondary School</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4 pt-3">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  SEPT 2021 -
                </div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Full-Stuck Engineer</strong>
                <div class="caption mb-2">Digital Treasure Zambia</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  JULY 2020 -
                </div>
                <div class="caption font-weight-bold green--text">AUG 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Software Engineer</strong>
                <div class="caption mb-2">BroadReach</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  AUG 2017 -
                </div>
                <div class="caption font-weight-bold green--text">FEB 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>IT Technician</strong>
                <div class="caption mb-2">Copperbelt University</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg5 xl5 class="mt-4 pt-4">
      <h2 class="pl-4 pt-2">
        <span>Coding</span>
        <span class="green--text">Skills</span>
      </h2>
      <br />
      <div class="mx-5">
        <strong>HTML/CSS</strong>
        <v-progress-linear
          v-model="htmlBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>JavaScript</strong>
        <v-progress-linear
          v-model="jsBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>Kotlin/Java</strong>
        <v-progress-linear
          v-model="kotlinjavaBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>PHP</strong>
        <v-progress-linear
          v-model="phpBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md4 lg5 xl5 class="mt-4 pt-4">
      <h2 class="pl-4 pt-2">
        <span>Web</span>
        <span class="green--text">Frameworks</span>
      </h2>
      <br />
      <div class="mx-5">
        <strong>VUE</strong>
        <v-progress-linear
          v-model="vueBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>React</strong>
        <v-progress-linear
          v-model="reactBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>Anagular</strong>
        <v-progress-linear
          v-model="angularBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>Laravel</strong>
        <v-progress-linear
          v-model="laravelBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md4 lg5 xl5 class="mt-4 pt-4">
      <h2 class="pl-4 pt-2">
        <span>Mobile</span>

        <span class="green--text">Frameworks</span>
      </h2>
      <br />
      <div class="mx-5">
        <strong>Flutter</strong>
        <v-progress-linear
          v-model="powerBIBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>Jetpack Compose</strong>
        <v-progress-linear
          v-model="excelBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md4 lg5 xl5 class="mt-4 pt-4">
      <h2 class="pl-4 pt-2">
        <span>Database</span>

        <span class="green--text">Skills</span>
      </h2>
      <br />
      <div class="mx-5">
        <strong>Postgres</strong>
        <v-progress-linear
          v-model="postgresBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
        <strong>MYSQL</strong>
        <v-progress-linear
          v-model="mysqlBuffer"
          :buffer-value="bufferValue"
          color="green"
          height="20"
        ></v-progress-linear>
      </div>
    </v-flex>
    <v-layout justify-center wrap class="mt-4">
      <v-btn
        href="https://docs.google.com/document/d/1OwqaYui5Zom6s2VN0JP5Q-nzvnLobazAjGdbl28jyik/edit#heading=h.y7d3xdxnr44m"
        target="_blank"
        color="green"
        dark
        large
      >
        Download Resume
        <v-icon right dark>fas fa-file-download</v-icon>
      </v-btn>
    </v-layout>
  </v-layout>
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
      value: 0,
      vueBuffer: 0,
      powerBIBuffer: 0,
      reactBuffer: 0,
      excelBuffer: 0,
      postgresBuffer: 0,
      mysqlBuffer: 0,
      angularBuffer: 0,
      laravelBuffer: 0,
      tableauBuffer: 0,
      htmlBuffer: 0,
      jsBuffer: 0,
      kotlinjavaBuffer: 0,
      phpBuffer: 0,
      firebaseBuffer: 0,
      bufferValue: 100,
      interval: 0
    }
  },
  mounted () {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.vueBuffer = 90;
        this.powerBIBuffer = 85;
        this.postgresBuffer = 90;
        this.reactBuffer = 85;
        this.excelBuffer = 80;
        this.angularBuffer = 80;
        this.tableauBuffer = 65;
        this.laravelBuffer = 80;
        this.vueBuffer = 90;
        this.htmlBuffer = 90;
        this.jsBuffer = 90;
        this.mysqlBuffer = 90;
        this.kotlinjavaBuffer = 75;
        this.phpBuffer = 70;
        this.firebaseBuffer = 65;
      }, 800);
    }
  }
};
</script>
