import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Granitesect from '../components/granitesect'
import stoneStyle from './stones.module.css'
import Stonetabs from '../components/stonetabs'
import Image from 'react-bootstrap/Image'
import Marblesect from '../components/marblesect'
import Quartzsect from '../components/quartzsect'




class Stones extends Component {
    state = {
        graniteList: [],
        marbleList: [],
        showing: "granite"
    }

    componentDidMount(){
        let granites = require('../granitelist')
        let marbles = require('../marblelist')
        let quartz = require('../quartzlist')
        this.setState({
            graniteList: granites,
            marbleList: marbles,
            quartzList: quartz
        })
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
                <Image className={stoneStyle.pic} src={require('../images/artstone-stone.jpg')} style={{width: 1500}}/>
                <div className={stoneStyle.writing}>
                <h1>Stones</h1>
                </div>
                <Stonetabs changeMenuItem={this.changeMenuItem} />
                {this.state.showing == "granite" ?
                <Granitesect list={this.state.graniteList}/>
                :
                null
                }
                {this.state.showing == "marble" ?
                <Marblesect list={this.state.marbleList} />
                :
                null
                }
                {this.state.showing == "quartz" ?
                <Quartzsect list={this.state.quartzList} />
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






