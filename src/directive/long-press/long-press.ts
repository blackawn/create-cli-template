import { Binding } from './types'

export const longPress = ((element: HTMLElement, binding: Binding) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  element.addEventListener('mousedown', (event: MouseEvent) => {
    timer = setTimeout(() => {
      event.preventDefault()
      binding.value.mousedownCallback?.(event)
    }, (binding.value.time || 1000))
  })
  element.addEventListener('mouseup', (event: MouseEvent) => {
    if (timer) {
      clearTimeout(timer)
      event.preventDefault()
      binding.value.mouseupCallback?.(event)
    }
  })
  element.addEventListener('mouseleave', (event: MouseEvent) => {
    if (timer) {
      clearTimeout(timer)
      event.preventDefault()
      binding.value.mouseleaveCallback?.(event)
    }
  })
})
