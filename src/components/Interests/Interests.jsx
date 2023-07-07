import { useState } from 'react'
import styled from 'styled-components'
import ContainerAtom from './ContainerAtom'
import ContainerPiano from './ContainerPiano'
import ContainerCard from './ContainerCard'
import ContainerMartial from './ContainerMartial'
import ContainerChess from './ContainerChess'
import ContainerLanguages from './ContainerLanguages'
import './interests.css'

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

const CrossButton = styled.button`
  position: absolute;
  top: 10%;
  left: 80%; 
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 50px;
  
    color: #008ab3;
    z-index: 1;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 667px) {
    font-size: 45px;
    top: 20%;
  }
  @media (max-width: 461px) {
    font-size: 40px;
    top: 22%;
  }
  @media (max-width: 414px) {
    font-size: 35px;
    top: 25%;
    left: 75%;
  }
  @media (max-width: 350px) {
    font-size: 30px;
    top: 30%;
    left: 70%;
  }
`;

const Interests = () => {
    const [interest, setInterest] = useState(null);
    const [showCross, setShowCross] = useState(false);
    const [listVisible, setListVisible] = useState(true);
  
    const handleCross = () => {
      setShowCross(!showCross);
      setListVisible(true);
    }
  
    const handleItemClick = (item) => {
      setInterest(item);
      setListVisible(true);
      setShowCross(true)
    };
  
    return (
      <>
      <section className='section-interests'>
        <div className='container-interests'>
          <h1 className='main-title-interests'>Interests</h1>
          {listVisible && (
            <ul className='interests_list' onClick={() => setListVisible(false)}>
              {data.map((item) => (
                <ListItem
                  key={item}
                  text={item}
                  onClick={() => {
                    handleItemClick(item);
                    setShowCross(true);
                  }}
                  selected={item === interest}
                >
                  {item}
                </ListItem>
              ))}
            </ul>
          )}
          {showCross && (
            <CrossButton onClick={() => handleCross()}>✕</CrossButton>
          )}
        </div>
        <div className='container_animation_interests'>
          {interest === 'Programmation' && <ContainerAtom />}
          {interest === 'Piano' && <ContainerPiano />}
          {interest === 'Prestidigitation' && <ContainerCard />}
          {interest === 'Echecs' && <ContainerChess />}
          {interest === 'Arts Martiaux' && <ContainerMartial />}
          {interest === 'Langues' && <ContainerLanguages />}
        </div>
      </section>
      </>
    );
  }
  
  export default Interests;
  
