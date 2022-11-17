import React, { useId } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import { features } from "../../utils/constants";
import "./Features.css";

const Features = () => {
  const id = useId();

  return (
    <Container className='px-0 py-4 features-container my-5'>
      <h3 className='features-heading text-center text-white mb-5'>Features</h3>
      <Row className='features-row'>
        {features.map((feature, index) => (
          <Col
            key={`${index}-${id}`}
            lg={2}
            sm={6}
            md={4}
            xs={6}
            className='d-flex flex-column align-items-center justify-content-center gap-3'
          >
            <Image
              src={feature.icon}
              alt={feature.text}
              className='feature-icon'
            />
            <p className='feature-text text-white text-uppercase text-center'>
              {feature.text}
            </p>
          </Col>
        ))}
      </Row>
      <p className='features-quote text-white px-5 d-none d-lg-block'>
        Poor quality is remembered long after low prices are forgotten.
      </p>
    </Container>
  );
};

export default Features;
