import React, {useEffect, useState, useRef } from 'react'
import axios from 'axios'
import  './AboutUs.scss'
import Insights from "../../components/Insights/Insights"
import Footer from '../../components/Footer/Footer'

export default function AboutUs() {

  let [listing, setListing] = useState()
  let [imageBytes, setImageBytes] = useState(null)
  let [isLoading, setIsLoading] = useState(false)
  const isMounted = useRef(false)


//   useEffect( () => {
// 	async function getListing() {

// 		try{
// 			let  response = await axios.get(`http://retsinterface.ca/api/getlisting?mLSNumber=1225653`)
// 			let data = response.data[0]
// 			setListing(data)
// 			console.log(data)
// 			let images = await axios.get(`http://retsinterface.ca/api/photoImport?mui=31282656`)
// 			console.log(images)
			
// 		} catch(error) {
// 			console.log(error)
// 		}
   

// 	}

// 	getListing()
// },[])


  return (
    <div>

		<div class='aboutus-banner content'>
			<div class="containers">
				<h1> About </h1>
			</div>
		</div>
		<div class="market-insights row">
		    <div class="col-lg-7 col-md-12 col-sm-12 insight-text">
		        <div class="insight-text-box">
		            <h1 class="homepage-header"> We are Sezlik.com </h1>
		            <p class="homepage-text metro">We are dedicated to providing Buyers and Sellers the highest level of service available. We know that buying or selling your dream home is much more than a simple financial transaction. Inevitably, great homes are all about refined personal taste, lifestyle and community. 
					<br/><br/>
					Our innovative strategies identify, capture and market the specifics of one-of-a-kind listings. We enable Canada’s buyers to take advantage of ownership opportunities. Buying or selling, Sezlik Realty Group effectively represents the best neighbourhoods and finest homes in Canada’s breathtaking Nation’s Capital Region.</p>
		        </div>
		    </div>
		    <div class="col-lg-5 col-md-12 col-sm-12 interior">
			
		    </div>
			
		</div>
		<div class="market-insights row">
	    <div class="col-lg-5 col-md-12 col-sm-12 interior">
        
    		</div>
    		<div class="col-lg-7 col-md-12 col-sm-12 insight-text">
    		    <div class="insight-text-box display-none-large">
    		        <h1 class="homepage-header"> Being a Sezlik.com client </h1>
					<p class="homepage-text metro">Sezlik.com has embraced innovation to offer you the most progressive real estate experience. We enforce the highest standards and provide you with the opportunity to receive information the way you want it.<br/><br/> With the use of proprietary artificial intelligence and historical statistical data, your buying and selling decisions have never been easier. Discover how to use Sezlik.com to its fullest potential.</p>
    		    </div>
    		</div>

		</div>

		<Insights />

		<div class="container contact-section">
	<h1>
		Meet The Team
	</h1>
	<div class="row">
		<div class=" col-md-6 col-sm-12 col-lg-4 contact-card d-none d-lg-block">
			<div class="card-border">
				<div class="pfp"></div>
				<p class="metro name">Charlie Sezlik</p>
				<p class="metro realty">Royal Lepage Team Realty</p>
				<p class="metro title">Sales Representative</p>
				<div class="row justify-content-center">
					<i class="fa fa-envelope envelope" aria-hidden="true"></i>
					<p class="metro contact-info">Charles@Sezlik.com</p>
				</div>
			</div>
		</div>
		<div class=" col-md-6 col-sm-12 col-lg-4 contact-card d-none d-lg-block">
					<div class="card-border">
						<div class="pfp"></div>
						<p class="metro name">Charlie Sezlik</p>
						<p class="metro realty">Royal Lepage Team Realty</p>
						<p class="metro title">Sales Representative</p>
						<div class="row justify-content-center">
							<i class="fa fa-envelope envelope" aria-hidden="true"></i>
							<p class="metro contact-info">Charles@Sezlik.com</p>
						</div>
					</div>
				</div>
				<div class=" col-md-6 col-sm-12 col-lg-4 contact-card d-none d-lg-block">
					<div class="card-border">
						<div class="pfp"></div>
						<p class="metro name">Charlie Sezlik</p>
						<p class="metro realty">Royal Lepage Team Realty</p>
						<p class="metro title">Sales Representative</p>
						<div class="row justify-content-center">
							<i class="fa fa-envelope envelope" aria-hidden="true"></i>
							<p class="metro contact-info">Charles@Sezlik.com</p>
						</div>
					</div>
				</div>
			<div class="d-lg-none mobile-contacts" style={{marginTop: "15px"}}>
				<div class="mobile-contact">
					<div class="mobile-pfp"></div>
					<div class="mobile-content">
						<p class="metro mobile-name">Charlie Sezlik</p>
						<p class="metro mobile-realty">Royal Lepage Team Realty</p>
						<p class="metro mobile-title">Sales Representative</p>
						<div class="row justify-content-center">
							<i class="fa fa-envelope mobile-envelope" aria-hidden="true"></i>
							<p class="metro mobile-contact-info">Charles@Sezlik.com</p>
						</div>
					</div>
				</div>
			</div>
			<div class="d-lg-none mobile-contacts" style={{marginTop: "15px"}}>
				<div class="mobile-contact">
					<div class="mobile-pfp"></div>
					<div class="mobile-content">
						<p class="metro mobile-name">Charlie Sezlik</p>
						<p class="metro mobile-realty">Royal Lepage Team Realty</p>
						<p class="metro mobile-title">Sales Representative</p>
						<div class="row justify-content-center">
							<i class="fa fa-envelope mobile-envelope" aria-hidden="true"></i>
							<p class="metro mobile-contact-info">Charles@Sezlik.com</p>
						</div>
					</div>
				</div>
			</div>
			<div class="d-lg-none mobile-contacts" style={{marginTop: "15px"}}>
				<div class="mobile-contact">
					<div class="mobile-pfp"></div>
					<div class="mobile-content">
						<p class="metro mobile-name">Charlie Sezlik</p>
						<p class="metro mobile-realty">Royal Lepage Team Realty</p>
						<p class="metro mobile-title">Sales Representative</p>
						<div class="row justify-content-center">
							<i class="fa fa-envelope mobile-envelope" aria-hidden="true"></i>
							<p class="metro mobile-contact-info">Charles@Sezlik.com</p>
						</div>
					</div>
				</div>
			</div>
		
		</div>
		</div>
		
		<div class="award">
			<div class="container">
			<h1> Awards </h1>
		
			<div class="row">
				<div class="col-lg-2 col-4">
					<div class="awards-icon-1">	
					</div>
				</div>
				<div class="col-lg-2 col-4">
					<div class="awards-icon-2">	
					</div>
				</div>
				<div class="col-lg-2 col-4">
					<div class="awards-icon-3">	
					</div>
				</div>
				<div class="col-lg-2 col-4">
				<div class="awards-icon-4">	
					</div>
				</div>
				<div class="col-lg-2 col-4">
				<div class="awards-icon-5">	
					</div>
				</div>
				<div class="col-lg-2 col-4">
				<div class="awards-icon-6">	
					</div>
				</div>
			</div>
			</div>
		</div>
		<div class="get-in-touch">
		    <div>
		        <h1> Start Your Search Today</h1>
		        <button class="metro">Contact us</button>
		    </div>
		</div>
		<Footer/>

    </div>
  )
}
