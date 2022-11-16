import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Link } from "react-scroll";
import Vector from "../../assets/img/lucrezia-logo.png";
import Fb from "../../assets/img/lucrezia-fb.png";
import In from "../../assets/img/lucrezia-in.png";
import Yt from "../../assets/img/lucrezia-yt.png";
import "./Hero.css";
import HeroText from "./HeroText";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

const Hero = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='w-full'>
      <div className='absolute w-full flex justify-between items-center'>
        <div className='w-full md:flex items-center justify-between absolute top-[1rem] lg:top-[2rem] px-4'>
          <div>
            <img className=' sm:ml-[2rem] w-[50px]' src={Vector} alt='Vector' />
          </div>
          <ul
            className='hidden md:flex text-white justify-between items-center gap-8'
            id='ul__link cursor-pointer'
          >
            <li className='cursor-pointer'>
              <Link to='gallery'>Gallery</Link>
            </li>
            <li className='cursor-pointer'>
              <Link to='features'>Features</Link>
            </li>
          </ul>
          <div className='hidden md:flex gap-4 p-8 pr-[4rem]'>
            <ReactLink to='https://linkedin.com' target='blank'>
              <img src={In} alt='In' />
            </ReactLink>
            <ReactLink to='https://facebook.com' target='blank'>
              <img src={Fb} alt='Fb' />
            </ReactLink>
            <ReactLink to='https://youtube.com' target='blank'>
              <img src={Yt} alt='Yt' />
            </ReactLink>
          </div>
          {/* Hamburger menu */}
          {/* <div
            className='block md:hidden cursor-pointer z-10'
            onClick={handleClick}
          >
            {!nav ? <FaBars color='black' size={20} /> : <FaTimes size={20} />}
          </div> */}

          {/* Mobile menu */}
          {/* <div
            className={
              nav
                ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
                : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
            }
          >
            <ul className='w-full p-4 '>
              <li className=''>
                <Link to='gallery'>Gallery</Link>
              </li>
              <li className=''>
                <Link to='features'>Features</Link>
              </li>
            </ul>
            <div className='flex '>
              <ReactLink to='https://linkedin.com' target='blank'>
                <img src={In} alt='In' />
              </ReactLink>
              <ReactLink to='https://facebook.com' target='blank'>
                <img src={Fb} alt='Fb' />
              </ReactLink>
              <ReactLink to='https://youtube.com' target='blank'>
                <img src={Yt} alt='Yt' />
              </ReactLink>
            </div>
          </div> */}
        </div>
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
