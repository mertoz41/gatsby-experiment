import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import stoneStyle from './stones.module.css'
import Image from 'react-bootstrap/Image'
import { List } from 'semantic-ui-react'
import Artstone from '../components/artstone'




const Contact = () => (
    <div>
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
                    <List.Item icon='marker' content='4235 Boston Street, Baltimore, MD 21224' />
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