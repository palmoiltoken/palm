import { Button } from "@shadcn/button";
import { cn } from "~/lib/utils";
import { useToast } from "../hooks/use-toast";

export function Features() {
  const contractAddress = "5BfbFwTh2fF4N47imUCnbKqJcUKbjM34UtrRS7MSCeQ3";
  const { toast } = useToast();

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied!",
      description: "Contract address copied successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="relative md:py-10 mt-[17rem] md:mt-[15%] lg:mt-[7%] xl:mt-0 bg-[#3f5f15] z-10">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="absolute inset-0 w-full h-[35%] md:h-[60%] lg:h-[75%] object-cover"
          src="/images/background/podium.png"
          alt="Powdium"
        />
      </div>
      <div>
        <div className="mx-auto text-center">
          <div className="relative w-full mx-auto pb-20 px-4 md:px-10 xl:px-28 py-32">
            <div className="mt-64 md:mt-48 lg:mt-0 relative w-full h-full lg:h-screen overflow-hidden"></div>
            <div className="max-w-screen-2xl bg-[#233F08] rounded-3xl px-5 py-6 text-white mx-0 md:mx-4 lg:mx-auto shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)] md:mt-[50%] lg:mt-0">
              <h3 className="text-2xl lg:text-3xl mb-6 font-baloo-2">Solana Contract Address</h3>

              <div className="bg-white rounded-2xl p-4 flex items-center justify-between mb-8  break-all">
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
              <div className="flex justify-center">
                <div className="max-w-screen-2xl mx-auto bg-[#3F5F15] rounded-3xl py-4 px-3 lg:px-9 text-white mb-6">
                  <h1 className="text-[32px] md:text-[40px] font-normal font-baloo">
                    WHERE TO BUY
                  </h1>

                  <div
                    id="contract"
                    className="flex flex-col md:flex-row gap-6 py-5 justify-center mt-5 md:mt-2"
                  >
                    <Button
                      size="lg"
                      className={cn(
                        "group bg-white hover:bg-white h-auto text-primary-foreground text-2xl min-h-20 font-baloo rounded-xl lg:rounded-3xl py-2 px-2 lg:px-4",
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
                        "group bg-white hover:bg-white h-auto text-primary-foreground text-2xl min-h-20 font-baloo rounded-xl lg:rounded-3xl py-2 px-2 lg:px-4",
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
                        "group bg-white hover:bg-white h-auto text-primary-foreground text-2xl min-h-20 font-baloo rounded-xl lg:rounded-3xl py-2 px-2 lg:px-4",
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
              </div>
              <p className="mt-3 font-baloo-2 text-gray-200 text-center text-sm lg:text-lg leading-6">
                $PALM Coin is a utility coin for community engagement and support of the world’s
                palm oil industry. It is not to be used as an investment, security, or financial
                contract. This coin is to be bought and sold at your own discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
