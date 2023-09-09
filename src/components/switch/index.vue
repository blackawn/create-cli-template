<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useElementResizeObserver } from '@/composables/useElementResizeObserver'

const props = defineProps({
  status: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(
  ['update:switch-status']
)

const refSwitchBar = ref<HTMLElement | null>(null)
const refSwitchDot = ref<HTMLElement | null>(null)

const { width: refSwitchBarWidth } = useElementResizeObserver(refSwitchBar)
const { width: refSwitchWidth } = useElementResizeObserver(refSwitchDot)

const switchStatus = ref<boolean>(props.status)
const isDuration = ref<boolean>(false)

const maxTranslateX = computed(() => {
  return (refSwitchBarWidth.value || 0) - (refSwitchWidth.value || 0)
})

const handleSwitchStatus = () => {
  isDuration.value = true
  switchStatus.value = !switchStatus.value
  emits('update:switch-status', switchStatus.value)
}

watch(() =>
  [
    props.status,
    maxTranslateX.value
  ],
(value, oldValue) => {
  switchStatus.value = value[0] as boolean
  if (value[1] !== oldValue[1]) {
    isDuration.value = false
  }
})

</script>
<template>
  <div
    ref="refSwitchBar"
    class="flex h-full cursor-pointer rounded-full border border-gray-300 p-0.5 duration-300 dark:border-neutral-600"
    :class="{ 'bg-gray-300 dark:bg-neutral-600': switchStatus }"
    @click="handleSwitchStatus"
  >
    <div
      ref="refSwitchDot"
      class="h-full w-3 rounded-full bg-gray-400 dark:bg-neutral-400"
      :class="{'duration-300':isDuration}"
      :style="{ transform:`translateX(${switchStatus?maxTranslateX:0}px)`}"
    />
  </div>
</template>
