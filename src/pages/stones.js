import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Granitesect from '../components/granitesect'
import { Tab } from 'semantic-ui-react'
import stoneStyle from './stones.module.css'
import Stonetabs from '../components/stonetabs'




class Stones extends Component {
    state = {
        list: [],
        showing: "granite"
    }

    componentDidMount(){
        let granites = require('../granitelist')
        this.setState({list: granites})
    }

    changeMenuItem = (event) => {
        this.setState({
            showing: event
        })
         
    }
    render() {
    
    
        return (
            <div>
                <Header />
                <Stonetabs changeMenuItem={this.changeMenuItem} />
                {this.state.showing == "granite" ?
                <Granitesect list={this.state.list}/>
                :
                null
                }
                
            

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






