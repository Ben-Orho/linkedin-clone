import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://t4.ftcdn.net/jpg/00/02/36/65/240_F_2366589_VXU9OBC0fBTm5bt3D1gq8eSl3DWpzd.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ben Orho</h2>
        <h4>benorho@gmail.com</h4>
        <p> student at the university of ibadan </p>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p className="sidebar__statconnection">connections</p>
          <p className="sidebar__statnumber">2,406</p>
        </div>
      </div>
      <div className="sidebar__stat">
        <h5>connect with alumini</h5>
        <p>invitations</p>
      </div>
    </div>
  );
}

export default Sidebar;
