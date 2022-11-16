import React from "react";
// import { Link } from "react-scroll";
// import ArrowPoint from "../Assets/lucrezia-arrow-point.png";
import Automation from "../../assets/img/lucrezia-automation.png";

const HeroText = () => {
  return (
    <div className='text-white flex items-center justify-center'>
      <div className='block lg:flex justify-between items-center lg:w-[80%] sm:w-[90%] pt-5'>
        <h1 className='w-[70%] lg:w-[60%]'>
          <em className='text-[2rem] md:text-6xl lg:text-8xl' id='discover'>
            Discover the Height of Luxury Living
          </em>
          <span
            className='block text-[1rem] lg:text-[30px] pt-2 lg:w-[60%] md:text-2xl'
            id='hero__text'
          >
            In Africa's Ultra Exclusive Neighbourhood.
          </span>
        </h1>
        <div className='text-[15px] w-[60%] lg:w-[25%] py-6' id='hero_text'>
          <p>
            {" "}
            The Lucrezia is the rebirth of architectural elegance, mastery of
            architectural complexities and flamboyance. It combines 3 rare
            attributes- Beauty, Affluence and Style.
          </p>

          <p>
            Comprising 16 maisonettes and 2 penthouses, Lucrezia is designed to
            be a trailblazer in Africa’s most expensive square meter, Banana
            Island.
          </p>
          <div className='flex items-center justify-between' id='stories'>
            <div className='hero__stories'>
              <h1 className='text-[64px]'>14</h1>
              <p className='text-[14px] text-center'>Stories</p>
            </div>
            <div className='hero__stories flex flex-col justify-center items-center'>
              <h1 className='text-[64px] pt-2'>22</h1>
              <p className='w-[50%] text-center text-[14px]' id="hero__bedroom">Bedroom Maisonette</p>
            </div>
            <div>
              <img
                className='inline px-2 lg:px-4'
                src={Automation}
                alt='automation'
              />
              <p className='text-[14px] pt-4'>Fully Automated</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <p className='text-center' id='hero_text'>
          Welcome <span className='font-bold'>to LucreziaBySujimoto</span>
        </p>
        <Link to='/' className=''>
          <img src={ArrowPoint} alt='ArrowPoint' />
        </Link>
      </div> */}
    </div>
  );
};

export default HeroText;
