import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import sliderStyles from './pictureslider.module.css'
import artstonepic from '../images/theartstone.jpg'
import artstonetwo from '../images/theartstonetwo.jpg'
import artstonethree from '../images/theartstonethree.jpg'

const PictureSlider = () =>(
    <div className={sliderStyles.slider}>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={artstonepic} alt="First slide" style={{maxWidth: '100%', objectFit: 'cover'}}/>
                <Carousel.Caption>
                    <h3>Granite</h3>
                    <p>What is granite</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={artstonetwo} alt="Third slide" style={{maxWidth: '100%', objectFit: 'cover'}}/>
                <Carousel.Caption>
                    <h3>Marble</h3>
                    <p>What is Marble?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={artstonethree} alt="Third slide" style={{maxWidth: '100%', objectFit: 'cover'}}/>
                <Carousel.Caption>
                    <h3>Quartz</h3>
                    <p>What is quartz?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default PictureSlider