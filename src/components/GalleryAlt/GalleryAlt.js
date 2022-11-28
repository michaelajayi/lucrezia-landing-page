import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import GallerySlider from "../GallerySlider/GallerySlider";

import "./GalleryAlt.css";
import bg01 from "../../assets/img/banners/gallery-banner/01.jpg";
import bg02 from "../../assets/img/banners/gallery-banner/02.jpg";
import bg03 from "../../assets/img/banners/gallery-banner/03.jpg";
import bg04 from "../../assets/img/banners/gallery-banner/04.jpg";
import bg05 from "../../assets/img/banners/gallery-banner/05.jpg";

const Gallery = () => {
  const gallerySlider = [
    {
      img: bg01,
    },
    {
      img: bg02,
    },
    {
      img: bg03,
    },
    {
      img: bg04,
    },
    {
      img: bg05,
    },
  ];
  return (
    <Container
      fluid
      className='d-flex flex-column align-items-center justify-content-center px-0 mx-0'
      id='gallery'
    >
      <h1 className='gallery__heading'>Lucrezia de' Medici</h1>
      <GallerySlider gallery={gallerySlider} />
      {/* <h1>Gallery Slider</h1> */}
    </Container>
  );
};

export default Gallery;
