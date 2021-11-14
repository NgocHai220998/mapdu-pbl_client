import { getItem, KEY_TYPES } from './localStoreTools';

export const isLogined = () => {
  const data: any = getItem(KEY_TYPES.AUTHEN);

  return data?.auth_token ? true : false;
}

export const delayTime = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
  })
}

export const handleGetCurrentWeather = async (handleCallBack: any, onGeoError: any) => {
  if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(handleCallBack, onGeoError);
  } else {
      alert('GeoLocation not supported or not allowed');
  }
}

export const convertTime = (time: string | Date) => {
  const dt: Date = new Date(time);

  return `${
    (dt.getMonth()+1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}`
}