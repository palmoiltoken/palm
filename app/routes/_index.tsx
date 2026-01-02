import { About } from "~/components/features/about";
import { Faq } from "~/components/features/faq";
import { Features } from "~/components/features/features";
import { Hero } from "~/components/features/hero";
import { Footer } from "~/components/layout/footer";
import { Marquee } from "~/components/layout/marquee";
import { Navbar } from "~/components/layout/navbar";
// import { Team } from "~/components/features/team";
import { MetaFunction } from "@remix-run/react";

const title = "Palm Coin";
const description =
  "$PALM Coin is a utility token for community engagement and support of the palm oil industry. It is not an investment, security, or financial contract. Use at your own discretion.";
const image = "/meta-img.png";

export const meta: MetaFunction = () => {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "$PALM" },
    { name: "image", content: image },
    { name: "og:url", content: "https://www.palmoiltoken.com/" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: image },
    {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: title },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Features />
      {/* TEMPORARILY HIDE  */}
      {/* <Team /> */}
      <Faq />
      <Footer />
    </>
  );
}
