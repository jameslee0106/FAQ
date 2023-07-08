import React, { useState } from 'react';

const Test = () => {
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  const toggleQuestion = (id) => {
    if (expandedQuestionId === id) {
      setExpandedQuestionId(null);
    } else {
      setExpandedQuestionId(id);
    }
  };

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
    }
  ];

  return (
    <div className='container'>
      <div className='accordion'>
        <h2 className='header'>Frequently Asked Questions</h2>
        {questions.map((item) => (
          <div className='item' key={item.id}>
            <div className='title'>
              <h2>
                {item.title}
                <button onClick={() => toggleQuestion(item.id)}>
                  {expandedQuestionId === item.id ? '-' : '+'}
                </button>
              </h2>
            </div>
            {expandedQuestionId === item.id && (
              <div className='info'>
                <h2>{item.info}</h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
