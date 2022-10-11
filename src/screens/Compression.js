import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Compression = () => {
  const Compression = cheatSheet.Compression
  return (
    <div className="content-section">
      <div className="content-section-title">Compression & Archiving</div>
      <ContentSectionList list ={Compression}/>
    </div>
  )
}

export default Compression
