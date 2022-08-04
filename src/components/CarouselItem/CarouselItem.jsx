import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './CarouselItem.module.scss'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export default function CarouselItem(props) {

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    let listPrice = props.listing.listPrice
    let bathsTotal = props.listing.bathsTotal
    let bedsTotal = props.listing.bedTotal
    let streetName = capitalize(props.listing.streetName)
    let streetSuffix = props.listing.streetSuffix
    let city = props.listing.city



    

  return (
    <div className={styles.featureCard}>
        <div className={styles.featureImg}></div>
        <Row className={styles.smallerWidth}>
            <Col lg={7} sm={6}>
                <h3>${listPrice}</h3>
                <h4>237 {streetName} {streetSuffix}</h4>
                <p className={styles.address}>{city}, ON</p>
                



            </Col>
            <Col lg={5} className={`${styles.address} d-none d-lg-block`} >
            <button className={`${styles.sale}` }><Link className={styles.noUnderline} to={`/listing/${props.listing.mlsNumber}`}>For Sale</Link></button>

            </Col>
            <div className={styles.bed}>
                
                    <FontAwesomeIcon  className={styles.icons}icon={faBath}/> <p>  {bedsTotal >= 1 ? bathsTotal : '0'} Beds</p> 
                    <FontAwesomeIcon className={styles.icons} icon={faBed}  /><p>{bathsTotal >= 1 ? bathsTotal : '0'} Baths</p> 
                    <button className={`${styles.sale} d-md-none`}><Link className={styles.noUnderline} to={`/listing/${props.listing.mlsNumber}`} component={Link}>For Sale</Link></button>



            </div>
        </Row>
    </div>
  )
}
