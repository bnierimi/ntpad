export function mkId() {
  // new Date().getTime()
  return Math.random().toString(36).slice(2)
}