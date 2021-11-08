import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import BGRain from '../components/backgrounds/rain';
import LoadRace from '../components/loadings/raceNight';
import LoadRain from '../components/loadings/rain';
import BGRaceNight from '../components/backgrounds/raceNight';
import BGSnow from '../components/backgrounds/snow';
import LoadSnow from '../components/loadings/snow';
import BGSun from '../components/backgrounds/sun';
import LoadSun from '../components/loadings/sun';
import SwitchTheme from '../components/helpers/SwitchTheme';
import { useState } from 'react';
import { THEME_TYPES } from '../components/helpers/SwitchTheme/index.config';
import { Provider, useDispatch } from 'react-redux';
import store from '../store'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className="main-app">
        <SwitchTheme />
        <Component {...pageProps} />
      </main>
    </Provider>
    
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
