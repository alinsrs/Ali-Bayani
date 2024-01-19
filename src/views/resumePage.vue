<template>
  <v-container fluid class="ma-0" style="padding-left: 200px; padding-right: 200px">
    <div style="height: 15vh; display: block;" id="bio"></div>


    <v-row class="mx-0 bioRow mb-6" style="background-color: antiquewhite;" id="bio">
      <v-col cols="12" lg="4" md="5" class="pa-0 imgCol">
        <v-img src="../assets/ali-bayani.jpg" class="img"/>
      </v-col>
      <v-col cols="12" lg="8" md="7" style="background-color: antiquewhite;" class="bioCol">
          <div class="mx-4 biography-text mb-3" style="font-size: 22px; "> Biography </div>
        <div class="mx-4 biography-text">
         <div class="mb-3">Welcome! &nbsp I am Ali Bayani, a recent graduate with a Bachelor's degree in Computer Engineering.
          <br> Graduating in August 2023 from Azad University of Tabriz with a Bachelor's degree, I specialized in
             Artificial Intelligence.
          Achieving a GPA of 3.74 out of 4 and securing the second-highest GPA in the whole Computer
          Engineering and Information Technology Department. </div>
            <div class="mb-3"> I am a dedicated member of both the Scientific Association
          of Computer Engineering and Artificial Intelligence at my university and the Scientific Association of
          Telemedicine and Artificial Intelligence at Tabriz University of Medical Sciences. </div>
          <div> My profound passion lies in
          Machine Learning, Deep Learning, Generative AI, Human-Centered AI, and Artificial General Intelligence (AGI).
          </div>
        </div>
        <div id="publication"></div>
      </v-col>
    </v-row>


    <div class="mt-2 article pa-0 ma-0">

      <div style="background: #F2EFEF; border-radius: 20px 20px 0 0" class="pt-3 pb-1">

        <h2 style="font-weight: 600; font-size: 22px; font-family: 'InterVariable'" class="ml-12 my-7">
          Publications
        </h2>

        <ul class="ml-16">
          <li class="mb-6">
            LDCNN: A new technique for Arrhythmia Detection from ECG signals using Linear Deep Convolutional
            Neural Network.
          </li>
          <v-img src="../assets/Publication.jpg" height="190px" width="425.6px" style="border: 2px solid black"
                  id="projects"/>
        </ul>
      </div>

        <div style="background: #F2EFEF;" class="pt-2 pb-2 mb-0">
        <h2 style="font-weight: 600; font-size: 22px; font-family: 'InterVariable'" class="ml-12 my-6">
          Projects & Researches
        </h2>
        <ul class="ml-16">
          <li> Diagnosis and classification of retinal diseases with deep learning algorithms.</li>
          <div style="display: flex">
            <v-img src="../assets/eye1.jpeg" style="max-height: 200px; max-width: 250px; margin-right: 50px;"/>
            <v-img src="../assets/eye2.jpg" style="max-height: 200px; max-width: 250px"/>
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
          <v-img src="../assets/CNN_Arc.png" style="max-width: 900px"/>

          <li>
              Protein structure prediction using deep learning methods
          </li>
        </ul>
        <div id="resume"></div>
      </div>

      <div style="background: #F2EFEF;" class="py-2 mp-0">
        <p style="font-weight: 600; font-size: 22px; font-family: 'InterVariable'" class="ml-12 mb-3-5">
          Resume <a class="ml-16 mt-16" style="font-size: 15px" href="https://alibayani.online/upload/Site_Resume.pdf"> Download Resume </a>
        </p>
      </div>

      <div style="background: #F2EFEF; border-radius: 0 0 20px 20px" class="py-3">
        <h2 style="font-weight: 600; font-size: 22px; font-family: 'InterVariable'" class="ml-12 my-5" id="contact">
          Contact
        </h2>

        <ul class="ml-16" style="display: flex; list-style: none">
          <li>
            <v-icon size="30px" color="red" class="mr-2"> mdi-email-arrow-right</v-icon>
            <a href="mailto:aliwbayani@gmail.com">aliwbayani@gmail.com</a></li>
          <li  class="ml-8">
            <v-icon size="30px" color="red" class="mr-2"> mdi-email-arrow-right</v-icon>
            <a href="mailto:alibayani@iaut.ac.ir">alibayani@iaut.ac.ir</a></li>
          <li  class="ml-8">
            <v-icon size="30px" color="#171515" class="mr-2"> mdi-github</v-icon>
            <a href="https://github.com/aliebayani"> aliebayani </a></li>
          <li  class="ml-8">
            <v-icon size="30px" color="#0072b1" class="mr-2"> mdi-linkedin</v-icon>
            <a href="https://www.linkedin.com/in/ali-bayani-a13505209"> Ali Bayani </a></li>
          <li  class="ml-8">
            <icon icon="devicon:kaggle" style="max-height: 50px; width: 50px; margin-bottom: 10px; margin-right: -13px;
                 margin-left: -5px; vertical-align: middle"></icon>
            <a href="https://www.kaggle.com/alibyni"> alibyni </a></li>
        </ul>

      </div>

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

body a{
    color: #546E7A!important;
}


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
    max-height: 450px;
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
    max-height: 450px;
  }

  .imgCol {
    border-radius: 25px 0 0 25px;
  }

  .bioCol {
    padding-top: 25px;
    border-radius: 0 25px 25px 0;
    max-height: 450px;
    height: 450px;
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