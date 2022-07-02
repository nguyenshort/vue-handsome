<template>
  <div class="preview-block">
    <h4>{{ title }}</h4>
    <div class="preview-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<style scoped lang="sass">
.preview-block
  max-width: 600px
  margin: 0 auto
  padding: 20px
  background: white
  h4
    font-size: 1.2rem
    margin: 0
  .preview-container
    margin-top: 20px
    display: flex
    justify-content: center
    flex-wrap: wrap
</style>
