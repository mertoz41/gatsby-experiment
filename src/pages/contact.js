import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import stoneStyle from './stones.module.css'
import Image from 'react-bootstrap/Image'
import { List } from 'semantic-ui-react'
import Artstone from '../components/artstone'
import { Helmet } from 'react-helmet'





const Contact = () => (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Art Stone Marble & Granite</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <Header />
        <Artstone />
        <Image className={stoneStyle.pic} src={require('../images/artstone-fifth.jpg')}/>
        <div className={stoneStyle.writing}>
            <h1>Contact</h1>
        </div>
        <div className={stoneStyle.aboutContainer}>
            <div className={stoneStyle.experiment}>

            
        
                    
                <div className={stoneStyle.contact}>
                <List>
                    <List.Item icon='phone' content='(443) 743-6413' />
                    <List.Item icon='phone' content='(703) 371-0757' />

                    <List.Item icon='marker' content='25358 Pleasant Valley Road Unit #100 Chantilly VA 20152' />
                    <List.Item
                    icon='mail'
                    content={<a href='mailto:mehmet@theartstone.com'>mehmet@theartstone.com</a>}
                    />
                    
                </List>
                </div>
                <img src={require('../images/artstonelogo.jpg')} />
                
                </div>
            </div>

        <Footer /> 
    </div>
)

export default Contact