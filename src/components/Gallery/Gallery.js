import React from 'react';
import { Link } from 'react-router-dom'

import { StyledGallery } from './Gallery.styled'

const Gallery = (props) => {
    return (
		<StyledGallery>
		<Link to='/order'><h2 className="banner">click to order senior night photos</h2></Link>
            {props.photos && (
				<>
					{props.photos.map((photo) => (
						<img src={photo.urls.regular} alt={photo.alt_description} />
					))}
				</>
			)}
        </StyledGallery>
    )
}
  
export default Gallery;