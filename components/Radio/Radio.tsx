import React, { Dispatch, forwardRef, useEffect, useState } from 'react'
import PlaylistProps from '../../types/PlaylistPropsType'
import styles from './Radio.module.scss'

import rim from '../../data/Radio/Radio_Rim.json'

function Radio({ data, setCurrentData, currentPlay, setCurrentPlay, forwardedRef, isPlaying, setIsPlaying } : 
  {data: PlaylistProps, setCurrentData: Dispatch<PlaylistProps[]>, currentPlay: number, 
    setCurrentPlay: Dispatch<number>, forwardedRef: React.MutableRefObject<HTMLAudioElement>
    isPlaying: any[], setIsPlaying: Dispatch<Object[]>}) {

  console.log(isPlaying, currentPlay)

  let ChangeData = () => {
    // if(forwardedRef.current && !isPlaying[currentPlay].isPlaying) {
    //   console.log("play")
      // setIsPlaying(isPlaying.map((item, index) => {
      //   if(index === currentPlay) {
      //     return {...item, isPlaying: true}
      //   }
      //   return item;
      // }))
      // setCurrentPlay(data.id);
      // forwardedRef.current.play();
      // setIsPlaying({...isPlaying, [currentPlay]: {id: data.id, isPlaying: true}})
      
      
    // } else if (forwardedRef.current && isPlaying[currentPlay].isPlaying) {
    //   console.log("tidak play")
    //   forwardedRef.current.pause();
    //   setCurrentPlay(data.id);
    //   setIsPlaying({...isPlaying, [currentPlay]: {id: data.id, isPlaying: false}})
      
      // setIsPlaying(isPlaying.map((item, index) => {
      //   if(index === currentPlay) {
      //     return {...item, isPlaying: false}
      //   }
      //   return item;
      // }))
    // }
  }
  return (
    <>
      <div className={styles.radio__container}>
        <div className={styles.radio__imgContainer}>
          <img src="https://unsplash.it/200/200" alt="img" />
        </div>
        <div className={styles.nameAndPlay__container}>
          <h1 className={styles.radio__name}>{data.album}</h1>
          <button className={styles.play__button} onClick={e => ChangeData()}>{isPlaying[data.id]?.isPlaying ? "Stop" : "Play"}</button>
        </div>
      </div>
    </>
  )
}

export default Radio