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

const IndexPage = ({data}) => {
  console.log(window.location.href)
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
        <div className={homeStyles.writing} id="about">
                        <h1>About</h1>
        </div>
        <div className={homeStyles.sect}>
                    <Image className={homeStyles.pic} src={require('../images/artstone-fourth.jpg')}/>
                    
        </div>
        <div className={homeStyles.writing} id="contact">
                        <h1>Contact</h1>
        </div>
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