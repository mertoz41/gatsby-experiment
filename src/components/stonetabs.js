import React, { Component } from 'react'
import tabStyles from './stonetabs.module.css'
import { Button } from 'semantic-ui-react'


export class Stonetabs extends Component {
    render() {
        return (
            <div className={tabStyles.tab} >
                <Button.Group  vertical>
                    <Button onClick={() => this.props.changeMenuItem("granite")}>Granite</Button>
                    <Button onClick={() => this.props.changeMenuItem("marble")}>Marble</Button>
                    <Button onClick={() => this.props.changeMenuItem("quartz")}>Quartz</Button>
                </Button.Group>
          
                
            </div>
        )
    }
}

export default Stonetabs
