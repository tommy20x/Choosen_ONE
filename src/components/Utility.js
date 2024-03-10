import React, { useState } from "react";
import "./Utility.css";
import { motion } from "framer-motion";
import useProgressiveImg from "../hooks/useProgressiveImg";

const utilityCards = [
  {
    number: "01",
    imgSrc: "images/utility/NFT1.jpg", //https://choosen-ones-dev.netlify.app/
    title: "WORLD CLASS ART WITH FULL OWNERSHIP",
    subtitle: "From Discord to the MetaVerse",
    detailTable: [
      { key: "ARTWORK", value: "FULL OWNERSHIP" },
      { key: "TOKEN STANDARD", value: "ERC" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
    paras: [
      `From day one, we will be implementing a digital currency developed within Discord, that will translate to the metaverse and all marketplace items added from The Chosen Ones.`,
      `This allows our community, and our active, avid members who
        believe in the project, to earn this digital currency that
        they can then go on to use for specific giveaways, raffles,
        and metaverse items.`,
      `Those who get in early will receive an often overused OG
        member role, but we will ensure this has true meaning by
        giving them access to our future master classes, events, and
        merchandise should they hold onto at least one of the NFT’s
        they mint.`,
    ],
  },
  {
    number: "02",
    imgSrc: "images/utility/NFT2.jpg",
    title: "DIGITAL ATM CARD EXCLUSIVE ACCESS TO EVENTS",
    subtitle: "From Discord to the MetaVerse",
    detailTable: [
      { key: "ARTWORK", value: "FULL OWNERSHIP" },
      { key: "TOKEN STANDARD", value: "ERC" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
    paras: [
      `From day one, we will be implementing a digital currency developed within Discord, that will translate to the metaverse and all marketplace items added from The Chosen Ones.`,
      `This allows our community, and our active, avid members who
        believe in the project, to earn this digital currency that
        they can then go on to use for specific giveaways, raffles,
        and metaverse items.`,
      `Those who get in early will receive an often overused OG
        member role, but we will ensure this has true meaning by
        giving them access to our future master classes, events, and
        merchandise should they hold onto at least one of the NFT’s
        they mint.`,
    ],
  },
  {
    number: "03",
    imgSrc: "images/utility/NFT3.jpg",
    title: "MONTHLY REWARDS AND GIVEAWAYS",
    subtitle: "From Discord to the MetaVerse",
    detailTable: [
      { key: "DISCORD", value: "GIVEAWAYS" },
      { key: "TWITTER", value: "COMPETITIONS" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
    paras: [
      `From day one, we will be implementing a digital currency developed within Discord, that will translate to the metaverse and all marketplace items added from The Chosen Ones.`,
      `This allows our community, and our active, avid members who
        believe in the project, to earn this digital currency that
        they can then go on to use for specific giveaways, raffles,
        and metaverse items.`,
      `Those who get in early will receive an often overused OG
        member role, but we will ensure this has true meaning by
        giving them access to our future master classes, events, and
        merchandise should they hold onto at least one of the NFT’s
        they mint.`,
    ],
  },
  {
    number: "04",
    imgSrc: "images/utility/NFT4.jpg",
    title: "EVENTS, WORKSHOPS & MASTERCLASS",
    subtitle: "From Discord to the MetaVerse",
    detailTable: [
      { key: "EVENTS", value: "UNRIVALLED" },
      { key: "TOKEN STANDARD", value: "ERC111" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
    paras: [
      `From day one, we will be implementing a digital currency developed within Discord, that will translate to the metaverse and all marketplace items added from The Chosen Ones.`,
      `This allows our community, and our active, avid members who
        believe in the project, to earn this digital currency that
        they can then go on to use for specific giveaways, raffles,
        and metaverse items.`,
      `Those who get in early will receive an often overused OG
        member role, but we will ensure this has true meaning by
        giving them access to our future master classes, events, and
        merchandise should they hold onto at least one of the NFT’s
        they mint.`,
    ],
  },
  {
    number: "05",
    imgSrc: "images/utility/NFT5.jpg",
    title: "AI DRIVEN AUTOMATION TOOL CREATE TO EARN ACCELERATOR",
    subtitle: "From Discord to the MetaVerse",
    detailTable: [
      { key: "ARTWORK", value: "FULL OWNERSHIP" },
      { key: "TOKEN STANDARD", value: "ERC" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
    paras: [
      `From day one, we will be implementing a digital currency developed within Discord, that will translate to the metaverse and all marketplace items added from The Chosen Ones.`,
      `This allows our community, and our active, avid members who
        believe in the project, to earn this digital currency that
        they can then go on to use for specific giveaways, raffles,
        and metaverse items.`,
      `Those who get in early will receive an often overused OG
        member role, but we will ensure this has true meaning by
        giving them access to our future master classes, events, and
        merchandise should they hold onto at least one of the NFT’s
        they mint.`,
    ],
  },
  {
    number: "06",
    imgSrc: "images/utility/NFT6.jpg",
    title: "CASCADE TAX PLATFORM",
    subtitle: "From Discord to the MetaVerse",
    detailTable: [
      { key: "EVENTS", value: "UNRIVALLED" },
      { key: "TOKEN STANDARD", value: "ERC111" },
      { key: "BLOCKCHAIN", value: "ETH & SOL" },
    ],
    paras: [
      `From day one, we will be implementing a digital currency developed within Discord, that will translate to the metaverse and all marketplace items added from The Chosen Ones.`,
      `This allows our community, and our active, avid members who
        believe in the project, to earn this digital currency that
        they can then go on to use for specific giveaways, raffles,
        and metaverse items.`,
      `Those who get in early will receive an often overused OG
        member role, but we will ensure this has true meaning by
        giving them access to our future master classes, events, and
        merchandise should they hold onto at least one of the NFT’s
        they mint.`,
    ],
  },
];


const UtilityDetail = ({ card, onClose }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-black">
      <div className="relative">
        <div className="absolute w-full utility-card-bg"></div>
        <div className="relative roadmap-item-container">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-700">
            <div className="relative flex-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 card-detail-bg">
                <div className="color-white p-12">
                  <h1 className="roadmap-card-number">{card.number}</h1>
                  <article className="mt-8">
                    <h2 className="roadmap-item-title">{card.title}</h2>
                    <h3 className="roadmap-card-subtitle">{card.subtitle}</h3>
                    {card.paras.map((para) => (
                      <p className="pt-4">{para}</p>
                    ))}
                  </article>
                </div>
                <div className="relative">
                  <div className="absolute top-1 right-1">
                    <button
                      type="button" 
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => onClose()}
                    >
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <img
                    src={card.imgSrc}
                    alt=""
                    className="roadmap-item-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UtilityCard = ({ card }) => {
  const [showDetail, setShowDetail] = useState(false);

  const openCardDetail = () => {
    console.log('openCardDetail')
    setShowDetail(true);
  };

  const [src, blur] = useProgressiveImg(
    "images/utility/tiny.jpg",
    card.imgSrc
  );

  return (
    <div className="relative flex-col flex w-full">
      <div className="border-stone-30 border-2 relative cursor-pointer" onClick={() => openCardDetail(card)}>
        <div style={{ minHeight: "658px" }}>
          <img
            src={src}
            className="w-full"
            style={{
              filter: blur ? "blur(20px)" : "none",
              transition: blur ? "none" : "filter 0.3s ease-out",
            }}
            alt="Utility"
          />
        </div>
        <div className="flex pb-4 absolute bottom-0 pl-2 backdrop-blur-xl w-full">
          <div className="flex flex-col">
            <h1 className="w-5/6 py-2 font-semibold">{card.title}</h1>
            <table className="text-xs">
              {card.detailTable.map((row) => (
                <tr>
                  <td className="pr-3 font-extralight opacity-100">
                    {row.key}
                  </td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </table>
          </div>
          <h1 className="text-3xl md:text-7xl font-bold ml-auto mr-1">
            #{card.number}
          </h1>
        </div>
      </div>
      {!!showDetail && (
        <UtilityDetail card={card} onClose={() => setShowDetail(false)}></UtilityDetail>
      )}
    </div>
  );
};

const Utility = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-5/6 md:flex md:flex-col mx-auto md:mt-10"
        style={{ paddingBottom: "100px" }}
      >
        <div className="flex flex-col">
          <h1 className="title">UTILITY</h1>
          <p className="text pt-6 pb-6">
            We took the time to curate a specific set of utility items to
            benefit our community in a multifaceted way.
          </p>
        </div>
        <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-24 md:gap-20 mt-8">
          {utilityCards.map((card) => (
            <UtilityCard card={card}></UtilityCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Utility;
