import React, { Component } from 'react'
import tabStyles from './stonetabs.module.css'
import { Grid, Menu, Segment } from 'semantic-ui-react'



export class Edgetabs extends Component { 
    state ={
        activeItem: 'basic'
    }


    handleItemClick = (name) => {
    this.setState({ activeItem: name })
    this.props.changeMenuItem(name)
    }


    render() {
        return (
            <div className={tabStyles.container} >
             
           
             <div className={tabStyles.nuTabs}>
                <h3 className={(this.state.activeItem === 'basic' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('basic')}>Basic Edges</h3>
                <h3 className={(this.state.activeItem === 'premium' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('premium')}>Premium Edges</h3>
                <h3 className={(this.state.activeItem === 'custom' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('custom')}>Custom Edges </h3>
            </div>

                
            </div>
        )
    }
}

export default Edgetabs