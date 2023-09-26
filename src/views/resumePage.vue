<template>
    <v-container fluid class="pt-0 mt-10">
        <div class="justify-center mx-auto ml-12"
             style="font-size: 35px; font-weight: 700;">
            <h1 style="line-height: 3rem; font-size: 35px; font-weight: 700" class="mb-12">
                Ali Bayani
            </h1>
        </div>


        <v-row class="mx-8 bioRow mb-16" style="background-color: antiquewhite;">
            <v-col cols="12" lg="4" md="5" class="pa-0 imgCol">
                <v-img src="../assets/ali-bayani.jpg" class="img"/>
            </v-col>
            <v-col cols="12" lg="8" md="7" style="background-color: antiquewhite;" class="bioCol">
                <div class="mx-4 biography-text" align="justify">
                    I am Ali Bayani, 22 years old, a recent graduate with a bachelor's degree in Computer Engineering
                    from Tabriz, Iran.
                    Graduating in August 2023 from Azad University of Tabriz with a bachelor's degree, I specialized in
                    Artificial Intelligence.
                    Achieving a commendable GPA of 3.74 out of 4 and securing the second-highest rank in the Computer
                    Engineering and Information
                    Technology department, I am a dedicated member of both the Scientific Association of Computer
                    Engineering and Artificial Intelligence
                    at my university and the Scientific Association of Telemedicine and Artificial Intelligence at
                    Tabriz University of Medical Sciences.
                    My profound passion lies in Machine Learning, Deep Learning, Artificial General Intelligence,
                    Human-Centered AI, and Machine-Centered AI.
                    In my pursuit of excellence, I have proposed innovative techniques, including a paper on heart
                    disease diagnosis through
                    Deep Learning, while consistently collaborating with AI professors daily. My unwavering goal is to
                    emerge as a preeminent figure in the
                    global AI research community, driven by the conviction that I possess the potential to make a
                    substantial impact in this field.
                </div>
            </v-col>
        </v-row>


        <div class="mt-2 article">
            <h2 style="font-weight: 600; font-size: 33px; font-family: 'InterVariable'" class="ml-12 my-5">
                Professional & Academic Engagement
            </h2>
            <ul class="ml-16">
                <li> Member of Scientific Association of Computer Engineering and Artificial Intelligence, Azad
                    University of Tabriz.
                </li>
                <li> Member of Scientific Association of Telemedicine and Artificial Intelligence, Tabriz University of
                    Medical Sciences.
                </li>
                <li> Academic Achievement: Ranked second in the Computer Engineering department at Azad University of
                    Tabriz.
                </li>

            </ul>

            <v-divider style="margin-right: 500px; background-color: gray"></v-divider>

            <h2 style="font-weight: 600; font-size: 33px; font-family: 'InterVariable'" class="ml-12 my-7">
                Publications
            </h2>

            <ul class="ml-16">
                <li class="mb-6">
                    LDCNN: A new technique for Arrhythmia Detection from ECG signals using Linear Deep Convolutional
                    Neural Network.
                </li>
                <v-img src="../assets/Publication.jpg" height="250px" width="560" style="border: 2px solid black"
                       class="mb-5"/>
            </ul>

            <v-divider style="margin-right: 500px; background-color: gray"></v-divider>


            <h2 style="font-weight: 600; font-size: 33px; font-family: 'InterVariable'" class="ml-12 my-12">
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

                <li> Home Delivery Food System Application. &nbsp; <a
                        href="https://alibayani.online/upload/Ali_Bayani_&_Parsa_Khattat._Version_7.pdf"> Download
                    PDF </a></li>

                <li> Presentation: Familiarity with the concepts of classification and clustering. </li>

                <li> Liquid Neural Networks </li>

                <li> LDCNN: A new technique for Arrhythmia Detection from ECG signals using Linear Deep Convolutional Neural Network. </li>
                    <v-img src="../assets/CNN_Arc.png"  style="max-width: 1250px"/>
            </ul>

            <v-divider style="margin-right: 500px; background-color: gray"></v-divider>


            <h2 style="font-weight: 600; font-size: 33px; font-family: 'InterVariable'" class="ml-12 my-5">
                Resume
            </h2>


            <v-divider style="margin-right: 500px; background-color: gray"></v-divider>


            <h2 style="font-weight: 600; font-size: 33px; font-family: 'InterVariable'" class="ml-12 my-5">
                Contact
            </h2>

            <ul class="ml-16">
                <li> Gmail: <a href="mailto:aliwbayani@gmail.com">aliwbayani@gmail.com</a> </li>
                <li> Linkedin: <a href="https://www.linkedin.com/in/ali-bayani-a13505209"> Ali Bayani  </a> </li>
                <li> Github: <a href="https://github.com/aliebayani"> aliebayani </a> </li>
                <li> Kaggle: <a href="https://www.kaggle.com/alibyni"> alibyni </a> </li>
            </ul>



            <v-divider style="margin-right: 500px; background-color: gray"></v-divider>


        </div>
    </v-container>
</template>

<script>
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
    }
}
</script>

<style scoped>

* {
    font-family: 'verdana' !important;
}

li {
    font-size: 22px !important;
    margin-bottom: 30px!important;
}


@media (max-width: 960px) {

    .biography-text {
        line-height: 2.7rem;
        font-size: 22px;
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
    .sml {
        margin-left: 9%;
    }

    .biography-text {
        line-height: 2.5rem;
        font-size: 22px;
        width: fit-content;

    }

    .bioRow {
        border-radius: 25px 25px 25px 25px;
    }

    .img {
        border-radius: 25px 0 0 25px;
        max-height: 520px;
        height: 520px;
    }

    .imgCol {
        border-radius: 25px 0 0 25px;
    }

    .bioCol {
        padding-top: 25px;
        border-radius: 0 25px 25px 0;
        max-height: 520px;
        height: 520px;
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