import React from 'react'
import { Card } from 'react-bootstrap'
import { Rate } from './Rate'
import {Link} from "react-router-dom";

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
            
            <Link to={`/${fil.id}`}>
                 {" "}
                <h3> {fil.name} </h3>
            </Link>

            </Card.Body>
            </Card>
            
        </div>
    )
}
