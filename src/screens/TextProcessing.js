import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const TextProcessing = () => {
  const txt = cheatSheet.TextProcessing

  return (
    <div className="content-section">
      <div className="content-section-title">Text Processing</div>
      <ContentSectionList list={txt}/>
    </div>
  )
}

export default TextProcessing
