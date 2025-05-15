export function Divider() {
  return (
    <div className="relative -mt-2 -mb-72 md:-mb-40 lg:-mt-6 lg:-mb-24 w-full left-1/2 transform -translate-x-1/2 bg-[#F1F8D6] p-10 border-t-[10px] border-b-[10px] border-[#C0DA80] shadow-[0px_16px_24px_-16px_#486219] z-20">
      <div className="mx-auto text-center">
        <div className="mx-4 md:mx-10 flex flex-col justify-center gap-8">
          <h2 className="text-4xl md:text-[56px] lg:text-6xl font-bold font-baloo mb-6 text-transparent bg-gradient-to-r from-[#2C4403] via-[#749538] to-[#A0C858] bg-clip-text leading-[52px] md:leading-[80px]">
            Join the $PALM Coin Community!
          </h2>

          <div>
            <p className="text-lg md:text-2xl text-[#3F5F15] font-baloo-2 mb-2">
              $PALM Coin Motto is Simple:
            </p>
            <p className="text-2xl md:text-3xl font-semibold font-baloo text-[#3F5F15] leading-normal">
              {'"'}Join the fam, grow with us, and let{"'"}s stack those coins together for life!
              {'"'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
