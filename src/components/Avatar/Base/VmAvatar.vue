<template>
  <div class="vm-avatar-content" :style="elStyle" :class="elClass">

    <div v-if="loading" class="vm-avatar__loading">
      <div class="vm-avatar__loading__animate"></div>
    </div>

    <div
        class="vm-avatar"
        :class="{
           [`vs-avatar--letter--${getText.length}`]: getText.length > 2
        }"
    >
      {{ getText.join('') }}
      <slot></slot>
    </div>

    <slot name="badge">
      <div
          v-if="badge || writing"
          class="vm-avatar__badge"
          :class="{
            writing: writing,
            isSlot: $slots.isSlot,
            [badgePosition]: badgePosition
          }"
      >
        <div v-if="writing" class="vm-avatar__points">
          <div class="vm-avatar__points__point"></div>
          <div class="vm-avatar__points__point"></div>
          <div class="vm-avatar__points__point"></div>
        </div>
        <slot v-else name="badge"></slot>
      </div>
    </slot>

    <div v-if="groupData.inGroup && groupData.index === groupData.max - 1 && groupData.count" class="vm-avatar__latest">
      {{ `+${groupData.count - groupData.index - 1}` }}
    </div>

    <div v-if="$slots.icons" class="vm-avatar__icons">
      <slot name="icons"></slot>
    </div>

  </div>
</template>

<script lang="ts" setup>

import {VmProps} from "@util/types/global";
import useDesign from "@composables/useDesign";
import {computed, inject, nextTick, onMounted, reactive, Ref, useSlots} from "vue";
import {useCurrentElement} from "@vueuse/core";
import {setColor} from "@util/index";

interface VmButtonProps extends VmProps {
  color?: string
  danger?: boolean
  success?: boolean
  warn?: boolean
  primary?: boolean
  active?: boolean

  // in group
  // Thay thế slot text = prop
  text?: string

  badgePosition?: string
  size?: string
  pointer?: boolean
  // Shape
  circle?: boolean
  square?: boolean
  history?: boolean
  loading?: boolean
  historyGradient?: boolean
  writing?: boolean
  badge?: boolean
  badgeColor?: string
}
const props = withDefaults(defineProps<VmButtonProps>(), {
  text: ''
})

const design = useDesign(props)
const elStyle = computed(()=> ({
  ...design.value.style,
  width: `${props.size}px`,
  height: `${props.size}px`,
  cursor: props.pointer && 'pointer',
}))

const groupData = reactive({
  index: 0,
  max: 0,
  inGroup: false,
  count: 0
})

const slots = useSlots()
const elClass = computed(() => ([
  {
    'history': props.history,
    'history--gradient': props.historyGradient,
    'vm-avatar-content--circle': props.circle,
    'vm-avatar-content--square': props.square,
    'vm-avatar-content--hasIcons': slots.icons,
    'vm-avatar-content--size': props.size,
    'vm-avatar-content--hidden': groupData.inGroup && groupData.index >= groupData.max,
  },
  ...design.value.color
]))

const getText = computed(() => {
  let getLetters = [props.text]
  if (props.text.length > 5) {
    getLetters = props.text.split(/\s/g).map((item) => {
      return item[0]
    })
  }
  return getLetters
})

const el = useCurrentElement()

const count = computed(()=> {
  if(!groupData.inGroup) {
    return inject<Ref<any[]>>(Symbol.for('VM_AVATARS'))!.value.length
  }
  return 0
})


onMounted(() => {
  setColor('badge', props.badgeColor || '' , el.value)

  if(el.value.parentElement?.classList.contains('vm-avatar__group')) {
    const max = Number(el.value.parentElement.dataset.max)
    if(max) {
      const avatars = inject<Ref<any[]>>(Symbol.for('VM_AVATARS'))!
      groupData.index = avatars.value.length
      groupData.max = max
      avatars.value.push(el.value)

      if(groupData.index === groupData.max - 1) {
        nextTick(() => {
          groupData.count = el.value.parentElement!.querySelectorAll('.vm-avatar-content').length
        })
      }
    }
    groupData.inGroup = true
  }
})

</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VmAvatar"
})
</script>

<style lang="sass" src="./style.sass"></style>
