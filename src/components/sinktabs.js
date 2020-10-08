import React, { Component } from 'react'
import tabStyles from './stonetabs.module.css'
import { Grid, Menu, Segment } from 'semantic-ui-react'



export class Sinktabs extends Component { 
    state ={
        activeItem: 'single bowl'
    }


    handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    debugger
    if(name == "ADA compliant"){
        this.props.changeMenuItem("ada compliant")
    } else {
        this.props.changeMenuItem(name)
    }
    }


    render() {
        return (
            <div className={tabStyles.tab} >
             
             <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item
                        name='single bowl'
                        active={this.state.activeItem === 'single bowl'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='double bowl'
                        active={this.state.activeItem === 'double bowl'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='bar'
                        active={this.state.activeItem === 'bar'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='handmade'
                        active={this.state.activeItem === 'handmade'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='apron'
                        active={this.state.activeItem === 'apron'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='vanity'
                        active={this.state.activeItem === 'vanity'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='ADA compliant'
                        active={this.state.activeItem === 'ADA compliant'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='duragranit'
                        active={this.state.activeItem === 'duragranit'}
                        onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>

    
      </Grid>
                
            </div>
        )
    }
}

export default Sinktabs
