/* eslint-disable */
import "./nav.scss";
import "./Dropdown/DropDown.scss";
import React, { useState, useEffect } from "react";
import { DropDownElements } from "./Dropdown/DropDownElements";
import { AiOutlineHome } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLanguage } from '../Context/LanguageContext'

function Navbar() {
  const { language } = useLanguage();
  const [showlinks, setShowlinks] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  const closeDropdown = () => {
    setDropdown(false);
  };

  const closeNavMob = () => {
    const navElement = document.getElementById("nav");
    if (!navElement.classList.contains("show-nav")) {
      return;
    }
    navElement.classList.remove("show-nav");
    closeDropdown();
    setShowlinks(false);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  const handleShowLinks = () => {
    setShowlinks(!showlinks);
  };

  return (
    <>
      <div
        className={`navbar ${showlinks ? "show-nav" : "hide-nav"}`}
        id="nav"
      >
        <Link
          className="navbar_logo"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          onClick={handleShowLinks}
        >
        </Link>
        <ul className="navbar_links">
          <li className="navbar_item slideInDown-1">
            <Link
              className="navbar_link"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={handleShowLinks}
            >
              {language === 'FR' ? 'Accueil' : 'Home'}
            </Link>
          </li>
          <li className="navbar_item slideInDown-2">
            <Link
              className="navbar_link"
              to="cvLetter"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={handleShowLinks}
            >
              Curriculum
            </Link>
          </li>
          <li className="navbar_item slideInDown-3">
            <Link
              className="navbar_link"
              to="languages"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={handleShowLinks}
            >
              Programmation
            </Link>
          </li>
          <li
            className="navbar_item slideInDown-4"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="navbar_link" onClick={toggleDropdown}>
              Portfolio
              {dropdown && (
                <ul className="dropdown-menu">
                  {DropDownElements.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className="linkStyle"
                        onClick={closeNavMob}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                      >
                        <span>{language === 'FR' ? item.title : item.titleEn}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li className="navbar_item slideInDown-5">
            <Link
              className="navbar_link"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={handleShowLinks}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="navbar_burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </div>
    </>
  );
}

export default Navbar;
