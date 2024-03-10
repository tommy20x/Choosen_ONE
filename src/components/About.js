import { motion } from "framer-motion";
import "./About.css";
import Circle from "./Circle";
import useProgressiveImg from "../hooks/useProgressiveImg";

const HomeIcon = () => (
  <svg
    width="46"
    height="49"
    viewBox="0 0 46 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.4444 30.9474H15.3333V38.6842H20.4444V30.9474Z" fill="white" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.2647 0.685722C22.2441 -0.228574 23.7559 -0.228574 24.7353 0.685722L45.1798 19.7699C45.7027 20.258 46 20.9443 46 21.6631V25.7895C46 27.2138 44.8558 28.3684 43.4444 28.3684H40.8889V46.4211C40.8889 47.8453 39.7447 49 38.3333 49H7.66667C6.25529 49 5.11111 47.8453 5.11111 46.4211V28.3684H2.55556C1.87775 28.3684 1.22779 28.0967 0.748542 27.613C0.269219 27.1294 0 26.4735 0 25.7895V21.6631C0 20.9443 0.297295 20.258 0.820214 19.7699L21.2647 0.685722ZM5.11111 23.2105H10.2222V43.8421H25.5556V28.3684H30.6667V43.8421H35.7778V23.2105H40.8889V22.7907L23 6.09201L5.11111 22.7907V23.2105Z"
      fill="white"
    />
  </svg>
);

const LineIcon = () => (
  <svg
    width="46"
    height="49"
    viewBox="0 0 54 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M53.2092 9.31344L43.7592 0L39.9408 3.7632L44.7816 8.53405H35.1C29.4652 8.53405 24.5022 11.3694 21.6 15.6714C18.6977 11.3694 13.7348 8.53417 8.1 8.53417H0V13.8561H8.1C14.0646 13.8561 18.8999 18.6215 18.9 24.4999C18.9 30.3784 14.0647 35.1439 8.1 35.1439H0V40.4658H8.1C13.7348 40.4658 18.6977 37.6306 21.6 33.3286C24.5022 37.6306 29.4652 40.466 35.1 40.466H44.7816L39.9408 45.2368L43.7592 49L53.2092 39.6866C54.2636 38.6474 54.2636 36.9625 53.2092 35.9234L43.7592 26.6099L39.9408 30.3731L44.7816 35.144H35.1C29.1353 35.144 24.3 30.3785 24.3 24.5001C24.3 24.5 24.3 24.5001 24.3 24.5001C24.3 18.6216 29.1353 13.856 35.1 13.856L44.7816 13.856L39.9408 18.6269L43.7592 22.3901L53.2092 13.0766C53.7155 12.5776 54 11.9008 54 11.195C54 10.4893 53.7155 9.81247 53.2092 9.31344Z"
      fill="white"
    />
  </svg>
);

const PencilIcon = () => (
  <svg
    width="46"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.8022 44.8157C1.19279 42.2063 1.19279 37.9756 3.8022 35.3662L12.4411 26.7273L0.652352 14.9386C-0.217451 14.0688 -0.217451 12.6585 0.652352 11.7887L11.7887 0.652355C12.6585 -0.217449 14.0687 -0.217449 14.9385 0.652355L26.7273 12.4411L36.2887 2.87967C36.5741 2.59423 36.9318 2.39173 37.3234 2.29382L46.2325 0.0665481C46.9915 -0.123202 47.7944 0.0991893 48.3476 0.6524C48.9008 1.20561 49.1232 2.00851 48.9334 2.76751L46.7062 11.6766C46.6083 12.0682 46.4058 12.4259 46.1203 12.7113L36.5589 22.2728L48.3476 34.0614C49.2174 34.9312 49.2174 36.3415 48.3476 37.2113L37.2112 48.3476C36.3414 49.2174 34.9312 49.2174 34.0614 48.3476L22.2727 36.559L13.6338 45.1978C11.0244 47.8073 6.79375 47.8073 4.18434 45.1978L3.8022 44.8157ZM19.1229 33.4091L15.5909 29.8771L6.95203 38.516C6.08223 39.3858 6.08223 40.7961 6.95203 41.6659L7.33417 42.048C8.20398 42.9178 9.61421 42.9178 10.484 42.048L19.1229 33.4091ZM33.4091 19.1229L42.5343 9.99772L43.7116 5.28841L39.0023 6.46574L29.8771 15.5909L33.4091 19.1229ZM35.6363 43.6229L43.6228 35.6364L13.3636 5.37711L5.37711 13.3636L8.90918 16.8957L14.016 11.7889L17.1658 14.9387L12.059 20.0456L15.591 23.5775L18.4705 20.698L21.6204 23.8478L18.7408 26.7274L22.2728 30.2594L27.3796 25.1525L30.5295 28.3024L25.4226 33.4092L28.9546 36.9412L31.8342 34.0616L34.984 37.2114L32.1045 40.091L35.6363 43.6229Z"
      fill="white"
    />
  </svg>
);

