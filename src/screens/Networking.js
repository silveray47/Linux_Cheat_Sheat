import React from 'react'
import ContentSectionList from '../components/ContentSectionList'
import cheatSheet from '../data/cheatSheet'

const Networking = () => {
  const networking = cheatSheet.Networking
  return (
    <div className="content-section">

      <div className="content-section-title">IP And Route </div>
      <ContentSectionList list={networking.IPAndRoute}/>

      <div className="content-section-title">Ifconfig </div>
      <ContentSectionList list={networking.Ifconfig}/>

      <div className="content-section-title">Netstat And ARP </div>
      <ContentSectionList list={networking.NetstatAndARP}/>

    </div>
  )
}

export default Networking
