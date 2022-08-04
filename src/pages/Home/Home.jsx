import React from 'react'
import styles from './Home.module.scss'
import Search from '../../components/Search/Search'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'
import Insights from '../../components/Insights/Insights'
import HomeValue from '../../components/HomeValue/HomeValue'
import ComeFirst from '../../components/ComeFirst/ComeFirst'


export default function Home(props) {
  return (
    <div className={styles.main}>
        <div className={styles.homeBanner}>
	        <div className={styles.containers}>
	        	<h1> Ottawa’s best<br/> real estate team. </h1>
	        	<h2> Where Ottawa comes to buy homes.</h2>
	        </div>
            <Search />
            {/* <Carousel  /> */}

            {props.loading ? (<Carousel listings={props.listings}/>) : <></>}
            <div className={styles.btnMid}>
	            <button className={styles.listingsBtn}> View all Sezlik.com listings </button>
            </div>

            <Insights/>
            <div>
            <HomeValue />
            
            <Testimonials />
            <ComeFirst/>
            </div>
            <Footer/>

        </div>

    </div>
  )
}
