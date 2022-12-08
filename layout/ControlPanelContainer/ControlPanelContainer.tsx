import React from 'react'
import styles from './ControlPanelContainer.module.scss'
import Link from 'next/link'

import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import PlaylistPropsType from "../../types/PlaylistPropsType";



function ControlPanelContainer({ currentPlay, setCurrentPlay, currentData, setCurrentData, audioRef, children } : {
  currentPlay: number, setCurrentPlay: React.Dispatch<React.SetStateAction<number>>,
  currentData: PlaylistPropsType[], setCurrentData: React.Dispatch<React.SetStateAction<PlaylistPropsType[]>>,
  audioRef: React.MutableRefObject<HTMLAudioElement>, children: React.ReactNode}) {
    
  return (
    <>
      <div className={styles.Root__container}>
        <div className={styles.Root__navbarTop}>
          <div>lefticon</div>
          <div>righticon</div>
          <div>
            <div>Upgrade</div>
            <div>Accound</div>
          </div>
        </div>
        <nav className={styles.Root__navbar}>
          <ul>
            <li>Home</li>
            <li>Library</li>
            <li>Search</li>
          </ul>
          <div>
            <div>
              <button>Create Playlist</button>
            </div>
            <div>
              <Link href="">
                <h1>Liked Song</h1>
              </Link>
            </div>
          </div>
        </nav>
        <div className={styles.Root__audioPlayer}>
          <AudioPlayer currentData={currentData} currentPlay={currentPlay} setCurrentPlay={setCurrentPlay} forwardedRef={audioRef}/>
        </div>
        <div className={styles.Root__mainView}>{children}</div>
      </div>
    </>
  )
}

export default ControlPanelContainer