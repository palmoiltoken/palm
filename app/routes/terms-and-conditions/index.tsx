import { NavLink } from "@remix-run/react";
import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="pt-16 relative overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9] min-h-screen">
        <img
          src="images/background/terms-pp-bg.png"
          alt="PALM Coin"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-10 xl:px-28 2xl:px-0 py-20">
          <div className="rounded-3xl relative z-20">
            <div className="absolute w-max -top-2 md:-top-6 lg:-top-2 left-1/2 transform -translate-x-1/2 bg-[#3F5F15] text-white rounded-3xl py-4 px-4 md:px-8 shadow-md">
              <h2 className="text-[28px] md:text-[40px] lg:text-5xl font-baloo text-center mb-2 leading-normal">
                {"TERMS & CONDITIONS"}
              </h2>
            </div>

            <div className="flex justify-center pt-16">
              <div className="bg-white rounded-xl py-7 md:py-10 md:px-8 px-5 xl:p-10 max-w-screen-2xl w-full shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)] min-h-[calc(100vh-200px)]">
                <div className="text-left space-y-6 mx-auto">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08]">
                    These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of
                    the <strong>Palm Coin</strong> website and services (the &quot;Services&quot;).
                    By using our Services, you agree to comply with these Terms. If you do not
                    agree, please do not use our Services.
                  </p>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      1. Eligibility
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      You must be at least <strong>18 years old</strong> and legally able to enter
                      into agreements to use our Services. If you are accessing our Services on
                      behalf of an entity, you confirm that you have the authority to bind that
                      entity to these Terms.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      2. Use of Services
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>
                        You agree to use our Services lawfully and refrain from any actions that
                        violate regulations or infringe upon others&apos; rights.
                      </li>
                      <li>
                        You are responsible for securing your account credentials and any
                        cryptocurrency wallet linked to Palm Coin.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      3. Transactions & Risks
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>
                        <strong>Palm Coin is not an investment or security.</strong>
                      </li>
                      <li>
                        Transactions involving cryptocurrency carry risks, including price
                        volatility and loss of funds. You assume all risks associated with
                        cryptocurrency use.
                      </li>
                      <li>
                        We do not guarantee the availability, functionality, or security of
                        blockchain networks used in Palm Coin transactions.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      4. Privacy & Data Collection
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>
                        We collect and process personal data in accordance with our{" "}
                        <NavLink to={"/privacy-policy"}>
                          <strong>Privacy Policy</strong>.
                        </NavLink>
                      </li>
                      <li>We may use cookies and analytics to improve your experience.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      5. Third-Party Services
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>
                        Our website may contain links to third-party platforms. We are not
                        responsible for their content, security, or policies.
                      </li>
                      <li>
                        Any transactions conducted through third-party platforms are at your own
                        risk.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      6. Prohibited Activities
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      You may <strong>not</strong>:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>Engage in fraudulent, illegal, or harmful activities.</li>
                      <li>
                        Use the Services if you are subject to economic sanctions or reside in
                        restricted jurisdictions.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      7. Limitation of Liability
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>
                        We provide our Services <strong>as-is</strong> without warranties.
                      </li>
                      <li>
                        We are not liable for losses, damages, or disruptions arising from your use
                        of Palm Coin or associated blockchain networks.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      8. Modifications
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      We may update these Terms at any time. Continued use of our Services
                      constitutes acceptance of the revised Terms.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      9. Governing Law & Disputes
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>
                        These Terms are governed by <strong>Singapore law</strong>.
                      </li>
                      <li>
                        Disputes shall be resolved through <strong>binding arbitration</strong>,
                        with no class-action lawsuits permitted.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      10. Contact
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      For questions or concerns, contact us at{" "}
                      <a href="mailto:corporate@palmoiltoken.com">
                        <strong>corporate@palmoiltoken.com</strong>
                      </a>
                      .
                    </p>
                  </div>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-6">
                    By using Palm Coin, you acknowledge and agree to these Terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
