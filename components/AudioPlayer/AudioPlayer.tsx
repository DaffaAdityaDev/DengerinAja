import React, { useState, useEffect, Dispatch, MutableRefObject } from 'react'
import Link from 'next/link'
import Image from 'next/image';

import PlaylistProps from "../../types/PlaylistPropsType";
import styles from './AudioPlayer.module.scss'

function AudioPlayer({ currentData, currentPlay, setCurrentPlay, audioRef, sliderRef, sliderVolumeRef }: 
  { currentData: PlaylistProps[], currentPlay: number, setCurrentPlay: Dispatch<number>, 
    audioRef: MutableRefObject<HTMLAudioElement>, sliderRef: MutableRefObject<HTMLInputElement>
    sliderVolumeRef: MutableRefObject<HTMLInputElement> }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentPlayTime, setCurrentPlayTime] = useState<string>("0:00");
  const [currentPlayDuration, setCurrentPlayDuration] = useState<string>("0:00");
  const [currentPlayProgress, setCurrentPlayProgress] = useState<number>(0);
  const [currentVolume, setCurrentVolume] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlayTime(secondToTime(Math.floor(audioRef.current.currentTime)));
      setCurrentPlayDuration(secondToTime(audioRef.current.duration));
      if(audioRef.current.currentTime) {
        setCurrentPlayProgress(Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100));
      }
      if(audioRef.current.volume) {
        setCurrentVolume(Math.floor(audioRef.current.volume * 100));
      }
    }, 300);
    return () => clearInterval(interval);

  }, [audioRef]);
  function secondToTime(e: number) {
    const h = Math.floor(e / 3600).toString().padStart(2,'0'),
          m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
          s = Math.floor(e % 60).toString().padStart(2,'0');

    if (isNaN(e)) { 
      return "0:00";
    }      
    
    if (h === '00') {
      return `${m}:${s}`;
    } else if (m === '00') {
      return `${s}`;
    } else {
      return `${h}:${m}:${s}`;
    }
  }
  
  let ControlButtonMusic = (selector: string) => {
    let index = currentData.findIndex((item: { id: number; }) => item.id === currentPlay);

    if (selector === "next") {
      if (index === currentData.length - 1) {
        index = -1;
      }
      if (index === currentData.length) {
        setCurrentPlay(currentData[0].id);
        if(audioRef.current){
          audioRef.current.pause();
          audioRef.current.load();
          audioRef.current.play();
        }
      }
      setCurrentPlay(currentData[index + 1].id);
      if(audioRef.current){
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    }
    if (selector === "prev") {
       if (index - 1 === -1) {
        setCurrentPlay(currentData[currentData.length - 1].id);
        if(audioRef.current){
          audioRef.current.pause();
          audioRef.current.load();
          audioRef.current.play();
        }
      }
      if (index > 0) {
        setCurrentPlay(currentData[index - 1].id);
        if(audioRef.current){
          audioRef.current.pause();
          audioRef.current.load();
          audioRef.current.play();
        }
      }
    }
  }
  let PauseMusic = () => {
    // console.log(isPlaying)
    if(audioRef.current && isPlaying){
      audioRef.current.pause();
      setIsPlaying(false);
    }
    if(audioRef.current && !isPlaying){
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
  let ChangeProgress = () => {
    if(audioRef.current.currentTime) {
      audioRef.current.currentTime = (sliderRef.current.valueAsNumber / 100) * audioRef.current.duration;
    }
  }
  let ChangeVolume = () => {
    if(audioRef.current.volume) {
      audioRef.current.volume = sliderVolumeRef.current.valueAsNumber / 100;
    }
  }

  
  return (
    <>
      <div className={styles.Audio__container}>
        <div className={styles.contentInfo}>
          <Image src="/Image/Music_placeholder.jpg" width={50} height={50} alt={''}/>
          <div>
            <h1 className={styles.contentInfo__title}>{currentData[currentPlay].title}</h1>
            <h1 className={styles.contentInfo__artist}>{currentData[currentPlay].artist}</h1>
          </div>
        </div>
        <div>
          <audio preload="none" ref={audioRef}>
            <source src={currentData[currentPlay].url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h1>Time {currentPlayTime}</h1>
          <h1>Duration {currentPlayDuration}</h1>
          <button onClick={e => PauseMusic()}>Pause</button>
          <button onClick={e => ControlButtonMusic("prev")}>prev</button>
          <button onClick={e => ControlButtonMusic("next")}>next</button>
          <h1>{currentVolume}</h1>
          <input type={"range"} min={0} max={100} ref={sliderRef} value={currentPlayProgress} onChange={e => ChangeProgress()}/>
          <input type={"range"} min={0} max={100} ref={sliderVolumeRef} value={currentVolume} onChange={e => ChangeVolume()}/>
        </div>
        <div>fix me</div>
      </div>
    </>
  )
}



export default AudioPlayer;