export function cutId(id: string | undefined, len: number = 14) {
  if (id === undefined) {
    return id
  } else {
    return id.slice(14)
  }
}