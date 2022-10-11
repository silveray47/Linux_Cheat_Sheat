import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import data from '../data/cheatSheet'

const basicCLI = () => {
  const Navigation = data.Navigation
  const List = data.List
  const Wildcards = data.Wildcards


  return (
    <div className="content-section">
      <div className="content-section-title">Navigation</div>
      <ContentSectionList list={Navigation}/>
      <div className="content-section-title">Listing </div>
      <ContentSectionList list={List}/>
      <div className="content-section-title">Wildcards</div>
      <ContentSectionList list={Wildcards}/>
    </div>
  )
}

export default basicCLI
