import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Nano = () => {
  const nano = cheatSheet.nano
  return (
    <div className="content-section">

      <div className="content-section-title">Read Save And Close</div>
      <ContentSectionList list={nano.Files}/>

      <div className="content-section-title">Cut And Paste</div>
      <ContentSectionList list={nano.CutAndPaste}/>

      <div className="content-section-title">Navigation</div>
      <ContentSectionList list={nano.NavigateFile}/>

      <div className="content-section-title">Find</div>
      <ContentSectionList list={nano.Find}/>
    </div>
  )
}

export default Nano
