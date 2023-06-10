 /* eslint-disable */

import React from 'react'
import { Card, ImageCard, ContentCard, LinkPerso } from "../../style/Portfolio"

const CardSectionPerso = ({ datas }) => {
    return (
        <>
            {datas.map(({ id, image, title, demo }) => (
                <div data-aos="fade-up" data-aos-duration="1000" key={id}>
                    <Card key={id}>
                        <ImageCard src={image} />
                        <ContentCard>{title}</ContentCard>
                        <LinkPerso href={demo} target="_blank">Live Demo</LinkPerso>
                    </Card>
                </div>
            ))}
        </>
    )
}

export default CardSectionPerso