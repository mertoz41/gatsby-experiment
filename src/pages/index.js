import React from "react"
import {graphql} from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import PictureSlider from '../components/pictureslider'
import homeStyles from './home.module.css'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap"
import { List } from 'semantic-ui-react'

const IndexPage = ({data}) => {
  // console.log(window.location.href)
  return(
    <div className={homeStyles.container}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Art Stone Marble & Granite</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <Header />
        <div className={homeStyles.sect}>
          <Image className={homeStyles.pic} src={require('../images/theartstone.jpg')} />
        </div>
        <Container className={homeStyles.writing} id="about">
            <figure className="position-relative" >

          
                        <h1>About</h1>
                  <p>
                    Established in the early 2000's, Artstone Marble & Granite offers commercial and residential services in measurement, fabrication, and installation of your preferred stone countertops along with sinks. All services are provided in the DMV area. 
                  </p>
            </figure>
        </Container>



        <div className={homeStyles.sect}>
                    <Image className={homeStyles.pic} src={require('../images/artstone-fourth.jpg')}/>
                    
        </div>
        <Container className={homeStyles.writing} id="contact">
            <figure className="position-relative">
                        <h1>Contact</h1>
            </figure>
                    <Container className={homeStyles.info}>
                <List >
                    <List.Item className={homeStyles.contact} icon='phone' content='(443) 743-6413'></List.Item>
                    <List.Item className={homeStyles.contact} icon='phone' content='(703) 371-0757' />

                    <List.Item className={homeStyles.contact} icon='marker' content='25358 Pleasant Valley Road Unit #100 Chantilly VA 20152' />
                    <List.Item className={homeStyles.contact}
                    icon='mail'
                    content={<a href='mailto:mehmet@theartstone.com'>mehmet@theartstone.com</a>}
                    />
                    
                </List>
                </Container>
        </Container>
        <div className={homeStyles.sect}>
            <Image className={homeStyles.pic} src={require('../images/artstone-fifth.jpg')}/>      
        </div>

        {/* <PictureSlider /> */}




        <Footer /> 
  </div>
)
  }

export default IndexPage

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
        }
      }
    }
  }

`