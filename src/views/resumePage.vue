<template>
  <v-container fluid>
    <v-row>
      <!-- Left Sidebar -->
      <v-col cols="12" md="2">
        <div class="sidebar">
          <!-- Square-ish Profile Picture -->
          <v-img
              src="../assets/ali-bayani.jpg"
              class="profile-pic"
          ></v-img>

          <h3 class="name-heading" style="text-align: center">Ali Bayani</h3>
          <!-- Smaller subtitle text -->
          <p class="subtitle" style="text-align: center">
            Computer Engineer
          </p>
          <br>
          <!-- Social / Quick Links -->
          <ul class="sidebar-links">
            <li>
              <a href="https://github.com/aliebayani" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=bACdbPYAAAAJ&hl=en" target="_blank">
                Google Scholar
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ali-bayani-a13505209" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/alibyni" target="_blank">
                Kaggle
              </a>
            </li>
            <li>
              <a href="mailto:aliwbayani@gmail.com" target="_blank">
                Gmail
              </a>
            </li>
            <li>
              <a href="mailto:alibayani@iaut.ac.ir" target="_blank">
                Email
              </a>
            </li>
          </ul>
        </div>
      </v-col>

      <!-- Main Content Area -->
      <v-col cols="12" md="9">
        <!-- Home / Intro Section -->
        <section id="home" class="my-5">
          <h1>Welcome to Ali Bayani's Academic Website</h1>
          <p>
            I'm Ali Bayani, a computer engineer and researcher specializing in artificial intelligence, machine learning, and cognitive science.
          </p>
        </section>

        <!-- About Me -->
        <section id="bio" class="my-5">
          <h2>About Me</h2>
          <h3>Education</h3>
          <p>
            B.Sc. in Computer Engineering from Islamic Azad University, Tabriz Branch (GPA: 3.74/4).
          </p>

          <h3>Research & Academic Experience</h3>
          <p>
            I am currently focused on researching and writing research and conference papers in the fields of computer science, artificial intelligence, and software engineering. Since 2023, I have contributed to several research publications and conferences in these areas.
          </p>

          <h3>Research Interests</h3>
          <p>
            Computer Science &ensp; | &ensp; Artificial Intelligence &ensp; | &ensp; Machine Learning &ensp; | &ensp; Cognitive Science
          </p>
        </section>

        <!-- Publications -->
        <section id="publications" class="my-5">
          <h2>Publications</h2>
          <ul>
            <li>
              LDCNN: A New Arrhythmia Detection Technique with ECG Signals Using a Linear Deep Convolutional Neural Network <br> <i> Ali Bayani, Masoud Kargar. Physiological Reports, Vol. 12, No. 17 (2024), Article e16182. </i> [<a href="https://doi.org/10.14814/phy2.16182" target="_blank">Link</a>]
            </li>
            <br>
            <li>
              A Consulting System for Portfolio Assets Allocation by Selecting the Best Agent in the Short Term Based on Cumulative Returns with Deep Reinforcement Learning <br> <i> Shahin Sharbaf Movassaghpour, Masoud Kargar, Ali Bayani, Alireza Assadzadeh, Ali Khakzadi. 2024 11th International Symposium on Telecommunications (IST), pp. 141-149, IEEE, 2024. </i> [<a href="http://dx.doi.org/10.1109/IST64061.2024.10843551" target="_blank">Link</a>]
            </li>
            <br>
            <li>
              Integrating CNN-LSTM Networks with Statistical Filtering Techniques for Intelligent IoT Intrusion Detection <br> <i> Fatemeh Imani, Masoud Kargar, Alireza Assadzadeh, Ali Bayani. 2024 8th International Conference on Smart Cities, Internet of Things and Applications (SCIoT), pp. 189-195, IEEE, 2024. </i> [<a href="http://dx.doi.org/10.1109/SCIoT62588.2024.10570107" target="_blank">Link</a>]
            </li>
            <br>
            <li>
              TransGAN-DX: A Hybrid Transformer-GAN Approach for Enhanced Cardiovascular Disease Diagnosis <br> <i> Ali Bayani, Masoud Kargar, Parmida Kargar, Ehsan Samadian. Published on January 10, 2025. American Hospital & Healthcare Management. </i> [<a href="https://www.americanhhm.com/researchinsights/transgan-dx-a-hybrid-transformer-gan-approach-for-enhanced-cardiovascular-disease-diagnosis" target="_blank">Link</a>]
            </li>
          </ul>
        </section>

        <section id="Magazine" class="my-5">
          <h2>Magazine (Interview Article)</h2>
          <ul>
            <li>
              <p>
                <strong>AI-Driven Innovations in Cardiovascular Diagnostics and Remote Care</strong><br>
                <em>Asian Hospital & Healthcare Management. Issue 67, 2025.</em> [<a href="https://www.asianhhm.com/magazine" target="_blank">Link</a>]
              </p>
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQE-iK9nmxs4YQ/feedshare-shrink_1280/B4DZT6xARfG4Ak-/0/1739373950760?e=1743033600&v=beta&t=1fazdNjbwaWmIbSl7FXKX0nerFKaIYsY5RHWMjvWp3I" alt="AI-Driven Innovations in Cardiovascular Diagnostics" style="width: 9cm; height: 11cm;" class="mx-auto rounded-lg shadow-md">
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQHyNDXSKYwLcg/feedshare-shrink_2048_1536/B4DZT6xARSGkAo-/0/1739373951591?e=1743033600&v=beta&t=xzhuWtCQkOy9WNnk5mUvCcAe4APpWJXXIIIHnavD6uQ" alt="AI-Driven Innovations in Cardiovascular Diagnostics" style="width: 16cm; height: 11cm;" class="mx-auto rounded-lg shadow-md">
            </li>
          </ul>
        </section>


        <!-- CV Section -->
        <section id="cv" class="my-5">
          <h2>My CV</h2>
          <p>
            <a href="https://alibayani.online/upload/CV.pdf" target="_blank">
              Download CV
            </a>
          </p>
        </section>

        <!-- Contact -->
        <section id="contact" class="my-5">
          <h2>Contact</h2>
          <ul>
            <li>
              Gmail: <a href="mailto:aliwbayani@gmail.com">aliwbayani@gmail.com</a>
            </li>
            <li>
              Email: <a href="mailto:alibayani@iaut.ac.ir">alibayani@iaut.ac.ir</a>
            </li>
          </ul>
        </section>
        <br>
        <p style="text-align: center">&copy; 2025 Ali Bayani. All rights reserved.</p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "resumePage"
};
</script>

<style scoped>
/* Sidebar styling */
.sidebar {
  text-align: left;
  border-right: 1px solid #ccc;
  padding: 1rem;
  height: 100%;
}

.profile-pic {
  width: 180px;
  height: 180px;
  object-fit: cover; /* So it stays square/cropped */
  border-radius: 5px; /* Slightly rounded corners */
}

/* Name heading under the picture */
.name-heading {
  margin-top: 1rem;
  font-size: 1.5rem; /* reduced size from something bigger */
  font-weight: 600;
}

/* Smaller subtitle text below the name */
.subtitle {
  font-size: 1.1rem; /* reduce to fit better */
  line-height: 1.3;
  margin-bottom: 1rem;
  color: #666; /* subtle gray if desired */
}

/* Social / Quick Links */
.sidebar-links {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.sidebar-links li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem; /* also smaller */
}

/* Headings & spacing */
h1, h2, h3 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.4rem;
  margin-top: 2rem;
}

h3 {
  font-size: 1.1rem;
  margin-top: 1rem;
}

p, li {
  font-size: 16px;
  line-height: 1.6;
}

/* Links */
a {
  color: #000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
