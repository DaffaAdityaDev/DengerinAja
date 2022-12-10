import React from 'react'
import styles from './ControlPanelContainer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

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
          <div className={styles.Root__navbarTop_left}>
            <div className={styles.Root__navbar_icon}>
              <Image src="/icon/icons8-go-back-100.png" 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              fill alt="Backward Icon"/>
            </div>
            <div className={styles.Root__navbar_icon}>
              <Image src="/icon/icons8-circled-right-100.png" 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              fill alt="Foward Icon"/>
            </div>
          </div>
          <div className={styles.Root__navbarTop_right}>
            <div>Upgrade</div>
            <div>Accound</div>
          </div>
        </div>
        <nav className={styles.Root__navbar}>
          <div className={styles.Root__navbarList}>
            <h1 className={styles.Root__navbar_logo}>Dengerin aja</h1>
            <div className={styles.Root__navbar_main}>
              <div className={styles.Root__navbar_icon}>
                <Image src="/icon/icons8-home-page-96.png" 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                fill alt="home Icon"/>
              </div>
              <p>Home</p>
            </div>
            <div className={styles.Root__navbar_main}>
              <div className={styles.Root__navbar_icon}>
                <Image src="/icon/icons8-music-library-100.png" 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                fill alt="Library Icon"/>
              </div>
              <p>Library</p>
            </div>
            <div className={styles.Root__navbar_main}>
              <div className={styles.Root__navbar_icon}>
                <Image src="/icon/icons8-search-more-96.png" 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                fill alt="Search Icon"/>
              </div>
              <p>Search</p>
            </div>
          </div>
          <div className={styles.Root__navbar_playlistAndLike}>
            <div className={styles.Root__navbar_icon}>
              <Image src="/icon/icons8-add-new-100.png" 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              fill alt="Playlist Icon"/>
              <p>Create Playlist</p>
            </div>
            <div className={styles.Root__navbar_icon}>
              <Image src="/icon/icons8-heart-64.png" 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              fill alt="Liked Icon"/>
              <Link href="">
                <p>Liked Song</p>
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