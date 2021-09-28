import React from 'react'

import { useParams } from 'react-router-dom';


export const DescreptionPage = (props) => {
  const { id } = useParams();

    let personFounded = props.film.find((el) => el.id == id);
    return (
      <div>
        
        <p> {personFounded && personFounded.name} </p>
        {props.film.trailer}
      </div>
    );
  };
