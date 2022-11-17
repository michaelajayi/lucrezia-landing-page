import React from "react";
import { Container, Image } from "react-bootstrap";

import "./Header.css";
import lucreziaLogo from "../../assets/img/lucrezia-vector.png";

const Header = () => {
  return (
    <Container fluid className='header-container d-flex flex-column'>
      <div className='header-menu d-flex justify-content-between align-items-center px-4 py-3'>
        <Image src={lucreziaLogo} alt='site-logo' />
        <div className='header__links d-flex gap-4'>
          <a href='#gallery' id='gallery'>
            Gallery
          </a>
          <a href='#features' id='gallery'>
            Features
          </a>
        </div>
        <div className='header__social-links d-flex gap-2'>
          <a href='#!'>In.</a>
          <a href='#!'>Fb.</a>
          <a href='#!'>Yt.</a>
        </div>
      </div>
      <div className='header-content d-flex justify-content-between align-items-center'>
        <div className='header-headings'>
          <em className='header-content__heading'>
            Discover the Heights of Luxury
          </em>
          <p classsName='header-content__subheading'>
            In Africa's Ultra Exclusive Neighborhood.
          </p>
        </div>
        <div className='header-right'>
          <p>
            The Lucrezia is the rebirth of architectural elegance, mastery of
            architectural complexities and flamboyance. It combines 3 rare
            attributes- Beauty, Affluence and Style.
          </p>
          <p>
            Comprising 16 maisonettes and 2 penthouses, Lucrezia is designed to
            be a trailblazer in Africa’s most expensive square meter, Banana
            Island.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Header;
