import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'


function Radio() {
    const [radioData, setRadioData] = useState([])
    const router = useRouter();
    const { slug, radio } = router.query;
    

    // useEffect(async () => {
    //   const data = await import('../../data/Radio/' + radio + '.json')
    //   setRadioData([...data])
    // }, [])

    async function changedata() {
      const data = await import('../../data/Radio/' + radio + '.json', { assert: { type: 'json' } }) 
      console.log(data.data)
      setRadioData(data.data)

      
    }
    
  
    console.log(radioData)

  return (
    <>
      <div>{slug}</div>
      <div>{radio}</div>
      <div>{radioData.map(e => {
        return <div key={e.id}>{e.name}1</div>
      })}</div>
      <button onClick={e => changedata()}>yea</button>
      <button onClick={e => console.log(radioData)}>no</button>
    </>
  )
}

export default Radio