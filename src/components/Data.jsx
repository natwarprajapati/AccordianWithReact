import React from 'react'
import Accordion from './Accordion';

function Data() {
    const accordionData = [
        { title: 'What Is Return Policy? ', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam est architecto a, necessitatibus id ipsum voluptatem obcaecati eius nemo nesciunt debitis ullam nobis, rem dignissimos officia! Tempore, molestias dolorem.' },
        { title: 'How do i track my Order', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam est architecto a, necessitatibus id ipsum voluptatem obcaecati eius nemo nesciunt debitis ullam nobis, rem dignissimos officia! Tempore, molestias dolorem.' },
        { title: 'can I purchase items again ?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam est architecto a, necessitatibus id ipsum voluptatem obcaecati eius nemo nesciunt debitis ullam nobis, rem dignissimos officia! Tempore, molestias dolorem.' },
      ];
  return (
    <>
     <h1 >React Assesment Task</h1>
     <Accordion items={accordionData} /> 
    </>
  )
  
}

export default Data