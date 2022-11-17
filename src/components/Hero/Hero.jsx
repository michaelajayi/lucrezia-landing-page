import React from "react";
import { Link } from "react-scroll";
import Vector from "../../assets/img/lucrezia-vector.png";
import Fb from "../../assets/img/lucrezia-fb.png";
import In from "../../assets/img/lucrezia-in.png";
import Yt from "../../assets/img/lucrezia-yt.png";
import "./Hero.css";
import HeroText from "./HeroText";

const Hero = ({ slider }) => {
  const styledBackground = {
    backgroundImage: `url(${slider.bg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
    zIndex: '-10',
  };

  return (
    <div
      className='hero flex flex-col gap-[2rem] md:gap-[6rem]'
      style={styledBackground}
    >
      <div className='md:flex items-center justify-between pt-[0.5rem] lg:pt-[3rem] px-4'>
        <div>
          <img className=' sm:ml-[2rem]' src={Vector} alt='Vector' />
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
        <div className='hidden md:flex gap-4 p-8 pr-[4rem] cursor-pointer'>
          <a
            href='https://www.linkedin.com/company/sujimoto-construction-limited'
            target='blank'
          >
            <img src={In} alt='In' />
          </a>
          <a href='https://www.facebook.com/motoconstructionng' target='blank'>
            <img src={Fb} alt='Fb' />
          </a>
          <a
            href='https://www.youtube.com/channel/UC1Q3PEh495SxXY-npjegTkg'
            target='blank'
          >
            <img src={Yt} alt='Yt' />
          </a>
        </div>
      </div>
      <HeroText slider={slider} />
    </div>
  );
};

export default Hero;