<template>
  <button class="vm-button" :class="buttonClass" :style="design.style" @mousedown="onClickHandle($event)">
    <div class="vm-button__content">
      <slot></slot>
    </div>
    <div v-if="loading" class="vm-button__loading"></div>
  </button>
</template>

<script lang="ts" setup>

import {VmProps} from "@util/types/global";

interface VmButtonProps extends VmProps {
  color?: string
  danger?: boolean
  success?: boolean
  warn?: boolean
  primary?: boolean
  active?: boolean

  ripple?: 'reverse' | 'cut'
  flat?: boolean
  border?: boolean
  gradient?: boolean
  relief?: boolean
  transparent?: boolean
  shadow?: boolean
  floating?: boolean
  icon?: boolean
  square?: boolean
  circle?: boolean
  size?: 'xl' | 'l' | 'default' | 'small' | 'mini'
  loading?: boolean
  upload?: boolean
  block?: boolean
}
const props = withDefaults(defineProps<VmButtonProps>(), {
  size: 'default'
})

import useDesign from "@composables/useDesign"
import {computed} from "vue";
import ripple, {rippleCut, rippleReverse} from "@util/ripple";
import {useCurrentElement} from "@vueuse/core";

const design = useDesign(props)

const buttonClass = computed(() => ([
  ...design.value.color,
  { [`vm-button--active`] : props.active },
  { [`vm-button--fff`] : props.color === '#fff' },
  { [`vm-button--size-${props.size}`] : props.size },
  { [`vm-button--loading`] : props.loading },
  { [`vm-button--upload`] : props.upload },
  { [`vm-button--block`] : props.block },

  { [`vm-button--default`] :
    !props.flat && !props.border && !props.gradient && !props.relief && !props.transparent && !props.shadow && !props.floating
  },
  { [`vm-button--flat`] : props.flat },
  { [`vm-button--border`] : props.border },
  { [`vm-button--gradient`] : props.gradient },
  { [`vm-button--relief`] : props.relief },
  { [`vm-button--transparent`]: props.transparent },
  { [`vm-button--shadow`]: props.shadow },
  { [`vm-button--floating`]: props.floating },
  { [`vm-button--icon`] : props.icon },
  { [`vm-button--square`] : props.square },
  { [`vm-button--circle`] : props.circle },
]))

const el = useCurrentElement()

const onClickHandle = (evt: EventTarget) => {
  if (props.ripple === 'reverse') {
    rippleReverse(evt)
  } else if (props.ripple === 'cut') {
    rippleCut(evt)
  } else {
    if (props.flat) {
      ripple(
          evt,
          (props.color || 'primary') &&
          !props.active &&
          document.activeElement !== el.value ? 'inherit' :
              null,
          props.flat && !props.active && document.activeElement !== el.value
      )
    } else {
      ripple(
          evt,
          null,
          false
      )
    }
  }
}

</script>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
  name: "VmButton"
})
</script>

<style lang="sass" src="./_style.sass"></style>
