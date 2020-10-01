import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import PictureSlider from '../components/pictureslider'
import homeStyles from './home.module.css'
import 'semantic-ui-css/semantic.min.css'


const IndexPage = () => (
  <div className={homeStyles.container}>
        <Header />
        <PictureSlider />
        <Footer /> 
    </div>
)

export default IndexPage
