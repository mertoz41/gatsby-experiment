import React, { Component } from 'react'
import tabStyles from './stonetabs.module.css'
import { Grid, Menu, Segment } from 'semantic-ui-react'



export class Sinktabs extends Component { 
    state ={
        activeItem: 'single bowl'
    }


    handleItemClick = (name) => {
    this.setState({ activeItem: name })
    if(name == "ADA compliant"){
        this.props.changeMenuItem("ada compliant")
    } else {
        this.props.changeMenuItem(name)
    }
    }


    render() {
        return (
            <div className={tabStyles.container} >
             
             {/* <Grid>
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

    
      </Grid> */}
            <div className={tabStyles.nuTabs}>
                <h3 className={(this.state.activeItem === 'single bowl' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('single bowl')}>Single bowl</h3>
                <h3 className={(this.state.activeItem === 'double bowl' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('double bowl')}>Double bowl</h3>
                <h3 className={(this.state.activeItem === 'bar' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('bar')}>Bar</h3>
                <h3 className={(this.state.activeItem === 'handmade' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('handmade')}>Handmade</h3>
            </div>
            <div className={tabStyles.space}>

            </div>
            <div className={tabStyles.nuTabs}>
            <h3 className={(this.state.activeItem === 'apron' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('apron')}>Apron</h3>
                <h3 className={(this.state.activeItem === 'vanity' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('vanity')}>Vanity</h3>
                <h3 className={(this.state.activeItem === 'ADA compliant' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('ADA compliant')}>ADA compliant</h3>
                <h3 className={(this.state.activeItem === 'duragranit' ? tabStyles.active : tabStyles.tab)} onClick={() => this.handleItemClick('duragranit')}>Duragranit</h3>


            </div>
  


            

                
            </div>
        )
    }
}

export default Sinktabs
