import React from 'react'
import styles from './Footer.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return (
    <div>
        <Container>
            <div className={styles.footer}>
                <div className="d-none d-lg-block">

		        	<Row className="footerItems ">
		        		<Col md={6}>
		        			<div className={styles.logo}></div>
		        			<div className={styles.royalpage}></div>
		        			<div className={styles.awards}>
		        				<div className={styles.award1}>
		        				</div>
		        				<div className={styles.award2}></div>
		        				<div className={styles.award3}></div>
		        				<div className={styles.award4}></div>
		        				<div className={styles.award5}></div>
		        			</div>

		        		</Col>
                        <Col md={3}>
		        		
		        			<p className={styles.footerHeader}> Royal LePage Team Realty</p>
		        			<p>Suite 114, 40 Landry Street <br />Ottawa, ON <br/>K1L 8K4 <br/><br/>Phone: 613.744.6697 <br/>Fax: 613.447.6975 </p>
		        		
                        </Col>
		        		<Col md={3}>
		        			<ul class="list-unstyled mb-0">
		        				<li>
		        				  <a href="#!" className={styles.footerLink}>About</a>
		        				</li>
		        				<li>
		        				  <a href="#!" className={styles.footerLink}>Listings</a>
		        				</li>
		        				<li>
		        				  <a href="#!" className={styles.footerLink}>Buyers</a>
		        				</li>
		        				<li>
		        				  <a href="#!" className={styles.footerLink}>Sellers</a>
		        				</li>
		        				<li>
		        				  <a href="#!" className={styles.footerLink}>Contact</a>
		        				</li>
		        			</ul>
		        			<div>

                            <FontAwesomeIcon icon={['fab', 'facebook-f']} className={styles.socialmedia2}/>
                            <FontAwesomeIcon icon={['fab', 'twitter']} className={styles.socialmedia2}/>
                            <FontAwesomeIcon icon={['fab', 'youtube']} className={styles.socialmedia2}/>
		        			</div>
                        </Col>
		        	</Row>
		        </div>
            </div>

            <div class="d-lg-none">

                <div className={styles.mobileFooter}>
			        <div class="">
			        	<ul class="list-unstyled mb-0">
			        		<li>
			        		  <a href="#!" className={styles.footerLink}>About</a>
			        		</li>
			        		<li>
			        		  <a href="#!" className={styles.footerLink}>Listings</a>
			        		</li>
			        		<li>
			        		  <a href="#!" className={styles.footerLink}>Buyers</a>
			        		</li>
			        		<li>
			        		  <a href="#!" className={styles.footerLink}>Sellers</a>
			        		</li>
			        		<li>
			        		  <a href="#!" className={styles.footerLink}>Contact</a>
			        		</li>
			        	</ul>
			        	<div>
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} className={styles.socialmedia3}/>
                            <FontAwesomeIcon icon={['fab', 'twitter']} className={styles.socialmedia3}/>
                            <FontAwesomeIcon icon={['fab', 'youtube']} className={styles.socialmedia3}/>
			        	</div>
			        	<div className={styles.centerLogo}>
			        		<div className={styles.logo}></div>
			        	</div>
			        	<div className={styles.centerLogo}>
			        		<div className={styles.royalpage2}></div>
			        	</div>
			        	<p className={styles.footerHeader}> Royal LePage Team Realty</p>
			        	<p class="metro">Suite 114, 40 Landry Street <br/>Ottawa, ON <br/>K1L 8K4 <br/><br/>Phone: 613.744.6697 <br/>Fax: 613.447.6975</p>
                        <div className={styles.awards}>
		        				<div className={styles.award1}>
		        				</div>
		        				<div className={styles.award2}></div>
		        				<div className={styles.award3}></div>
		        				<div className={styles.award4}></div>
		        				<div className={styles.award5}></div>
		        			</div>
        
        
        
			        </div>
            </div>



		</div>

        </Container>
        <div className={styles.policy}>
			<a>PRIVACY POLICY</a> | <a>DISCLAIMER</a>
		</div>
    </div>
  )
}
