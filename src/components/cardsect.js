import React, { Component } from 'react'
import StoneCard from './stoneCard'
import sectionStyle from './cardsect.module.css'
import { Card, CardDeck } from 'react-bootstrap'
export class Cardsect extends Component {
    render() {
        return (
            <div className={sectionStyle.container}>
                {/* <StoneCard location={this.props.location} name='artstone-fifth.jpg'/> */}

                {this.props.list.map((granite, i) => {
                    return(
                        <StoneCard location={this.props.location} name={granite} key={i}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Cardsect
