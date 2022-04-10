import React from 'react'
import Navbar from "../components/Navbar";
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import '../css/Result.css'
//Create separate css and override
    //Main container wont take a background color?

export default function Result() {
  return (
    <>
    <Navbar />
    <Container className={'main-container'}>
        <Row>
            <Col sm={5} className=''>
                <Card>
                    <Card.Img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                    <Card.Body>
                        <Card.Title className=''>Card title</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>  
                <h1 class='pad'>Title of the Show</h1>
                <h5 class=''>Watch now</h5>
                <Card className='bg-warning'>
                    <Card.Body className={''}>
                        <Card.Text>Cute Logos that link to provider</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={1} className='border-left'></Col>
        </Row>
    </Container>
    </>
  )
}
