<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.special-font {
  font-family: 'Major Mono Display', monospace;
}

body {
  font-family: 'Inconsolata', monospace;
  margin: 0;
}

a {
  text-decoration: none;
}

.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
</style>