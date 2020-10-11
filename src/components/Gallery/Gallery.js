import React from 'react';
import { Link } from 'react-router-dom'

import { StyledGallery } from './Gallery.styled'

const Gallery = (props) => {
    return (
		<StyledGallery>
			<h2 className="banner"><Link to='/order' className="banner">click to order senior night photos</Link></h2>
			<div className='grid-container'>
            {props.photos && (
				<>
					{props.photos.map((photo) => (
						<img src={photo.urls.regular} alt={photo.alt_description} />
					))}
				</>
			)}
			</div>
        </StyledGallery>
    )
}
  
export default Gallery;