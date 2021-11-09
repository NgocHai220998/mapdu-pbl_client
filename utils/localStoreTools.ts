export const KEY_TYPES = {
  AUTHEN: 'AUTHEN'
}

export const setItem = (key: string, value: any) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
  if (typeof window === 'undefined') return;

  const result: any = window.localStorage.getItem(key);

  return JSON.parse(result)
}

export const removeItem = (key: string) => {
  if (typeof window === 'undefined') return;

  window.localStorage.removeItem(key);
}
