import React from 'react';
import Styles from './Footer.module.css';

const Footer = () => {

    return (
        <div className={Styles.footer}>

            <div>
                <h2 className={Styles.footerTxt}>
                    <span>Developed By</span>
                </h2>
            </div>

            <div>
                <h2>
                    <span className={Styles.asadanik}>Asad Anik</span>
                </h2>
            </div>

        </div>
    )
}

export default Footer;