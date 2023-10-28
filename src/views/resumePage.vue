<template>
  <v-container fluid class="ma-0 pa-0">
    <!--        <div class="justify-center mx-auto ml-12"-->
    <!--             style="font-size: 32px; font-weight: 700;">-->
    <!--            <h1 style="line-height: 3rem; font-size: 32px; font-weight: 700" class="mb-12">-->
    <!--                Ali Bayani-->
    <!--            </h1>-->
    <!--        </div>-->

    <div style="height: 17vh; display: block;" id="bio"></div>
    <div style="height: 3vh; display: block"></div>


    <v-row class="mx-8 bioRow mb-16" style="background-color: antiquewhite;" id="bio">
      <v-col cols="12" lg="4" md="5" class="pa-0 imgCol">
        <v-img src="../assets/ali-bayani.jpg" class="img"/>
      </v-col>
      <v-col cols="12" lg="8" md="7" style="background-color: antiquewhite;" class="bioCol">
        <div class="mx-4 biography-text">
          I am Ali Bayani, 22 years old, a recent graduate with a Bachelor's degree in Computer Engineering from Tabriz,iran.
          <br> Graduating in August 2023 from Azad University of Tabriz with a Bachelor's degree, I specialized in
          Artificial Intelligence.
          Achieving a commendable GPA of 3.74 out of 4 and securing the second-highest GPA in the whole Computer
          Engineering and Information Technology Department, I am a dedicated member of both the Scientific Association
          of Computer Engineering and Artificial Intelligence at my university and the Scientific Association of
          Telemedicine and Artificial Intelligence at Tabriz University of Medical Sciences. My profound passion lies in
          Machine Learning, Deep Learning, Generative AI, Human-Centered AI, and Artificial General Intelligence (AGI)
          at the highest level. In my pursuit of excellence, I have proposed innovative techniques, including a paper on
          heart disease diagnosis through Deep Learning, while consistently collaborating with AI professors daily.
          <br> My ultimate goal is to become a prominent figure in the global AI research community, where I can
          contribute to advancements in artificial intelligence, collaborate with experts, and drive innovation in the
          field.
        </div>
        <div id="pae"></div>
      </v-col>
    </v-row>


    <div class="mt-2 article pa-0 ma-0">
      <div class="pa-0 pt-3" style="display: block; background: linear-gradient(to bottom, #C6D5C2, white)">
        <h2 style="font-weight: 600; font-size: 30px; font-family: 'InterVariable';" class="ml-12 my-5">
          Professional & Academic Engagement
        </h2>
        <ul class="ml-16">
          <li> Member of Scientific Association of Computer Engineering and Artificial Intelligence, Azad
            University of Tabriz.
          </li>
          <li id="publication"> Member of Scientific Association of Telemedicine and Artificial Intelligence, Tabriz
            University of
            Medical Sciences.
          </li>
          <li> Academic Achievement: Ranked second-best student in the Computer Engineering and Information Technology
            Department at Azad University of
            Tabriz.
          </li>
        </ul>
      </div>

      <v-divider style="margin-right: 500px; background-color: gray" class="mb-0"></v-divider>

      <div style="background: linear-gradient(to bottom, #F2EFEF, white)" class="pt-3">

        <h2 style="font-weight: 600; font-size: 30px; font-family: 'InterVariable'" class="ml-12 my-7">
          Publications
        </h2>

        <ul class="ml-16">
          <li class="mb-6">
            LDCNN: A new technique for Arrhythmia Detection from ECG signals using Linear Deep Convolutional
            Neural Network.
          </li>
          <v-img src="../assets/Publication.jpg" height="250px" width="560" style="border: 2px solid black"
                 class="mb-15" id="projects"/>
        </ul>
      </div>
      <v-divider style="margin-right: 500px; background-color: gray" class="mb-0"></v-divider>

      <div style="background: linear-gradient(to bottom, #C6D5C2, white);" class="pt-3">
        <h2 style="font-weight: 600; font-size: 30px; font-family: 'InterVariable'" class="ml-12 my-12">
          Projects & Researches
        </h2>
        <ul class="ml-16">
          <li> Diagnosis and classification of retinal diseases with deep learning algorithms.</li>
          <div style="display: flex">
            <v-img src="../assets/eye1.jpeg" style="max-height: 300px; max-width: 300px; margin-right: 50px;"/>
            <v-img src="../assets/eye2.jpg" style="max-height: 300px; max-width: 300px"/>
          </div>

          <li class="mt-10"> Presentation: Neuralink</li>
          <v-img src="../assets/neuralink.png" style="max-width: 300px; max-height: 300px" class="ma-5"/>

          <li> Home Delivery Food System Application. &nbsp;
            <a href="https://alibayani.online/upload/Ali_Bayani_&_Parsa_Khattat._Version_7.pdf"> Download
              PDF </a></li>

          <li> Presentation: Familiarity with the concepts of classification and clustering.</li>

          <li> Liquid Neural Networks</li>

          <li> LDCNN: A new technique for Arrhythmia Detection from ECG signals using Linear Deep Convolutional Neural
            Network.
          </li>
          <v-img src="../assets/CNN_Arc.png" style="max-width: 1250px"/>
        </ul>
        <div id="resume"></div>
      </div>

      <v-divider style="margin-right: 500px; background-color: gray"></v-divider>

      <div style="background: linear-gradient(to bottom, #F2EFEF, white)" class="pt-3">
        <h2 style="font-weight: 600; font-size: 30px; font-family: 'InterVariable'" class="ml-12 my-5">
          Resume
        </h2>
        <a class="ml-16 mt-16" href="https://alibayani.online/upload/Site_Resume.pdf"> Download Resume. </a>
      </div>
      <v-divider class="mt-12" style="margin-right: 500px; background-color: gray"></v-divider>

      <div style="background: linear-gradient(to bottom, #C6D5C2, white)" class="pt-3">
        <h2 style="font-weight: 600; font-size: 30px; font-family: 'InterVariable'" class="ml-12 my-5" id="contact">
          Contact
        </h2>

        <ul class="ml-16">
          <li>
            <v-icon size="35px" color="red"> mdi-email-arrow-right</v-icon>
            Gmail: <a href="mailto:aliwbayani@gmail.com">aliwbayani@gmail.com</a></li>
          <li>
            <v-icon size="35px" color="red"> mdi-email-arrow-right</v-icon>
            Email: <a href="mailto:alibayani@iaut.ac.ir">alibayani@iaut.ac.ir</a></li>
          <li>
            <v-icon size="35px" color="#171515 "> mdi-github</v-icon>
            Github : <a href="https://github.com/aliebayani"> aliebayani </a></li>
          <li>
            <v-icon size="35px" color="#0072b1"> mdi-linkedin</v-icon>
            Linkedin : <a href="https://www.linkedin.com/in/ali-bayani-a13505209"> Ali Bayani </a></li>
          <li>
            <icon icon="devicon:kaggle" style="max-height: 45px; width: 45px; margin-bottom: 10px; margin-right: -10px;
                 margin-left: -5px; vertical-align: middle"></icon>
            Kaggle: <a href="https://www.kaggle.com/alibyni"> alibyni </a></li>
        </ul>

      </div>

      <v-divider style="margin-right: 500px; background-color: gray"></v-divider>


    </div>
  </v-container>
