import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Streams = () => {
  const stream = cheatSheet.Streams
  return (
    <div className="content-section">
      <div className="content-section-title">Streams, Redirects and command concatenation </div>
      <ContentSectionList list={stream}/>
    </div>
  )
}

export default Streams