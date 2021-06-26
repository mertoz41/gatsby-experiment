import React, { Component } from 'react'
import tabStyles from './stonetabs.module.css'
import { Grid, Menu, Segment } from 'semantic-ui-react'



export class Stonetabs extends Component { 
    state ={
        activeItem: 'granite'
    }


    handleItemClick = (name) => {
    this.setState({ activeItem: name })
    this.props.changeMenuItem(name)
    }


    render() {
        return (
            <div className={tabStyles.container} >
             
           
             <div className={tabStyles.nuTabs}>
                <h3 className={(this.state.activeItem === 'granite' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('granite')}>Granite</h3>
                <h3 className={(this.state.activeItem === 'marble' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('marble')}>Marble</h3>
                <h3 className={(this.state.activeItem === 'quartz' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('quartz')}>Quartz</h3>
            </div>

                
            </div>
        )
    }
}

export default Stonetabs
