import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../../slices/theme";
import { getItem, KEY_TYPES, setItem } from "../../../../utils/localStoreTools";
import { THEME_TYPES } from "../../../helpers/SwitchTheme/index.config";
import { initDataWeather } from "../theme/config";
import { ICONS, TIMES_CONFIG, TIME_PM } from "./config";

const Times: NextPage = () => {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState<any>(initDataWeather)

  const updateClock = () => {
    let now: any = new Date();
    let dname: any = now.getDay(),
        mo: any = now.getMonth(),
        dnum: any = now.getDate(),
        yr: any = now.getFullYear(),
        hou: any = now.getHours(),
        min: any = now.getMinutes(),
        sec: any = now.getSeconds(),
        pe: any = "AM";

    if(hou >= 12){
      pe = "PM";
    }
    if(hou == 0){
      hou = 12;
    }
    if(hou > 12){
      hou = hou - 12;
    }

    Number.prototype.pad = function(digits: any){
      for(var n = this.toString(); n.length < digits; n = 0 + n);

      return n;
    }

    const months = TIMES_CONFIG.MONTHS, week = TIMES_CONFIG.WEEK, ids = TIMES_CONFIG.IDS;
    const values = [week[dname], dnum.pad(2), months[mo], yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

    for(let i = 0; i < ids.length; i++) {
      const el: any = document.getElementById(ids[i]);
      if (el?.firstChild) el.firstChild.nodeValue = ' ' + values[i];
    }


    const weatherTmp: any = getItem(KEY_TYPES.WHEATHER) || initDataWeather
    setWeather(weatherTmp)
  }

  const initClock = () => {
    updateClock();
    window.setInterval(updateClock, 1);
  }

  useEffect(() => {
    initClock();
  }, [])
  return (
    <>
      <section className="times-container">
        <div className="times-container__datetime border-selected">
          <div className="times-container__datetime-date">
            <span id="dayname">Day</span>,
            <span id="month"> Month</span>
            <span id="daynum"> 00</span>,
            <span id="year"> Year</span>
          </div>
          <div className="times-container__datetime-time">
            <span id="hour">00</span>:
            <span id="minutes">00</span>:
            <span id="seconds">00</span>
            <span className="background-highlight" id="period">AM</span>
            <div className="times-container__weather">
              <img src={weather.icon} alt="icon weather" />
              <span className="weather-temp">{weather.temp}</span>
              <div className="name-city">
                <span>{weather.city}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        
        .times-container {
          display: flex;
          justify-content: center;

          &__weather {
            display: inline-block;
            position: relative;

            .weather-temp {
              display: inline-block;
              font-size: 14px;
            }
            .name-city {
              position: absolute;
              top: 16px;
              right: 4px;
              font-size: 10px;
            }
          }
          &__datetime{
            color: #fff;
            background: #10101E;
            font-family: "Segoe UI", sans-serif;
            padding: 15px 15px 12px 15px; 
            border-radius: 5px;
            -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(255, 255, 255, 0.1));
            transition: 0.5s;
            transition-property: background, box-shadow;

            &:hover{
              background: #2E94E3;
              box-shadow: 0 0 30px #2E94E3;
            }

            &-date{
              font-size: 12px;  
              font-weight: 600;
              text-align: center;
              letter-spacing: 3px;
            }

            &-time{
              font-size: 28px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: "Comic Sans MS", "Comic Sans", cursive;

              span:not(:last-child) {
                position: relative;
                margin: 0 6px;
                font-weight: 600;
                text-align: center;
                letter-spacing: 3px;
              }

              #period {
                font-size: 10px;
                font-weight: 600;
                text-transform: uppercase;
                margin-top: 10px;
                padding: 0 5px;
                border-radius: 3px;
              }
            }
          }
        }
      `}
      </style>
    </>
  )
}

export default Times
