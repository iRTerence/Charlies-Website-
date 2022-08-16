import React, {useEffect, useState, useRef } from 'react'
import "./ShowPage.scss"
import axios from 'axios'
import {useParams} from "react-router-dom";
import { Carousel } from 'bootstrap';
import Carousels from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import { Audio } from  'react-loader-spinner'



export default function ShowPage(props) {

    let [listing, setListing] = useState()
    let [imageBytes, setImageBytes] = useState(null)
    let [isLoading, setIsLoading] = useState(false)
	const isMounted = useRef(false)

    const { id } = useParams();
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();



    useEffect( () => {
        async function getListing() {

			try{
				let  response = await axios.get(`https://retsinterface.ca/api/getlisting?mLSNumber=${id}`)
				let data = response.data[0]
				setListing(data)
				props.setId(data.mlsNumber)
				console.log(data.matrix_Unique_ID)
				setTimeout(async () => {
					let images = await axios.get(`https://retsinterface.ca/api/photoImport?mui=${data.matrix_Unique_ID}`);
					setImageBytes(images.data)
					setIsLoading(true)
				 }, 2000)
				
			} catch(error) {
				console.log(error)
			}
       

        }

        getListing()
    },[id])







 


  return (
    <>
    {isLoading ? (
    <>
	{isLoading ? (
		<>
		{isLoading ? (<PhotoGallery images={imageBytes} loading={isLoading}/>) : <></>}
        {/* <div><img src={`data:image/png;base64,${imageBytes[3]}`} /> {imageBytes}</div> */}
        <div className="hero-show container">
        <div className="containered  base-info d-none d-lg-block">
        	<div className="row ">
        		<div className="col-6  row">
        			<div className="col-7 spacing">
        				<div className="price" type="number">${listing.listPrice.toLocaleString()}</div>
        				<h4>237 {capitalize(listing.streetName)}</h4>
        					<p className='city-address'>{listing.city} , ON</p>
                    </div>
        			<div className="col-5 row home-icons">
        					<i className="fas fa-bed"></i><p>{listing.bedsTotal >= 1 ? listing.bedsTotal : '0'} Beds</p>
        
        
        
        
        				<i className="fas fa-shower"></i>
        					<p>{listing.bathsTotal >= 1 ? listing.bathsTotal : '0'} Baths</p> 
        
        
        
        			</div>
        
        
        		</div>
        		<div className="col-6">
        			<div className="row">
        				<div className="col-3"></div>
        				<div className="col-5 mls-info">
        					<p>MLS #: {listing.mlsNumber}</p>
        					<p>Status: {listing.status}</p>
        					<p>List date: {listing.conditionalDate ? (listing.conditionalDate.slice(0,10)) : <>N/A</>}</p>
        					<p>Type: {listing.propertyType}</p>
        
        
        				</div>
        				<div className="col-4 hero-buttons">
        					<div>
        						<button className="compare-button">Compare Property</button>
        					</div>
        					<div>
        						<button className="save-button">Save</button>
        					</div>
        				</div>
        
        
        			</div>
        
        		</div>
        
        	</div>	
        </div> 

        <div className="property-description containered d-none d-lg-block">
        	<div className="row">
        		<div className="col-lg-6 col-sm-12 property-info">
        			<h1>Property Information</h1>
        			<p> {listing.publicRemarks}</p>
        		</div>
        		<div className="col-lg-6 col-sm-12">
        			<table className="header-table">
        				<tr>
        				  <td>Status</td>
        				  <td className="border-left">Active</td>

        				</tr>
        				<tr>
        				  <td>Municipality</td>
        					<td className="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>

                            
        				</tr>
        				<tr>
        					<td>MLS</td>
        					<td className="border-left">{listing.mlsNumber}</td>
                            
        				</tr>
        				<tr>
        					<td>Beds</td>

        							<td className="border-left">{listing.bedsTotal >= 1 ? listing.bedsTotal : '0'}</td>
                                

                                
        				</tr>
        				<tr>
        					<td>Baths</td>
        						<td className="border-left">{listing.bathsTotal >= 1 ? listing.bathsTotal : '0'}</td>
 
                                
        				</tr>
        				<tr>
        					<td>Year Built</td>
        						
                            

        					<td className="border-left">{listing.yearBuilt}</td>
                                

                                
        				</tr>
        			  </table>
                                
        		</div>
        	</div>
                                
        </div>

        {/* Mobile Display */}
        <div className="property-description containered d-lg-none">
        		<div className="row">
        		<div className="col-lg-6 col-sm-12 property-info">
        			<h1>Property Information</h1>
        			<p> {listing.publicRemarks}</p>
        		</div>
        		<div className="col-lg-6 col-sm-12 mobile-header-table">
        			<table className="header-table">
        				<tr>
        				  <td>Status</td>
        				  <td className="border-left">Active</td>
        
        				</tr>
        				<tr>
        				  <td>Municipality</td>
        					<td className="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>

                            
                            
        				</tr>
        				<tr>
        					<td>MLS</td>
        					<td className="border-left">{listing.mlsNumber}</td>
                            
        				</tr>
        				<tr>
        					<td>Beds</td>
        						<td className="border-left">0</td>

                                
        				</tr>
        				<tr>
        					<td>Baths</td>
        						<td className="border-left">{listing.baths >= 1 ? listing.bathsTotal : '0'}</td>
                            
        				</tr>
        				<tr>
        					<td>Year Built</td>
        						<td className="border-left">{listing.yearBuilt}</td>


                                
        				</tr>
        			  </table>
                                
        		</div>
        	</div>
        	<div className="general-info">
        		<h1>General Information</h1>
        		<table className="header-table">
        			<tr>
        			  <td>Municipality</td>
        				<td className="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>
                    

                        
                        
        			</tr>
        			<tr>
        				<td>Transaction Type</td>
        				<td className="border-left">For Sale</td>
                        
        			</tr>
        			<tr>
        				<td>Board</td>
        				<td className="border-left">{listing.board}</td>
                        
                        
        			</tr>
        			<tr>
        				<td>Realator</td>
        					<td className="border-left">{listing.formalOfficeName1}</td>
                        
                        
        			</tr>
        		  </table>
        	</div>
        	<div className="amenities general-info">
        		<h1>Amenities</h1>
        		<table className="header-table">
        			<tr>
        			  <td>Municipality</td>
        				<td className="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>

                        
                        
        			</tr>
        			<tr>
        				<td>Amenities</td>
        				<td className="border-left">{listing.amenities}</td>
                        
        			</tr>
        			<tr>
        				<td>Features</td>
        				<td className="border-left">None</td>
                        
        			</tr>
        
        		  </table>
        	</div>
        	<div className="amenities general-info">
        		<h1>Building</h1>
        		<table className="header-table">
        			<tr>
        			  <td>Municipality</td>
        				<td className="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>
                    

                        
                        
        			</tr>
        			<tr>
        				<td>Building Type</td>
                        
        					<td className="border-left">{listing.styleofDwelling}</td>

                            
        			</tr>
        			<tr>
        				<td>Appliances</td>
        					<td className="border-left">{listing.appliances ? listing.appliances : 'N/A'}</td>
                        

                            
        			</tr>
        			<tr>
        				<td>Number of Bedrooms</td>
        					<td className="border-left">{listing.bedsTotal >= 1 ? listing.bedsTotal : '0'}</td>

                            
        			</tr>
        			<tr>
        				<td>Number of Bedrooms Above Grade</td>
        					<td className="border-left">{listing.bedrsAboveGrade ? listing.bedrsAboveGrade : '0'}</td>
                        

                            
        			</tr>
        			<tr>
        				<td>Number of Bedrooms Below Grade</td>
        					<td className="border-left">{listing.bedrsBelowGrade ? listing.bedrsBelowGrade : '0'}</td>

                            
        			</tr>
        			<tr>
        				<td>Baths</td>
        					<td className="border-left">{listing.bathsTotal >= 1 ? listing.bathsTotal : '0'}</td>
                        

                            
        			</tr>
        			<tr>
        				<td>Parking Description</td>
        					<td className="border-left">{listing.parkingDesc ? listing.parkingDesc : 'None'}</td>

        			</tr>
        			<tr>
        				<td>Cooling</td>
        					<td className="border-left">{listing.airConditioningDesc ? listing.airConditioningDesc : 'None'}</td>
                        

                            
        			</tr>
        			<tr>
        				<td>Exterior Finish</td>
        					<td className="border-left">{listing.exteriorFinish ? listing.exteriorFinish : 'None'}</td>

                            
        			</tr>
        			<tr>
        				<td>Fireplaces</td>
        					<td className="border-left">{listing.numberFinishedFireplaces ? listing.numberFinishedFireplaces : '0'}</td>

                            
        			</tr>
        			<tr>
        				<td>Fire protection</td>
        				<td className="border-left">None</td>
                            
        			</tr>
        			<tr>
        				<td>Floor Covering</td>
        					<td className="border-left">{listing.floorCovering ? listing.floorCovering : 'None'}</td>
                        

                            
        			</tr>
        			<tr>
        				<td>Foundation</td>
        					<td className="border-left">{listing.foundation ? listing.foundation : 'None'}</td>
                        

                            
        			</tr>
        			<tr>
        				<td>Heating</td>
        					<td className="border-left">{listing.heatDesc ? listing.heatDesc : 'None'}</td>
                        
 
                            
        			</tr>
        			<tr>
        				<td>Heating Fuel</td>
        					<td className="border-left">{listing.heatingFuel ? listing.heatingFuel : 'None'}</td>
  
                            
        			</tr>
        			<tr>
        				<td>No. of Storeys</td>
        					<td className="border-left">{listing.typeofDwelling ? listing.typeofDwelling : 'N/A'}</td>
                        

                            
        			</tr>
        			<tr>
        				<td>Water</td>
        					<td className="border-left">{listing.waterSupply ? listing.waterSupply : 'N/A'}</td>

        			</tr>
        			<tr>
        				<td>Sewer</td>
        					<td className="border-left">{listing.sewerType ? listing.sewerType : 'N/A'}</td>

                            
        			</tr>
                            
        		  </table>
        	</div>
        </div>

        <div className="contact-form d-lg-none property-description">
	        <h1 className="contact-title">
	        	Inquire About this property
	        </h1>
        </div>

        <div className="contact-card contact-section d-lg-none ">
        	<h1 className="contact-title">
        		Contact Agent
        	</h1>
        		<div className="contact-card-info">
        			<div className="card-border" style={{textAlign: 'center'}}>
        				<div className="center-pfp">
        					<div className="pfp"></div>
        				</div>
        				<p className="metro name">Charlie Sezlik</p>
        				<p className="metro realty">Royal Lepage Team Realty</p>
        				<p className="metro title">Sales Representative</p>
        				<div className="row justify-content-center">
        					<i className="fa fa-envelope envelope" aria-hidden="true"></i>
        					<p className="metro contact-info">Charles@Sezlik.com</p>
        				</div>
        			</div>
        		</div>
        </div>

        {/* Desktop */}

        <div class="containered general-info d-none d-lg-block">
        	<div class="row">
        		<div class="col-7">
        			<div >
        				<h1>General Information</h1>
        				<table class="header-table">
        					<tr>
        					  <td>Municipality</td>
        						<td class="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>



        					</tr>
        					<tr>
        						<td>Transaction Type</td>
        						<td class="border-left">For Sale</td>

        					</tr>
        					<tr>
        						<td>Board</td>
        						<td class="border-left">{listing.board}</td>


        					</tr>
        					<tr>
        						<td>Realator</td>
        							<td class="border-left">{listing.formalOfficeName1}</td>


        					</tr>
        				  </table>
        			</div>
        			<div class="amenities">
        				<h1>Amenities</h1>
        				<table class="header-table">
        					<tr>
        					  <td>Municipality</td>
        						<td class="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>



        					</tr>
        					<tr>
        						<td>Amenities</td>
        						<td class="border-left">{listing.amenities ? listing.amenities : 'None'}</td>

        					</tr>
        					<tr>
        						<td>Features</td>
        						<td class="border-left">None</td>

        					</tr>

        				  </table>
        			</div>

        			<div class="amenities">
        				<h1>Building</h1>
        				<table class="header-table">
        					<tr>
        					  <td>Municipality</td>
        						<td class="border-left">{listing.municipality ? listing.municipality : <>N/A</>}</td>



        					</tr>
        					<tr>
        						<td>Building Type</td>

        							<td class="border-left">{listing.styleofDwelling}</td>


        					</tr>
        					<tr>
        						<td>Appliances</td>
        							<td class="border-left">{listing.appliances ? listing.appliances : 'N/A'}</td>


        					</tr>
        					<tr>
        						<td>Number of Bedrooms</td>
        							<td class="border-left">{listing.bedsTotal >= 1 ? listing.bedsTotal : '0'}</td>


        					</tr>
        					<tr>
        						<td>Number of Bedrooms Above Grade</td>
        							<td class="border-left">{listing.bedrsAboveGrade ? listing.bedrsAboveGrade : '0'}</td>



        					</tr>
        					<tr>
        						<td>Number of Bedrooms Below Grade</td>
        							<td class="border-left">{listing.bedrsBelowGrade ? listing.bedrsBelowGrade : '0'}</td>


        					</tr>
        					<tr>
        						<td>Baths</td>
        							<td class="border-left">{listing.bathsTotal >= 1 ? listing.bathsTotal : '0'}</td>


        					</tr>
        					<tr>
        						<td>Parking Description</td>
        							<td class="border-left">{listing.parkingDesc ? listing.parkingDesc : 'None'}</td>



        					</tr>
        					<tr>
        						<td>Cooling</td>
        							<td class="border-left">{listing.airConditioningDesc ? listing.airConditioningDesc : 'None'}</td>


        					</tr>
        					<tr>
        						<td>Exterior Finish</td>
        							<td class="border-left">{listing.numberFinishedFireplaces ? listing.numberFinishedFireplaces : '0'}</td>



        					</tr>
        					<tr>
        						<td>Fireplaces</td>
        							<td class="border-left">{listing.numberofFireplaces ? listing.numberofFireplaces : '0'}</td>


        					</tr>
        					<tr>
        						<td>Fire protection</td>
        						<td class="border-left">None</td>

        					</tr>
        					<tr>
        						<td>Floor Covering</td>
        							<td class="border-left">{listing.floorCovering ? listing.floorCovering : 'None'}</td>


        					</tr>
        					<tr>
        						<td>Foundation</td>
        							<td class="border-left">{listing.foundation ? listing.foundation : 'None'}</td>



        					</tr>
        					<tr>
        						<td>Heating</td>
        							<td class="border-left">{listing.heatDesc ? listing.heatDesc : 'None'}</td>



        					</tr>
        					<tr>
        						<td>Heating Fuel</td>
        							<td class="border-left">{listing.heatingFuel ? listing.heatingFuel : 'None'}</td>


        					</tr>
        					<tr>
        						<td>No. of Storeys</td>
        							<td class="border-left">{listing.typeofDwelling ? listing.typeofDwelling : 'N/A'}</td>



        					</tr>
        					<tr>
        						<td>Water</td>
        							<td class="border-left">{listing.waterSupply ? listing.waterSupply : 'N/A'}</td>


        					</tr>
        					<tr>
        						<td>Sewer</td>
        							<td class="border-left">{listing.sewerType ? listing.sewerType : 'N/A'}</td>


        					</tr>

        				  </table>
        			</div>

        		</div>
        		<div class="col-5">
        			<div class="contact-form">
        				<h1 class="contact-title">
        					Inquire About this property
        				</h1>
        			</div>
        			<div class="contact-card contact-section">
        				<h1 class="contact-title">
        					Contact Agent
        				</h1>
        					<div class="contact-card-info">
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
        			</div>


        		</div>

        	</div>

        </div>



        </div>
        {props.loading ? <Carousels listings={props.listings}/> : <></>}
		</>
	) : <></>}
		

    </>
    ) : (
        <div className="loading-icon"><Audio
		height = "150"
		width = "150"
		radius = "9"
		color = '#b12020'
		ariaLabel = 'three-dots-loading'     
		wrapperStyle
		wrapperClass
	  /></div>
    )}

        <Footer style={{marginTop: '100px'}}/>

    </>


  )
}
