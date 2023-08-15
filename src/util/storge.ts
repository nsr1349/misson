const storage = window.localStorage
export const setItem = (key:string, value:any) => {
  try {
    storage.setItem(key,value)
  } catch(e) {
    console.log(e)
  }
}
export const getItem = (key:string, defaultValue:any) => {
  try {
    const storedValue = storage.getItem(key)

    if ( storedValue ) return JSON.parse(storedValue)

    return defaultValue
  } catch(e) {
    console.log(e)
    return defaultValue
  }
}