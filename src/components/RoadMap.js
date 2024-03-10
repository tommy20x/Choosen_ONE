import React, { useState } from "react";
import "./RoadMap.css";
import { motion } from "framer-motion";

const roadMapCards1 = [
  {
    cardNumber: "01",
    cardTitle: "Public Announcement",
    cardSubtitle: "The Chosen Ones go live on all socials",
    cardImage: "images/roadmap/card-1.png",
    phaseString: "PHASE 1",
    title: "Digital currency",
    subtitle: "From Discord to the MetaVerse",
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
    imgsrc: "images/roadmap/roamap-1.png",
  },
  {
    cardNumber: "02",
    cardTitle: "Launching the Collection",
    cardSubtitle: "The Launch 8,888 Chosen Ones Rewards for community",
    cardImage: "images/roadmap/card-2.png",
    phaseString: "PHASE 2",
    title: "Launchine the collection",
    subtitle: "8,888 Chosen Ones are Released into the MetaVerse",
    paras: [
      `The day of mint is here for our Whitelist holders and we cannot wait to see the amazing collections revealed to the world. Months and months of endless refinement, sleepless nights, blood, sweat and tears all coming to life on this very day and we can’t thank our amazing community enough.`,
      `Our Whitelist mint will allow up to 3 NFT’s to be purchased per wallet, with the public mint following 42 hours later.`,
    ],
    imgsrc: "images/roadmap/roamap-1.png",
  },
  {
    cardNumber: "03",
    cardTitle: "Digital ATM Card",
    cardSubtitle: "Stake, Earn, Get Rewarded Marketing + Collaboration",
    cardImage: "images/roadmap/card-3.png",
    phaseString: "PHASE 3",
    title: "Digital ATM Card",
    subtitle: "Stake, Earn, Get Rewarded ",
    paras: [
      `This is something we are quite excited about and gives our holders and stakers the opportunity to earn passive income monthly on cashback rewards. The more you spend, the better your monthly rewards sent right back into your nomiated wallet.`,
      `Not only are we rewarding you as mentioned above, but depending on the numbers of NFT’s you have from our collection and how many are staked will increase your % of earnings and rewards, how awesome is that?`,
      `For our most loyal and dedicated holders, after a certain period of time we will send out a custom engraved card with your choice of wording and NFT, lasered into the metal card in a variety of colours which we will later release on the website and socials.`,
    ],
    imgsrc: "images/roadmap/roamap-1.png",
  },
  {
    cardNumber: "04",
    cardTitle: "End of Year Event + Create to Earn Accelerator Program",
    cardSubtitle: "The True Value of Chosen Ones",
    cardImage: "images/roadmap/card-4.png",
    phaseString: "PHASE 4",
    title: "End of Year Event + Create to Earn Accelerator Program",
    subtitle: "The True Value of Chosen Ones ",
    paras: [
      `This is where the true value of The Chosen Ones lays. Ever since a young age Michael Pieri (Founder & CEO) has always been about empowering others, supporting those in need, and building others up in the areas he had experience in to provide more confidence to the individual. The Chosen Ones is a way Michael can continue to do this on a much larger scale, in others words globally.`,
      `To kick of stage 4 of our roadmap we will be hosting a 2 day event with our partners over at Club 14. The itinerary is yet to be released but expect world class speakers, entreprneurs, real estate gurus, investment and crypto experts, musicians, food, drinks, and much more. Everything will be provided by Nine Lives and Club 14 and will be the biggest event of the year, so don’t miss out.`,
    ],
    imgsrc: "images/roadmap/roamap-1.png",
  },
];

