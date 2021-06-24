import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import sliderStyles from './pictureslider.module.css'
import artstonepic from '../images/theartstone.jpg'
import artstonetwo from '../images/theartstonetwo.jpg'
import artstonethree from '../images/artstone-third.jpg'
import Artstone from '../components/artstone'
import {Container, Image} from 'react-bootstrap'

const PictureSlider = () =>(
    <Container fluid>
        {/* <Artstone /> */}
      

        {/* <div className={sliderStyles.slider}> */}
        <Carousel fade>
            <Carousel.Item>
                <Image fluid style={{maxHeight: window.screen.height, width: '100%'}} src={artstonepic} alt="First slide" />
                <Carousel.Caption>
                    <h3>Experiment label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid style={{maxHeight: window.screen.height, width: '100%'}} src={artstonetwo} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Experiment label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid style={{maxHeight: window.screen.height, width: '100%'}} src={artstonethree} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Experiment label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        {/* </div> */}
</Container>
)

export default PictureSlider