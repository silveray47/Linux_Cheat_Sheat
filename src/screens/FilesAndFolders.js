import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'


const FilesAndFolders = () => {
  const FilesAndFolders = cheatSheet.FilesAndFolders
  
  return (
    <div className="content-section">
      <div className="content-section-title">Files And Folders</div>
      <ContentSectionList list={FilesAndFolders}/>
    </div>
  )
}

export default FilesAndFolders
