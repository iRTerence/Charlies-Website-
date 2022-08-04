import React from 'react'
import styles from './Testimonials.scss'
import { Carousel, Card, Stack, Button } from "react-bootstrap";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function App() {


  return (

<div>
    <h1 style={ {   textAlign: 'center'}}>   <FontAwesomeIcon icon={faQuoteLeft} className={styles.socialmediaIcons}/>
</h1>
<section className="pt-5 pb-5 d-none d-md-block">
      <div className="row">
          <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <div className="row">
  
                              <div className="col-md-4 mb-3">
                                  <div className="testimonials">
                                      <p>
                                          Charlie and his team were available each step of the way. We now own our dream home and we owe that to Charlie and his team. 
                                            <br/><br/>
                                          MIRANDA C.
                                     </p>
                                  </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to Charlie and his team. 
                                          <br/><br/>
                                        MIRANDA C.
                                   </p>
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team. 
                                            <br/><br/>
                                        KEVIN T.                                          
                                        
                                   </p>
                                </div>
                              </div>
  
                          </div>
                      </div>
                      <div className="carousel-item">
                          <div className="row">
  
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                            <br/><br/>
                                        MADISON B.                                            
                                   </p>
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                            <br/><br/>
                                        MADISON A.                                            
                                   </p>
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                            <br/><br/>
                                        MADISON B.                                            
                                   </p>
                                </div>
                              </div>
  
                          </div>
                      </div>
                      <div className="carousel-item">
                          <div className="row">
  
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                            <br/><br/>
                                        MADISON B.                                            
                                   </p>
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                            <br/><br/>
                                        MADISON B.                                            
                                   </p>
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                            <br/><br/>
                                        MADISON B.                                            
                                   </p>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  </div>
  
  </section>

  <section className="pt-5 pb-5 d-md-none">
    <div className="row">
        <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="testimonials">
                                    <p>
                                        Charlie and his team were available each step of the way. We now own our dream home and we owe that to Charlie and his team. 
                                          <br/><br/>
                                        MIRANDA C.
                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="testimonials">
                                  <p>
                                      Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                          <br/><br/>
                                      MADISON B.                                            
                                 </p>
                              </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="testimonials">
                                  <p>
                                      Charlie and his team were available each step of the way. We now own our dream home and we owe that to his team.  
                                          <br/><br/>
                                      MADISON B.                                            
                                 </p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</section>
  </div>

  );
}
