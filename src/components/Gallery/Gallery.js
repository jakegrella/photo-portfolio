import React from 'react';

import { StyledGallery } from './Gallery.styled'

const Gallery = (props) => {
    return (
        <StyledGallery>
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