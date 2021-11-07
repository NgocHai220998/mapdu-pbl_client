import { useState } from "react";
import { useSelector } from "react-redux";
import BGNormal from "../../backgrounds/normal";
import BGRaceNight from "../../backgrounds/raceNight";
import BGRain from "../../backgrounds/rain";
import BGSnow from "../../backgrounds/snow";
import BGSun from "../../backgrounds/sun";
import LoadNormal from "../../loadings/normal";
import LoadRace from "../../loadings/raceNight";
import LoadRain from "../../loadings/rain";
import LoadSnow from "../../loadings/snow";
import LoadSun from "../../loadings/sun";
import { THEME_TYPES } from "./index.config"

const SwitchTheme = () => {
  const theme  = useSelector((state: any) => state.theme);
  const isLoading = useSelector((state: any) => state.loading);

  switch (theme) {
    case THEME_TYPES.RAIN:
      return (
        <>
          <BGRain />
          <LoadRain isLoading={isLoading} />
        </>
      )
    case THEME_TYPES.SUN:
      return (
        <>
          <BGSun />
          <LoadSun isLoading={isLoading} />
        </>
      )
    case THEME_TYPES.RACE_NIGHT:
      return (
        <>
          <BGRaceNight />
          <LoadRace isLoading={isLoading} />
        </>
      )
    case THEME_TYPES.SNOW:
      return (
        <>
          <BGSnow />
          <LoadSnow isLoading={isLoading} />
        </>
      )
    case THEME_TYPES.SNOW:
      return (
        <>
          <BGNormal />
          <LoadNormal isLoading={isLoading} />
        </>
      )
    default:
      return (
        <>
          <BGNormal />
          <LoadNormal isLoading={isLoading} />
        </>
      )
  }
}

export default SwitchTheme
