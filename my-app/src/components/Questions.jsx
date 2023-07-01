import React from 'react'
import { useState } from 'react'

export const Questions = () => {
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

    const [view, setView] = useState(false);

    return (
    <div className='container'>
      <div className='accordian'>
        <h2 className='header'>Frequently Asked Questions</h2>
        {questions.map((item, index) => (
          <div className='item'>
            <div className='title'>
              <h2>{item.title} <button>+</button></h2>
            </div>
            <div className='info'>
              <h2>{item.info}</h2>
              </div>
          </div>
        ))}
      </div>
    </div>
    )
}

// {
//   show?<h1>Hello World !</h1>:null
// }
// <button onClick={()=> setShow(!show)}>Toggle</button>

// const testQuestions = questions.map(item => ({
//   title: item.title,
//   info: item.info
// }))

// console.log(testQuestions);