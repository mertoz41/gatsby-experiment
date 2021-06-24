import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Cardsect from '../components/cardsect'
import stoneStyle from './stones.module.css'
import EdgeTabs from '../components/edgetabs'
import Image from 'react-bootstrap/Image'
import Artstone from '../components/artstone'




export class Edges extends Component {

    state = {
        showing: "basic",
        basicEdges: ["straight-edges", "round-top&bottom", "1:4-round", "bevel"],
        premiumEdges: ["full-bullnose", "half-bullnose", "demi-bullnose", "bevel-top&bottom"],
        customEdges: ["cove", "ogee-bull", "cove-dupont", "flat-ogee", "ogee", "cove-ogee", "waterfall"]
    }

    changeMenuItem = (event) => {
        this.setState({
            showing: event
        })
         
    }
    render() {
        return (
            <div className={stoneStyle.container}>
                <Header />
                <div className={stoneStyle.sect}>
                    <Image className={stoneStyle.pic} src={require('../images/artstone-stone.jpg')}/>
                    <div className={stoneStyle.writing}>
                    <h1>Edges</h1>
                    </div>
                </div>
                <EdgeTabs changeMenuItem={this.changeMenuItem} />
                {this.state.showing == "basic" ?
                <Cardsect location="edgepics" list={this.state.basicEdges} />
                : 
                null
                }
                {this.state.showing == "premium" ?
                <Cardsect location="edgepics" list={this.state.premiumEdges} />
                :
                null
                }
                {this.state.showing == "custom" ? 
                <Cardsect location="edgepics" list={this.state.customEdges} />
                :
                null
                }
                <Footer />

                
            </div>
        )
    }
}

export default Edges
