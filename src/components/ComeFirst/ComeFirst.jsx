import React from 'react'
import styles from './ComeFirst.module.scss'
import Row from 'react-bootstrap/Row';

export default function ComeFirst() {
  return (
    <Row className={styles.comeFirst}>
    <div className={`${styles.comeBtns} col-md-12 col-sm-12 col-lg-8`}>
        <div className={styles.comeBtnsContainer}>
            <h1 className={styles.homepageHeader}>You come first.</h1>
            <p>Let's get in touch.</p>
            
                <button className={`${styles.contactBtn} metro col-sm-6 col-md-6`}>Contact Us</button>
                <button className={`${styles.meetBtn} metro col-sm-6 col-md-6`}>Meet The Team</button>
            
        </div>
    </div>
</Row>



  )
}
