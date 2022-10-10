import Sidebar from "./components/Sidebar";
import BasicCLI from './screens/BasicCLI'
import Compression from './screens/Compression'
import Echo from './screens/Echo'
import FilesAndFolders from './screens/FilesAndFolders'
import Kill from './screens/Kill'
import Nano from './screens/Nano'
import Networking from './screens/Networking'
import Package from './screens/Package'
import Permissions from './screens/Permissions'
import ProcessesAndSystemctl from './screens/ProcessesAndSystemctl'
import BasiRegexcCLI from './screens/Regex'
import Streams from './screens/Streams'
import TextProcessing from './screens/TextProcessing'
import UsersAndGroups from './screens/UsersAndGroups'
import History from './screens/History'
import Regex from './screens/Regex.js'

import { Route, Routes } from 'react-router-dom'
import Welcome from "./screens/Welcome";


function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="menu-circle"></div>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div> */}
      </div>
      <div className="wrapper">
        <Sidebar/>

        <div className="content-wrapper">
          <Routes>
            <Route path='/' element = {<Welcome/>}/>
            <Route path='/BasicCLI' element = {<BasicCLI/>}/>
            <Route path='/Compression' element = {<Compression/>}/>
            <Route path='/Echo' element = {<Echo/>}/>
            <Route path='/History' element = {<History/>}/>
            <Route path='/FilesAndFolders' element = {<FilesAndFolders/>}/>
            <Route path='/Kill' element = {<Kill/>}/>
            <Route path='/Nano' element = {<Nano/>}/>
            <Route path='/Package' element = {<Package/>}/>
            <Route path='/Networking' element = {<Networking/>}/>
            <Route path='/ProcessesAndSystemctl' element = {<ProcessesAndSystemctl/>}/>
            <Route path='/Permissions' element = {<Permissions/>}/>
            <Route path='/Streams' element = {<Streams/>}/>
            <Route path='/BasiRegexcCLI' element = {<BasiRegexcCLI/>}/>
            <Route path='/TextProcessing' element = {<TextProcessing/>}/>
            <Route path='/UsersAndGroups' element = {<UsersAndGroups/>}/>
            <Route path='/Regex' element = {<Regex/>}/>
            <Route path='/*' element = {<Welcome/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
