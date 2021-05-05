import './Sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-img"
      />

      <SidebarOption Icon={HomeIcon} title="Home" />

      <SidebarOption Icon={SearchIcon} title="Search" />

      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />

      <SidebarOption title="Hip Hop" />

      <SidebarOption title="Rock" />
    </div>
  );
}

export default Sidebar;
