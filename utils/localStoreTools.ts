export const KEY_TYPES = {
  AUTHEN: 'AUTHEN'
}

export const setItem = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
  const result: any = window.localStorage.getItem(key);

  return JSON.parse(result)
}

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
}
