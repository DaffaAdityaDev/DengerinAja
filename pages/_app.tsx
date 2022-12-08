import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState, useRef } from 'react'
import radioData from '../data/Radio/Radio_data.json'

import PlaylistPropsType from "../types/PlaylistPropsType";

import ControlPanelContainer from '../layout/ControlPanelContainer/ControlPanelContainer'
export default function App({ Component, pageProps }: AppProps) {
  const [currentPlay, setCurrentPlay] = useState<number>(0);
  const [currentData , setCurrentData] = useState<PlaylistPropsType[]>(radioData.data);
  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;

  return (
    <ControlPanelContainer 
        currentPlay={currentPlay}
        setCurrentPlay={setCurrentPlay}
        currentData={currentData}
        setCurrentData={setCurrentData}
        audioRef={audioRef}>
      <Component 
        {...pageProps} 
        currentPlay={currentPlay}
        setCurrentPlay={setCurrentPlay}
        currentData={currentData}
        setCurrentData={setCurrentData}
      />
    </ControlPanelContainer>
  )
}
