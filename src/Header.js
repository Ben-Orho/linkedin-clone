import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
          alt=""
        />
        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
        <div className="header-right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={CommentIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption
            avatar="https://cdn-icons-png.flaticon.com/512/147/147142.png"
            title="me"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
