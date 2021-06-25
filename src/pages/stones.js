import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Cardsect from '../components/cardsect'
import stoneStyle from './stones.module.css'
import Stonetabs from '../components/stonetabs'
import Image from 'react-bootstrap/Image'
import {Row,Col, Tab, Nav} from 'react-bootstrap'
import Artstone from '../components/artstone'
import { Helmet } from 'react-helmet'




class Stones extends Component {
    state = {
        graniteList: [],
        marbleList: [],
        quartzList: [],
        key: "granite",
        // key: 'granite'
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
            <div className={stoneStyle.container}>
                <Helmet>
                <meta charSet="utf-8" />
                    <title>Art Stone | Stones</title>
                <meta name="description" content="Nested component" />
        </Helmet>
                <Header />
                <div className={stoneStyle.sect}>
                    <Image className={stoneStyle.pic} src={require('../images/artstone-stone.jpg')} fluid/>
                    <div className={stoneStyle.writing}>
                    <h1>Stones</h1>
                    </div>
                </div>
                {/* <Stonetabs changeMenuItem={this.changeMenuItem} /> */}
                {/* <div className={stoneStyle.tabs}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={(k) => this.setState({key: k})}
                    >
                    <Tab eventKey="granite" title="Granite">
                    </Tab>
                    <Tab eventKey="marble" title="Marble">
                        <Sonnet />
                    </Tab>
                    <Tab eventKey="quartz" title="Quartz" >
                        <Sonnet />
                    </Tab>
                    </Tabs>
                </div> */}
                <div className={stoneStyle.sect}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="granite">
                    <Row>
                        <Col sm={1}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="granite"><p className={stoneStyle.tabName}>Granite</p></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="marble"><p className={stoneStyle.tabName}>Marble</p></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="quartz"><p className={stoneStyle.tabName}>Quartz</p></Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={15}>
                        <Tab.Content>
                            <Tab.Pane eventKey="granite">
                            <Cardsect location="granitepics" list={this.state.graniteList}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="marble">
                            <Cardsect location="marblepics" list={this.state.marbleList} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="quartz">
                            <Cardsect location="quartzpics" list={this.state.quartzList} />
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                </div>
                {/* {this.state.showing == "granite" ?
                :
                null
                } */}
                {this.state.showing == "marble" ?
                <Cardsect location="marblepics" list={this.state.marbleList} />
                :
                null
                }
                {this.state.showing == "quartz" ?
                <Cardsect location="quartzpics" list={this.state.quartzList} />
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






