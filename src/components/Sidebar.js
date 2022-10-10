import React from 'react'
import { Link } from 'react-router-dom'
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import TerminalIcon from '@mui/icons-material/Terminal';
import DownloadIcon from '@mui/icons-material/Download';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CodeIcon from '@mui/icons-material/Code';
import HistoryIcon from '@mui/icons-material/History';
import CompressIcon from '@mui/icons-material/Compress';
import GroupIcon from '@mui/icons-material/Group';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { FaSkull } from 'react-icons/fa';
import CellTowerIcon from '@mui/icons-material/CellTower';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  return (
    <div className="left-side">
      <div className="side-wrapper">
        <div className="side-menu">
        <div className="side-title">Home</div>
            <Link to="/">
              <HomeIcon/>
              <span>Welcome</span>
            </Link>
        <div className="side-title">Categories</div>
          <Link to="/BasicCLI">
            <TerminalIcon/>
            <span>Navigation and List</span>
          </Link>
          <Link to="/FilesAndFolders">
            <FolderCopyIcon/>
            <span>Files and Folders</span>
          </Link>
          <Link to="/Nano">
            <BorderColorIcon/>
            <span>Nano</span>
          </Link>
          <Link to="/Streams">
            <CodeIcon/>
            <span>Streams and<br></br> concatenation</span>
          </Link>
          <Link to="/Compression">
            <CompressIcon/>
            <span>Compression</span>
          </Link>
          <Link to="/Echo">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path
                d="M0 331v112.295a14.996 14.996 0 007.559 13.023L106 512V391L0 331zM136 391v121l105-60V331zM271 331v121l105 60V391zM406 391v121l98.441-55.682A14.995 14.995 0 00512 443.296V331l-106 60zM391 241l-115.754 57.876L391 365.026l116.754-66.15zM262.709 1.583a15.006 15.006 0 00-13.418 0L140.246 57.876 256 124.026l115.754-66.151L262.709 1.583zM136 90v124.955l105 52.5V150zM121 241L4.246 298.876 121 365.026l115.754-66.15zM271 150v117.455l105-52.5V90z" />
            </svg>
            <span>Echo</span> 
          </Link>
          <Link to="/History">
            <HistoryIcon/>
            <span>History</span> 
          </Link>
          <Link to="/UsersAndGroups">
            <GroupIcon/>
            <span>Users and Groups</span> 
          </Link>
          <Link to="/Permissions">
            <VpnKeyIcon/>
            <span>Permissions</span> 
          </Link>
          <Link to='/TextProcessing'>
            <TextFieldsIcon/>
            <span>Text Processing</span> 
          </Link>
          <Link to='/Regex'>
            <svg width="20" height="20"  viewBox =" 0 0 20 20 " fill="currentColor">
              <path d="M1.62 10a13.63 13.63 0 0 0 .45 3.51A13.39 13.39 0 0 0 3.4 16.7a.91.91 0 0 1 .1.27.41.41 0 0 1 0 .21.38.38 0 0 1-.1.15l-.14.11-.83.5a14.89 14.89 0 0 1-1.11-2 13.62 13.62 0 0 1-.74-2 13.22 13.22 0 0 1-.42-2 16.4 16.4 0 0 1 0-4.14 13.22 13.22 0 0 1 .42-2 13.84 13.84 0 0 1 .74-2A14.94 14.94 0 0 1 2.4 2l.83.51.14.11a.4.4 0 0 1 .1.15.41.41 0 0 1 0 .21.93.93 0 0 1-.1.27A13.6 13.6 0 0 0 1.62 10zM5 13.51a1.53 1.53 0 0 1 .11-.59 1.5 1.5 0 0 1 .31-.48 1.5 1.5 0 0 1 1.65-.32 1.51 1.51 0 0 1 .8.8 1.47 1.47 0 0 1 .12.59 1.46 1.46 0 0 1-.12.59 1.56 1.56 0 0 1-.32.48 1.46 1.46 0 0 1-.48.32 1.57 1.57 0 0 1-1.18 0 1.4 1.4 0 0 1-.47-.32A1.5 1.5 0 0 1 5 13.51zm10.8-4.72-.54.94-1.75-1-.34-.23a1.38 1.38 0 0 1-.27-.26A1.84 1.84 0 0 1 13 9v2h-1V9a2.16 2.16 0 0 1 .12-.76 1.82 1.82 0 0 1-.58.48l-1.74 1-.54-.94 1.73-1a2.25 2.25 0 0 1 .75-.29 1.77 1.77 0 0 1-.75-.28L9.2 6.2l.54-.94 1.75 1 .33.24a1.64 1.64 0 0 1 .27.27A2 2 0 0 1 12 6V4h1v2a2.93 2.93 0 0 1 0 .4 1.36 1.36 0 0 1-.1.36 2.24 2.24 0 0 1 .59-.49l1.74-1 .54.94-1.73 1-.36.18a1.29 1.29 0 0 1-.36.1 2.11 2.11 0 0 1 .36.1 2 2 0 0 1 .36.19zM18.37 10a13.65 13.65 0 0 0-.45-3.51 13.81 13.81 0 0 0-1.32-3.27.93.93 0 0 1-.1-.27.45.45 0 0 1 0-.21.36.36 0 0 1 .1-.15l.14-.11.86-.48a15.54 15.54 0 0 1 1.1 2 13.79 13.79 0 0 1 .74 2 13.18 13.18 0 0 1 .42 2 16.16 16.16 0 0 1 .14 2 16.21 16.21 0 0 1-.13 2 13.18 13.18 0 0 1-.42 2 13.57 13.57 0 0 1-.74 2 15.49 15.49 0 0 1-1.1 2l-.84-.5-.14-.11a.35.35 0 0 1-.1-.15.44.44 0 0 1 0-.21.91.91 0 0 1 .1-.27 13.62 13.62 0 0 0 1.31-3.23 13.69 13.69 0 0 0 .43-3.53z"/>
            </svg>
            <span>Regex</span> 
          </Link>
          <Link to='/Package'>
            <InventoryIcon/>
            <span>Package Management</span> 
          </Link>
          <Link to='/ProcessesAndSystemctl'>
            <SettingsSuggestIcon/>
            <span>Processes and Systemctl </span>
          </Link>
          <Link to='/Kill'>
            <FaSkull/>
            <span>Kill commend</span> 
          </Link>
          <Link to='/Networking'>
            <CellTowerIcon/>
            <span>Networking</span> 
          </Link>
          <div className="side-title">Download</div>
          <Link to="/files/Linux - Cheat Sheet.pdf" target="_blank" download>
            <DownloadIcon/>
            <span>Cheat Sheet</span>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
