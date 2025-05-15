import { cn } from "~/lib/utils";
import { Divider } from "../layout/divider";

export function About() {
  const transactionItems = [
    {
      img: "/images/palm-coins.png",
      alt: "Palm Coins",
      text: "Buyers use $PALM to purchase Palm Oil",
      desktopIndex: 0,
      mobileOrder: 1,
      mobileArrow: "down",
    },
    {
      img: "/images/oils.png",
      alt: "Palm Oil Bottles",
      text: "Proceeds are used to produce more Palm Oil",
      desktopIndex: 1,
      mobileOrder: 4,
      mobileArrow: "down",
    },
    {
      img: "/images/hands.png",
      alt: "Hands Exchanging",
      text: "Seller of Palm Oil receives $PALM",
      desktopIndex: 2,
      mobileOrder: 2,
      mobileArrow: "down",
    },
    {
      img: "/images/profit.png",
      alt: "Fiat Currency",
      text: "$PALM is exchanged into FIAT currency",
      desktopIndex: 3,
      mobileOrder: 3,
      mobileArrow: "down",
    },
    {
      img: "/images/repurchased.png",
      alt: "Repurchased PALM",
      text: "The buyer received and repurchased the product using $PALM",
      mobileOrder: 5,
      mobileArrow: null,
      mobileOnly: true,
      note: "(this will go in a cycle)",
    },
  ];

  function DesktopArrows() {
    return (
      <>
        <div className="hidden md:block absolute left-1/2 top-[15%] -translate-x-1/2">
          <img src="/icons/arrow-left-line.svg" alt="Arrow Left" className="w-16 h-16" />
        </div>
        <div className="hidden md:block absolute left-[20%] top-1/2 -translate-y-1/2">
          <img src="/icons/arrow-down-line.svg" alt="Arrow Down" className="w-16 h-16" />
        </div>
        <div className="hidden md:block absolute left-1/2 bottom-[15%] -translate-x-1/2">
          <img src="/icons/arrow-right-line.svg" alt="Arrow Right" className="w-16 h-16" />
        </div>
        <div className="hidden md:block absolute right-[20%] top-1/2 -translate-y-1/2">
          <img src="/icons/arrow-up-line.svg" alt="Arrow Up" className="w-16 h-16" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative min-h-screen bg-[linear-gradient(180deg,#84AA55_-0.95%,#C0DA80_49.53%)] pt-28 md:pb-96 px-4 md:px-10 xl:px-28 2xl:px-0 overflow-hidden">
        <div className="absolute aspect-[16/9] inset-0 h-full w-full">
          <div className="relative h-full w-full">
            <img
              className={cn(
                "absolute aspect-[512/795] w-3/4 -top-[2%] -left-[7%]",
                "md:w-1/2 md:left-0 md:top-[-3%]",
                "xl:top-[-7%] lg:w-1/3"
              )}
              src="/images/leaf.png"
              width="100%"
              height="100%"
              alt=""
            />
            <img
              className="hidden lg:block absolute aspect-[459/923] w-1/3 right-0 top-[20%] z-10 2xl:top-[10%] lg:w-1/3"
              src="/images/leaf-right.png"
              width="100%"
              height="100%"
              alt=""
            />
            <img
              className="absolute aspect-[2/1] xl:aspect-[3/1] w-full bottom-0 "
              src="/images/background/about-bottom-bg.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 relative mx-auto max-w-screen-2xl justify-between items-start md:mb-24 lg:mb-36 z-20">
          <div id="about" className="mx-auto w-full relative top-16">
            <div className="bg-white rounded-3xl md:p-6 lg:p-8 relative shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)]">
              <div className="absolute w-11/12 md:w-3/5 xl:w-2/5 -top-28 left-1/2 transform -translate-x-1/2 bg-[#64842A] text-white rounded-3xl py-4 px-8 md:px-6 md:py-4 lg:px-16 shadow-md">
                <h2 className="leading-normal font-bold text-[32px] md:text-[40px] lg:text-5xl font-baloo text-center mb-2 md:mb-0">
                  PALM OIL
                </h2>
                <h3 className="leading-normal text-2xl md:text-[28px] lg:text-[32px] text-center font-baloo text-[#F1F8D6]">
                  Grow Sustainably
                </h3>
              </div>
              <div className="text-center px-5 py-6 md:px-0 md:py-0">
                <p className="text-xl lg:text-2xl font-baloo text-[#278718] leading-9 lg:leading-[48px]">
                  {`Indonesia's climate is basically a paradise for palm oil
                  trees, letting them grow like they're at an all-you-can-grow
                  buffet. Palm oil isn't just a cooking superstar—it's also in
                  your makeup, your vitamin E pills, anti-aging creams, and even
                  powering commercial vehicles as renewable biofuel. Oh, and
                  let's not forget its perks for cardiovascular protection. Talk
                  about a multitasking MVP!`}
                </p>
                <br />
                <p className="text-xl lg:text-2xl font-baloo text-[#278718] leading-9 lg:leading-[48px]">
                  {`To keep up with the world's obsession with this all-rounder, we've got to double
                  down on growing the palm oil sector. Not only does it fuel global needs, but it's
                  also a big win for economic growth and sustainability. Let's keep the palm power
                  alive! 🌴✨`}
                </p>
              </div>
            </div>
          </div>

          <div id="tokenomics" className="space-y-6 mx-auto w-full h-full mt-52">
            <div className="bg-white rounded-3xl px-5 py-6 relative shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)]">
              <div className="flex w-11/12 md:w-3/5 xl:w-2/5 p-6 justify-center items-start gap-6 rounded-3xl bg-[#3F5F15] text-white absolute -top-20 md:-top-24 lg:-top-20 left-1/2 transform -translate-x-1/2 shadow-md">
                <div className="flex flex-col items-center">
                  <h2 className="leading-normal font-bold text-[30px] md:text-[40px] lg:text-4xl 2xl:text-5xl font-baloo text-center">
                    $PALM Distribution
                  </h2>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl lg:text-2xl font-baloo text-[#278718] leading-9 lg:leading-[48px]">
                  On day one, 100+ million $PALM coin will be available, with the total supply
                  expanding to 1 billion $PALM over five years. Tokenomic allocations will follow a
                  unique release schedule over 60 months.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 relative flex flex-col items-center">
              <div className="flex w-full gap-4 justify-center">
                <img
                  src="/images/allocation/allocation-summary.png"
                  alt="Allocation Summary"
                  className="w-[38%] h-auto object-cover"
                />
                <img
                  src="/images/allocation/palm-distribution.png"
                  alt="Palm Distribution"
                  className="w-[62%] h-auto object-cover"
                />
              </div>

              <img
                src="/images/allocation/palm-emission.png"
                alt="Palm Emission"
                className="w-full h-auto object-contain mt-4"
              />

              <div className="relative w-full mt-4">
                <img
                  src="/images/allocation/palm-linear.png"
                  alt="Palm Linear"
                  className="hidden sm:block w-full h-auto object-contain"
                />

                <img
                  src="/images/allocation/palm-linear-mobile.png"
                  alt="Palm Linear Mobile"
                  className="block sm:hidden w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <span className="font-baloo-2 text-sm md:text-lg text-[#233F08]">
                $PALM Coin is a utility coin for community engagement and support of the world’s
                palm oil industry. It is not to be used as an investment, security, or financial
                contract. This coin is to be bought and sold at your own discretion.
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl pt-8 relative top-24 2xl:px-0 z-20">
          <div className="absolute w-max -top-16 md:-top-20 lg:-top-16 left-1/2 transform -translate-x-1/2 bg-[#64842A] text-white rounded-3xl py-4 px-4 md:px-8 shadow-md">
            <h2 className="text-[28px] md:text-[40px] lg:text-5xl font-baloo text-center mb-2 leading-normal">
              {"PALM's Core Features"}
            </h2>
            <h3 className="text-2xl md:text-[28px] lg:text-3xl text-center font-baloo text-[#F1F8D6]">
              Utility
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl mb-48 md:mb-0 py-7 md:py-10 md:px-8 px-5 xl:p-10 max-w-screen-2xl w-full shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)]">
              <div className="grid md:grid-cols-2 gap-0 md:gap-8">
                <div className="bg-transparent rounded-xl py-8">
                  <div className="flex gap-4 mb-4 flex-col items-center md:items-start">
                    <img src="/icons/cpu-line.svg" alt="Copy" className="w-12 h-12" />
                    <h3 className="text-center md:text-start text-3xl font-baloo text-[#278718]">
                      1. Enhancing Digital Transactions for Palm Oil Industry
                    </h3>
                  </div>
                  <p className="text-center md:text-start text-[#278718] font-baloo-2 text-xl md:text-2xl leading-8 md:leading-10">
                    $PALM Coin provides seamless and efficient digital transactions to support the
                    palm oil industry. It enables secure payments, reduces transaction costs,
                    ensures transparency, and enhances accessibility.
                  </p>
                </div>

                <div className="bg-transparent rounded-xl py-8">
                  <div className="flex gap-4 mb-4 flex-col items-center md:items-start">
                    <img src="/icons/open-arm-fill.svg" alt="Copy" className="w-12 h-12" />
                    <h3 className="text-center md:text-start text-3xl font-baloo text-[#278718]">
                      2. Empowering Producers, Users, and Communities
                    </h3>
                  </div>
                  <p className="text-center md:text-start text-[#278718] font-baloo-2 text-xl md:text-2xl leading-8 md:leading-10">
                    The PALM ecosystem connects{" "}
                    <span className="font-bold font-baloo text-[#64842A]">producers, users,</span>{" "}
                    and <span className="font-bold font-baloo text-[#64842A]">communities</span>{" "}
                    within the palm oil industry, fostering collaboration and sustainability through
                    decentralized transactions.
                  </p>
                </div>
              </div>

              <div className="relative w-full max-w-screen-2xl mx-auto px-2 pt-24 pb-8">
                <div className="absolute top-8 md:top-6  left-1/2 -translate-x-1/2 z-10">
                  <h1 className="bg-[#C0DA80] leading-normal text-white text-2xl sm:text-3xl xl:text-4xl font-bold sm:px-12 rounded-[2.4rem] shadow-lg whitespace-nowrap font-baloo px-8 py-6">
                    Transaction Flow
                  </h1>
                </div>

                <div className="bg-[rgba(192,218,128,0.16)] rounded-3xl p-6 md:p-8 md:px-4 md:py-6 flex items-center justify-center">
                  <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-32 relative max-w-5xl mx-auto">
                    {transactionItems
                      .filter((item) => item.desktopIndex !== undefined)
                      .sort((a, b) => a.desktopIndex - b.desktopIndex)
                      .map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4">
                          <img src={item.img} alt={item.alt} className="w-60 h-auto mt-0" />
                          <p className="text-xl lg:text-2xl font-baloo text-[#278718]">
                            {item.text}
                          </p>
                          {item.note && (
                            <p className="font-baloo text-[#3F5F15] text-sm mt-2">{item.note}</p>
                          )}
                        </div>
                      ))}
                    <DesktopArrows />
                  </div>

                  <div className="flex flex-col md:hidden gap-8 relative max-w-5xl mx-auto">
                    {transactionItems
                      .sort((a, b) => a.mobileOrder - b.mobileOrder)
                      .map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                          <img src={item.img} alt={item.alt} className="w-60 h-auto my-4" />
                          <p className="text-xl font-baloo text-[#278718]">{item.text}</p>

                          {item.note && (
                            <p className="font-baloo text-[#3F5F15] text-sm mt-2">{item.note}</p>
                          )}

                          {item.mobileArrow && (
                            <div className="mt-8 text-[#C5DA7D]">
                              <img
                                src="/icons/arrow-down-line.svg"
                                alt="Arrow Down"
                                className="w-16 h-16"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#F1F8D6] rounded-3xl p-6 md:p-8 mx-2">
                <p className="font-baloo-2 text-xl lg:text-2xl text-center text-[#3F5F15]">
                  When palm oil is purchased using the $PALM coin, the sellers receive the coins,
                  which they may exchange for cash, and the proceeds from the sale of the palm oil
                  are utilized to produce additional palm oil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
