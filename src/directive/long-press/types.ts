export interface Binding {
  value: {
    mousedownCallback: (event: MouseEvent) => void
    mouseupCallback: (event: MouseEvent) => void
    mouseleaveCallback: (event: MouseEvent) => void
    time: number
  }
}
