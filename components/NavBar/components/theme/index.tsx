import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../../../slices/loading";
import { changeTheme } from "../../../../slices/theme";
import { delayTime, handleGetCurrentWeather } from "../../../../utils/helpers";
import { getItem, KEY_TYPES, removeItem, setItem } from "../../../../utils/localStoreTools";
import { ITheme, THEMES } from "./config";
import { convertTextThemeByKeyName, getCityWeather, getLinkWeatherIcon, getTempWeather } from "./helper";
import { THEME_TYPES } from './../../../helpers/SwitchTheme/index.config';
import { API } from "../../../../constants/api";
import { showToast } from "../../../../slices/toast";
import { ICONS, ICONS_NIGHT, TIME_PM } from "../times/config";
import { useEffect } from "react";


interface IThemeProps {
  handleClose: () => void
}

const Theme = (props: IThemeProps) => {
  const theme = useSelector((state: any) => state.theme)
  const dispatch = useDispatch();
  const { handleClose } = props;

  const setThemeByWeather = (icon: string) => {
    let theme: string = THEME_TYPES.NORMAL

    switch (icon) {
      case ICONS_NIGHT.CLEAR_SKY:
      case ICONS_NIGHT.FEW_CLOUDS:
      case ICONS_NIGHT.BROKEN_CLOUDS:
      case ICONS_NIGHT.SCATTERED_CLOUDS:
      case ICONS.CLEAR_SKY:
      case ICONS.FEW_CLOUDS:
      case ICONS.BROKEN_CLOUDS:
      case ICONS.SCATTERED_CLOUDS: {
        theme = THEME_TYPES.SUN
        const hours: any = new Date().getHours()
        if (hours >= TIME_PM) {
          theme = THEME_TYPES.RACE_NIGHT
        }
        break;
      }
      case ICONS_NIGHT.RAIN:
      case ICONS_NIGHT.SHOWER_RAIN:
      case ICONS_NIGHT.THUNDERSTORM:
      case ICONS.RAIN:
      case ICONS.SHOWER_RAIN:
      case ICONS.THUNDERSTORM:
        theme = THEME_TYPES.RAIN
        break;
      case ICONS.SNOW:
      case ICONS_NIGHT.SNOW:
        theme = THEME_TYPES.SNOW
        break;
      case ICONS.MIST:
      case ICONS_NIGHT.MIST:
        theme = THEME_TYPES.RACE_NIGHT
        break;
      default:
        theme = THEME_TYPES.NORMAL
        break;
    }

    setItem(KEY_TYPES.THEME, { theme: theme })
    dispatch(changeTheme(theme))
  }

  const onGetWeatherSuccess = async (position: any) => {
    const lat = position.coords.latitude?.toString();
    const lon = position.coords.longitude?.toString();

    fetch(API.CURRENT_WEATHER(lat, lon))
      .then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res?.base) {
          removeItem(KEY_TYPES.WHEATHER)
          setItem(KEY_TYPES.WHEATHER, {
            icon: getLinkWeatherIcon(res),
            temp: getTempWeather(res),
            city: getCityWeather(res),
            idIcon: res?.weather[0]?.icon || '10d'
          })

          setThemeByWeather(res?.weather[0]?.icon || '10d')
        } else {
          dispatch(showToast({
            message: 'Something wrong! 😱',
            type: 'error'
          }))
        }
      })
      .catch(() => {
        dispatch(hiddenLoading())
        dispatch(showToast({
          message: 'Something wrong! 😱',
          type: 'error'
        }))
      })
  }

  const onGeoErrors = (err: any) => {
    dispatch(hiddenLoading())

    dispatch(showToast({
      message: `can't access current location! 😱 Please allow it`,
      type: 'error'
    }))
  }
  
  const handleChangeTheme = async (name: string) => {
    dispatch(showLoadding())
    handleClose()

    if (name === THEME_TYPES.CURRENT_LOCATION) {
      await handleGetCurrentWeather(onGetWeatherSuccess, onGeoErrors)
      return;
    }

    await delayTime(1000);
    setItem(KEY_TYPES.THEME, { theme: name })

    dispatch(hiddenLoading())
    dispatch(changeTheme(name));
  }

  // useEffect(() => {
  //   const dataTheme: any = getItem(KEY_TYPES.THEME)
  //   if (!dataTheme?.theme) handleChangeTheme(THEME_TYPES.CURRENT_LOCATION)
  // }, [])

  return (
    <>
      <section className="theme-container">
        {
          THEMES.map((item: ITheme, index: number) => (
            <div key={'theme' + index} className="theme-container__item">
              <img
                onClick={() => handleChangeTheme(item.name)}
                className={`border-hover el-hover ${theme === item.name ? 'border-selected' : ''}`}
                src={item.image} alt={item.name}
              />
              <div onClick={() => handleChangeTheme(item.name)} className="theme-name background el-hover">
                <span>{convertTextThemeByKeyName(item.name)}</span>
              </div>
            </div>
          ))
        }
      </section>
      <style jsx>{`
        .theme-container {
          margin: 12px 12px;
          width: 330px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          &__item {
            position: relative;
            width: 150px;
            height: 75px;
            margin-bottom: 2px;
            margin-top: 2px;

            .theme-name {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              padding: 4px 8px;
              border-radius: 5px;
              line-height: 12px;
              span {
                font-size: 12px;
                color: white;
                white-space: nowrap;
              }
            }
            img {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
        }
      `}
      </style>
    </>
  )
}

export default Theme
