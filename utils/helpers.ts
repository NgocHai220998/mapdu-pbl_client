import { getItem, KEY_TYPES } from './localStoreTools';

export const isLogin = () => {
  const data: any = getItem(KEY_TYPES.AUTHEN);

  return data?.auth_token ? true : false;
}

export const delayTime = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
  })
}
