import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const ProcessesAndSystemctl = () => {
  const Processes = cheatSheet.Processes
  const systemctl = cheatSheet.Systemctl
  return (
    <div className="content-section">
      <div className="content-section-title">Processe Menegment </div>
      <ContentSectionList list={Processes}/>
      
      <div className="content-section-title">Systemctl</div>
      <ContentSectionList list={systemctl}/>

    </div>
  )
}

export default ProcessesAndSystemctl