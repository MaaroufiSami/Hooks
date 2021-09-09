import React from 'react'
import { Nav , NavDropdown ,Navbar , Container, Form,FormControl,Button} from 'react-bootstrap'
import { useState } from 'react';
export const NavBar = ({film}) => {

    const [search,setsearch]=useState('');
    
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="a#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" onChange={(e)=>setsearch(e.target.value) }/>
                        <Button variant="outline-success" >Search</Button>
                         </Form>

                        </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}
