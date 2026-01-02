// import { Button } from "@shadcn/button";
import { Link, NavLink, useLocation, useNavigate } from "@remix-run/react";
import { X } from "lucide-react";
import { useState } from "react";
import { scrollToAnchor } from "~/lib/utils";
import { cn } from "~/utils/clsxm";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  function handleAnchorClick(anchor: string) {
    const isHome = location.pathname === "/";
    const element = document.querySelector(anchor);

    if (isHome) {
      if (element) {
        scrollToAnchor(anchor);
      }
    } else {
      if (anchor.startsWith("#")) {
        navigate("/", { state: { scrollTo: anchor } });
      } else {
        navigate(anchor);
      }
    }
  }

  return (
    <header className="fixed inset-0 bottom-auto z-50 w-full py-4 px-4 md:px-10 xl:px-28">
      <div className="bg-[#3F5F15] px-8 py-4 sticky max-w-screen-2xl top-0 z-50 mx-auto my-0 rounded-full">
        <div className="flex items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="PALM Coin Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-baloo font-bold text-lg bg-gradient-to-r from-white via-[#EBFFC7] to-[#A0C858] bg-clip-text text-transparent">
              PALM COIN
            </span>
          </NavLink>

          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {[
              { label: "Contract Address", anchor: "#contract" },
              { label: "Where to Buy", anchor: "#how-to-buy" },
              { label: "About", anchor: "#about" },
              { label: "$PALM Distribution", anchor: "#tokenomics" },
              { label: "FAQs", anchor: "#faqs" },
              { label: "Contact Us", anchor: "#contact" },
            ].map(({ label, anchor }) => (
              <a
                key={anchor}
                href={anchor}
                className="font-baloo text-primary-foreground hover:text-secondary transition text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(anchor);
                }}
              >
                {label}
              </a>
            ))}

            <NavLink
              to="/privacy-policy"
              className="font-baloo text-primary-foreground hover:text-secondary transition text-sm"
            >
              Privacy
            </NavLink>
            <NavLink
              to="/terms-and-conditions"
              className="font-baloo text-primary-foreground hover:text-secondary transition text-sm"
            >
              Terms
            </NavLink>
            <Link
              to={"/documents/palm-coin-whitepaper.pdf"}
              target="blank"
              rel="noopener noreferrer"
              className="font-baloo text-primary-foreground hover:text-secondary transition text-sm"
            >
              Whitepaper
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-primary-foreground"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-primary z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="bg-[#233F08] flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <NavLink to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="PALM Coin Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-baloo font-bold text-lg bg-gradient-to-r from-white via-[#EBFFC7] to-[#A0C858] bg-clip-text text-transparent">
                PALM COIN
              </span>
            </NavLink>
            <button
              onClick={toggleMenu}
              className="font-baloo text-primary-foreground"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 mb-auto">
            {[
              { label: "Contract Address", anchor: "#contract" },
              { label: "Where to Buy", anchor: "#how-to-buy" },
              { label: "About", anchor: "#about" },
              { label: "$PALM Distribution", anchor: "#tokenomics" },
              { label: "FAQs", anchor: "#faqs" },
              { label: "Contact Us", anchor: "#contact" },
            ].map(({ label, anchor }) => (
              <a
                key={anchor}
                href={anchor}
                className="font-baloo text-primary-foreground text-2xl hover:text-secondary transition"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                  handleAnchorClick(anchor);
                }}
              >
                {label}
              </a>
            ))}

            <NavLink
              to="/privacy-policy"
              className="font-baloo text-primary-foreground text-2xl hover:text-secondary transition"
              onClick={toggleMenu}
            >
              Privacy
            </NavLink>
            <NavLink
              to="/terms-and-conditions"
              className="font-baloo text-primary-foreground text-2xl hover:text-secondary transition"
              onClick={toggleMenu}
            >
              Terms
            </NavLink>
            <Link
              to={"/documents/palm-coin-whitepaper.pdf"}
              target="blank"
              rel="noopener noreferrer"
              className="font-baloo text-primary-foreground text-2xl hover:text-secondary transition"
            >
              Whitepaper
            </Link>
          </nav>

          {/* DISABLED ATM */}
          {/* <div className="space-y-4 mt-auto">
            <Button
              className="w-full bg-[#64842A] hover:bg-[#64842A]/90 text-white font-baloo py-6 px-5 rounded-xl text-2xl"
              onClick={toggleMenu}
            >
              BUY NOW ON KUCOIN
            </Button>
            <Button
              className="w-full bg-[#64842A] hover:bg-[#64842A]/90 text-white font-baloo py-6 px-5 rounded-xl text-2xl"
              onClick={toggleMenu}
            >
              BUY NOW ON RAYDIUM
            </Button>
          </div> */}
        </div>
      </div>
    </header>
  );
}
