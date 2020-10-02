import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Granitesect from '../components/granitesect'
import { Tab } from 'semantic-ui-react'
import stoneStyle from './stones.module.css'




class Stones extends Component {
    state = {
        list: []
    }
    componentDidMount(){
        let granites = require('../granitelist')
        this.setState({list: granites})
    }

    changeMenuItem = () => {
        debugger 
    }
    render() {
    
    
        return (
            <div>
                <Header />
                
                <Granitesect list={this.state.list}/>
            

                {/* {this.state.list.map(granite => {
                    return(
                        <StoneCard name={granite}/>
                    )
                })} */}

                <Footer />
            </div>
        )
    }
}

export default Stones






