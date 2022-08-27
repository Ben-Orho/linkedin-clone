import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Ben Orho</h2>
        <h4>benorho@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <p> student at the university of lagos </p>
        <div className="sidebar__stat">
          <p className="sidebar__statconnection">connections</p>
          <p className="sidebar__statnumber">2,406</p>
        </div>
        <h5>connect with alumini</h5>
      </div>
      <div className="sidebar__stat">
        <p>invitations</p>
      </div>
    </div>
  );
}

export default Sidebar;
