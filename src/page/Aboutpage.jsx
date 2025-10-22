import React from 'react'
import About from '../components/About';


function Aboutpage({setIsAbout}) {
  return (
    <div>
        <About setIsAbout={setIsAbout}/>
    </div>
  )
}

export default Aboutpage