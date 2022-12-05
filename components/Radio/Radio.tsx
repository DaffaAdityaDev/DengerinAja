import React from 'react'
import PlaylistProps from '../../types/PlaylistProps'
import styles from './Radio.module.scss'

function Radio({data}: {data: PlaylistProps}) {
  
  return (
    <>
      <div className={styles.radio__container}>
        <div className={styles.radio__imgContainer}>
          <img src="https://unsplash.it/200/200" alt="img" />
        </div>
        <div className={styles.nameAndPlay__container}>
          <h1 className={styles.radio__name}>{data.album}</h1>
          <h1 className={styles.play__button}>play</h1>
        </div>
      </div>
    </>
  )
}

export default Radio