import React from 'react'
import Footer from '../../components/Footer/Footer'
import './Buyer.scss'

export default function Buyer() {
  return (
    <div>
        <div class='buyer-banner content'>
        	<div class="containers">
        		<h1> Buying your dream home </h1>
        	</div>
        </div>

        <div class="buyer-container">
            <div class="row">
                <div class="col-lg-3 col-md-12 col-sm-12">
                    <h1> Making your dream home a reality</h1>
                </div>
            </div>
            <div class="row">
                <div class='col-lg-5 col-md-12 col-sm-12'>
                    <p class="metro">
                        Buying a home can be a bit overwhelming. There’s so much to think about and do. So, it’s important that you have someone you can trust to make the process as smooth as possible and offer expert advice.
                        <br/><br/>
                        At Sezlik.com, it is our mission to find Canadians their dream home with no hassle – guiding them every step of the way – from determining what you can afford and showing you homes that match your wants and needs to presenting an offer and closing the sale.
                    </p>
                </div>
            </div>
        </div>


        <div class="row row-1">
            <div class='col-lg-5 col-md-12 col-sm-12 buyer-image1'>

            </div>
            <div class='col-lg-1 col-md-12 col-sm-12 buyers-icon1'>
                <div class="buyer-house-icon"></div>
            </div>
            <div class='col-lg-4 col-md-12 col-sm-12 buyers-text-right'>
                <p class="metro p-header"> Deciding to buy </p>
                <p class="p-font metro">
                    Refine your needs and wants – make a list of the things you simply can’t live without, like the number of bedrooms and bathrooms your family needs, proximity to schools and work, or storage needs. Then list some nice-to-haves: maybe a pool or deck, finished basement or mudroom. This will help you further down the road when you start looking at homes.

                    <br/> <br/> 

                    Brush up on types of homeownership – make sure you know the difference between freehold (it’s all yours), condo (you take care of the inside and pay fees to an association to look after the common areas and maintenance) and co-op (similar to condos but instead of “owning” your unit, you buy shares in the whole building and pay maintenance and repair fees) 

                    <br/> <br/> 

                    Understand market conditions – supply and demand can change from neighbourhood to neighbourhood, region to region. So, getting to know the market can help you get more bang for your buck.</p>
            </div>
        </div>


        <div class='col buyer-image2 d-lg-none'>

        </div>

        <div class="row row-2">
            <div class="col-lg-7 col-md-12 col-sm-12">
                <div class="row buyers-text-left">
                    <div class="col-lg-2 col-md-12 col-sm-12">
                        <div class="buyer-house-icon"></div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 p-font"> <span class="p-header">Understanding Finaning</span> <br/>
                        Down payment – this is usually the percentage of the total cost of a home that you’ll need to pay. The more money you put down, the more money you’ll save on monthly payments and, in the long run, interest paid 

                        <br/> <br/> 

                        Knowing what you can afford – how much house you can afford comes down to 3 factors: your monthly mortgage payment, your down payment and the amortization period or length of time it will take to pay off the loan 

                        <br/> <br/> 

                        Getting pre-approved – this will really help you figure out what you can spend on a home because you’ll know before you start shopping. And you’ll be protected against rising interest rates as well</div>
                </div>
                <div class="row buyers-text-left">
                    <div class="col-lg-2 col-md-12 col-sm-12">
                        <div class="buyer-house-icon"></div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 p-font"> <span class="p-header">Making an offer</span> <br/>
                        Not all offers are the same – the main factors on most offers will include price, deposit, terms (which includes financing details), conditions, specific items that are included or not with the home and the closing date. From there, you can decide to make a “firm” offer which means that you’re willing to buy the home exactly as it is. Or, you could make the offer “conditional” on things like a home inspection, approval of financing or the sale of your existing home     
                        <br/> <br/> 

                        Negotiating may come into play – the seller will either accept your offer, reject it or make a counteroffer based on things like price, closing date or other conditions. While receiving a counter offer may be unsettling, know that your real estate agent has plenty of experience to help you. Some good tips for negotiating are: making sure what you’re asking for is fair and equitable; be polite and collaborative; hold fast to your “needs” and be flexible on your “wants”; and know when to walk away no matter how hard that may be                
                    </div>
                </div>
            </div>
            <div class='col-lg-5 col-md-12 col-sm-12 buyer-image2 d-none d-lg-block'>

            </div>
        </div>


        <div class="row row-1">
            <div class='col-lg-5 col-md-12 col-sm-12 buyer-image1'>

            </div>
            <div class='col-lg-1 col-md-12 col-sm-12 buyers-icon1'>
                <div class="buyer-house-icon"></div>
            </div>
            <div class='col-lg-4 col-md-12 col-sm-12 buyers-text-right'>
                <p class="metro p-header"> Moving in </p>
                <p class="p-font metro">
                    Make a moving checklist that details a plan for things that need to be done weeks before you move all the way up to moving day itself 
                    <br/> 
                    <br/>
                    Plan for packing by clearly labeling boxes with the rooms they are going. You might even want to provide a small floorplan for the movers so they know exactly where to take them 

                    <br/>
                    <br/>

                    Make sure you get competitive quotes from reliable moving companies. Or, to save money, find out how much it would cost to hire a moving van yourself (And bribe your friends to help you) If you own your current home, cancel your cable and utilities and transfer any rented appliances (like water heater or furnace) to the new home owners. While you’re at it, make sure to have the gas, electricity, cable and phone hooked up at your new home 
                    <br/>
                    <br/>
                    Inform your key contacts – work, Canada Post, doctors, friends, pharmacy, etc… – of your change of address 
                    <br/>
                    <br/>
                    If you have children, make sure you talk to them and explain why you’re moving and reassure them that the friends they’ve made can continue to be their friends. Ask for their opinion too on things like what colour to paint their rooms. Try and make it exciting for them
                    </p>
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
