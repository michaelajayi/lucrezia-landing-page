import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Automation from "../../assets/img/lucrezia-automation.png";

import "./HeroText.css";

const HeroText = ({ slider }) => {
  return (
    <div className='text-white flex items-center justify-center '>
      <div className='block lg:flex justify-between items-start md:w-[85%] w-[90%] sm:pt-[1rem] pl-4 md:px-0'>
        <div className='w-[80%] lg:w-[60%]'>
          <h1
            className='text-[2rem] md:text-6xl lg:text-6xl hero__heading'
            id='discover'
          >
            {slider.heading}
          </h1>
          <p
            className='block text-[20px] md:text-[30px] pt-2 lg:w-[60%] hero__subheading'
            id='hero__text'
          >
            {slider.subHeading}
          </p>
        </div>
        <div
          className='text-[10px] md:text-[15px] w-[60%] lg:w-[28%] pb-6'
          id='hero__text'
        >
          <p className=''>
            The Lucrezia is the rebirth of architectural elegance, mastery of
            architectural complexities and flamboyance. It combines 3 rare
            attributes- Beauty, Affluence and Style.
          </p>

          <p>
            Comprising 16 maisonettes and 2 penthouses, Lucrezia is designed to
            be a trailblazer in Africa’s most expensive square meter, Banana
            Island.
          </p>
          {/* <div
            className='flex flex-1 justify-between items-baseline text-center'
            id='stories'
          >
            <div className='hero__stories flex flex-col justify-center items-center'>
              <h1 className='md:text-[64px] text-[20px]'>14</h1>
              <p className='md:text-[14px] text-[10px] text-center'>Stories</p>
            </div>
            <div className='hero__stories flex flex-col justify-center items-center'>
              <h1 className='md:text-[64px] text-[20px]'>22</h1>
              <p
                className='md:text-[14px] w-[60%] text-[10px] text-center'
                id='hero__bedroom'
              >
                Bedroom Maisonette
              </p>
            </div>
            <div className='flex flex-col items-center justify-between hero__stories gap-[1.5rem]'>
              <img
                className='px-2 lg:px-4'
                id='automation__img'
                src={Automation}
                alt='automation'
              />
              <p className='md:text-[14px] w-[60%] text-[10px] text-center'>
                Fully Automated
              </p>
            </div>
          </div> */}
          <Row className='align-items-stretch justify-content-start'>
            <Col
              md={4}
              sm={4}
              xs={4}
              className='d-flex flex-column align-items-center px-0'
            >
              <p className='highlights__counter my-0'>14</p>
              <p className='highlights__text my-0'>Stories</p>
            </Col>
            <Col
              md={4}
              sm={4}
              xs={4}
              className='d-flex flex-column align-items-center px-0'
            >
              <p className='highlights__counter my-0'>22</p>
              <p className='highlights__text my-0'>Bedroom Maisonette</p>
            </Col>
            <Col
              md={4}
              sm={4}
              xs={4}
              className='d-flex flex-column align-items-center justify-content-between px-0'
            >
              <Image
                className='highlights__counter mt-3 automation-icon'
                src={Automation}
                alt='automation'
              />
              <p className='highlights__text'>Fully Automated</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
