import React from "react";
import { DropDown } from "./DropDownMenu";
import "../styles/TopHeaderStyle.css";
function TopHeader() {
  return (
    <div className="TopHeader-container">
      <div className="frame-container">
        <div className="left-side-frame-container">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span>ShopNow</span>
          </p>
        </div>
        <div className="right-side-frame-container">
          <DropDown />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
