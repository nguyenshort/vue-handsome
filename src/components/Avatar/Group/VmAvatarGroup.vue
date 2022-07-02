<template>
  <div :data-max="max" class="vm-avatar__group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import {provide, ref} from "vue";

defineProps<{
  max?: number
  float?: boolean
}>()

const avatars = ref([])
provide(Symbol.for('VM_AVATARS'), avatars)

</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VmAvatarGroup"
})
</script>

<style lang="sass" src="./style.sass"></style>
