import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

import lucreziaLogo from "../../assets/img/lucrezia-logo.png";
import rightFooterImg from "../../assets/img/right-footer-img.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className='footer-container px-0'>
      <Row className='align-items-stretch'>
        <Col lg={8} className='d-flex flex-column justify-content-between'>
          <div className='footer-social-links d-flex gap-2 px-5 pt-5'>
            <a href='#!'>In.</a>
            <a href='#!'>Fb.</a>
            <a href='#!'>Yt.</a>
          </div>
          <Image
            src={lucreziaLogo}
            alt='lucrezia-logo-text'
            className='footer-lucrezia-logo px-5'
          />
          <Form className='footer-form py-5 d-flex flex-column'>
            <Button className='send-msg-btn border-0 shadow-none rounded-0 px-5 py-4'>
              Send us a message
            </Button>
            <Form.Group className='mb-3' controlId='fullName'>
              <Form.Control
                type='text'
                placeholder='Full Name'
                className='footer-form__control shadow-none border-0 rounded-0 py-3 px-2'
              />
            </Form.Group>
            <Row>
              <Col lg={6}>
                <Form.Group className='mb-3' controlId='email'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    className='footer-form__control shadow-none border-0 rounded-0 py-3 px-2'
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className='mb-3' controlId='phone'>
                  <Form.Control
                    type='text'
                    placeholder='Phone'
                    className='footer-form__control shadow-none border-0 rounded-0 py-3 px-2'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className='mb-3 mt-5' controlId='message'>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder='Type message'
                className='footer-form__control shadow-none border-0 rounded-0 py-3 px-2 mb-3'
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className='footer-send-btn border-0 shadow-none mt-4 align-self-end'
            >
              Send
            </Button>
          </Form>
        </Col>
        <Col lg={4} className='px-0 d-none d-lg-block'>
          <Image
            src={rightFooterImg}
            alt='right-footer-img'
            className='right-footer-img'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
