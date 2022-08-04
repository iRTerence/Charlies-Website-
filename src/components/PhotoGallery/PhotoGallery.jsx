import React from 'react'
import './PhotoGallery.scss'
import ImageGallery from 'react-image-gallery';


export default function PhotoGallery(props) {
    let images = []
    for (let i=0; i<props.images.length; i++) {
        images.push({
            original: `data:image/png;base64,${props.images[i]}`,
            thumbnail: `data:image/png;base64,${props.images[i]}`
            })
    }
  return (
    <>
    <div className='container'>
    <ImageGallery items={images} showThumbnails={true} thumbnailPosition={'right'} showPlayButton={false}/>
    </div>
        

    </>
  )
}

