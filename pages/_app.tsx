import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState, useRef } from 'react'

import radioData from '../data/Radio/Radio_data.json'
import PlaylistPop from '../data/Playlist/pop/Playlist_pop.json'

import PlaylistPropsType from "../types/PlaylistPropsType";

import ControlPanelContainer from '../layout/ControlPanelContainer/ControlPanelContainer'
export default function App({ Component, pageProps }: AppProps) {
  const [currentPlay, setCurrentPlay] = useState<number>(0);
  const [currentData , setCurrentData] = useState<PlaylistPropsType[]>(PlaylistPop.data);
  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;
  const sliderRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const sliderVolumeRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  // console.log(currentData)


  return (
    <ControlPanelContainer 
        currentPlay={currentPlay}
        setCurrentPlay={setCurrentPlay}
        currentData={currentData}
        setCurrentData={setCurrentData}
        audioRef={audioRef}
        sliderRef={sliderRef}
        sliderVolumeRef={sliderVolumeRef}>
      <Component 
        {...pageProps} 
        currentPlay={currentPlay}
        setCurrentPlay={setCurrentPlay}
        currentData={currentData}
        setCurrentData={setCurrentData}
        audioRef={audioRef}
        sliderRef={sliderRef}
      />
    </ControlPanelContainer>
  )
}
