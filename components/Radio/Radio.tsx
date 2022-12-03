import React from 'react'
import PlaylistProps from '../types/PlaylistProps'

function Radio({data}: {data: PlaylistProps[]}) {
  console.log("data dari radio", data)
  return (
    <>
      <div>
        <img src="https://unsplash.it/200/200" alt="img" />
      </div>
      <div>
        <h1>{data[0].album}</h1>
      </div>
    </>
  )
}

export default Radio