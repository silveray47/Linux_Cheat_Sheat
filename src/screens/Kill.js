import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Kill = () => {
  const kill = cheatSheet.Kill
  return (
    <div className="content-section">
      <div className="content-section-title">The Kill commend </div>
      <ContentSectionList list={kill}/>
    </div>
  )
}

export default Kill
