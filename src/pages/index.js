import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import PictureSlider from '../components/pictureslider'
import homeStyles from './home.module.css'
import 'semantic-ui-css/semantic.min.css'
import { Helmet } from 'react-helmet'


const IndexPage = () => (
  <div className={homeStyles.wrapper}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Art Stone</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Header />
        <PictureSlider />
        <Footer /> 
    </div>
)

export default IndexPage
