 /* eslint-disable */

import React from 'react'
import "./portfolio.css"

const CardSection = ({ datas }) => {
    return (
        <>
            {datas.map(({ id, image, title, github, demo, figma }) => (
                    <article key={id} className='card-single-project'>
                        <img src={image} className='img-single-project'/>
                        <p className='content-single-project'>{title}</p>
                        <div className='container_links_portfolio'>
                            {figma === '' ? (
                                <>
                                    {github !== '' && <a href={github} target="_blank" className='link-single-project'>Github</a>}
                                    {demo !== '' && <a href={demo} target="_blank" className='link-single-project'>Live Demo</a>}
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