import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
          Home
        </a>
      <a href="/" tabIndex={tabIndex}>
          Our mission
        </a>
      <a href="/" tabIndex={tabIndex}>
          Places
        </a>
      <a href="/" tabIndex={tabIndex}>
          Team
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
