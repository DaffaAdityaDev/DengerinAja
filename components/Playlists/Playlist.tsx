import path from 'path';
import React from 'react'

type PlaylistProps = {
  id: number,
  title: string,
  artist: string,
  album: string,
  url: string,
}

let data: PlaylistProps[] = [{
  id: 1,
  title: "RIM Pilgrim",
  artist: "RIM",
  album: "RIM Pilgrim",
  url: "/audio/RIM_Pilgrim.mp3",
}]
function Playlist() {
  
  return (
    <div>
      <audio controls preload="none">
        <source src={data[0].url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
    </div>
  )
}



export default Playlist;