
import React from 'react'

function AccordionItems({ index, isActive, title, content, onTitleClick }) {
  return (
    <>
    <div className="accordion-item">
      <div className={`accordion-title ${isActive ? 'active' : ''}`} onClick={() => onTitleClick(index)}>
        {title}
        <span className="arrow">{
          isActive ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-right"></i>
          }
          </span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
    </>
  )
}

export default AccordionItems


