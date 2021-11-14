import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "./config";

const END_POINT = process.env.END_POINT;
const KEY_API_WEATHER = '0854a0b51f9201cfd0698243b639a57f'

export const API = {
  LOGIN_PATH: `${END_POINT}/auth_user`,
  SIGNUP_PATH: `${END_POINT}/api/users`,
  CURRENT_WEATHER: (lat: string, lon: string) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API_WEATHER}` 
  },
  GET_WORKSPACE: (page = DEFAULT_PAGE, per_page = DEFAULT_PER_PAGE) => {
    return `${END_POINT}/api/work_spaces/${page}/${per_page}`;
  },
  CREATE_WORKSPACE: `${END_POINT}/api/work_spaces`,
}
