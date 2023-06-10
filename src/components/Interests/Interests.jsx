import {useState} from 'react'
import styled from 'styled-components'
import ContainerAtom from './ContainerAtom';
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
-webkit-text-stroke: 1px white;
position: relative;
font-family: "Geomanist";
&::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    overflow: hidden;
    color: white;
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
    @media(max-width: 847px){
        font-size: 20px;
    }
`;

const Interests = () => {
    const [language, setLanguage] = useState('Programmation')

  return (
    <section className='section-languages'>
        <h1 className='main-title-languages margin-interests'>Interests</h1> 
        <div className='container-languages interests-text'>
           <ul className='languages_list-interests'>
           {
                        data.map((item) => (
                          <ListItem key={item} text={item} onClick={()=>setLanguage(item)}>{item}</ListItem>  
                        ))
                    }
            </ul>
        </div>
        <div className='container_langages_cards'>
        {
                 language === 'Design' ? (<ContainerAtom/>)  : language === 'Front End' ? (<ContainerAtom />) : (<ContainerAtom/>) 
                }
        </div>
        
    </section>
  )
}

export default Interests
