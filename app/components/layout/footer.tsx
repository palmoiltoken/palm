export function Footer() {
  return (
    <footer className="absolute w-full bg-[#233F08] text-white py-12 border-t-[#C0DA80]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="flex gap-[40px] md:gap-[44px] flex-col md:flex-row">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/images/logo.png"
                alt="PALM Coin Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <h2 className="text-[42.9px] font-bold font-baloo text-[#F1F8D6]">PALM COIN</h2>
            </div>
            <div id="contact" className="flex flex-col gap-6 mb-12">
              <a
                href="mailto:corporate@palmoiltoken.com"
                className="flex items-center gap-2 text-[#F1F8D6] font-baloo hover:text-[#B4D39B] transition-colors"
              >
                <img src="/icons/mail-fill.svg" alt="Mail" className="w-6 h-6" />
                corporate@palmoiltoken.com
              </a>
              <a
                href="https://t.me/ThePalmCoin"
                target="_blank"
                className="flex items-center gap-2 text-[#F1F8D6] font-baloo hover:text-[#B4D39B] transition-colors"
                rel="noreferrer"
              >
                <img src="/icons/telegram-fill.svg" alt="Telegram Group" className="w-6 h-6" />
                The Palm Coin Group
              </a>
              <a
                href="https://t.me/PalmCoinChannel"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#F1F8D6] font-baloo hover:text-[#B4D39B] transition-colors"
              >
                <img src="/icons/telegram-fill.svg" alt="Telegram Channel" className="w-6 h-6" />
                The Palm Coin Channel
              </a>
              <a
                href="https://x.com/ThePalmCoin"
                target="_blank"
                className="flex items-center gap-2 text-[#F1F8D6] font-baloo hover:text-[#B4D39B] transition-colors"
                rel="noreferrer"
              >
                <img src="/icons/twitter-x-fill.svg" alt="X" className="w-6 h-6" />
                The Palm Coin
              </a>
            </div>
          </div>

          <p className="text-center max-w-5xl mb-8 font-baloo-2 text-[#F1F8D6] opacity-70">
            $PALM Coin is a utility coin for community engagement and support of the world’s palm
            oil industry. It is not to be used as an investment, security, or financial contract.
            This coin is to be bought and sold at your own discretion.
          </p>

          <p className="text-center md:text-left text-sm font-baloo text-[#F1F8D6]">
            Copyright ©{new Date().getFullYear()}. PALM Coin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
