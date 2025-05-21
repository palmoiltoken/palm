export function Team() {
  const teamMembers = [
    {
      name: "Kuswiyoto",
      role: "Advisor",
      imageUrl: "/images/team/kuswiyoto.png",
    },
    {
      name: "Wahyu Muryadi",
      role: "Advisor",
      imageUrl: "/images/team/wahyu-muryadi.png",
    },
    {
      name: "Miming Satyono",
      role: "Management",
      imageUrl: "/images/team/miming-satyono.png",
    },
    {
      name: "Henry Sulistyo Pranoto",
      role: "Management",
      imageUrl: "/images/team/henry-sulistyo-pranoto.png",
    },
    {
      name: "Michaell Moore",
      role: "Marketing",
      imageUrl: "/images/team/michaell-moore.png",
    },
    {
      name: "Raditya Adhimukti",
      role: "Marketing",
      imageUrl: "/images/team/raditya-adhimukti.png",
    },
    {
      name: "Bagas Nugroho",
      role: "Marketing",
      imageUrl: "/images/team/bagas-nugroho.png",
    },
    {
      name: "Frederick Wiratama",
      role: "Marketing",
      imageUrl: "/images/team/frederick-wiratama.png",
    },
  ];

  return (
    <div className="relative py-20 px-10 lg:px-4 -mt-1 bg-[#3f5f15]">
      <div className="absolute inset-0 z-0 mt-0 aspect-w-16 aspect-h-9">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(0deg, #3F5F15 3.91%, rgba(255, 255, 255, 0.00) 50%)",
          }}
        ></div>

        <img
          src="/images/background/factory-sm.png"
          alt="Bottom Bg"
          className="absolute block lg:hidden inset-0 w-full h-full object-cover object-top -top-56 md:-top-32 lg:-top-24 xl:-top-28"
        />
        <img
          src="/images/background/factory-lg.png"
          alt="Bottom Bg"
          className="absolute hidden lg:block inset-0 w-full object-cover object-bottom h-4/5 xl:h-full 2xl:h-[175%]"
        />
      </div>

      <div className="absolute inset-0 top-36 h-[98%] md:h-[92%] lg:h-[88%] bg-white/10 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-block bg-[#C0DA80] text-[#2B5517] px-8 py-6 rounded-3xl shadow-lg mb-4 w-full md:w-auto">
            <h2 className="text-3xl md:text-[40px] lg:text-5xl font-baloo text-white">PALM Team</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative w-full rounded-3xl bg-transparent transform transition-transform duration-300 group-hover:scale-105">
                <div className="relative aspect-[11/12] w-full flex justify-center items-center bg-transparent rounded-3xl overflow-hidden">
                  <img
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    className="w-11/12 h-full object-contain object-bottom rounded-t-3xl drop-shadow-[0px_8px_4px_rgba(215,255,142,0.5)]"
                  />
                </div>

                <div className="relative bg-[#718E3C]/90 p-4 text-center backdrop-blur-sm rounded-3xl shadow-[0px_8px_16px_4px_rgba(215,255,142,0.5)] -translate-y-2">
                  <h3 className="text-white text-2xl mb-1 font-baloo">{member.name}</h3>
                  <p className="text-[#F3F7E4] text-2xl font-baloo-2">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
