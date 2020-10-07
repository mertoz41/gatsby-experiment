import React, { Component } from 'react'
import tabStyles from './stonetabs.module.css'
import { Grid, Menu, Segment } from 'semantic-ui-react'



export class Stonetabs extends Component { 
    state ={
        activeItem: 'granite'
    }


    handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.changeMenuItem(name)
    }


    render() {
        return (
            <div className={tabStyles.tab} >
             
             <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item
                        name='granite'
                        active={this.state.activeItem === 'granite'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='marble'
                        active={this.state.activeItem === 'marble'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='quartz'
                        active={this.state.activeItem === 'quartz'}
                        onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>

    
      </Grid>
                
            </div>
        )
    }
}

export default Stonetabs
