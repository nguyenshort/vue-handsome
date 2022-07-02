<template>
  <i :class="['vm-icon-plus', `vm-icon-hover-${hover}`]"></i>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'VmIconClose',
  props: {
    hover: { type: String, default: null }
  }
})

</script>

<style lang="sass" src="./icons.sass"></style>
