import React, { useState } from "react";
import "/src/styles/Header.css";
const MenuList = [
  { id: 1, name: "Home", path: "" },
  { id: 2, name: "Contact", path: "" },
  { id: 3, name: "About", path: "" },
  { id: 4, name: "SignUp", path: "" },
];

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="search-icon"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="left-side-header-container">
        <div className="logo">Exclusive</div>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>

        <ul className={open ? "nav-menu active" : "nav-menu"}>
          {MenuList.map((Link) => (
            <li key={Link.id} onClick={() => setOpen(false)}>
              <a href={Link.path}>{Link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="right-side-header-container">
        <div className="searchbar">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="search-input"
          />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
