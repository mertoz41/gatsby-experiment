import React, { Component } from 'react'
import StoneCard from '../components/stoneCard'
import graniteStyles from './granitesect.module.css'

export class Granitesect extends Component {
    render() {
        return (
            <div className={graniteStyles.container}>
                {this.props.list.map(granite => {
                    return(
                        <StoneCard name={granite}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Granitesect
