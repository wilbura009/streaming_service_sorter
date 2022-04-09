import React from 'react'
import Navbar from "../components/Navbar";
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function Result() {
  return (
    <>
    <Navbar />
    <Container className='border rounded bg-light text-white'>
        <Row>
            <Col sm={5}>
                <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" fluid />
            </Col>
            <Col className='text-left'>
                <h1>Title of the Show</h1>
            </Col>
        </Row>
    </Container>
    </>
  )
}
