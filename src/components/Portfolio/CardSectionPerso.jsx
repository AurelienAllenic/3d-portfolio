 /* eslint-disable */

import React from 'react'
import "./portfolio.scss"

const CardSectionPerso = ({ datas }) => {
    return (
        <>
            {datas.map(({ id, image, title, github, demo }) => (
                    <article key={id} className='card-single-project'>
                        <img src={image} className='img-single-project'/>
                        <p className='content-single-project'>{title}</p>
                        <div className='container_links_portfolio_perso'>
                            <a href={demo} target="_blank" className='link-single-project'>Live Demo</a>
                        </div>
                    </article>
            ))}
        </>
    )
}

export default CardSectionPerso