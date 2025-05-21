import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";

export default function PrivacyPolicy() {
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
                {"PRIVACY POLICY"}
              </h2>
            </div>

            <div className="flex justify-center pt-16">
              <div className="bg-white rounded-xl py-7 md:py-10 md:px-8 px-5 xl:p-10 max-w-screen-2xl w-full shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)] min-h-[calc(100vh-200px)]">
                <div className="text-left space-y-6 mx-auto">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08]">
                    This website is owned and operated by <strong>Palm Oil Ventures Ltd.</strong> We
                    respect your privacy and are committed to protecting your personal information.
                    This Privacy Policy explains how we collect, use, and share your data when you
                    use our website and services.
                  </p>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      1. Information We Collect
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      We collect both <strong>Personal Information</strong> (e.g., name, email,
                      phone number) and <strong>Automated Information</strong> (e.g., IP address,
                      browser type, device details) when you interact with our website. This
                      information is gathered when you:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>Sign up for our services</li>
                      <li>Place an order or transaction</li>
                      <li>Subscribe to newsletters</li>
                      <li>Contact us for support</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      2. How We Use Your Information
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      We use your information to:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>Provide and improve our services</li>
                      <li>Process transactions and send updates</li>
                      <li>Respond to inquiries and customer support requests</li>
                      <li>Prevent fraud and ensure security</li>
                      <li>Send promotional offers (with your consent)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      3. Sharing Your Information
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      We <strong>do not sell</strong> your personal data. However, we may share it
                      with:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>
                        Service providers for payment processing, fraud prevention, and website
                        analytics
                      </li>
                      <li>Legal authorities when required by law</li>
                      <li>Business partners for marketing and service enhancement</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      4. Cookies & Tracking
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      We use cookies to enhance your browsing experience. You can manage or disable
                      cookies through your browser settings. Third-party services may also collect
                      data for analytics and targeted advertising.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      5. Your Choices & Rights
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      You have the right to:
                    </p>
                    <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      <li>Access, update, or delete your data</li>
                      <li>Opt out of marketing communications</li>
                      <li>Manage cookies and tracking preferences</li>
                      <li>Request data portability</li>
                    </ul>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08]">
                      To exercise your rights, contact us at{" "}
                      <a href="mailto:corporate@palmoiltoken.com">
                        <strong>corporate@palmoiltoken.com</strong>
                      </a>
                      .
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      6. Security Measures
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      We implement industry-standard security measures to protect your data.
                      However, no online transmission is 100% secure, and we encourage users to take
                      precautions.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-baloo-2 text-[#233F08]">
                      7. Changes to This Policy
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                      We may update this Privacy Policy from time to time. Changes will be posted on
                      this page with an updated revision date. Continued use of our website
                      signifies acceptance of the changes.
                    </p>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-baloo-2 text-[#233F08] !mt-0">
                    For any questions, please contact{" "}
                    <a href="mailto:corporate@palmoiltoken.com">
                      <strong>corporate@palmoiltoken.com</strong>
                    </a>
                    .
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
