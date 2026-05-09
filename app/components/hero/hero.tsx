import React from 'react'
import './hero.css'
import Antigravity from '@/components/Antigravity/Antigravity';
import BlurText from '@/components/BlurText/BlurText';

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-bg'>
          <Antigravity
            count={300}
            magnetRadius={15}
            ringRadius={12}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5D4037"
            opacity={0.7}
            autoAnimate={true}
            particleVariance={1}
          />
        </div>
        <div className='hero-content'>
          <div className='text-primary'>
            <div className='flex flex-wrap justify-center items-center'>
              <BlurText
                text="YOU CAN LEAVE MOROCCO,"
                delay={100}
                animateBy="words"
                direction="top"
              />
            </div>
            
            <div className='w-16 h-[1px] bg-black/10 my-1'></div>

            <div className='flex justify-center items-center'>
              <BlurText
                text="BUT"
                delay={100}
                initialDelay={400}
                animateBy="words"
                direction="top"
                className="text-accent-italic"
              />
            </div>

            <div className='w-20 h-[1px] bg-black/10 my-1'></div>

            <div className='flex justify-center items-center whitespace-nowrap'>
              <BlurText
                text="MOROCCO WILL NEVER LEAVE YOU"
                delay={100}
                initialDelay={700}
                animateBy="words"
                direction="bottom"
                className="text-highlight"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;
