import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shadcn/accordion";
import { cn } from "~/lib/utils";

const faqs = [
  {
    question: "What is the Palm Coin?",
    answer: "Palm coins are the digital mascot flexing for Indonesia's palm oil empire.",
  },
  {
    question: "Is this an Official Palm Coin Site?",
    answer: "Yes, this is the only website of Palm Coin",
  },
  {
    question: "What is the official contract address and symbol for the Palm Coin?",
    answer: "CA: 5BfbFwTh2fF4N47imUCnbKqJcUKbjM34UtrRS7MSCeQ3\nSymbol: $PALM",
  },
  {
    question: "How can I get Palm Coin?",
    answer: "Most easiest, connect your wallet to Raydium and swap for $PALM",
  },
  {
    question: "Which blockchain network is the Palm Coin minted?",
    answer: "Solana Blockchain",
  },
  {
    question: "What is Palm Oil?",
    answer:
      "Palm oil is a vegetable oil from oil palm fruit, used in food, cosmetics, and biofuels.",
  },
];

export function Faq() {
  return (
    <div className="relative -mt-10 pb-32">
      <div className="absolute inset-0 aspect-[9/16] lg:aspect-[16/9] h-full w-full">
        <div
          className="lg:hidden xl:block absolute inset-0 z-10"
          style={{
            background: "linear-gradient(180deg, #3F5F15 3.91%, rgba(255, 255, 255, 0.00) 20%)",
          }}
        />

        <img
          className="block md:hidden absolute h-full w-full object-cover"
          style={{
            background: "linear-gradient(180deg, #3F5F15 3.91%, rgba(255, 255, 255, 0.00) 20%)",
          }}
          src="/images/background/empty-podium-sm.png"
          alt=""
        />
        <img
          className="hidden md:block lg:hidden absolute h-full w-full object-cover"
          src="/images/background/empty-podium-md.png"
          alt=""
        />
        <img
          className="hidden lg:block absolute h-full w-full object-cover"
          src="/images/background/empty-podium-lg.png"
          alt=""
        />
      </div>

      {/* TEMPORARILY HIDDEN */}
      {/* <div className="max-w-screen-2xl grid lg:grid-cols-2 gap-32 lg:gap-12 mx-auto px-4 md:px-10 xl:px-28 2xl:px-0 relative z-20">
        <div className="w-full flex justify-center md:pb-32 2xl:pb-96 lg:justify-end">
          <div className="bg-white rounded-3xl md:rounded-3xl p-6 md:p-8 shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)] relative w-full lg:max-w-lg pt-12 mt-10">
            <div className="absolute -top-16 md:-top-14 lg:-top-16 left-0 right-0 flex justify-center">
              <h2 className="text-3xl md:text-[40px] md:w-fit font-baloo text-center bg-[#C0DA80] text-white rounded-3xl py-6 px-6 md:py-4 md:px-8 lg:p-6 w-full lg:w-max max-w-xs">
                Arranged By
              </h2>
            </div>
            <div className="flex flex-col px-4 items-center gap-4 self-stretch rounded-3xl bg-white">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/images/sponsor/ska.png"
                  alt="PT Samuel Koin Advisor"
                  className="h-20 md:h-28 object-contain"
                />
              </div>
              <p className="text-[#233F08] font-medium font-baloo text-center">
                PT Samuel Koin Advisor
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center md:pb-32 2xl:pb-96 lg:justify-start">
          <div className="bg-white rounded-3xl md:rounded-3xl p-6 md:p-8 shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)] relative w-full lg:max-w-lg pt-12 mt-10">
            <div className="absolute -top-16 md:-top-14 lg:-top-16 left-0 right-0 flex justify-center">
              <h2 className="text-3xl md:text-[40px] md:w-fit font-baloo text-center bg-[#C0DA80] text-white rounded-3xl py-6 px-6 md:py-4 md:px-8 lg:p-6 w-full lg:w-max max-w-xs">
                Sponsors
              </h2>
            </div>
            <div className="flex flex-col px-4 items-center gap-4 self-stretch rounded-3xl bg-white">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/images/sponsor/sg.png"
                  alt="PT Samuel Group"
                  className="h-20 md:h-28 object-contain"
                />
              </div>
              <p className="text-[#233F08] font-medium font-baloo text-center">PT Samuel Group</p>
            </div>
          </div>
        </div>
      </div> */}

      <div id="faqs" className="max-w-2xl mx-auto px-4 2xl:px-0 relative z-20">
        <h2 className="relative z-30 top-10 md:top-8 lg:top-10 w-fit text-3xl md:text-4xl font-baloo text-center mb-6 bg-[#C0DA80] text-white rounded-3xl py-3 px-6 md:py-4 md:px-8 shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)] mx-auto leading-normal">
          Frequently Asked Questions
        </h2>
        <div className="relative bg-white z-20 rounded-3xl py-8 px-5 md:p-16 shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)]">
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={cn("border-b border-[#C0DA80]", index === faqs.length - 1 && "border-b")}
              >
                <AccordionTrigger className="text-left font-medium font-baloo hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className="font-baloo-2">
                      {line}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
