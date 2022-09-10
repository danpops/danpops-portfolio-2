export function getScrollPosition (): number {
  const scrollPx = document.documentElement.scrollTop
  const winHeightPx =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const position = (scrollPx / winHeightPx) * 100
  return position
}
