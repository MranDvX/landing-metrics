export function saveToLocalStorage (key: string, data: any) {
  const serializedData = JSON.stringify(data)
  localStorage.setItem(key, serializedData)
}

export function getFromLocalStorage (key: string): any | null {
  const serializedData = localStorage.getItem(key)
  if (serializedData) {
    return JSON.parse(serializedData)
  }
  return null
}
