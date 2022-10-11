import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const UsersAndGroups = () => {
  const users =cheatSheet.UsersAndGroups
  return (
    <div className="content-section">
      <div className="content-section-title">Users And Groups</div>
      <ContentSectionList list={users}/>
    </div>
  )
}

export default UsersAndGroups
