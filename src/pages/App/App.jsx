import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';
import PrimaryNav from '../../components/PrimaryNav/PrimaryNav';
import Home from '../../pages/Home/Home';
import AboutUs from '../AboutUs/AboutUs'
import ShowPage from '../ShowPage/ShowPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, useParams } from "react-router-dom"
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Buyer from '../Buyer/Buyer';






function App() {
  let [listings, setListings] = useState()
  let [loading, setLoading] = useState(false)
  let [showId, setShowId] = useState()


  useEffect( () => {
    async function getListings(){
      let response = await axios.get("https://retsinterface.ca/api/getlistingsbycount?count=10")
      setListings(response.data)
      setLoading(true)
      console.log(showId)
    }
    getListings()
  }, [])

  function setId(number){
    setShowId(number)
  }




  library.add(fab, faUsersLine)
  return (
    <div className="default">
      <SecondaryNav />
      <PrimaryNav />
      <div>
      <Routes>
        <Route path='/' element={<Home listings={listings} loading={loading}/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path="listing">
          <Route path=":id" element={<ShowPage listings={listings} loading={loading} key={window.location.pathname} setId={setId}/>} />
        </Route>
        <Route path='buyer' element={<Buyer/>}></Route>

      </Routes>
      </div>
      


    </div>
  );
}

export default App;
