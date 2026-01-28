import React, { useState, useRef, useEffect } from "react";

const languages = [
  { code: "pl", name: "Polski" },
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>
          {selected.flag} {selected.name}
        </span>
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <ul className="dropdown-list">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`dropdown-item ${selected.code === lang.code ? "active" : ""}`}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
            >
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
