import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './style.module.css';
const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: 'afterChildren',
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = ({ setTransition }) => {
  return (
    <>
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          className={`${styles['background']} relative z-50 w-full `}
          initial='initial'
          animate='animate'
          onAnimationStart={() =>
            document.body.classList.add('overflow-hidden')
          }
          onAnimationComplete={() => {
            setTransition(false)
            // document.body.classList.remove('overflow-hidden');
            // document.body.querySelector('.absolute').remove();
          }}
          variants={blackBox}
        />
        <motion.svg variants={textContainer} className='absolute z-50 flex'>
          <pattern
            id='pattern'
            patternUnits='userSpaceOnUse'
            width={700}
            height={800}
            className='text-white'
          >
            <motion.rect
              variants={text}
              className='w-full h-full text-white fill-current'
            />
          </pattern>
          <text
            className='text-4xl font-bold'
            text-anchor='middle'
            x='50%'
            y='50%'
            style={{ fill: 'url(#pattern)' }}
          >
            yvyporã
          </text>
        </motion.svg>
      </div>
    </>
  );
};

export default InitialTransition;
