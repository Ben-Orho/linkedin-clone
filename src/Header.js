import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1660693319~hmac=d874777e05dcea7317a400284633914a"
          alt=""
        />
        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
        <div className="header-right"></div>
      </div>
    </div>
  );
}

export default Header;
