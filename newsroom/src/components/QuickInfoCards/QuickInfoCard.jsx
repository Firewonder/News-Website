import React from 'react'
import './quick-info.css'

export const QuickInfoCard = ({title, description}) => {
  return (<div className='quick-info-section'>
          <div className='quick-card'>
      <div className='quick-title'>{title}</div>
      <div className="quick-description">{description}</div>
      </div>
  </div>
  )
}