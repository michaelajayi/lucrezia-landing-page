import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import "./Gallery.css";

import img01 from "../../assets/img/banners/01.png";
import img02 from "../../assets/img/banners/02.png";
import img03 from "../../assets/img/banners/03.png";

const Gallery = () => {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center px-0 mx-0'>
      <em className='gallery__heading'>Lucrezia de' Medici</em>
      <div className='gallery__container d-flex'>
        <Row className='align-items-end'>
          <Col md={6} sm={12} lg={6} className='px-0 bg-warning'>
            <Image
              src={img01}
              alt='img-01'
              className='first-image unbounded-img'
            />
          </Col>
          <Col md={6} sm={12} lg={6} className='px-0'>
            <div className='d-flex flex-column'>
              <Image src={img02} alt='img-02' className='unbounded' />
              <Image src={img03} alt='img-03' className='unbounded-img' />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Gallery;
