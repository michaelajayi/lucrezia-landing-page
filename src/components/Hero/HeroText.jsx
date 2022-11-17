import React from "react";
// import { Link } from "react-scroll";
// import ArrowPoint from "../Assets/lucrezia-arrow-point.png";
import Automation from "../../assets/img/lucrezia-automation.png";

const HeroText = ({ slider }) => {
  return (
    <div className='text-white flex items-center justify-center '>
      <div className='block lg:flex justify-between items-center lg:w-[80%] sm:w-[80%] sm:pt-[1rem] xl:pt-[4rem] pt-[1.5rem] lg:pt-5 pl-4 md:px-0'>
        <h1 className='w-[80%] lg:w-[60%]'>
          <em className='text-[2rem] md:text-6xl lg:text-8xl' id='discover'>
            {slider.heading}
          </em>
          <em
            className='block text-[1rem] md:text-[30px] pt-2 lg:w-[60%] md:text-2xl'
            id='hero__text'
          >
            {slider.subHeading}
          </em>
        </h1>
        <p className='text-[15px] w-[60%] lg:w-[20%] py-6' id='hero_text'>
          The Lucrezia is the rebirth of architectural elegance, mastery of
          architectural complexities and flamboyance. It combines 3 rare
          attributes- Beauty, Affluence and Style. <br />
          <br />
          <p>
            Comprising 16 maisonettes and 2 penthouses, Lucrezia is designed to
            be a trailblazer in Africa’s most expensive square meter, Banana
            Island.
          </p>
          <div
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
                className='md:text-[14px] w-[60%] text-[10px] text-center '
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
