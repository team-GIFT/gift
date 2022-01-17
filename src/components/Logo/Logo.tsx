import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { LogoProps } from './Logo.types';

const transition = {
  duration: 2,
  ease: 'easeInOut',
};

export function Logo({ height = '100%', width = '100%' }: LogoProps) {
  return (
    <MotionConfig transition={transition}>
      <motion.svg
        height={height}
        width={width}
        viewBox="0 0 689 180"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
      >
        <g id="LogoImage">
          <motion.path
            d="M20 16H0V164H20V16Z"
            fill="#00FF99"
            initial={{ scaleY: 0, y: '-50%' }}
            animate={{ scaleY: 1, y: 0 }}
          />
          <motion.path
            d="M140 56H120V164H140V56Z"
            fill="#9933FF"
            initial={{ scaleY: 0, y: '50%' }}
            animate={{ scaleY: 1, y: 0 }}
          />
          <motion.path
            d="M140 160H0V180H140V160Z"
            fill="#00CCFF"
            initial={{ scaleX: 0, x: '-10%' }}
            animate={{ scaleX: 1, x: 0 }}
          />
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120 40V20H100V0H80V20.13V20.16V40.1V40.13V60H100.42H120.38H140V40H120Z"
            fill="#FF6666"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120 80.16V60H140L120 80.16Z"
            fill="#0F0F0F"
          />
          <motion.path
            d="M80 0H0V20H80V0Z"
            fill="#FFF35C"
            initial={{ scaleX: 0, x: '5%' }}
            animate={{ scaleX: 1, x: 0 }}
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80 0V20H60.37L80 0Z"
            fill="#0F0F0F"
          />
        </g>
        <g id="LogoText">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M260.791 74.7338H329.402V93.324C329.402 106.538 329.321 119.784 329.402 132.982C329.459 135.993 328.514 138.938 326.714 141.354C321.649 148.489 314.624 154.001 306.489 157.224C282.036 166.94 257.228 167.571 232.679 157.677C215.287 150.746 203.482 137.791 197.28 120.205C189.701 98.684 190.057 77.1467 199.806 56.2408C208.777 37.0515 223.983 24.9226 244.241 19.3034C258.357 15.4917 273.16 14.9709 287.51 17.7813C300.465 20.1293 314.326 28.1775 324.221 38.8328C320.512 42.5411 316.723 46.2494 313.047 50.0711C309.371 53.8928 305.711 57.8278 301.922 61.8762L298.181 59.0747C292.583 54.7776 286.094 51.7869 279.19 50.3216C272.286 48.8562 265.142 48.9532 258.281 50.6055C252.787 51.62 247.674 54.1109 243.489 57.811C239.303 61.5111 236.205 66.2809 234.525 71.6085C229.936 83.8136 230.127 97.3014 235.059 109.372C240.387 122.327 250.313 129.355 264.207 130.601C272.383 131.544 280.666 130.545 288.384 127.687C290.991 126.65 293.485 125.306 295.979 124.14V105.761H260.952C260.499 95.1862 260.758 85.1139 260.791 74.7338Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M388.217 160.932H348.705V20.3397H388.217C388.217 67.1552 388.217 113.728 388.217 160.932"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M530.376 54.8967V20.3397H412.488V160.932H452C452 142.277 452 123.687 452 105.242H530.36V74.1346H452.016V54.8967H530.376Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M689 20.3397H551.614V54.8967H600.535V160.932H640.063C640.063 125.306 640.063 90.1338 640.063 54.8967H688.984L689 20.3397Z"
            fill="white"
          />
        </g>
      </motion.svg>
    </MotionConfig>
  );
}
