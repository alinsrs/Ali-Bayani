<template>
    <v-container fluid class="pt-0 mt-16">
        <!--    <v-row class="pa-0 ma-0 mb-16">-->
        <!--      <v-col cols="12" lg="6" md="6" order-md="1" order="2" order-lg="1"-->
        <!--             class="text-center pb-sm-5 mx-auto">-->
        <div class="justify-center mx-auto ml-10"
             style="font-size: 80px; font-weight: 700;
                          line-height: 6rem;">

            <div style="line-height: 6rem" class="mb-5">
                Ali Bayani
            </div>
        </div>


        <v-row class="mx-8 rounded-xl" style="background-color: antiquewhite; max-height: 600px">
            <v-col cols="12" lg="4" md="5" class="pa-0">
                <v-img src="../assets/ali-bayani.jpg" height="600" class="rounded-l-xl"/>
            </v-col>
            <v-col cols="12" lg="8" md="7">
                <div>

                </div>
            </v-col>
        </v-row>


        <!--        <v-row>-->
        <!--          <v-col cols="10" lg="5" md="5" sm="5" xs="5" v-for="(card, index) in abilities"-->
        <!--                 :key="index"-->
        <!--                 :style="{'background-color': cardColor()}"-->
        <!--                 class="px-2 ma-3 mx-auto"-->
        <!--                 style="color: white; font-size: 25px;-->
        <!--                          border-radius: 15px;-->
        <!--                          min-height: 85px;"-->
        <!--          >-->
        <!--            <div style="display: flex; height: 100%; align-items: center; justify-content: center;">-->
        <!--              {{ card.course }}-->
        <!--            </div>-->
        <!--          </v-col>-->
        <!--        </v-row>-->
        <!--      </v-col>-->
        <!--      <v-col cols="12" lg="6" md="6" order="1" order-md="2" order-lg="2" class="ma-0 pa-0">-->
        <!--        <div class="frame" :style="{'margin-right': marginRight, 'height': height}">-->
        <!--          <v-img src="../assets/ali-bayani-removed.png" class="image">-->
        <!--          </v-img>-->
        <!--        </div>-->
        <!--      </v-col>-->
        <!--    </v-row>-->


        <v-container fluid class="mt-16 ">
            <v-row class="text-h2 mb-10 ml-md-12 ml-lg-16 ml-sm-8 ml-6">
                Articles
            </v-row>
            <v-row class="ml-16">
                <ul class="ml-10">
                    <li class="overflow-x-visible">LDCNN: A new technique for Arrhythmia Detection from ECG signals
                        using Linear Deep Convolutional Neural Network.
                    </li>
                    <li>LDCNN: A new technique for Arrhythmia Detection from ECG signals using Linear Deep Convolutional
                        Neural Network.
                    </li>

                </ul>
            </v-row>

        </v-container>


        <v-container fluid>
            <v-row class="text-h2 mb-10 ml-md-12 ml-lg-16 ml-sm-8 ml-6 pb-1">
                Projects
            </v-row>
            <v-row class="justify-center mx-8">
                <v-col cols="12" lg="4" md="4" sm="6"
                       v-for="(project, index) in projects" :key="index"
                       class="my-3">
                    <v-card class="elevation-0" style="border: none;">

                        <v-img :src="project.picture" style="border-radius: 25px; max-width: 370px; max-height: 370px;"
                               class="mx-auto">
                        </v-img>
                        <v-card-title class="sml">
                            {{ project.title }}
                        </v-card-title>

                        <v-card-text class="sml">
                            {{ project.description }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

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
            articles: [
                {id: 1, picture: require('@/assets/test.jpg'), title: 'Article 1', description: 'Lorem Ipsum'},
                {id: 2, picture: require('@/assets/test.jpg'), title: 'Article 2', description: 'Lorem Ipsum'},
                {id: 3, picture: require('@/assets/test.jpg'), title: 'Article 3', description: 'Lorem Ipsum'},
                {id: 4, picture: require('@/assets/test.jpg'), title: 'Article 4', description: 'Lorem Ipsum'},
                {id: 5, picture: require('@/assets/test.jpg'), title: 'Article 5', description: 'Lorem Ipsum'},
            ],
            projects: [
                {id: 1, picture: require('@/assets/test.jpg'), title: 'Project 1', description: 'Lorem Ipsum'},
                {id: 2, picture: require('@/assets/test.jpg'), title: 'Project 2', description: 'Lorem Ipsum'},
                {id: 3, picture: require('@/assets/test.jpg'), title: 'Project 3', description: 'Lorem Ipsum'},
                {id: 4, picture: require('@/assets/test.jpg'), title: 'Project 4', description: 'Lorem Ipsum'},
                {id: 5, picture: require('@/assets/test.jpg'), title: 'Project 5', description: 'Lorem Ipsum'},
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

.frame {
    margin-left: auto;
    width: 400px;
    background: #FE5B02;
    clip-path: inset();
    border-radius: 0 0 50% 50%;
    overflow: hidden;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 900px) {
    .sml {
        margin-left: 5%;
    }
}

@media (min-width: 900px) {
    .sml {
        margin-left: 9%;
    }
}


</style>