import { useLocation } from "@remix-run/react";
import { Button } from "@shadcn/button";
import { useEffect } from "react";
import { cn, scrollToAnchor } from "~/lib/utils";
import { useToast } from "../hooks/use-toast";

export function Hero() {
  const { toast } = useToast();
  const location = useLocation();
  const contractAddress = "5BfbFwTh2fF4N47imUCnbKqJcUKbjM34UtrRS7MSCeQ3";

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied!",
      description: "Contract address copied successfully.",
      duration: 3000,
    });
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    if (state?.scrollTo) {
      setTimeout(() => {
        scrollToAnchor(state.scrollTo!);
      }, 200);
    }
  }, [location]);

  return (
    <div className="pt-16 relative overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9]">
      <div className="absolute inset-0 z-0 aspect-w-16 aspect-h-9">
        <img
          src="/images/background/hero.png"
          alt="Background"
          className="absolute inset-0 w-full h-[115%] object-cover"
        />
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 md:px-10 xl:px-28 2xl:px-0 py-20 text-center mt-8">
        <div className="relative flex justify-center items-center w-full h-[12rem] sm:h-[9rem] md:h-[14rem] lg:h-[18rem] mx-auto -mb-10">
          <img
            src="/images/coin.png"
            alt="PALM Coin"
            className="absolute w-[24rem] lg:w-[34rem] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col px-5 py-7 md:p-[2.4rem] gap-6 bg-white rounded-[3.2rem] mb-[3.2rem] shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)]">
          <h2 className="text-[#3F5F15] text-2xl md:text-3xl lg:text-5xl font-baloo-2 mb-4">
            Welcome to the New Era of Investment
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-baloo text-[#3F5F15] mb-8">
            Join the $PALM Coin Community
          </h1>

          <p className="text-xl md:text-2xl lg:text-4xl text-[#3F5F15] font-baloo-2">
            <span role="img" aria-label="money bag">
              💰
            </span>{" "}
            Good Luck, Investors! May You All Win Big!{" "}
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            <span role="img" aria-label="shamrock">
              ☘️
            </span>
          </p>
        </div>

        <div
          id="how-to-buy"
          className="max-w-screen-2xl mx-auto bg-[#3F5F15] rounded-3xl pt-8 px-6 pb-6 lg:px-9 text-white mb-6"
        >
          <h1 className="text-[32px] md:text-[40px] font-normal font-baloo">WHERE TO BUY</h1>

          <div className="flex flex-col md:flex-row gap-6 py-5 justify-center mt-5 md:mt-2 px-3">
            <Button
              size="lg"
              className={cn(
                "group bg-white hover:bg-white h-auto text-primary-foreground text-2xl min-h-20 font-baloo rounded-xl lg:rounded-3xl px-2 py-2 lg:px-4",
                "shadow-[0px_6px_0px_0px_#94A820,0px_-8px_8px_0px_rgba(125,143,4,0.24)_inset]",
                "hover:shadow-[0px_7px_7px_0px_rgba(125,143,4,0.40)_inset,_0px_6px_0px_0px_#87991D]"
              )}
            >
              <div className="h-fit w-fit flex items-center justify-center md:py-4 lg:py-0">
                <img
                  src="/images/market/ski.png"
                  alt="Samuel Kripto Indonesia"
                  className="h-full w-full object-contain"
                />
              </div>
            </Button>
            <Button
              size="lg"
              className={cn(
                "group bg-white hover:bg-white h-auto text-primary-foreground text-2xl min-h-20 font-baloo rounded-xl lg:rounded-3xl px-2 py-2 lg:px-4",
                "shadow-[0px_6px_0px_0px_#94A820,0px_-8px_8px_0px_rgba(125,143,4,0.24)_inset]",
                "hover:shadow-[0px_7px_7px_0px_rgba(125,143,4,0.40)_inset,_0px_6px_0px_0px_#87991D]"
              )}
            >
              <div className="h-fit w-fit flex items-center justify-center md:py-4 lg:py-0">
                <img
                  src="/images/market/kucoin.png"
                  alt="Samuel Kripto Indonesia"
                  className="h-full w-full object-contain"
                />
              </div>
            </Button>
            <Button
              size="lg"
              className={cn(
                "group bg-white hover:bg-white h-auto text-primary-foreground text-2xl min-h-20 font-baloo rounded-xl lg:rounded-3xl px-2 py-2 lg:px-4",
                "shadow-[0px_6px_0px_0px_#94A820,0px_-8px_8px_0px_rgba(125,143,4,0.24)_inset]",
                "hover:shadow-[0px_7px_7px_0px_rgba(125,143,4,0.40)_inset,_0px_6px_0px_0px_#87991D]"
              )}
            >
              <div className="h-fit w-fit flex items-center justify-center md:py-4 lg:py-0">
                <img
                  src="/images/market/raydium.png"
                  alt="Samuel Kripto Indonesia"
                  className="h-full w-full object-contain"
                />
              </div>
            </Button>
          </div>
        </div>

        <div id="contract" className="max-w-8xl mx-auto bg-[#233F08] rounded-3xl p-8 text-white">
          <h3 className="text-2xl mb-6 font-baloo-2">Solana Contract Address</h3>

          <div className="bg-white rounded-2xl p-4 flex items-center justify-between break-all">
            <span className="text-[#2B5517] text-sm md:text-2xl lg:text-3xl font-baloo break-words flex-1 max-w-[85%] md:max-w-full text-left md:text-center leading-8">
              {contractAddress}
            </span>
            <button
              onClick={copyAddress}
              className="text-[#2B5517] hover:text-[#77A464] transition-colors ml-4"
              aria-label="Copy contract address"
            >
              <img src="/icons/file-copy-2-fill.svg" alt="Copy" className="w-6 h-6" />
            </button>
          </div>

          <p className="text-sm mt-6 leading-6 font-baloo-2 text-gray-200">
            $PALM Coin is a utility coin for community engagement and support of the world’s palm
            oil industry. It is not to be used as an investment, security, or financial contract.
            This coin is to be bought and sold at your own discretion.
          </p>
        </div>
      </div>
    </div>
  );
}
