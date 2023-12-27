 /* eslint-disable */

import React from 'react'
import "./portfolio.css"
import { useLanguage } from '../Context/LanguageContext.jsx';

const CardSection = ({ datas }) => {
    const { language } = useLanguage();
    return (
        <>
            {datas.map(({ id, image, title, titleEn, github, demo, figma }) => (
                    <article key={id} className='card-single-project'>
                        <img src={image} className='img-single-project'/>
                        <p className='content-single-project'>{language === 'FR' ? title : titleEn}</p>
                        <div className='container_links_portfolio'>
                            {figma === '' ? (
                                <>
                                    {github !== '' && <a href={github} target="_blank" className='link-single-project'>Github</a>}
                                    {demo !== '' && <a href={demo} target="_blank" className='link-single-project'>{language === 'FR' ? 'Démo en direct' :'Live Demo'}'</a>}
                                </>
                            ):<>
                                    <a href={figma} target="_blank" className='link-single-project'>Figma</a>
                        </>}
                        </div>
                    </article>
            ))}
        </>
    )
}

export default CardSection