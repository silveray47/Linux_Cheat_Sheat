import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Searching = () => {
  const Searching = cheatSheet.Searching
  return (
    <div className="content-section">
      <div className="content-section-title">Searching and Find </div>
      <ContentSectionList list={Searching}/>
    </div>
  )
}

export default Searching