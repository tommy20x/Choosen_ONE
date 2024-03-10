import React, { useState } from "react";
import { motion } from "framer-motion";
import useProgressiveImg from "../hooks/useProgressiveImg";
import Circle from "./Circle";

const quotes = [
  {
    first: "WE ARE THE ONES WHO",
    second: "REFUSED TO GIVE UP.",
  },
  {
    first: "SECOND",
    second: "QUOTE.",
  },
  {
    first: "THIRD",
    second: "QUOTE.",
  },
];

const Home = () => {
  const [src, blur] = useProgressiveImg(
    "images/home/tiny.jpg",
    "images/home/choosen-ones-home.png"
  );
  const [currentQuote] = useState(quotes[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="justify-around absolute bottom-0 w-full flex">
        <div className="relative">
          {blur ? (
            <img
              src={src}
              style={{
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out",
                width: visualViewport.height - 100,
              }}
              alt="HOME"
            />
          ) : (
            <>
              <Circle
                width={
                  Math.min(visualViewport.height, visualViewport.width) - 120
                }
                height={
                  Math.min(visualViewport.height, visualViewport.width) - 120
                }
              ></Circle>
              <img
                className="z-10 relative"
                src={src}
                width={visualViewport.height - 100}
                alt=""
              />
            </>
          )}
        </div>
      </div>
      <div className="md:text-5xl rotate-90 top-1/6 md:pt-4 absolute left-full text-red-600 origin-top-left w-1/2 right-panel">
        <p className="mb-5">{currentQuote.first} </p>
        <p className="font-bold">&nbsp;&nbsp;&nbsp; {currentQuote.second}</p>
      </div>
      <svg
        className="hidden md:block fixed bottom-3 right-6"
        width="223"
        height="37"
        viewBox="0 0 223 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M212.817 15.1065C210.651 15.1065 210.351 17.2645 210.351 17.2645H214.952C214.952 17.2645 214.982 15.1065 212.817 15.1065Z"
          fill="white"
        />
        <path
          d="M202.379 17.2645H198.302V21.0111H202.176C202.761 20.9962 203.855 20.8313 203.855 19.1903C203.855 17.242 202.379 17.2645 202.379 17.2645Z"
          fill="white"
        />
        <path
          d="M206.215 0C196.946 0 189.43 7.51576 189.43 16.7849C189.43 26.0541 196.946 33.5699 206.215 33.5699C215.484 33.5699 223 26.0541 223 16.7849C223 7.51576 215.484 0 206.215 0ZM209.752 10.3108H215.529V12.0342H209.752V10.3108ZM206.83 19.3626C206.83 23.6338 202.379 23.4989 202.379 23.4989H195.095V9.48649H202.379C204.597 9.48649 206.343 10.7079 206.343 13.2181C206.343 15.7284 204.207 15.8858 204.207 15.8858C207.024 15.8858 206.83 19.3626 206.83 19.3626ZM217.635 19.1303H210.374C210.374 21.7305 212.839 21.5657 212.839 21.5657C215.17 21.5657 215.087 20.0595 215.087 20.0595H217.552C217.552 24.0609 212.757 23.7837 212.757 23.7837C207.009 23.7837 207.377 18.426 207.377 18.426C207.377 18.426 207.369 13.0458 212.757 13.0458C218.429 13.0533 217.635 19.1303 217.635 19.1303Z"
          fill="white"
        />
        <path
          d="M203.368 13.4354C203.368 11.9818 202.379 11.9818 202.379 11.9818H198.302V15.1065H202.124C202.783 15.1065 203.368 14.8891 203.368 13.4354Z"
          fill="white"
        />
        <path
          d="M140.918 34H147.459V20.9312H153.353L154 14.437H147.459V11.1579C147.459 10.2568 148.191 9.52632 149.094 9.52632H154V3H149.094C144.578 3 140.918 6.65242 140.918 11.1579V14.437H137.647L137 20.9312H140.918V34Z"
          fill="#FAFAFA"
        />
        <path
          d="M73.5341 3.43011L71.1362 9.42474V32.2043H78.3298V37H83.1255L87.9212 32.2043H93.9158L102.308 23.8118V3.43011H73.5341ZM98.7115 22.6129L93.9158 27.4086H86.7223L81.9266 32.2043V27.4086H75.9319V7.02689H98.7115V22.6129Z"
          fill="white"
        />
        <path
          d="M95.1148 11.7477H91.5181V21.414H95.1148V11.7477Z"
          fill="white"
        />
        <path
          d="M86.7223 11.7477H83.1255V21.414H86.7223V11.7477Z"
          fill="white"
        />
        <path
          d="M36 8.4362C34.6496 9.02704 33.2208 9.41629 31.7588 9.59167C33.2953 8.6857 34.4507 7.24642 35.0085 5.54376C33.5558 6.3991 31.9692 6.99925 30.3165 7.3185C29.6206 6.58408 28.7836 5.99983 27.8565 5.60127C26.9293 5.2027 25.9314 4.99814 24.9233 5.00001C20.8418 5.00001 17.5388 8.27761 17.5388 12.318C17.5359 12.88 17.5998 13.4403 17.7292 13.987C14.8025 13.8488 11.9366 13.097 9.31499 11.7797C6.69333 10.4624 4.37361 8.60851 2.50425 6.33673C1.84843 7.44999 1.5016 8.72019 1.5 10.0146C1.5 12.5521 2.81475 14.795 4.8 16.1091C3.6238 16.081 2.47169 15.7675 1.4415 15.1953V15.2859C1.4415 18.8354 3.9915 21.7882 7.3665 22.4604C6.73184 22.6307 6.07783 22.7171 5.421 22.7171C4.95493 22.718 4.48993 22.6724 4.03275 22.5812C4.971 25.4888 7.70175 27.6033 10.9365 27.6637C8.30803 29.7035 5.08096 30.806 1.7625 30.7978C1.17346 30.797 0.584974 30.7617 0 30.6921C3.37588 32.8627 7.30008 34.0109 11.3055 33.9999C24.9075 33.9999 32.3385 22.8455 32.3385 13.1713C32.3385 12.8542 32.3302 12.537 32.3153 12.2273C33.7576 11.1943 35.0054 9.91045 36 8.4362Z"
          fill="#FAFAFA"
        />
      </svg>
    </motion.div>
  );
};

export default Home;
