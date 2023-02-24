import { ref, isRef, onMounted, onUnmounted, watch } from 'vue';
import type { Ref } from 'vue';
import utils from '~/utils/utils';

export function useElementResizeObserver(element: Ref<HTMLElement | null> | HTMLElement) {

  const width = ref<number | null>(null);
  const height = ref<number | null>(null);

  const useResizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.contentBoxSize) {
        if (entry.contentBoxSize[0]) {
          width.value = entry.contentBoxSize[0].inlineSize;
          height.value = entry.contentBoxSize[0].blockSize;
        } else {
          width.value = (entry.contentBoxSize as unknown as ResizeObserverSize).inlineSize;
          height.value = (entry.contentBoxSize as unknown as ResizeObserverSize).blockSize;
        }
      } else {
        width.value = entry.contentRect.width;
        height.value = entry.contentRect.height;
      }
    }
  });

  function resizeObserver(element: Ref<HTMLElement | null> | HTMLElement) {
    const elem = isRef(element) ? element.value : element;
    if (utils.isElement(elem)) {
      useResizeObserver.observe(elem);
    }
  }

  function unResizeObserver(element: Ref<HTMLElement | null> | HTMLElement) {
    useResizeObserver.unobserve((isRef(element) ? element.value : element) as HTMLElement);
  }

  function dictionaryResizeObserver() {
    useResizeObserver.disconnect();
  }


  watch(() => (isRef(element) ? element.value : element), (newElement, oldElement) => {
    if (newElement) {
      if (oldElement) {
        unResizeObserver(oldElement);
      }
      resizeObserver(newElement);
    }
  });

  onMounted(() => {
    resizeObserver(element);
  });

  onUnmounted(() => {
    unResizeObserver(element);
  });

  return {
    width,
    height,
    resizeObserver,
    unResizeObserver,
    dictionaryResizeObserver
  };
}
