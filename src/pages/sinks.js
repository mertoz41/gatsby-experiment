import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'react-bootstrap/Image'
import stoneStyle from './stones.module.css'


class Sinks extends Component { 
    render(){

        return(
            <div>
                <Header /> 
                <Image className={stoneStyle.pic} src={require('../images/sink-stone.jpg')} style={{width: 1500}}/>
                <div className={stoneStyle.writing}>
                    <h1>Sinks</h1>
                </div>
                <Footer />
            </div>
    )
} 
}

export default Sinks