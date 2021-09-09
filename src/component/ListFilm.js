import React from 'react'
import { CardFilm } from './CardFilm'

export const ListFilm = ({film}) => {
    return (
        <div>
           {film.map((fil) => (
               <CardFilm 
               key ={fil.id}
               fil={fil} />
           )) }
        </div>
    )
}
