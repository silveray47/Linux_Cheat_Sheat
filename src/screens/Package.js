import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Package = () => {
  const pack = cheatSheet.PackageManagement

  return (
    <div className="content-section">

      <div className="content-section-title">Update And Install packages</div>
      <ContentSectionList list={pack.UpdateAndInstall}/>

      <div className="content-section-title">Search</div>
      <ContentSectionList list={pack.Search}/>

      <div className="content-section-title">Delete</div>
      <ContentSectionList list={pack.Deletes}/>

    </div>
  )
}

export default Package
