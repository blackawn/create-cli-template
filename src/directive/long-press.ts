type Binding = {
  value: {
    mousedownCallback: (event: MouseEvent) => void
    mouseupCallback: (event: MouseEvent) => void
    mouseleaveCallback: (event: MouseEvent) => void
    time: number
  }
}

export const longPress = ((element: HTMLElement, binding: Binding) => {
  let timer: NodeJS.Timer | null = null;
  element.addEventListener('mousedown', (event: MouseEvent) => {
    timer = setTimeout(() => {
      event.preventDefault();
      binding.value.mousedownCallback?.(event);
    }, (binding.value.time || 1000));
  });
  element.addEventListener('mouseup', (event: MouseEvent) => {
    if (timer) {
      clearTimeout(timer);
      event.preventDefault();
      binding.value.mouseupCallback?.(event);
    }
  });
  element.addEventListener('mouseleave', (event: MouseEvent) => {
    if (timer) {
      clearTimeout(timer);
      event.preventDefault();
      binding.value.mouseleaveCallback?.(event);
    }
  });
});
