import {useState} from 'react'
import styled from 'styled-components'
import ContainerAtom from './ContainerAtom';
import ContainerPiano from './ContainerPiano';
import ContainerCard from './ContainerCard';
import ContainerMartial from './ContainerMartial';
import ContainerChess from './ContainerChess'
import ContainerLanguages from './ContainerLanguages';
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
font-size: 50px;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px grey;
position: relative;
font-family: "Geomanist";
&::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    overflow: hidden;
    color: grey;
    white-space: nowrap;
}

&:hover{
    &::after{
        animation: moveText 0.3s linear both;

        @keyframes moveText {
            to{
                width: 100%;
            }
        }
    }
}
@media(max-width: 1073px){
        font-size: 30px;
    }
`;

const Interests = () => {
    const [interest, setInterest] = useState('Programmation')

  return (
    <section className='section-interests'>
        
        <div className='container-interests'>
            <h1 className='main-title-interests'>Interests</h1> 
           <ul className='interests_list'>
           {
                        data.map((item) => (
                          <ListItem key={item} text={item} onClick={()=>setInterest(item)}>{item}</ListItem>  
                        ))
                    }
            </ul>
        </div>
        <div className='container_animation_interests'>
        {
                 interest === 'Programmation' ? (<ContainerAtom/>)  : interest === 'Piano' ? (<ContainerPiano />) : interest === 'Prestidigitation' ? (<ContainerCard />) : interest === 'Echecs' ? (<ContainerChess />) : interest === 'Arts Martiaux' ? (<ContainerMartial />) : interest === 'Echecs' ? (<ContainerChess />) : (<ContainerLanguages/>) 
                }
        </div>
        
    </section>
  )
}

export default Interests
