<template>
  <div class="w-full">
    <Navbar></Navbar>
    <div class="min-h-86vh w-full">
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
.nuxt-content-container h2 {
  font-size: 1.5em;
  padding: 10px 0;
}

.nuxt-content-container h1 {
  font-size: 2em;
}

.nuxt-content-container h3 {
  font-size: 1em;
  padding: 5px 0;
}

.nuxt-content-container h4 {
  font-size: 1em;
  padding: 3px 0;
  font-weight: 400;
}

.nuxt-content a {
    color:blue;
}


@media screen and (min-width: 1024px) {
  .nuxt-content-container {
    max-width: 968px;
    margin: 0 auto;
  }
}
</style>

<script></script>
