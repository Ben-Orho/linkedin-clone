import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

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
          <p>who viewed you</p>
          <p className="sidebar__statnumber">2,406</p>
        </div>

        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statnumber">2,406</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
