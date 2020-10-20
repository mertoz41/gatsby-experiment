import React, { Component } from 'react'
import sliderStyles from './pictureslider.module.css'


export class Artstone extends Component {
    render() {
        return (
            <div >
                <div className={sliderStyles.artstone}>
                <img src={require('../images/artstonelogo.jpg')}/>

                </div>
            </div>
        )
    }
}

export default Artstone
