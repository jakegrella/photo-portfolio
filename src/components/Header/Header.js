import React from 'react';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Jake Grella</h1>
      {/* <h1><Link exact={true} to='/' ><img src={require('../../images/jg-bubble-logo-05.png')} alt='jake grella logo'/></Link></h1> */}
    </StyledHeader>
  )
}

export default Header;
