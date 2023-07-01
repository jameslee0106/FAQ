import React from 'react'
import { useState } from 'react'

const Test = () => {
    const [view, setView] = useState(true)

  return (
    <div>
        <h2 className='header'>Frequently Asked Questions</h2>
    <div className='test'>
        <h2>hello</h2>
   <button onClick={()=> setView(!view)}>+</button>
   </div>
   {
   view?<h1>Hello World !</h1>:null
}
  </div>
  )
}

export default Test