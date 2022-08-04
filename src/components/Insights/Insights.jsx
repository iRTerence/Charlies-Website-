import React from 'react'
import styles from './Insights.module.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from 'chart.js/auto';
import { Line, Doughnut } from "react-chartjs-2";
import Carousel from 'react-elastic-carousel';
import Item from "./Item.js";



export default function Insights() {

    let colors = ['#B12020','#29282D','#C19D65'];


    let resData = {
        labels: ['Glebe', 'Sandy Hill', 'Westboro'],
        datasets: [
          {
            backgroundColor: colors.slice(0,3),
            borderWidth: 0,
            cutout:'80%',
            data: [18, 14, 47]
          }
        ]
    };


    let donutOptions = {
        cutoutPercentage: 100,
        plugins: { 
                  legend: { 
                      display: false 
                  }, 
              },
    };

    let chDonutData = {
        labels: ['Glebe', 'Sandy Hill', 'Westboro'],
        datasets: [
          {
            backgroundColor: colors.slice(0,3),
            borderWidth: 0,
            cutout:'80%',
            data: [50, 45, 30]
          }
        ]
    };


    let data1 = {
        
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: '2022',
          data: [18, 12, 6, 9, 12, 3, 9,18,6,8,17,12],
          fill: false,
      borderColor: '#C19D65',
      tension: 0.1,
      pointRadius:0,
        },
      {
          label: '2021',
          data: [12,17,3,6,10,11,13,8,19,5,6,7],
          fill: false,
      borderColor: '#B12020',
      tension: 0.1,
      pointRadius:0,
      }]
      };

      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

  return (
    <div className={styles.insights}>

        <h1> Ottawa and area <br/> Real Estate insights</h1>
        {/* <!-- Desktop Display --> */}
        <div className={styles.data}>
            <Col className={styles.smData}>
                <div className={styles.dataInfo}>
                    <div className={styles.dataIcon}></div>
                    <h1 className={styles.mainHeader}>Average sale price</h1>
                    <h3 className={styles.subHeader}>Residential and Condo</h3>
                    <div className={styles.saleData}>
                        <div className={styles.sale1}>
                            <h2>This Week</h2>
                            <p>$960k</p>
                        </div>
                        <div className={styles.sale2}>
                            <h2>This week in 2022</h2>
                            <p>$902k</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className={styles.smData}>
                <div className={styles.dataInfo}>
                    <div className={styles.marketIcon}></div>
                    <h1 className={styles.mainHeader}>Properties on market</h1>
                    <h3 className={styles.subHeader}>Properties on market</h3>
                    <div className={styles.saleData}>
                        <div className={styles.market1}>
                            <h2>This Month</h2>
                            <p>123</p>
                        </div>
                        <div className={styles.sale2}>
                            <h2>This Month in 2022</h2>
                            <p>152</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className={styles.smData}>
                <div className={styles.dataInfo}>
                    <div className={styles.annualIcon}></div>
                    <h1 className={styles.mainHeader}>Annual comparison</h1>
                    <h3 className={styles.subHeader}>Compared to same month in 2022</h3>
                    <div className={styles.saleData}>
                        <div className={styles.sale1}>
                            <h2>This Month</h2>
                            <p>+13%</p>
                        </div>
                        <div className={styles.sale2}>
                            <h2>This month in 2022</h2>
                            <p>+9%</p>
                        </div>
                    </div>
                </div>
            </Col>
        </div>

        <div className={styles.data2}>
            <Col className={styles.longDataCard}>
                <div className={styles.longDataInfo}>
                    <div className={styles.locationIcon}></div>
                        <h1 className={styles.mainHeader}>Annual comparison</h1>
                        <h3 className={styles.subHeader}>Compared to same month in 2022</h3>
                        <div class="neighbourhood-data">

                            <div>
                                <div class="progress" style={{ width: '80%'}}>
                                    <div  role="progressbar"  style={{background: '#B12020', width: '10%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className={styles.neighbourhoodName}>Sandy Hill</p>
                                <p className={styles.neighbourhoodGrowth}>+10%</p>
                            </div>
                            <div>
                                <div class="progress" style={{ width: '80%'}}> 
                                    <div class="progress-bar" style={{background: '#B12020', width: '18%'}} role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className={styles.neighbourhoodName}>Westboro</p>
                                <p className={styles.neighbourhoodGrowth}>+18%</p>
                            </div>
                            <div>
                                <div class="progress" style={{ width: '80%'}}>
                                    <div class="progress-bar" style={{background: '#B12020', width: '50%'}} role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className={styles.neighbourhoodName}>Glebe</p>
                                <p className={styles.neighbourhoodGrowth}>+50%</p>
                            </div>
                        </div>
                </div>
            </Col>
            <Col className={styles.longDataCard}>
                <div className={styles.longDataInfo}>
                    <div className={styles.houseIcon}></div>
                        <p className={styles.mainHeader}>Residential and condo highlights</p>
                        <p className={styles.subHeader}>Average sale price</p>
                        <div class="neighbourhood-data">
                            <div className={styles.legend}>
                                <div className={styles.condoLegend}>
                                    <div className={styles.circleLegend}></div>
                                    <p> Condo </p>
                                </div>
                                <div className={styles.resLegend}>
                                    <div className={styles.resCircle}></div>
                                    <p> Residential </p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa Centre</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa South</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa West</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa East</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col className={styles.longDataCard}>
                <div className={styles.longDataInfo}>
                    <div className={styles.houseIcon}></div>
                        <p className={styles.mainHeader}>Residential and condo highlights</p>
                        <p className={styles.subHeader}>Average sale price</p>
                        <div class="neighbourhood-data">
                            <div className={styles.legend}>
                                <div className={styles.condoLegend}>
                                    <div className={styles.circleLegend}></div>
                                    <p> Condo </p>
                                </div>
                                <div className={styles.resLegend}>
                                    <div className={styles.resCircle}></div>
                                    <p> Residential </p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa Centre</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa South</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa West</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                            <div class="bar-info">
                                <p className={styles.areaInfo}>Ottawa East</p>
                                <div className={styles.condoBarCentre}>
                                    <div className={styles.goldCentreBar}>
                                    </div>
                                    <p>$750k</p>
                                </div>
                                <div className={styles.resBarCentre}>
                                    <div className={styles.redCentreBar}>
                                    </div>
                                    <p>$1.2M</p>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
        </div>

        <Row className={styles.data3}>
            <Col className={styles.widecard} lg="3">

                <div className={styles.marketValueIcon}></div>
                <p className={styles.mainHeader}>Sales Volume</p> 
                <p className={styles.subHeader}>Dollar value of total sale of day</p>

                <div className={styles.condoLegend}>
                    <div className={styles.circleLegend}></div>
                        <p> 2021 </p>
                    </div>

                    <div className={styles.resLegend}>
                        <div className={styles.resCircle}></div>
                        <p> 2022 </p>
                    </div>
                </Col>

                <Col lg="9" style={{  width: "45%", height: "75%"}}>

                    <Line style={{height: '100px'}}data={data1} options={{ 
                         scales: {
                             x:{
                                 grid: {
                                     display: false
                                 }
                             },
                             y:{
                             beginAtZero: true,
                             grid: {
                                 display: false
                             }
                         }
                     
                         },
                         plugins: { 
                             legend: { 
                                 display: false 
                             }, 
                         } 
                     }}/>
                </Col>
        </Row>
        {/* Mobile */}

        <div className={styles.mobileInsights}>
            <Carousel breakPoints={breakPoints}>
                
                <Item>
            <Row>
                <div className={styles.insightCard}>
                     <div className={styles.insightInfo}>
                         <p className={styles.insightHeader}> Condo highlights </p>
                         <p className={styles.insightSubHeader}>Average sale price</p>

                         <Row>
                             <Col sm='6'>
                                 <p className={styles.price}>$484,345</p>
                            </Col>
                            <Col sm='6'>
                                 <div className={styles.downIcon}>
                                 </div>
                                 <div className={styles.negativePercent}>
                                     -9%
                                 </div>
                            </Col>
                         </Row>

                         <div className={styles.trendyInfo}>
                             <div className={styles.houseIcon}></div>
                                 <p className={styles.trendytext}>Trending Neighbourhoods</p>
                         </div>
                         
                         <Row>
                            <Col xs={3} className={styles.chartLegend}>
                                 <div className={styles.legend}>
                                     <div className={styles.redLegend}></div>
                                     <p className={styles.neighbourhoodName}> Glebe</p>
                                     <p className={styles.neighbourhoodPrice}> $425K</p>
                                 </div>
                                 <div className={styles.legend}>
                                     <div className={styles.greyLegend}></div>
                                     <p className={styles.neighbourhoodName}> Kanata</p>
                                     <p className={styles.neighbourhoodPrice}> $529K</p>
                                 </div>
                                 <div class={styles.className}>
                                     <div className={styles.goldLegend}></div>
                                     <p className={styles.neighbourhoodName}> Westboro</p>
                                     <p className={styles.neighbourhoodPrice}> $625K</p>
                                 </div>
                             </Col>
                             <Col xs={9}>
                                <Doughnut data={chDonutData} options={donutOptions}/>
                                 {/* <canvas id="pieChart"  height="200" width="800"></canvas> */}
                             </Col>
                         </Row>
                     </div>
                 </div>
                 </Row>
                </Item>
                <Item>
                <Row>
                <div className={styles.insightCard}>
                     <div className={styles.insightInfo}>
                         <p className={styles.insightHeader}> Condo highlights </p>
                         <p className={styles.insightSubHeader}>Average sale price</p>

                         <Row>
                             <Col sm='6'>
                                 <p className={styles.price}>$925,345</p>
                            </Col>
                            <Col sm='6'>
                                 <div className={styles.upIcon}>
                                 </div>
                                 <div className={styles.positivePercent}>
                                     +23%
                                 </div>
                            </Col>
                         </Row>

                         <div className={styles.trendyInfo}>
                             <div className={styles.houseIcon}></div>
                                 <p className={styles.trendytext}>Trending Neighbourhoods</p>
                         </div>
                         
                         <Row>
                            <Col xs={3} className={styles.chartLegend}>
                                 <div className={styles.legend}>
                                     <div className={styles.redLegend}></div>
                                     <p className={styles.neighbourhoodName}> Glebe</p>
                                     <p className={styles.neighbourhoodPrice}> $425K</p>
                                 </div>
                                 <div className={styles.legend}>
                                     <div className={styles.greyLegend}></div>
                                     <p className={styles.neighbourhoodName}> Kanata</p>
                                     <p className={styles.neighbourhoodPrice}> $529K</p>
                                 </div>
                                 <div class={styles.className}>
                                     <div className={styles.goldLegend}></div>
                                     <p className={styles.neighbourhoodName}> Westboro</p>
                                     <p className={styles.neighbourhoodPrice}> $625K</p>
                                 </div>
                             </Col>
                             <Col xs={9}>
                                <Doughnut data={resData} options={donutOptions} height="200" width="800"/>
                                 {/* <canvas id="pieChart"  height="200" width="800"></canvas> */}
                             </Col>

                         </Row>
                     </div>
                 </div>
                 </Row>
                </Item>
                <Item>
                <Row>
                <div className={styles.insightCard}>
                     <div className={styles.insightInfo} style={{padding: "30px 0px 0px 30px"}}>
                         <p className={styles.insightHeader}> % Sold Over Asking </p>
                         <p className={styles.insightSubheader}>By Neighbourhood</p>

                         
                        <div class="sold-chart">
                         <Doughnut data={chDonutData} options={{
                            plugins: {
                                    legend: {
                                    position:'bottom',
                                    padding: 20, 
                                    labels: {pointStyle:'circle', usePointStyle:true}
                                },
                            }
                        
                        }}/>
                        </div>
                         
                         

                     </div>
                 </div>
                 </Row>                 
                </Item>
            </Carousel>
        </div>
</div>
  )
}
