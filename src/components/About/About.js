import React from 'react';

import { StyledAbout } from './About.styled'

const About = () => {
    return (
        <StyledAbout>
            <h2>About</h2>
			<p>
				Hey, I’m Jake. I have a passion for photography, with landscapes making
				up the majority of my work.{' '}
			</p>
			<p>
				As of late I haven’t had much to shoot, so I wander my home with a
				thrift store film point and shoot. It truly isn’t about the gear, but
				about capturing a moment in time.
			</p>
			<p>
				I keep a relatively low profile and really try to be impactful with
				actions and words. I spend most of my time studying web development, and
				I’m currently seeking a position at a firm where I can make a
				difference.
			</p>
			<div className='img'>
				<img src={require('../../images/jake-grella.jpeg')} alt='portrait of jake grella' />
			</div>
        </StyledAbout>
    )
}
  
export default About;