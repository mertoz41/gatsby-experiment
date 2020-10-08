import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import sliderStyles from './pictureslider.module.css'
import artstonepic from '../images/theartstone.jpg'
import artstonetwo from '../images/theartstonetwo.jpg'
import artstonethree from '../images/artstone-third.jpg'

const PictureSlider = () =>(
    <div >
        <div className={sliderStyles.artstone}>
            <img src={require('../images/artstonelogo.jpg')} style={{width: '200px', height: '200px'}}/>
        </div>

        <div className={sliderStyles.slider}>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={artstonepic} alt="First slide" style={{maxWidth: '100%', objectFit: 'cover'}}/>
               
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={artstonetwo} alt="Third slide" style={{maxWidth: '100%', objectFit: 'cover'}}/>
        
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={artstonethree} alt="Third slide" style={{maxWidth: '100%', objectFit: 'cover'}}/>
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
)

export default PictureSlider