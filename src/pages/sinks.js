import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'react-bootstrap/Image'
import stoneStyle from './stones.module.css'
import Sinktabs from '../components/sinktabs'
import Cardsect from '../components/cardsect'


class Sinks extends Component {
    state ={ 
        singleBowl: [],
        doubleBowl: [],
        bar: [],
        handMade: [],
        apron: [],
        vanity: [],
        compliant: [],
        duraGranit: [],
        showing: "single bowl"
    }
    componentDidMount(){
        this.setState({
            singleBowl: require('../singlebowllist'),
            doubleBowl: require('../doublebowllist'),
            bar: require('../barlist'),
            handMade: require('../handmadelist'),
            apron: require('../apronlist'),
            vanity: require('../vanitylist'),
            compliant: require('../compliantlist'),
            duraGranit: require('../duragranitlist')
        })
    }
    changeMenuItem = (name) =>{
        this.setState({showing: name})
    }


    render(){

        return(
            <div>
                <Header /> 
                <Image className={stoneStyle.pic} src={require('../images/sink-stone.jpg')} style={{width: 1500}}/>
                <div className={stoneStyle.writing}>
                    <h1>Sinks</h1>
                </div>
                <Sinktabs changeMenuItem={this.changeMenuItem}/>
                {this.state.showing == "single bowl" ?
                <Cardsect location="singlebowlpics" list={this.state.singleBowl}/>
                :
                null 
                }
                {this.state.showing == "double bowl" ?
                <Cardsect location="doublebowlpics" list={this.state.doubleBowl} />
                :
                null
                }
                {this.state.showing == "bar" ?
                <Cardsect location="barpics" list={this.state.bar} />
                :
                null
                }
                {this.state.showing == "handmade" ?
                <Cardsect location="handmadepics" list={this.state.handMade} />
                : 
                null
                }
                {this.state.showing == "apron" ?
                <Cardsect location="apronpics" list={this.state.apron} />
                :
                null
                }
                {this.state.showing == "vanity" ?
                <Cardsect location="vanitypics" list={this.state.vanity} />
                :
                null
                }
                {this.state.showing == "ada compliant" ?
                <Cardsect location="compliantpics" list={this.state.compliant} />
                :
                null}
                {this.state.showing == "duragranit" ?
                <Cardsect location="duragranitpics" list={this.state.duraGranit} />
                :
                null}
                <Footer />
            </div>
    )
} 
}

export default Sinks