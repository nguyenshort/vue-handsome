<template>
  <i class="vm-icon-plus" :class="{ less: less }"></i>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'VmIconPlus',
  props: {
    less: {type: Boolean, default: false}
  }
})
</script>

<style lang="sass" src="./icons.sass"></style>
