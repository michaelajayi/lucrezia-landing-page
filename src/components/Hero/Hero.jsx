import React from "react";
import { Link } from "react-scroll";
import Vector from "../../assets/img/lucrezia-vector.png";
import "./Hero.css";
import HeroText from "./HeroText";

const Hero = ({ slider }) => {
  const styledBackground = {
    backgroundImage: `url(${slider.bg})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
    zIndex: "-10",
  };

  return (
    <div
      className='hero flex flex-col gap-[2rem] md:gap-[6rem]'
      style={styledBackground}
    >
      <div className='md:flex items-center justify-between pt-[0.5rem] lg:pt-[1rem] px-4'>
        <div>
          <img className='lucrezia-logo sm:ml-[2rem]' src={Vector} alt='Vector' />
        </div>
        <div className='gap-4 d-none d-md-flex'>
          <a href='#gallery' className='navlink__item text-white'>
            Gallery
          </a>
          <a href='#features' className='navlink__item text-white'>
            Features
          </a>
        </div>
        <div className='d-none d-md-flex gap-3'>
          <a
            href='https://www.linkedin.com/company/sujimoto-construction-limited'
            className='hero__social-link'
            target='_blank'
            rel='noreferrer'
          >
            In.
          </a>
          <a
            href='https://www.facebook.com/motoconstructionng'
            className='hero__social-link'
            target='_blank'
            rel='noreferrer'
          >
            Fb.
          </a>
          <a
            href='https://www.youtube.com/channel/UC1Q3PEh495SxXY-npjegTkg'
            className='hero__social-link'
            target='_blank'
            rel='noreferrer'
          >
            Yt.
          </a>
        </div>
      </div>
      <HeroText slider={slider} />
    </div>
  );
};

export default Hero;
