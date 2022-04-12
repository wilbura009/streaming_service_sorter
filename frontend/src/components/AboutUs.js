import React from 'react'
import Navbar from './Navbar'
import "../css/AboutUs.css"
import { Container, Row, FloatingLabel, Form } from 'react-bootstrap'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <>
    <Navbar />
    <div className="about-us-outer">
        <Row className='about-us-inner'>
            <h1 style={{color: '#FFA500'}}>Welcome to StreamEZ</h1>
            <p style={{paddingLeft: '15px', paddingTop:'10px', color:'#e3e3e3'}}>We are glad you're here! With StreamEZ you can easily find out where to watch your favorite movies & TV shows in the United States.
Browse through the whole catalog of all the important services like Netflix, HBO, Disney, Hulu, Amazon Prime, and many more. 
Find out what is currently trending and most-watched. If you want to know what’s coming soon, you can use StreamEZ to browse upcoming movies and TV shows that are scheduled for release on popular streaming services in the U.S.
            <br />
            <br />
            We organized our catalog of list of movies and TV shows. That means you will find your top matches shows and movies quickly. You can filter through the whole streaming landscape by using the Search above.
</p>
        </Row>
    </div>
    <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
    <Footer />
    </>
  )
}
