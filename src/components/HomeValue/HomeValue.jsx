import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './HomeValue.module.scss'

export default function HomeValue() {
  return (
    <div>


    <div className={styles.homeValue}>
                  <div className={styles.homeFlex}>
                      <div className={styles.homeText}>
                          <h1>What’s my home worth? </h1>
                          <p class="metro calc-text">Room dimensions and the colour of walls does not make a home a home; it’s the feel of walking through a front door and the feel of dreams coming true.
                          <br/><br/>
                          Sezlik.com utilizes the latest technology, market research and business strategies to exceed your expectations. More importantly, we listen and find solutions tailored to you. Start your real estate search with us!</p>
                      </div>
                  </div>
                  <button className={styles.calcBtn}>Calculate</button>
                      <Row className={styles.infoBtns}>
                        <Col   className={styles.infoSquare}>
                                <h1> Sell with Sezlik.com </h1>
                                <button className={styles.sellerBtn}>Seller information</button>
                        </Col>
                        <Col   className={styles.infoSquare}>
                                <h1> Find your dream home </h1>
                                <button className={styles.buyerBtn}>Buyer information</button>
                        </Col>
                      </Row>
                </div>
                <div className={styles.mobileCalcBtn}>
                    <div className={styles.sellerSquare}>
                        <h1>Sell with Sezlik.com</h1>
                        <button>Sellers information</button>
                    </div>
                    <div className={styles.buyerSquare}>
                        <h1>Find your dream home</h1>
                        <button>Buyers information</button>
                    </div>
                </div>
                <Row className={styles.marketInsights}>
                  <Col lg={7} md={12} sm={12} className={styles.insightText}>
                        <div className={styles.insightTextBox}>
                            <h1 className={styles.homepageHeader}> Access more market insights</h1>
                            <p className={styles.homepageText}>At Sezlik.com we set the region’s upscale residential sales benchmark, by leveraging specialized knowledge on behalf of buyers and sellers. In fact, our passion for real estate made us the number one* group in Ottawa and put us in the top 100 producers in North America. <br/><br/>By registering as a Sezlik.com Insider, you gain access to exclusive listings, tailored market insights and more, to make your real estate experience seamless.</p>
                        </div>
                  </Col>
                  <Col lg={5} md={12} sm={12} className={styles.interior}>
                  </Col>
                </Row>
                <div className={styles.marketInsights}>

                    <div className={`${styles.insightTextBox} d-lg-none`}>
                        <h1 className={styles.homepageHeader}> Artificial Intelligence at the highest level of real estate</h1>
                        <p className={styles.homepageText}>Sezlik.com has embraced innovation to offer you the most progressive real estate experience. We enforce the highest standards and provide you with the opportunity to receive information the way you want it.<br/><br/> With the use of proprietary artificial intelligence and historical statistical data, your buying and selling decisions have never been easier. Discover how to use Sezlik.com to its fullest potential.</p>
                    </div>
                </div>

                <Row className={styles.marketInsights}>
                    <Col lg={5} md={12} sm={12}>

                    <div class="ratio ratio-16x9">
                      <iframe src="https://www.youtube.com/embed/X0am40tz_hw" title="YouTube video" allowfullscreen></iframe>
                    </div>

                    </Col>
                    <Col lg={7} md={12} sm={12} className={styles.insightText}>
                    <div className={`${styles.insightTextBox} d-none d-lg-block`}>
                            <h1 className={styles.homepageHeader}> Artificial Intelligence at the highest level of real estate</h1>
                            <p className={styles.homepageText}>Sezlik.com has embraced innovation to offer you the most progressive real estate experience. We enforce the highest standards and provide you with the opportunity to receive information the way you want it.<br/><br/> With the use of proprietary artificial intelligence and historical statistical data, your buying and selling decisions have never been easier. Discover how to use Sezlik.com to its fullest potential.</p>
                        </div>
                    </Col>
                </Row>

        </div>
  )
}
