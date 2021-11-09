import ReactJkMusicPlayer from "@jeffreyca/react-jinke-music-player"
import { NextPage } from "next"
import { options } from "./config"

const PlayerMusic: NextPage = () => {
  return (
    <ReactJkMusicPlayer {...options} />
  )
}

export default PlayerMusic
