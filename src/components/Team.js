import React from "react";
import { motion } from "framer-motion";
import useProgressiveImg from "../hooks/useProgressiveImg";

const utilityCards = [
  {
    imgSrc: "images/team/mem3.jpg",
    title: "MICHAEL PIERI",
    subtitle: "FOUNDER & CEO",
    detailTable: [
      { key: "EXPERIENCE", value: "REAL ESTATE, BUSINESS OWNER" },
      { key: "SOCIALS", value: "TWITTER, LINKEDIN, YOUTUBE, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },

  {
    imgSrc: "images/team/mem2.jpg",
    title: "ISAAC WIESENTHAL",
    subtitle: "CHIEF MARKETING OFFICER",
    detailTable: [
      { key: "EXPERIENCE", value: "COMPETETIVE BOXER, MARKETING GENIUS" },
      { key: "SOCIALS", value: "LINKEDIN, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
  {
    imgSrc: "images/team/mem1.jpg",
    title: "MICHAEL PIERI",
    subtitle: "HEAD OF MARKETING",
    detailTable: [
      { key: "EXPERIENCE", value: "REAL ESTATE AGENT, BUSINESS OWNER" },
      { key: "SOCIALS", value: "TWITTER, LINKEDIN, YOUTUBE, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
  {
    imgSrc: "images/team/mem4.jpg",
    title: "MANON",
    subtitle: "LEAD ARTIST",
    detailTable: [
      { key: "EXPERIENCE", value: "ARTIST" },
      { key: "SOCIALS", value: "LINKEDIN, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
  {
    imgSrc: "images/team/mem5.jpg",
    title: "ANIS AMRANE",
    subtitle: "LEAD ARTIST",
    detailTable: [
      { key: "EXPERIENCE", value: "ARTIST" },
      { key: "SOCIALS", value: "LINKEDIN, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
  {
    imgSrc: "images/team/mem5.jpg",
    title: "ANIS AMRANE",
    subtitle: "LEAD ARTIST",
    detailTable: [
      { key: "EXPERIENCE", value: "ARTIST" },
      { key: "SOCIALS", value: "LINKEDIN, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
  {
    imgSrc: "images/team/mem3.jpg",
    title: "MICHAEL PIERI",
    subtitle: "FOUNDER & CEO",
    detailTable: [
      { key: "EXPERIENCE", value: "REAL ESTATE, BUSINESS OWNER" },
      { key: "SOCIALS", value: "TWITTER, LINKEDIN, YOUTUBE, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
  {
    imgSrc: "images/team/mem3.jpg",
    title: "MICHAEL PIERI",
    subtitle: "FOUNDER & CEO",
    detailTable: [
      { key: "EXPERIENCE", value: "REAL ESTATE, BUSINESS OWNER" },
      { key: "SOCIALS", value: "TWITTER, LINKEDIN, YOUTUBE, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
  {
    imgSrc: "images/team/mem3.jpg",
    title: "MICHAEL PIERI",
    subtitle: "FOUNDER & CEO",
    detailTable: [
      { key: "EXPERIENCE", value: "REAL ESTATE, BUSINESS OWNER" },
      { key: "SOCIALS", value: "TWITTER, LINKEDIN, YOUTUBE, INSTAGRAM" },
      { key: "FAVOURITE QUOTE", value: "ETHERIUM" },
    ],
  },
];

const TeamCard = ({ card }) => {
  const [src, blur] = useProgressiveImg("images/team/tiny.jpg", card.imgSrc);

  return (
    <div className="relative flex-col flex w-full">
      <div className="border-stone-30 border-2 relative">
        <div style={{ minHeight: "658px" }}>
          <img
            src={src}
            className="w-full"
            style={{
              filter: blur ? "blur(20px)" : "none",
              transition: blur ? "none" : "filter 0.3s ease-out",
            }}
            alt="Team"
          />
        </div>
        <div className="flex pb-4 absolute bottom-0 pl-2 backdrop-blur-xl w-full">
          <div className="flex flex-col">
            <h1 className="w-5/6 pt-2 font-semibold">{card.title}</h1>
            <h2 className="pb-2">{card.subtitle}</h2>
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
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="md:flex md:flex-col w-5/6 mx-auto md:mt-10 pb-24">
        <div className="flex flex-col">
          <h1 className="title">TEAM</h1>
          <p className="text pt-6 pb-6">A big old spiel about our utility.</p>
        </div>
        <div class="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-24 md:gap-20 mt-8">
          {utilityCards.map((card) => (
            <TeamCard card={card}></TeamCard>
          ))}
        </div>

        {/* <div className="flex flex-wrap" style={{ margin: "-30px" }}>
          {utilityCards.map((card) => (
            <div
              className="relative flex-col flex w-[400px]"
              style={{
                width: "33.33%",
                flexBasis: "33.33%",
                padding: "30px",
                minHeight: "200px",
              }}
            >
              <div className="border-stone-30 border-2 relative">
                <img src={card.imgSrc} alt="" width={500} className="w-full" />
                <div className="flex w-full  pb-4 absolute bottom-0 pl-2 backdrop-blur-xl">
                  <div className="flex flex-col">
                    <h1 className="w-5/6 pt-2 font-semibold">{card.title}</h1>
                    <h2 className="pb-2">{card.subtitle}</h2>
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
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};

export default Team;
