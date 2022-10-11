import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Echo = () => {
  const Echo = cheatSheet.Echo
  return (
    <div className="content-section">
      <div className="content-section-title">The echo command</div>
      <ContentSectionList list={Echo}/>
    </div>
  )
}

export default Echo