</template>

<script>

import {Icon} from '@iconify/vue2';

export default {
  name: "resumePage",

  data() {
    return {
      colsCount: 2,
      marginTop: 0,
      abilities: [
        {course: 'java'},
        {course: 'JS'},
        {course: 'Deep learning'},
        {course: 'Machine learning'},
        {course: 'AI'}
      ],
    }
  },
  computed: {
    marginRight() {
      if (this.$vuetify.breakpoint.sm) {
        return 'auto'
      }
      if (this.$vuetify.breakpoint.md) {
        return '10%'
      }
      if (this.$vuetify.breakpoint.lg) {
        return '20%'
      } else {
        return "auto"
      }
    },
    height() {
      if (this.$vuetify.breakpoint.xs) {
        return '450px'
      }
      if (this.$vuetify.breakpoint.sm) {
        return '500px'
      }
      if (this.$vuetify.breakpoint.md) {
        return '90%'
      }
      if (this.$vuetify.breakpoint.lg) {
        return '90%'
      } else {
        return "auto"
      }
    },

    width() {
      if (this.$vuetify.breakpoint.xs) {
        return '90%'
      }
      if (this.$vuetify.breakpoint.sm) {
        return '45%'
      }
      if (this.$vuetify.breakpoint.md) {
        return '28%'
      }
      if (this.$vuetify.breakpoint.lg) {
        return '28%'
      }
    },
  },
  methods: {
    cardColor() {
      const color = Math.floor(Math.random() * 5)
      const colors = ['#FE5B02', '#9E9E9E', '#F24C3D', '#FF7043', '#212121']
      return colors[color]
    },
  },
  components: {
    Icon,
  },
}
</script>

<style scoped>

* {
  font-family: 'verdana' !important;
}

li {
  font-size: 17px !important;
  margin-bottom: 30px !important;
}


@media (max-width: 960px) {

  .biography-text {
    line-height: 2.7rem;
    font-size: 20px;
    width: fit-content;
  }

  .bioRow {
    border-radius: 25px 25px 25px 25px;
  }

  .bioCol {
    /*height: 900px!important;*/
    border-radius: 0 0 25px 25px;
  }

  .img {
    border-radius: 25px 25px 0 0;
    max-height: 600px;
    background-position: top center;
  }

}

@media (min-width: 960px) {

  .biography-text {
    line-height: 2.3rem;
    font-size: 17px;
    width: fit-content;

  }

  .bioRow {
    border-radius: 25px 25px 25px 25px;
  }

  .img {
    border-radius: 25px 0 0 25px;
    max-height: 555px;
    height: 555px;
  }

  .imgCol {
    border-radius: 25px 0 0 25px;
  }

  .bioCol {
    padding-top: 25px;
    border-radius: 0 25px 25px 0;
    max-height: 555px;
    height: 555px;
    overflow-y: auto;
  }

  .biography-text {
    border-radius: 0 25px 25px 0;

  }
}


.article ul li {
  margin-bottom: 15px;
}

.article ul li:last-child {
  margin-bottom: 3px;
}


</style>