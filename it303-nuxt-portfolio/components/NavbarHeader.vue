<template>
  <header class="navbar">
    <!-- Click the name to return to homepage -->
    <NuxtLink class="brand" to="/">
      Jetroh S.
    </NuxtLink>

    <nav class="nav-links" aria-label="Main navigation">
      <NuxtLink to="/#about">About</NuxtLink>
      <NuxtLink to="/#projects">Projects</NuxtLink>
      <NuxtLink to="/#skills">Skills</NuxtLink>
      <NuxtLink to="/#contact">Contact</NuxtLink>
    </nav>
  </header>
</template>


.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 50px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}

.brand {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #6366f1;
}
