import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'react-bootstrap/Image'
import { Row, Col } from 'react-bootstrap'

const Sinks = () => (
    <div>
        <Header /> 
        <Row>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col>
        </Row>

        sinks page experimenting
        <Footer />
    </div>
)

export default Sinks