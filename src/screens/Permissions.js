import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Permissions = () => {
  const permissions = cheatSheet.Permissions
  return (
    <div className="content-section">
      <div className="content-section-title">Symbols</div>
      <ContentSectionList list={permissions.Symbols}/>

      <div className="content-section-title">Octal Numbers</div>
      <ContentSectionList list={permissions.OctalNumbers}/>

      <div className="content-section-title">Special Permissions</div>
      <ContentSectionList list={permissions.Special}/>

      <div className="content-section-title">Commands</div>
      <ContentSectionList list={permissions.Commands}/>

    </div>
  )
}

export default Permissions
