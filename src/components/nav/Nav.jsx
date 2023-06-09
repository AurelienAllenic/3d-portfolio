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
                <Link className='navbar_logo' to='home' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Aurélien Allenic</Link>
                <Link className='navbar_logo_home' to='home' spy={true} smooth={true} offset={0} duration={800}><AiOutlineHome /></Link>
                <ul className='navbar_links'>
                    <li className='navbar_item slideInDown-1'>
                        <Link className='navbar_link' to='home' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Home</Link>
                    </li>
                    <li className='navbar_item slideInDown-2'>
                        <Link className='navbar_link' to='experience' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Experience</Link>
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
                                                <Link to={item.path}
                                                    className='linkStyle' spy={true} smooth={true} offset={0} duration={800}
                                                    onClick={handleShowLinks}
                                                >
                                                    <span onClick={closeBoth}>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>}</div>
                    </li>
                    <li className='navbar_item slideInDown-4'>
                        <Link className='navbar_link' to='interests' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Interests</Link>
                    </li>
                    <li className='navbar_item slideInDown-5'>
                        <Link className='navbar_link' to='contact' spy={true} smooth={true} offset={0} duration={800} onClick={handleShowLinks}>Contact</Link>
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

