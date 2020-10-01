import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import stoneStyles from './stoneCard.module.css'

class StoneCard extends Component {
    render() {
        return (
            <div className={stoneStyles.singleCard}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require(`../granitepics/${this.props.name}.png`)} style={{width: "100%"}}/>
                    <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title> 
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default StoneCard
