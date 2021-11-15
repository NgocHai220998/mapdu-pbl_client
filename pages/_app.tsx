import '../styles/globals.scss'
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "@uiw/react-markdown-preview/dist/markdown.css";
import '@jeffreyca/react-jinke-music-player/assets/index.css'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import SwitchTheme from '../components/helpers/SwitchTheme';
import { Provider } from 'react-redux';
import store from '../store';
import Toast from '../components/helpers/Toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className="main-app">
        <SwitchTheme />
        <Component {...pageProps} />
        <Toast />
      </main>
    </Provider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
