import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import PictureSlider from '../components/pictureslider'
import homeStyles from './home.module.css'



const Home = () => (
    <div className={homeStyles.container}>
        <Header />
        <PictureSlider />
        <Footer /> 
    </div>
)

export default Home 