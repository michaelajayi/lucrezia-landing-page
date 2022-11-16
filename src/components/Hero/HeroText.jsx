import React from "react";
// import { Link } from "react-scroll";
// import ArrowPoint from "../Assets/lucrezia-arrow-point.png";
import Stories from "../../assets/img/lucrezia-14.png";
import Maisonette from "../../assets/img/lucrezia-22.png";
import Automation from "../../assets/img/lucrezia-automation.png";

const HeroText = () => {
  return (
    <div className='absolute w-full text-white'>
      <div className='block lg:flex justify-center items-center sm:p-12'>
        <h1 className='w-[70%] top-[20%] lg:w-[60%]'>
          <span className='text-[2rem] md:text-6xl lg:text-8xl' id='discover'>
            Discover the Height of Luxury Living
          </span>
          <span
            className='block text-[1rem] lg:text-[30px] pt-2 lg:w-[35%] md:text-2xl'
            id='hero_text'
          >
            In Africa's Ultra Exclusive Neighbourhood.
          </span>
        </h1>
        <div className='text-[15px] w-[60%] lg:w-[20%] py-6' id='hero_text'>
          <p>
            The Lucrezia is the rebirth of architectural elegance, mastery of
            architectural complexities and flamboyance. It combines 3 rare
            attributes- Beauty, Affluence and Style.
          </p>
          {/* <br /> */}
          <p>
            Comprising 16 maisonettes and 2 penthouses, Lucrezia is designed to
            be a trailblazer in Africa’s most expensive square meter, Banana
            Island.
          </p>
          <img className='inline px-2 lg:px-4' src={Stories} alt='stories' />
          <img
            className='inline px-2 lg:px-4'
            src={Maisonette}
            alt='maisonette'
          />
          <img
            className='inline px-2 lg:px-4 pt-6'
            src={Automation}
            alt='automation'
          />
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
