import React, { useState } from 'react';
import './dropdownTextAbout.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const DropdownTextAbout = ({ datas, type }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      {datas.map(({ id, title, content }) => (
        <article className='container_dropdown_about' key={id}>
          <span className='container_title_arrow_about'>
            <h1 className='dropdown_title_about'>{title}</h1>
            <span className='container_arrow_about'>
              {showContent ? < BsChevronDown onClick={toggleContent}/> : < BsChevronUp onClick={toggleContent}/>}
            </span>
          </span>
          { showContent && <p className='dropdown_content_about'>{content}</p>}
        </article>
      ))}
    </>
  );
};

export default DropdownTextAbout;
