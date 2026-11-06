
<script setup lang="ts">
const projects = [
  {
    title: 'Personal Portfolio',
    description: 'My personal website.',
    stack: ['HTML', 'Vue', 'CSS'],
    link: 'https://jetroh-salazar-portfolio.onrender.com/'
  },
  {
    title: 'Simple Landing Page',
    description: 'A clean and simple webpage.',
    stack: ['HTML', 'CSS'],
    link: 'https://simple-landing-page-jiro.netlify.app/'
  },
  {
    title: 'Login Page Design',
    description: 'A basic login page with a simple layout.',
    stack: ['Figma', 'UI Design'],
    link: 'https://dribbble.com/'
  }
]

const skills = [
  'HTML & CSS',
  'JavaScript',
  'Vue.js',
  'Nuxt 3',
  'Git & GitHub'
]
</script>

<template>
  <main>
    <!-- Home -->
    <section class="hero section" id="home">
      <div class="container">
        <p class="eyebrow">IT STUDENT & Web Designer</p>

        <h1>
          Hello, I'm <span>Jetroh Salazar</span>
        </h1>

        <p class="hero-copy">
          I'm a web designer who creates clean, modern, and responsive website designs with a focus on user experience and visual creativity.
        </p>

        <div class="hero-actions">
          <NuxtLink class="button button-dark" to="#projects">
            View Projects ↘
          </NuxtLink>

          <NuxtLink class="button button-light" to="#contact">
            Contact Me
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="section" id="about">
      <div class="container">
        <p class="eyebrow">ABOUT ME</p>

        <h2>Learning. Designing . Improving.</h2>

        <p class="section-description">
          an IT student passionate about creating websites. 
          I believe in continuous learning, experimenting with ideas, and becoming better with every project.
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section class="section" id="projects">
      <div class="container">
        <p class="eyebrow">MY WORK</p>
        <h2 class="section-title">Projects</h2>

        <div class="projects-grid">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="section" id="skills">
      <div class="container">
        <p class="eyebrow">MY SKILLS</p>
        <h2 class="section-title">Technologies I use</h2>

        <div class="skills-grid">
          <span
            v-for="skill in skills"
            :key="skill"
            class="skill"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact" id="contact">
      <div class="container">
        <h2>Let's connect.</h2>

        <p>
          Feel free to reach out for projects or learning opportunities.
        </p>

       <a
  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jetroh22@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  class="contact-btn"
>
  Contact Me
</a>
      </div>
    </section>
  </main>
</template>
