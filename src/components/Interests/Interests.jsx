import { useState } from 'react'
import styled from 'styled-components'
import './interests.css'
import DropdownTextAbout from '../DropdownText/DropdownTextAbout'

const data = [
  "Programmation",
  "Piano",
  "Prestidigitation",
  "Arts Martiaux",
  "Echecs",
  "Langues",
];

const ListItem = styled.li`
  font-size: 45px;
  cursor: pointer;
  color: ${props => (props.selected ? 'black' : 'white')};
  position: relative;
  font-family: "Geomanist";
  padding: 5%;
  background: ${props =>
    props.selected
      ? '#008ab3'
      : 'linear-gradient(90deg, #008ab3, #55e7fc)'};
  text-align: center;
  min-width: fit-content;

  &:hover {
    transform: scale(1.02);
    background: #008ab3;
  }


  @media (max-width: 1073px) {
    font-size: 30px;
  }
  @media (max-width: 667px) {
    font-size: 25px;
  }
  @media (max-width: 344px) {
    font-size: 20px;
  }
  @media (max-width: 281px) {
    font-size: 17px;
  }
  @media (max-width: 244px) {
    font-size: 15px;
  }
`;


const Interests = () => {
    const [interest, setInterest] = useState(null);
  
  
  
    return (
      <>
    <a className='anchor' id='interests'></a>
      <section className='section-interests' id='interests'>
        <div className='container-interests'>
          <h1 className='main-title-interests'>Interests</h1>
            <ul className='interests_list'>
            <DropdownTextAbout datas={[{ id: 1, title: 'Programmation', content: "I would like to work as a front or fullStack developer, using Reactjs and nodejs" }]}/>
            <DropdownTextAbout datas={[{ id: 2, title: 'Piano', content: "Practicing on classical and sometimes on joe Hisaishi's music" }]}/>
            <DropdownTextAbout datas={[{ id: 3, title: 'Prestidigitation', content: "Since 2013, I've been practicing and sometimes perfoming in events" }]}/>
            <DropdownTextAbout datas={[{ id: 4, title: 'Arts Martiaux', content: "I studied Judo in my childhood and then, I tried wing Chun and Fut Ga" }]}/>
            <DropdownTextAbout datas={[{ id: 5, title: 'Echecs', content: "I learned for myself and I'm playing for fun since 2007" }]}/>
            <DropdownTextAbout datas={[{ id: 6, title: 'Langues', content: "I'm B2 in English, B1+ in Spanish and i have some basics of German and japanese" }]}/>
            </ul>
        </div>
        
      </section>
      </>
    );
  }
  
  export default Interests;
  
