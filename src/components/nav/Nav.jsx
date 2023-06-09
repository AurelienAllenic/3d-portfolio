import "./nav.css"
import "./Dropdown/DropDown.css"
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll"
import { DropDownElements } from './Dropdown/DropDownElements'
import { AiOutlineHome } from "react-icons/ai"

function Navbar() {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)

    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])


    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeBoth = () => {
        if (click === false) {
            setDropdown(true);
            setShowlinks(true);
            setClick(false);
        }
        else {
            setDropdown(false);
            setShowlinks(false);
            setClick(true);
        }
    }
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const [showLinks, setShowlinks] = useState(false)

    const handleShowLinks = () => {
        setShowlinks(!showLinks)
    }
    return (
        <>
            <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <a className='navbar_logo' href='home' onClick={handleShowLinks}>Aurélien Allenic</a>
                <a className='navbar_logo_home' href='home'><AiOutlineHome /></a>
                <ul className='navbar_links'>
                    <li className='navbar_item slideInDown-1'>
                        <a className='navbar_link' href='/' onClick={handleShowLinks}>Home</a>
                    </li>
                    <li className='navbar_item slideInDown-2'>
                        <a className='navbar_link' href='/languages' onClick={handleShowLinks}>Programmation</a>
                    </li>
                    <li className='navbar_item slideInDown-3'>
                        <div className='navbar_link' onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave} onClick={closeBoth}>Portfolio{dropdown &&
                                <ul
                                    onClick={handleClick}
                                    className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
                                >
                                    {DropDownElements.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a to={item.path}
                                                    className='linkStyle'
                                                    onClick={handleShowLinks}
                                                >
                                                    <span onClick={closeBoth}>{item.title}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>}</div>
                    </li>
                    <li className='navbar_item slideInDown-4'>
                        <a className='navbar_link' to='interests' onClick={handleShowLinks}>Interests</a>
                    </li>
                    <li className='navbar_item slideInDown-5'>
                        <a className='navbar_link' to='contact' onClick={handleShowLinks}>Contact</a>
                    </li>
                </ul>
                <button className='navbar_burger' onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>
            </div>
        </>
    )
}

export default Navbar

