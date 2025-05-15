/* eslint-disable */
import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import "./buttons_about.scss";

const Logos = () => {
  return (
    <div className='logos'>
      <div className='container_logos_left'>
        <div className='container_logos_left_first_part'>
          <figure>
            <ImHtmlFive fill='#E44D26' />
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            <IoLogoCss3 fill='#264DE4' />
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <FaSass fill='#d49cb4' />
            <figcaption>Sass</figcaption>
          </figure>
        </div>
        <div className='container_logos_left_second_part'>
          <figure>
            <SiJavascript fill='#F7DF1E' />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <FaReact fill='#61DAFB' />
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <RiNextjsFill fill='#000' style={{background: 'white', borderRadius: '50%', overflow: 'hidden'}}/>
            <figcaption>NextJs</figcaption>
          </figure>
        </div>
      </div>
      <div className='container_logos_right'>
        <figure>
          <FaNodeJs fill='#3C873A' />
          <figcaption>Node.js</figcaption>
        </figure>
        <figure>
          <SiPython fill='#3776AB' />
          <figcaption>Python</figcaption>
        </figure>
        <figure>
          <SiDjango fill='#249f70' />
          <figcaption>Django</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Logos;
