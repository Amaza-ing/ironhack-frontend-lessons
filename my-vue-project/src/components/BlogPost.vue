<template>
  <h2>{{ title }}</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum adipisci libero veniam quae illo.</p>
  <div class="blog-slot">
    <slot>
      <p>nada más que decir.</p>
    </slot>
  </div>
  <slot name="endWords"></slot>

</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
.blog-slot ul {
  list-style: none;
}
</style>