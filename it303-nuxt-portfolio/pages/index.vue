
<script setup lang="ts">
const projects = [
  {
    title: 'Jetroh Salazar',
    description: 'A personal website built to present my profile and development skills.',
    stack: ['Nuxt 3', 'Vue', 'CSS'],
    link: ''
  },
  {
    title: 'IT303 Course Project',
    description: 'A web project created to apply what I learned in class.',
    stack: ['Git & GitHub', 'Nuxt 3'],
    link: ''
  },
  {
    title: 'Student Web Application',
    description: 'A simple application focused on usability and responsive design.',
    stack: ['HTML', 'CSS', 'Vue'],
    link: ''
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
        <p class="eyebrow">IT STUDENT & ASPIRING DEVELOPER</p>

        <h1>
          Hello, I'm <span>Jetroh Salazar.</span>
        </h1>

        <p class="hero-copy">
          I create simple and responsive websites while learning modern web development.
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

        <h2>Learning. Building. Improving.</h2>

        <p class="section-description">
          I'm Jetroh Salazar, an IT student passionate about creating websites. 
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
          class="contact-link"
          href="mailto:your.email@example.com"
        >
          Contact Me ↗
        </a>
      </div>
    </section>
  </main>
</template>
