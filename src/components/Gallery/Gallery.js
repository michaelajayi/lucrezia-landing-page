import React from "react";
import { Container, Image, Button } from "react-bootstrap";

import "./Gallery.css";

import img01 from "../../assets/img/banners/01.png";
import img02 from "../../assets/img/banners/02.png";
import img03 from "../../assets/img/banners/03.png";

const Gallery = () => {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center px-0 mx-0'>
      <h1 className='gallery__heading'>Lucrezia de' Medici</h1>
      <div className='gallery-container'>
        <Image src={img01} alt='img-01' className='first' />
        <Image src={img02} alt='img-02' className='second' />
        <Image src={img03} alt='img-03' className='third' />
      </div>
      {/* <Button className='more__btn shadow-none border-0'>More</Button> */}
    </Container>
  );
};

export default Gallery;
