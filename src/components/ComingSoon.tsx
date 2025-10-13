import React from "react";

// A simple checkmark icon component to be used in the lists
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-blue-400 flex-shrink-0 mr-4 mt-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// Placeholder component for the 3D person/hologram graphic
const HologramPlaceholder = () => ( 
      <img
        className="w-96 h-96 object-contain"
        src="https://www.group-ib.com/wp-content/uploads/card-1-min.jpg"
        alt=""
      /> 
);

// Reusable component for the three-column feature layout
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4 h-40 w-40 opacity-80">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// Main Page Component
const CybersecurityPage: React.FC = () => {
  // --- Data for the sections to keep the JSX clean ---

  const partnershipFeatures = [
    {
      icon: (
        <img
          src="https://www.cyberross.com/_next/image?url=/assets/principles/inventingAndInnovating.jpg&w=640&q=75"
          alt=""
        />
      ),
      title: "Tailored security services",
      description:
        "Experts understand the ins and outs of security challenges and offer bespoke cybersecurity services such as detailed guides, security roadmaps, and risk prioritization measures, each tailored to the organization's specific needs and risk appetite.",
    },
    {
      icon: (
        <img
          src="https://image.made-in-china.com/202f0j00PiARBWoqHEcY/Fashionable-Crystal-Brush-Holder-Rotate-Pen-Stand-Crystal-Pen-Holder.webp"
          alt=""
        />
      ),
      title: "Technology creators and enablers",
      description:
        "As a trusted partner, organizations have access to a cohesive ecosystem of expertise, technologies, and services, which allows them to future-proof their operations and upgrade their cybersecurity posture.",
    },
    {
      icon: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ1gKqKGea58lsorZwa3S9bU_67UVPSk0_lNdUME1aOhH2iPq"
          alt=""
        />
      ),
      title: "Globally distributed expertise",
      description:
        "Hack Secure works in synergy with innovative technologies to offer detection and response capabilities that eliminate cyber disruptions efficiently and effectively. We map and mitigate adversary tactics in each region through targeted intelligence and operations.",
    },
  ];

  const learnXPoints = [
    <>
      HackSecure LearnX is your gateway to{" "}
      <b className="font-semibold text-white">real-world</b> cybersecurity
      learning. Dive into{" "}
      <b className="font-semibold text-white">expert-curated</b> content, live
      sessions, CTFs.
    </>,
    <>
      This includes exciting feature like{" "}
      <b className="font-semibold text-white">Case studies</b>, and{" "}
      <b className="font-semibold text-white">hands-on challenges</b> all built
      to <b className="font-semibold text-white">sharpen</b> your skills and
      fuel your growth. Whether you are a beginner or a pro, there is always
      more to explore.
    </>,
  ];

  const servicesPoints = [
    <>
      We offer a wide range of services from{" "}
      <b className="font-semibold text-white">expert-led webinars</b> and{" "}
      <b className="font-semibold text-white">interactive sessions</b> to
      hands-on workshops and real-world cyber investigation support.
    </>,
    <>
      Our cybersecurity driven anti-fraud and brand protection solutions are
      powered by{" "}
      <b className="font-semibold text-white">
        intelligence-driven technologies
      </b>{" "}
      and the{" "}
      <b className="font-semibold text-white">exceptional human proficiency</b>{" "}
      of our experts.
    </>,
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-gray-300 overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-light leading-tight bg-gradient-to-b from-blue-700 to-slate-400 bg-clip-text text-transparent">
            Welcome to Learn X
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            The next generation cybersecurity e-learning platform. Built for
            learners, by Hack Secure.
          </p>

          {/* The image container is now much simpler */}
          <div className="mt-16">
            <img
              className="mx-auto hidden md:block" // Removed mt-40, using mx-auto for centering
              src={"/LearnX.png"}
              alt="LearnX network graphic" // Added a descriptive alt tag for accessibility
            />
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Section 2: Partnership */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Gain a formidable partner to build exceptional defenses
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            From expert-led training to real-time investigations, everything we
            do is designed to make your digital environment smarter, safer, and
            stronger.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {partnershipFeatures.map((feature) => (
              <InfoCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Section 3: LearnX Education */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <HologramPlaceholder />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              LearnX — Cybersecurity Education, Reinvented
            </h2>
            <ul className="space-y-6">
              {learnXPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Section 4: Services */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <HologramPlaceholder />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Services
            </h2>
            <ul className="space-y-6">
              {servicesPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-gray-300">
        <div className="container mx-auto px-6 flex gap-16 justify-center items-center">
          {/* Left Column: Text Content */}
          <div className="w-[57%]">
            <h2 className="text-4xl md:text-5xl  font-bold text-white mb-8">
              Partners
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckIcon />
                <p>
                  Partner with Hack Secure to drive{" "}
                  <b className="font-semibold text-white">innovation</b>,{" "}
                  <b className="font-semibold text-white">share knowledge</b>,
                  make a global impact in cybersecurity.
                </p>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <p>
                  From{" "}
                  <b className="font-semibold text-white">
                    academic institutions
                  </b>{" "}
                  and <b className="font-semibold text-white">corporates</b> to{" "}
                  <b className="font-semibold text-white">communities</b> and{" "}
                  <b className="font-semibold text-white">
                    international networks
                  </b>
                  . We welcome partnerships that aim to build a safer digital
                  world.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Column: Hologram Graphic */}
          <div className="flex justify-center md:justify-end">
            <HologramPlaceholder />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;