const roadMapCards2 = [
  {
    cardNumber: "05",
    cardTitle: "Public Announcement",
    cardSubtitle: "The Chosen Ones go live on all socials",
    cardImage: "images/roadmap/card-5.png",
    phaseString: "PHASE 5",
    title: "Accelerator Part 2",
    subtitle: "Launch of DAO Accelerator for Holders ",
    paras: [
      `Launch of the DAO Accelerator program where you as Token holders decide which projects we will bring on to help educate and build, in turn providing you with passive income. For the holders who have multiple pieces from our collection, are stakers, and also hold a digital card, you will have more power and priority in voting rights than others.`,
      `The DAO governance structure we will set in place will help The Chosen Ones gain valuable information on which projects have the most potential according to the community.`,
      `To be able to participate in the decision-making process, one needs to vote on a project by using tokens that can be earned via staking or holding our Digital ATM Card. Holders are only able to vote for one project per wallet. The projects that receive the most votes are then selected for the accelerator program introduction call. We will then decide whether or not all the required materials and plans are set in place for the utmost success of the project, therefore, resulting in greater yield for our holders.`,
    ],
    imgsrc: "images/roadmap/roamap-1.png",
  },
  {
    cardNumber: "06",
    cardTitle: "Public Announcement",
    cardSubtitle: "The Chosen Ones go live on all socials",
    cardImage: "images/roadmap/card-2.png",
    phaseString: "PHASE 6",
    title: "Cascade",
    subtitle: "The True Value of Chosen Ones ",
    paras: [
      `This is where the true value of The Chosen Ones lays. Ever since a young age Michael Pieri (Founder & CEO) has always been about empowering others, supporting those in need, and building others up in the areas he had experience in to provide more confidence to the individual. The Chosen Ones is a way Michael can continue to do this on a much larger scale, in others words globally.`,
      `To kick of stage 4 of our roadmap we will be hosting a 2 day event with our partners over at Club 14. The itinerary is yet to be released but expect world class speakers, entreprneurs, real estate gurus, investment and crypto experts, musicians, food, drinks, and much more. Everything will be provided by Nine Lives and Club 14 and will be the biggest event of the year, so don’t miss out.`,
    ],
    imgsrc: "images/roadmap/roamap-1.png",
  },
  {
    cardNumber: "07",
    cardTitle: "Public Announcement",
    cardSubtitle: "The Chosen Ones go live on all socials",
    cardImage: "images/roadmap/card-7.png",
    phaseString: "PHASE 7",
    title: "Digital ATM Card",
    subtitle: "Stake, Earn, Get Rewarded ",
    paras: [
      `This is something we are quite excited about and gives our holders and stakers the opportunity to earn passive income monthly on cashback rewards. The more you spend, the better your monthly rewards sent right back into your nomiated wallet.`,
      `Not only are we rewarding you as mentioned above, but depending on the numbers of NFT’s you have from our collection and how many are staked will increase your % of earnings and rewards, how awesome is that?`,
      `For our most loyal and dedicated holders, after a certain period of time we will send out a custom engraved card with your choice of wording and NFT, lasered into the metal card in a variety of colours which we will later release on the website and socials.`,
    ],
    imgsrc: "images/roadmap/roamap-1.png",
  },
  {
    cardNumber: "08",
    cardTitle: "Public Announcement",
    cardSubtitle: "The Chosen Ones go live on all socials",
    cardImage: "images/roadmap/card-4.png",
    phaseString: "PHASE 8",
    title: "Digital ATM Card",
    subtitle: "Stake, Earn, Get Rewarded ",
    paras: [
      `This is something we are quite excited about and gives our holders and stakers the opportunity to earn passive income monthly on cashback rewards. The more you spend, the better your monthly rewards sent right back into your nomiated wallet.`,
      `Not only are we rewarding you as mentioned above, but depending on the numbers of NFT’s you have from our collection and how many are staked will increase your % of earnings and rewards, how awesome is that?`,
      `For our most loyal and dedicated holders, after a certain period of time we will send out a custom engraved card with your choice of wording and NFT, lasered into the metal card in a variety of colours which we will later release on the website and socials.`,
    ],
    imgsrc: "images/roadmap/roamap-1.png",
  },
];

const RoadMapDetail = ({ card, onClose }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-black">
      <div className="relative">
        <div className="absolute w-full roadmap-card-bg"></div>
        <div className="relative roadmap-item-container">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-700">
            <div className="relative flex-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="color-white p-12">
                  <h1 className="roadmap-card-number">{card.cardNumber}</h1>
                  <article className="mt-8">
                    <h2 className="roadmap-item-title mb-4">
                      {card.phaseString}
                    </h2>
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
                    src={card.cardImage}
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

const RoadMapScene = ({ cards }) => {
  const [card, setCard] = useState(null);
  const openCardDetail = (card) => {
    console.log("openCardDetail", card);
    setCard(card);
  };

  return (
    <div className="relative">
      <div className="absolute w-full roadmap-card-bg"></div>
      <div className="sticky">
        <div className="grid grid-flow-col grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-4 py-12 px-72">
          {cards.map((card, index) => (
            <div
              className="roadmap-card border border-black grid grid-cols-2 cursor-pointer"
              onClick={() => openCardDetail(card)}
            >
              <div className="p-4">
                <h1 className="roadmap-card-number">{card.cardNumber}</h1>
                <article className="mt-8">
                  <h2 className="roadmap-card-title">{card.cardTitle}</h2>
                  <h2 className="roadmap-card-subtitle">{card.cardSubtitle}</h2>
                </article>
              </div>
              <div className="flex justify-end">
                <img
                  src={card.cardImage}
                  alt="Roadmap"
                  className="min-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {!!card && (
        <RoadMapDetail card={card} onClose={() => setCard(null)}></RoadMapDetail>
      )}
    </div>
  );
};

function RoadMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="md:flex md:flex-col w-5/6 mx-auto md:mt-10 pb-24">
        <div>
          <h1 className="title">ROADMAP</h1>
        </div>
      </div>
      <div className="">
        {/* {roadMapCards1.map((card, index) => (
            <div className={`sub_items`}>
              <div className={`sub_item `}>
                <div className="sub_half">
                  <h1 className="number">{card.cardNumber}</h1>
                  <article className="sub_article">
                    <h2 className="font-thin">{card.phaseString}</h2>
                    <h2 className="font_bold">{card.title}</h2>
                    <h3 className="italic font-thin">{card.subtitle}</h3>
                    {card.paras.map((para) => (
                      <p className="pt-4">{para}</p>
                    ))}
                  </article>
                </div>
                <div className="sub_half">
                  <img src={card.imgsrc} alt="" className="sub_half_image" />
                </div>
              </div>
            </div>
          ))} */}
        <RoadMapScene cards={roadMapCards1}></RoadMapScene>
        <RoadMapScene cards={roadMapCards2}></RoadMapScene>
      </div>
    </motion.div>
  );
}

export default RoadMap;
