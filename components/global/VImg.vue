<template>
  <picture class="image mx-auto">
    <img
      :src="imgSrc"
      :alt="alt"
      draggable="false"
      :class="classe"
    >
  </picture>
</template>

<script>
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    classe: {
      type: String,
      required: false
    }
  },
  computed: {
    imgSrc () {
      return require(`~/assets/${this.src}`)
    }
  }
}
</script>

<!-- <style lang="scss" scoped>
picture {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: contain;
    padding-bottom: 1rem;
  }
}
</style> -->