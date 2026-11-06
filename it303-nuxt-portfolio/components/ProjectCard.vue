
<script setup lang="ts">
defineProps<{
  title: string
  description: string
  stack: string[]
  link?: string
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-topline">
      <span class="project-number">PROJECT</span>
      <span>↗</span>
    </div>

    <h3>{{ title }}</h3>

    <p>{{ description }}</p>

    <div class="project-tags">
      <span v-for="technology in stack" :key="technology">
        {{ technology }}
      </span>
    </div>

    <a
      v-if="link"
      :href="link"
      target="_blank"
      rel="noreferrer"
      class="project-link"
    >
      View project ↗
    </a>
  </article>
</template>
