import React from 'react'

export const Rate = ({ star, setSearchRate }) => {


    let stars = []
    for (let i = 0; i < 5; i++) {
        if (i < star) {
            stars.push(<span
                style={{ cursor: "pointer" }}
                onClick={()=>setSearchRate(i+1)}
            >★</span>)
        }
        else {
            stars.push(<span 
                style={{ cursor: "pointer" }}
                onClick={()=>setSearchRate(i+1)}
            >☆</span>)
        }
    }
    return (
        <div>
             <div>{stars}</div> 
        </div>
    )
}
