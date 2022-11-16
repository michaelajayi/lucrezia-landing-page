import React from "react";
import HeroImg from "../../assets/img/lucrezia-hero.png";
import Vector from "../../assets/img/lucrezia-vector.png";

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
