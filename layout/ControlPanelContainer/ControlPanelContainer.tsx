import React from 'react'
import styles from './ControlPanelContainer.module.scss'
import Link from 'next/link'

import AudioPlayer from '../../components/AudioPlayer/AudioPlayer'
import PlaylistPropsType from "../../types/PlaylistPropsType";



function ControlPanelContainer({ currentPlay, setCurrentPlay, currentData, setCurrentData, audioRef, sliderRef, sliderVolumeRef, children } : {
  currentPlay: number, setCurrentPlay: React.Dispatch<React.SetStateAction<number>>,
  currentData: PlaylistPropsType[], setCurrentData: React.Dispatch<React.SetStateAction<PlaylistPropsType[]>>,
  audioRef: React.MutableRefObject<HTMLAudioElement>, sliderRef: React.MutableRefObject<HTMLInputElement>, 
  sliderVolumeRef: React.MutableRefObject<HTMLInputElement>,children: React.ReactNode}) {
    
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
          <div className={styles.Root__navbarList}>
            <h1 className={styles.Root__navbar_logo}>Dengerin aja</h1>
            <ul>
              <div className={styles.Root__navbar_main}>
                <Image src="/icon/icons8-home-page-96.png" />
                <li>Home</li>
              </div>
              <li>Library</li>
              <li>Search</li>
            </ul>
          </div>
          <div className={styles.Root__navbar_playlistAndLike}>
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
          <AudioPlayer currentData={currentData} currentPlay={currentPlay} 
          setCurrentPlay={setCurrentPlay} audioRef={audioRef} 
          sliderRef={sliderRef} sliderVolumeRef={sliderVolumeRef}/>
        </div>
        <div className={styles.Root__mainView}>{children}</div>
      </div>
    </>
  )
}

export default ControlPanelContainer