import { END_POINT_ICON_WEATHER } from './config';
import { THEME_TYPES } from './../../../helpers/SwitchTheme/index.config';

export const convertTextThemeByKeyName = (name: string) => {
  switch (name) {
    case THEME_TYPES.NORMAL:
      return 'Classic'
    case THEME_TYPES.SUN:
      return 'Sunny'
    case THEME_TYPES.SNOW:
      return 'Winter'
    case THEME_TYPES.RACE_NIGHT:
      return 'Night'
    case THEME_TYPES.RAIN:
      return 'Raining'
    case THEME_TYPES.CURRENT_LOCATION:
      return 'Weather Today'
    default:
      return 'Classic'
  }
}

export const getLinkWeatherIcon = (data: any) => {
  const icon = data?.weather[0]?.icon || '10d.png'
  return `${END_POINT_ICON_WEATHER}/${icon}.png`
}

export const getCityWeather = (data: any) => {
  return data?.name || 'N/A';
}

export const getTempWeather = (data: any) => {
  let temp: number = data?.main?.temp || 297

  return `${Math.ceil(temp - 274)}°C`;
}