function About() {
  const [src1, blur1] = useProgressiveImg(
    "images/about/tiny.jpg",
    "images/about/lady-1.png"
  );
  const [src2, blur2] = useProgressiveImg(
    "images/about/tiny.jpg",
    "images/about/man-1.png"
  );
  const [src3, blur3] = useProgressiveImg(
    "images/about/tiny.jpg",
    "images/about/dudde-1.png"
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-black about">
        {blur1 || blur2 || blur3 ? (
          <img
            src={src1}
            style={{
              filter: blur1 ? "blur(20px)" : "none",
              transition: blur1 ? "none" : "filter 0.3s ease-out",
              width: "100vw",
            }}
            alt="About"
          />
        ) : (
          <>
            <div className="flex justify-center">
              <Circle width={visualViewport.width * 0.4 - 50}></Circle>
            </div>

            <div className="flex justify-center pt-40">
              <div
                style={{ position: "relative", display: "flex", width: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    zIndex: "1",
                    width: "35%",
                    transform: "translateX(-5%)",
                  }}
                >
                  <img
                    className="-ml-4 z-10"
                    src={src1}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    zIndex: "2",
                    width: "25%",
                    transform: "translateX(5%)",
                  }}
                >
                  <img
                    className="-ml-4 z-10"
                    src={src2}
                    alt=""
                    style={{
                      width: "95%",
                      transform: "scale(2) translateY(-25%) translateX(6%)",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    zIndex: "1",
                    width: "40%",
                    transform: "translateX(0%)",
                  }}
                >
                  <img
                    className="z-10"
                    src={src3}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div className="mt-24 px-32 z-20">
          <article className="w-full px-20">
            <div className="pb-24">
              <h1 className="about-title pb-8">WHO ARE WE?</h1>
              <p className="pb-6">
                Innovative, progressive and inspirational, The Chosen Ones look
                to redifine the approach of real world utility by drawing on
                years of collective knowledge and experience while striving to
                build a culture driven identity.
              </p>
              <p className="pb-6">
                Our purpose, vision, and attitude guide the way we run our
                company, how we work with our partners, and how we engage with
                our community. They define who we are.
              </p>
            </div>
            <div className="pb-24">
              <h1 className="about-title pb-8">OUR VISION</h1>
              <p className="pb-6">
                The Chosen One’s vision is to inspire, educate and entertain you
                in ways you never thought possible and knew you needed. We want
                to build a community that encourages and supports one another
                through all walks of life, and a network that helps them get
                there.
              </p>
              <p className="pb-6">
                Using our industry connections and business experience, we will
                partner up with some of the biggest names across multiple
                industries to give back to our community. The NFT space is
                contiously evolving but one thing that will always remain
                constant in our vision and beliefs, is educating others in the
                hopes of providing knowledge and success into their lives.
              </p>
            </div>
            <div className="pb-24">
              <h1 className="about-title pb-8">OUR MISSION</h1>
              <p className="pb-6">
                Using our industry connections and business experience, we will
                partner up with some of the biggest names across multiple
                industries to give back to our community. The NFT space is
                contiously evolving but one thing that will always remain
                constant in our vision and beliefs, is educating others in the
                hopes of providing knowledge and success into their lives.
              </p>
            </div>
            <div className="pb-24">
              <h1 className="about-title pb-8">OUR STRATEGY</h1>
              <ol className="list-decimal ml-4">
                <li>
                  We will continue to grow The Chosen One’s brand globally
                  through a variety of partnerships, collaborations and by
                  bringing value to our community and the NFT space as a whole.
                </li>
                <li>
                  We will continue to invest in inspiring and educating as many
                  people as we can. Through NFT’s, we have the power and
                  opportunities to change lives.
                </li>
                <li>
                  Our strategy is all about changing at pace, inspiring and
                  innovating for the future with a passion and vision for our
                  community and industry.
                </li>
              </ol>
            </div>
            <div className="pb-24">
              <h1 className="about-title pb-8">OUR COMMUNITY DELIVERABLES</h1>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 md:gap-x-36 mt-8">
                <div>
                  <HomeIcon></HomeIcon>
                  <div className="mt-4 mb-8">Real Estate</div>
                  <div>
                    In a constant effort to add more utility for the $ONE token,
                    We will create tradable lands on maps you can buy/sell/trade
                    only with $ONE tokens.
                  </div>
                </div>
                <div>
                  <LineIcon></LineIcon>
                  <div className="mt-4 mb-8">Cascade - Simplify your taxes</div>
                  <div>
                    The Tax offices have put Crypto Currencies on notice, and it
                    can be daunting to new and experienced traders trying to
                    collect years of past transactions and your capital gains
                    tax. Cascade can automatically pull 600+ Exchanges and
                    Wallets to give your comprehensive tax report
                  </div>
                </div>
                <div>
                  <PencilIcon></PencilIcon>
                  <div className="mt-4 mb-8">
                    Create to Earn Accelerator Program
                  </div>
                  <div>
                    In a constant effort to add more utility for the $ONE token,
                    We will create tradable lands on maps you can buy/sell/trade
                    only with $ONE tokens.
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
