import React from 'react';

const Circle = ({ width, height }) => (
  <svg
    className="md:block  absolute w-screen md:w-auto z-0"
    width={width}
    height={height}
    viewBox="0 0 707 707"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter
      id="purple-glow"
      x="-5000%"
      y="-5000%"
      width="10000%"
      height="10000%"
    >
      <feFlood result="flood" floodColor="#ff0000" floodOpacity="1"></feFlood>
      <feComposite
        in="flood"
        result="mask"
        in2="SourceGraphic"
        operator="in"
      ></feComposite>
      <feMorphology
        in="mask"
        result="dilated"
        operator="dilate"
        radius="1"
      ></feMorphology>
      <feGaussianBlur
        in="dilated"
        result="blurred"
        stdDeviation="20"
      ></feGaussianBlur>
      <feMerge>
        <feMergeNode in="blurred"></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>
    <circle
      style={{ filter: `url(#purple-glow)` }}
      cx="353.5"
      cy="353.5"
      r="300"
      stroke="#E40037"
      strokeWidth="37"
    />
  </svg>
);

export default Circle;