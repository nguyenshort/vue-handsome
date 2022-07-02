<template>
  <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
  >
    <div v-if="value" class="vm-alert" :class="elClass" :style="design.style">
      <!-- icon Slot -->
      <div v-if="$slots['icon']" class="vm-alert__icon" ref="iconRef">
        <slot/>
      </div>

      <!-- Slot title -->
      <div
          v-if="$slots['title']"
          class="vm-alert__title"
          :class="{
             'vm-alert__title--clickHidden': typeof hiddenContent === 'boolean'
          }"
          @click="handleClickHidden"
      >
        <slot name="title"/>

        <vm-icon-plus
            v-if="!closable && typeof hiddenContent === 'boolean'"
            :less="!hiddenContent"
        />

      </div>

      <!-- Content Slot -->
      <Transition
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
      >
        <div v-if="!hiddenContent" ref="contentRef" class="vm-alert__content">
          <div class="vm-alert__content__text">
            <slot></slot>
          </div>
        </div>
      </Transition>

      <!-- Close Button -->
      <button v-if="closable" class="vm-alert__close">
        <vm-icon-close @click="closable"/>
      </button>

      <!-- Fotter -->
      <div v-if="$slots['footer']" class="vm-alert__footer">
        <slot name="footer"/>
      </div>

    </div>
  </Transition>
</template>

<script lang="ts" setup>
import {VmProps} from "@util/types/global";
import {computed} from "vue";
import VmIconClose from "@icons/VmIconClose.vue";
import VmIconPlus from "@icons/VmIconPlus.vue";
import useDesign from "@composables/useDesign";

interface VmButtonProps extends VmProps {
  color?: string
  danger?: boolean
  success?: boolean
  warn?: boolean
  primary?: boolean
  active?: boolean

  solid?: boolean
  border?: boolean
  shadow?: boolean
  gradient?: boolean
  flat?: boolean
  relief?: boolean
  value?: any
  hiddenContent?: any
  closable?: boolean
}
const props = withDefaults(defineProps<VmButtonProps>(), {
  value: true
})

// Emit events
const emit = defineEmits<{
  (e: 'update:hiddenContent', value: any): void
}>()


const design = useDesign(props)
const elClass = computed(() => ([
  {[`vm-alert--solid`]: props.solid},
  {[`vm-alert--border`]: props.border},
  {[`vm-alert--shadow`]: props.shadow},
  {[`vm-alert--gradient`]: props.gradient},
  {[`vm-alert--flat`]: props.flat},
  {[`vm-alert--relief`]: props.relief},
  /*{[`vm-alert--pages`]: getPages.length > 0},*/

  // colors
    ...design.value.color
]))

// Toggle Button
const handleClickHidden = () => {
  emit('update:hiddenContent', !props.hiddenContent)
}

// Transion
const onBeforeEnter = (el: any) => {
  el.style.height = 0
}

const onEnter = (el: any, done: any) => {
  let h = el.scrollHeight
  el.style.height = h - 1 + 'px'
  done()
}

const onLeave = (el: any) => {
  el.style.minHeight = '0px'
  el.style.height = '0px'
}

</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "VmAlert"
})
</script>

<style lang="sass" src="./_style.sass" scoped></style>
