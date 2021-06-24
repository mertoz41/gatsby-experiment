import React from "react"
import {graphql} from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import PictureSlider from '../components/pictureslider'
import homeStyles from './home.module.css'
import 'semantic-ui-css/semantic.min.css'
import { Helmet } from 'react-helmet'


const IndexPage = ({data}) => {
  return(
    <div className={homeStyles.container}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Art Stone Marble & Granite</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <Header />
        <PictureSlider />
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