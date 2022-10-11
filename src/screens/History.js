import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'


const History = () => {
  const History = cheatSheet.History
  
  return (
    <div className="content-section">
      <div className="content-section-title">Bash history</div>
      <ContentSectionList list={History}/>
    </div>
  )
}

export default History
