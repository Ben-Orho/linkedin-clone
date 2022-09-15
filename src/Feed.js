import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArticleIcon from "@mui/icons-material/Article";
import InputOption from "./InputOption";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
          <InputOption Icon={SmartDisplayIcon} title="video" color="#5F9B41" />
          <InputOption
            Icon={EventAvailableIcon}
            title="Event"
            color="#C37D16"
          />
          <InputOption
            Icon={ArticleIcon}
            title="Write article"
            color="#E16745"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
