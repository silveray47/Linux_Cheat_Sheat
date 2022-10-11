import React from 'react'
import LinuxLogo from '../data/logo512.png'

function Welcome() {
  return (
    <div>
      <div className='img-content'>
        <img src={LinuxLogo} height='400vh'/>
      </div>
      <h1>Welcome to the Linux Cheat Sheet </h1>
      <div className='content-text'>
        <pre>
          This site contains an extensive collection of basic and important Linux commands 
          and number of options per command. <br/>
          The purpose of the website is to compile the most common and useful commands in 
          Linux operating systems today.The collection of commands on this site is extensive but
          by no means complete. <br/>
          I invite everyone to delve deeper and learn about the commands that appear on the site 
          and which ones are not. <br/>
          A <a href="/files/Linux - Cheat Sheet.pdf" target="_blank" download>PDF version</a> of the site's content is available for download. The file contains all the commands plus explanations and comments
          <br/>
          <br/>
          The site was built by raymond31415.<br/>
          The design of the site relies on the wonderful work of Aysenur Turk.<br/>
          <a href="https://codepen.io/TurkAysenur/pen/ZEpxeYm" target="_blank" rel="noopener noreferrer">CodePen Home Glassmorphism Creative Cloud App Redesign </a> <br/>
          The project in open on git hub :
          <a href="https://github.com/silveray47/Linux_Cheat_Sheat" target="_blank">Linux_Cheat_Sheat </a>
           everyone are Welcome to join and continue the project. 
        </pre>

      </div>
      
    </div>
  )
}

export default Welcome
