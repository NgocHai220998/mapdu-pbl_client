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

const onGeoError = (err: any) => {
  console.error("Error while trying to get position", err);
}

export const handleGetCurrentWeather = async (handleCallBack: any) => {
  if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(handleCallBack, onGeoError);
  } else {
      alert('GeoLocation not supported or not allowed');
  }
}