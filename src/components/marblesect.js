import React, { Component } from 'react'
import StoneCard from '../components/stoneCard'
import graniteStyles from './granitesect.module.css'

export class Marblesect extends Component {
    render() {
        return (
            <div className={graniteStyles.container}>
                {this.props.list.map(marble => {
                    return(
                        <StoneCard location="marblepics" name={marble}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Marblesect
