import React from "react";
import imgHero from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, odio
            molestias, sed ipsam est harum aliquam saepe ad aut delectus modi
            veniam pariatur deleniti libero ullam veritatis? Illo, voluptatum
            ratione! voluptatum ratione!
          </p>
        </div>
        <div className='img-container'>
          <img src={imgHero} alt='name' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
