import React, { Dispatch } from 'react'
import PlaylistProps from '../../types/PlaylistProps'
import styles from './Radio.module.scss'

import rim from '../../data/Radio/Radio_Rim.json'

function Radio({data, setCurrentData, currentPlay, setCurrentPlay}: {data: PlaylistProps, setCurrentData: Dispatch<PlaylistProps[]>, currentPlay: number, setCurrentPlay: Dispatch<number>}) {
  
  let ChangeData = () => {
    setCurrentData(rim.data);
    console.log(data)
  }
  return (
    <>
      <div className={styles.radio__container}>
        <div className={styles.radio__imgContainer}>
          <img src="https://unsplash.it/200/200" alt="img" />
        </div>
        <div className={styles.nameAndPlay__container}>
          <h1 className={styles.radio__name}>{data.album}</h1>
          <button className={styles.play__button} onClick={e => ChangeData()}>play</button>
        </div>
      </div>
    </>
  )
}

export default Radio