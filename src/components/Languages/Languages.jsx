import {useState} from 'react'
import "./languages.css"
import styled from 'styled-components'
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import ContainerMac from './ContainerMac';


const data = [
    "Design",
    "Front End",
    "Back End",
];

const ListItem = styled.li`
font-size: 90px;
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
        font-size: 75px;
    }
    @media(max-width: 847px){
        font-size: 60px;
    }
    @media(max-width: 687px){
        font-size: 45px;
    }
    @media(max-width: 550px){
        font-size: 35px;
    }
    @media(max-width: 488px){
        font-size: 30px;
    }
    @media(max-width: 368px){
        font-size: 25px;
    }
`;

const Languages = () => {
    const [language, setLanguage] = useState('Design')

  return (
    <section className='section-languages'>
        <h1 className='main-title-languages'>Programming Languages</h1> 
        <div className='container-two-languages'>
        <div className='container-languages'>
           <ul className='languages_list'>
           {
                        data.map((item) => (
                          <ListItem key={item} text={item} onClick={()=>setLanguage(item)}>{item}</ListItem>  
                        ))
                    }
            </ul>
        </div>
        <div className='container_langages_cards'>
        {
                 language === 'Design' ? (<ContainerMac/>)  : language === 'Front End' ? (<FrontEnd />) : (<BackEnd/>) 
                }
        </div>
        </div>
    </section>
  )
}

export default Languages
