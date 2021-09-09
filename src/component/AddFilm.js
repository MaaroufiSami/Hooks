import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { useState } from 'react'

export const AddFilm = ({add}) => {


const [name,setName]= useState('');
const [duration,setDuration]= useState('');
const [discription,setDiscription]=useState('');
const[year,setYear]=useState('2000');



 const addd = () => {
    add({ name : name ,year:year ,duration: duration , discription: discription,id : Math.random() });
    setYear('2000');
    setName('');
    setDuration('');
    setDiscription('');

    
  };

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
          }}>

        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" placeholder="Movie Name" value={name} onChange={(e) =>setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Descreption</Form.Label>
             <Form.Control type="text" placeholder="Descreption" value={discription} onChange={(e) =>setDiscription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Duration</Form.Label>
             <Form.Control type="text" placeholder="Duration" value={duration} onChange={(e) =>setDuration(e.target.value)}/>
            </Form.Group>
        
            <Form.Group  controlId="formGridState">
             <Form.Label>Year</Form.Label>
            <Form.Select defaultValue="Choose..."  value={year} onChange={(e)=> setYear(e.target.value)}>
            <option>2000</option>
            <option>2002</option>
            <option>2003</option>
            </Form.Select>
             </Form.Group>
            

            <Button variant="primary"  onClick={addd}>
              Add
            </Button>
            <Button variant="primary" type="reset">
              Cancel
            </Button>
            </Form>

            
            
        </div>
    )
}
