import React, { Dispatch, forwardRef, useEffect, useState } from 'react'
import PlaylistProps from '../../types/PlaylistPropsType'
import styles from './Radio.module.scss'

import rim from '../../data/Radio/Radio_Rim.json'
import Link from 'next/link'
import { isDataView } from 'util/types'

function Radio({ data, setCurrentData, currentPlay, setCurrentPlay, forwardedRef, isPlaying, setIsPlaying, type, } : 
  {data: PlaylistProps, setCurrentData: Dispatch<PlaylistProps[]>, currentPlay: number, 
    setCurrentPlay: Dispatch<number>, forwardedRef: React.MutableRefObject<HTMLAudioElement>,
    isPlaying: any[], setIsPlaying: Dispatch<Object[]>, type: string}, ) {
      

  const url = {
    pathname:`/Radio/${data.slug}`,
    query: { radio: data.radio }
  }
  // console.log(currentData)

  // let ChangeData = () => {
  //   setCurrentPlay(data.id);
    
  //   if(forwardedRef.current){
  //     forwardedRef.current.pause();
  //     forwardedRef.current.load();
  //     forwardedRef.current.play();
  //   }

  // }
  // console.log(data)
  

  return (
    <>
    {type === "long" ? 
    
      <div className={styles.radio__container}>
        <Link href={url} className={styles.radio__imgContainer}>
          <img src="https://unsplash.it/200/200" alt="img" />
        </Link>
        <Link href={url} className={styles.nameAndPlay__container}>
          <h1 className={styles.radio__name}>{data.album}</h1>
        </Link>
        <button className={styles.play__button} onClick={e => ChangeData()}>{data.playing ? "Stop" : "Play"}</button>
      </div> : type === "box" ? <h1>box</h1> : <h1>default</h1>
    }
    </>
  )
}

export default Radio