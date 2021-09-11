import React from 'react'
import { Card } from 'react-bootstrap'
import { Rate } from './Rate'


export const CardFilm = ({fil}) => {
    return (
        <div  style={{display: "flex",flexWrap: "wrap",justifyContent: "space-between"}} >

        <Card >
            <Card.Body>
             <Card.Img variant ="top"src={fil.img}/>
            <Card.Title>{fil.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{fil.duration}</Card.Subtitle>
            <Card.Text> {fil.discription}
            </Card.Text>
            <Rate rating={fil.star} />
            </Card.Body>
            </Card>
            
        </div>
    )
}
