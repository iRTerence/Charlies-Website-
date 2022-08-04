import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from './Search.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSliders, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <div>
        <Container>
	        <div className={styles.search}>
	        	<form>
	        		<div className={styles.topSearch}>
	        			<div className={styles.searchText}>   
	        				<input id='search-text' type="text" placeholder='Enter a city, neighbourhood, address or MLS number'/>
	        				<div className={styles.slidecontainer}>
  	        					<input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
	        				</div>
	        			</div> 
	        			<Row class="dropdown-options rows"> 
	        				<div>
  	        				  <div className={styles.formGroup}>
	        						<div className={styles.listing}>
  	        				    		<select className={styles.listingStatus2} id="sel1" name="sellist1">
  	        				    		  <option value ="" disabled selected hidden>Listing Status</option>
  	        				    		  <option>All Listings</option>
  	        				    		  <option>Active Listings</option>
  	        				    		  <option>Sold Listings</option>
  	        				    		</select>
	        						</div>	
	        						<div className={styles.dropdowns}>
	        							<select className={styles.listingStatus2} id="sel1" name="sellist1">
  	        				    		  <option value ="" disabled selected hidden>Property Type</option>
  	        				    		  <option>All Properties</option>
  	        				    		  <option>Residential</option>
  	        				    		  <option>Condos</option>
	        							  <option>Land</option>
	        							  <option>Commercial</option>
  	        				    		</select>
	        						</div>
	        						<div className={styles.beds}>
	        							<div className={styles.button}>-</div>
	        								<input type="text" name="beds" placeholder="0+ Beds"/>
	        							<div className={styles.button}>+</div>
	        						</div>
            					</div>

                            <div class="bottom-search row">
                            <Row>
                                <Col className={styles.advance}>
                                <button><i class="fa fa-cog" aria-hidden="true"></i>
	        					    		Advance Search
                                </button>
                                </Col>
                                <Col className={styles.searchHeader}>
                                <div>
                                    <button className={styles.save}>
                                        Save Search
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.search}>
                                        Search
                                    </button>
                                </div>
                                </Col>
                            </Row>

                            </div>

	        				</div>
	        			</Row>
	        		</div>
                    </form>
	        </div>



    <div className={styles.mobileSearch}>
        <form>
            <div className={styles.mobileDisplay}>
                <div>
                    <div className={styles.buttonIn}>
                        <button className={styles.settingsBtn}><FontAwesomeIcon icon={faBars}  /></button>   
				    	<input className={styles.searchText} type="text" placeholder='Enter a city, address or MLS number'/>
				    </div> 
                </div>
                <div className={styles.toggleSwitch}>
                    <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
                    <label className={styles.toggleSwitchText} for="customSwitch1">SEZLIK.COM ONLY LISTINGS</label>
                </div>
                <div className={styles.slidecontainer}>
                    <input type="range" min="1" max="100" value="50" className={styles.slider} id="myRange"/>
                </div>
                
                <div className={styles.mobileListing}>
                    <select className={styles.listingStatus} id="" name="sellist1">
                      <option value ="" disabled selected hidden>Listing Status</option>
                      <option>All Listings</option>
                      <option>Active Listings</option>
                      <option>Sold Listings</option>
                    </select>
              </div>	
              <div className={styles.mobileListing}>
                  <select className={styles.listingStatus} id="" name="sellist1">
                      <option value ="" disabled selected hidden>Property Type</option>
                      <option>All Properties</option>
                      <option>Residential</option>
                      <option>Condos</option>
                    <option>Land</option>
                    <option>Commercial</option>
                    </select>
              </div>
              <div className={styles.mobileListing}>
                <select className={styles.listingStatus} id="" name="sellist1">
                    <option value ="" disabled selected hidden>0+ Beds</option>
                    <option>1+ Beds</option>
                    <option>2+ Beds</option>
                    <option>3+ Beds</option>
                    <option>4+ Beds</option>
                    <option>5+ Beds</option>
                    <option>6+ Beds</option>
                    <option>7+ Beds</option>
                    <option>8+ Beds</option>
                </select>
            </div>
            <div className={styles.mobileSearchBtn}>
                <button className={styles.searchBtn}>
                    Search
                </button>
            </div>

            </div>
        </form>
    </div>



        </Container>







    </div>
  )
}
