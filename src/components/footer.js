import React from 'react'
import footerStyles from './footer.module.css'


// functional component
// artstone logo to be on the footer

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="container">
            <span>
                © Art Stone Marble & Granite 2020
            </span>
        </div>
    </footer>
)

export default Footer 