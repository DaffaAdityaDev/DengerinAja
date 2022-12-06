import React, { useState, useEffect, Dispatch, MutableRefObject } from 'react'
import PlaylistProps from "../../types/PlaylistPropsType";

function PlayList({ currentData, currentPlay, setCurrentPlay, forwardedRef }: 
  { currentData: PlaylistProps[], currentPlay: number, setCurrentPlay: Dispatch<number>, forwardedRef: MutableRefObject<HTMLAudioElement> }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentPlayTime, setCurrentPlayTime] = useState<string>("0:00");
  const [currentPlayDuration, setCurrentPlayDuration] = useState<string>("0:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlayTime(secondToTime(Math.floor(forwardedRef.current.currentTime)));
      setCurrentPlayDuration(secondToTime(forwardedRef.current.duration));
    }, 1000);
    return () => clearInterval(interval);

  }, [forwardedRef]);
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
        if(forwardedRef.current){
          forwardedRef.current.pause();
          forwardedRef.current.load();
          forwardedRef.current.play();
        }
      }
      setCurrentPlay(currentData[index + 1].id);
      if(forwardedRef.current){
        forwardedRef.current.pause();
        forwardedRef.current.load();
        forwardedRef.current.play();
      }
    }
    if (selector === "prev") {
       if (index - 1 === -1) {
        setCurrentPlay(currentData[currentData.length - 1].id);
        if(forwardedRef.current){
          forwardedRef.current.pause();
          forwardedRef.current.load();
          forwardedRef.current.play();
        }
      }
      if (index > 0) {
        setCurrentPlay(currentData[index - 1].id);
        if(forwardedRef.current){
          forwardedRef.current.pause();
          forwardedRef.current.load();
          forwardedRef.current.play();
        }
      }
    }
  }
  let PauseMusic = () => {
    // console.log(isPlaying)
    if(forwardedRef.current && isPlaying){
      forwardedRef.current.pause();
      setIsPlaying(false);
    }
    if(forwardedRef.current && !isPlaying){
      forwardedRef.current.play();
      setIsPlaying(true);
    }
  }
  
  return (
    <>
      <div>
        <h1>{currentData[currentPlay].title}</h1>
        <audio controls preload="none" ref={forwardedRef}>
          <source src={currentData[currentPlay].url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <h1>Time {currentPlayTime}</h1>
        <h1>Duration {currentPlayDuration}</h1>
        <button onClick={e => PauseMusic()}>Pause</button>
        <button onClick={e => ControlButtonMusic("prev")}>prev</button>
        <button onClick={e => ControlButtonMusic("next")}>next</button>
      </div>
    </>
  )
}



export default PlayList;