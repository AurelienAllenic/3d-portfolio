import { useState } from 'react';
import "./languages.css";
import styled from 'styled-components';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';

const data = [
  "Front End",
  "Back End",
];

const ListItem = styled.li`
  font-size: 70px;
  cursor: pointer;
  color: white;
  position: relative;
  font-family: "Geomanist";
  background: linear-gradient(90deg, #008ab3, #55e7fc);
  text-align: center;
  width: auto;
  min-width: fit-content;
  white-space: nowrap;
  padding: 3%;
  margin-top: 5%;
  &.active {
    background: #008ab3;
  }
  &:hover {
    background: #008ab3;
  }
  @media(max-width: 1073px) {
    font-size: 75px;
  }
  @media(max-width: 847px) {
    font-size: 60px;
  }
  @media(max-width: 687px) {
    font-size: 45px;
  }
  @media(max-width: 550px) {
    font-size: 35px;
  }
  @media(max-width: 527px) and (max-height: 614px) {
    font-size: 30px;
  }
  @media(max-width: 527px) and (max-height: 505px) {
    font-size: 25px;
  }
  @media(max-width: 488px) {
    font-size: 30px;
  }
  @media(max-width: 368px) {
    font-size: 25px;
  }
`;

const Languages = () => {
  const [language, setLanguage] = useState('Front End');

  return (
    <>
      <a className='anchor' id='languages'></a>
      <section className='section-languages'>
       
          <h1 className='main-title-languages' data-aos="fade-top" data-aos-duration="1000">Programming Languages</h1>
      
          <div className='container-two-languages' >
            <div className='container-languages'>
              <ul className='languages_list'>
                {data.map((item) => (
                  <ListItem key={item} text={item} className={language === item ? 'active' : ''} onClick={() => setLanguage(item)} >{item}</ListItem>
                ))}
              </ul>
            </div>
            <div className='container_langages_cards'>
              {language === 'Front End' ? <FrontEnd /> : <BackEnd />}
            </div>
          </div>
        
      </section>
    </>
  )
}

export default Languages;