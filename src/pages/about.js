import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'react-bootstrap/Image'
import stoneStyle from './stones.module.css'
import Artstone from '../components/artstone'
import homeStyles from './home.module.css'




class AboutPage extends Component {
    render() {
        return (
            <div className={stoneStyle.container}>
                <Header /> 
                <Artstone />
                <Image className={stoneStyle.pic} src={require('../images/artstone-fourth.jpg')}/>
                <div className={stoneStyle.writing}>
                    <h1>About</h1>
                </div>
                <div className={stoneStyle.aboutContainer}>
                <div className={stoneStyle.about}>
                    <p>
                    Established in the early 2000's, Artstone Marble & Granite offers commercial and residential services in measurement, fabrication, and installation of your preferred stone countertops along with sinks. All services are provided in the DMV area. 
                    </p>
                </div>
                <img src={require('../images/artstonelogo.jpg')} />
                </div>

                <Footer /> 
            </div>
        )
    }
}

export default AboutPage;