import React from "react";
import HeroImg from "../Assets/lucrezia-hero.png";
import Vector from "../Assets/lucrezia-vector.png";

const Hero = () => {
  return (
    <div>
      <img className='h-full w-full' src={HeroImg} alt='Hero' />
      <img
        className='absolute top-[3rem] left-[5rem] '
        src={Vector}
        alt='Vector'
      />
    </div>
  );
};

export default Hero;
