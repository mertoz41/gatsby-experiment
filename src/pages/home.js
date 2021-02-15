import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import PictureSlider from '../components/pictureslider'
import homeStyles from './home.module.css'
import { Helmet } from 'react-helmet'



const Home = () => (
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

export default Home 