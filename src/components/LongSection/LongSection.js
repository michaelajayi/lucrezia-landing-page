import React from "react";
import { Button, Container } from "react-bootstrap";
import "./LongSection.css";

import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";

const LongSection = () => {
  return (
    <Container
      fluid
      className='long-section d-flex flex-column align-items-center justify-content-center'
    >
      <Gallery />
      <Button className='more__btn shadow-none border-0 my-5'>More</Button>
      <Features />
    </Container>
  );
};

export default LongSection;
