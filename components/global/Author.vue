<template>
  <div>
    <div
        :style="icone"
        class="h-300px w-300px bg-cover transform hover:scale-110"
      ></div>

    <div>
      <h4>Author</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
import getImage from "../../libs/getImage";

  export default {
    props: {
      author: {
        ilustra: String,
        type: Object,
        required: true
      }
    },
    
    data() {
    return {
      icone: getImage(this.image, true),
    }
    }

  }
</script>