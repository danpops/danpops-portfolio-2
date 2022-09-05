const breakpoints = {
  xs: 375,
  sm: 390,
  md: 768,
  lg: 1280
}

const devices = {
  xs: `(max-width: ${breakpoints.xs}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`
}

export default devices
export { breakpoints }
