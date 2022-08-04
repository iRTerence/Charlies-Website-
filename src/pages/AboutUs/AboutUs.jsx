import React, {useEffect, useState, useRef } from 'react'
import axios from 'axios'
import styles from './AboutUs.module.scss'

export default function AboutUs() {

  let [listing, setListing] = useState()
  let [imageBytes, setImageBytes] = useState(null)
  let [isLoading, setIsLoading] = useState(false)
  const isMounted = useRef(false)


  useEffect( () => {
	async function getListing() {

		try{
			let  response = await axios.get(`http://retsinterface.ca/api/getlisting?mLSNumber=1225653`)
			let data = response.data[0]
			setListing(data)
			console.log(data)
			let images = await axios.get(`http://retsinterface.ca/api/photoImport?mui=31282656`)
			console.log(images)
			
		} catch(error) {
			console.log(error)
		}
   

	}

	getListing()
},[])
  return (
    <div>

about us



    </div>
  )
}
