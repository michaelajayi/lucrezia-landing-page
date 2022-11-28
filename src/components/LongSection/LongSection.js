import React from "react";
import { Button, Container } from "react-bootstrap";
import "./LongSection.css";

import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import GalleryAlt from "../GalleryAlt/GalleryAlt";

const LongSection = () => {
  return (
    <Container
      fluid
      className='long-section d-flex flex-column align-items-center justify-content-center px-0'
    >
      <GalleryAlt />
      <Features />
    </Container>
  );
};

export default LongSection;
