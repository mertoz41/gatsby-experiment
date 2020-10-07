import React, { Component } from 'react'
import StoneCard from './stoneCard'
import sectionStyle from './cardsect.module.css'

export class Cardsect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                {this.props.list.map(granite => {
                    return(
                        <StoneCard location={this.props.location} name={granite}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Cardsect
