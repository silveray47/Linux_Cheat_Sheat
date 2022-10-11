import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Regex = () => {
  const gegex = cheatSheet.Regex
  return (
    <div className="content-section">
      <div className="content-section-title">Regular Expressions</div>
      <ContentSectionList list={gegex.Standard}/>
      <div><br></br></div>
      <ContentSectionList list={gegex.Extended}/>
    </div>
  )
}

export default Regex