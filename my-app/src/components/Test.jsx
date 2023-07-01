import React from 'react'
import { useState } from 'react'

const Test = () => {
    const [view, setView] = useState(true)

    const questions = [
        {
          id: 1,
          title: "Is this a good product?",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
          id: 2,
          title: "How much does it cost?",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
          id: 3,
          title: "When can I get it?",
          info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        } ]


  return (
    <div className='container'>
      <div className='accordian'> 
        <h2 className='header'>Frequently Asked Questions</h2>
    {questions.map((item, index) => (
          <div className='item'>
            <div className='title'>
              <h2>{item.title} <button onClick={()=> setView(!view)}>+</button></h2>
            </div>
            <div className='info'>
              {
                view?<h2>{item.info}</h2>:null
              }
              </div>
          </div>
        ))}
    </div>   
  </div>
  )
}

export default Test