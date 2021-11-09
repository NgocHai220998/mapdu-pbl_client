import { THEME_TYPES } from "../../../helpers/SwitchTheme/index.config";

export interface ITheme {
  name: string;
  image: string;
}
export const THEMES = [{
  name: THEME_TYPES.NORMAL,
  image: '/static/images/background-normal.jpeg'
}, {
  name: THEME_TYPES.RACE_NIGHT,
  image: '/static/images/Img_1.png'
}, {
  name: THEME_TYPES.RAIN,
  image: '/static/images/background.jpg'
}, {
  name: THEME_TYPES.SNOW,
  image: '/static/images/bg_snow.jpeg'
}, {
  name: THEME_TYPES.SUN,
  image: '/static/images/sunday.jpeg'
}, {
  name: THEME_TYPES.CURRENT_LOCATION,
  image: '/static/images/weather-today.jpeg'
}]

export const END_POINT_ICON_WEATHER = 'https://openweathermap.org/img/wn'

export const initDataWeather = {
  temp: '25 °C',
  icon:  `${END_POINT_ICON_WEATHER}/10d.png`,
  city: 'Tokyo',
  idIcon: '10d'
}
