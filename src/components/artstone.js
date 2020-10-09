import React, { Component } from 'react'
import sliderStyles from './pictureslider.module.css'


export class Artstone extends Component {
    render() {
        return (
            <div >
                <div className={sliderStyles.artstone}>
                <img src={require('../images/artstonelogo.jpg')} style={{width: '50px', height: '47px'}}/>

                </div>
            </div>
        )
    }
}

export default Artstone
