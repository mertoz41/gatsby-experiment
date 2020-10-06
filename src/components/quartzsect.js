import React, { Component } from 'react'
import StoneCard from '../components/stoneCard'
import graniteStyles from './granitesect.module.css'

export class Quartzsect extends Component {
    render() {
        return (
            <div className={graniteStyles.container}>
                {this.props.list.map(granite => {
                    return(
                        <StoneCard location="quartzpics" name={granite}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Quartzsect
