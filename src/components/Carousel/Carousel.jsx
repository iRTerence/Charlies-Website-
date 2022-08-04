import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "./Item.js";
import styles from "./Carousel.module.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons'
import CarouselItem from '../CarouselItem/CarouselItem.jsx';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


export default function Carousels(props) {
  console.log(`I'm in props ${props.listings}`)

  let carouselItems = props.listings.map((info) => 

    <Item key={info.mlsNumber}>
      <CarouselItem listing={info} key={info.mlsNumber}/>
    </Item>

  )

  return (
    <div className={styles.carouselMain}>
        <div className={styles.featured}>
	        <h1>Featured Properties </h1>
        </div>
        <Carousel breakPoints={breakPoints} className={styles.carousel} pagination={false}>
          {carouselItems}
        </Carousel>
    </div>
  )
}