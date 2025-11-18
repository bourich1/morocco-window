import React from 'react'
import './hero.css'

function TextHero() {
    return (
        <h1 className='text-primary'>You can Leave <span>MOROCCO, </span> <br />But <span>MOROCCO</span>  Will Never Leave You</h1>
    );
}






function Hero() {
  return (
    <div className='hero'>
        <TextHero />
        
    </div>
  )
}

export default Hero;
