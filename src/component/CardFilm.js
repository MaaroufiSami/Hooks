import React from 'react'
import { Card } from 'react-bootstrap'


export const CardFilm = ({fil}) => {
    return (
        <div style={{ width: '18rem' , margin :'10px ' , padding:'5px',display: "flex",flexWrap: "wrap",alignItems: "center",justifyContent: "space-between"}}>

        <Card >
            <Card.Body>
            <Card.Title>{fil.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{fil.duration}min</Card.Subtitle>
            <Card.Text> {fil.discription}
            </Card.Text>
            <Card.Text>{fil.star}/5</Card.Text>
            
            </Card.Body>
            </Card>
            
        </div>
    )
}
